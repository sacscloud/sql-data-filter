/**
 * `sql-data-filter`
 * Filter of JSON type SQL
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

'use strict'
Polymer({
    is: 'sql-data-filter',
    properties: {
        data: {
            type: Array,
            value: []
        },
        result: {
            type: Array,
            value: []
        },
        sql: {
            type: String,
            value: null
        }
    },

    attached: function () {
        this.__resolveSQL(this.sql);
    },

    __resolveSQL: function (statement) {
        const simpleStatement = new RegExp(/^SELECT\s\*\sFROM\s[a-z]+/);
        const complexStatement = new RegExp(/^SELECT\s[a-zA-Z]+\sFROM\s[a-zA-Z]+\sWHERE\s[a-zA-Z-0-9]+[=<>!]+[a-zA-Z0-9]/);

        if (simpleStatement.test(statement)) {
            //console.log("SIMPLE SENTENCE")
        } else if (complexStatement.test(statement)) {

            this.__filterData();

        } else {
            console.log("Sentencia no valida")
        }
    },

    __filterData: function (type) {
        const sqlStatement = this.sql;

        if (sqlStatement.search("WHERE") !== -1) {
            const indexFrom = sqlStatement.indexOf('FROM');
            const indexWhere = sqlStatement.indexOf('WHERE');

            const select = sqlStatement.substring(6, indexFrom).trim();
            const from = sqlStatement.substring(indexFrom + 4, indexWhere).trim();
            const where = sqlStatement.substring(indexWhere + 5, sqlStatement.lenght).trim();
            //console.log("SELECt", select);
            //console.log("FROM", from);
            //console.log("where", where);

            this.result = this._getResult(this.data, select, from, where);
            console.log("RESULT", this.result)

        } else {
            console.log('simple')
        }
    },

    _getResult: function (data, select = null, from = null, where = null) {
        const res = this.__resolveWhere(where);
        const result = res.map(obj => {
            for (let key in obj) {
                if (key === select) {
                    return obj[key];
                }

            }
        })

        return result;


    },

    __resolveWhere: function (where) {

        const operator = this.__getOperator(where);

        return this._doValidation(operator, where);

    },

    __getOperator: function (statement) {

        let operator = null;

        if (statement.search(">=") !== -1) {
            operator = ">=";

        } else if (statement.search("<=") !== -1) {
            operator = "<=";

        } else if (statement.search("!=") !== -1) {
            operator = "!=";

        } else if (statement.search(">") !== -1) {
            operator = ">";

        } else if (statement.search("<") !== -1) {
            operator = "<";


        } else if (statement.search("=") !== -1) {
            operator = "=";

        }

        return operator;

    },

    _doValidation: function (operator, where) {

        let result = [];

        const positionOperator = where.indexOf(operator);


        const firstElement = where.substring(0, positionOperator);
        const secondElement = where.substring(positionOperator + operator.length, where.length);

    
        for (let obj of this.data) {
            for (let key in obj) {
                if (key === firstElement) {


                    if (this._validateCondition(obj[key], secondElement, operator)) {
                        result.push(obj);

                    }
                }
            }

        }

        return result;
    },

    _validateCondition: function (token, token2, operator) {

        switch (operator) {

            case ">": return token > token2 ? true : false;

            case "<": return token < token2 ? true : false;

            case ">=": return token >= token2 ? true : false;

            case "<=": return token <= token2 ? true : false;

            case "=": return token === token2 ? true : false;

            case "!=": return token !== token2 ? true : false;

        }

    }
});