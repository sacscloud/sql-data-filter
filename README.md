# \<sql-data-filter\>

This component will be responsible for filtering a data array

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Install component

  ```
bower i --save sacscloud/sql-data-filter
  ```
  


## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.


## Test of component

The component must have the test basic:

- The component exist
- The component is in the DOM

The component must have test for properties:

- The property exist
- The property is declareded
- The property not is undefined

The component must have test for functions:

- The function is declareded
- The function exist
- The function don't throw error


##  EXAMPLE
  
  ```
  <sql-data-filter data="[{username: "Jhon",color: "red"},{username: "Charlie",color: "yellow"},{username: "Mark",color: "red"
  }];" sql="SELECT username FROM data WHERE color='red'" result="{{result}}"></sql-data-filter>
```

## RESULT 
```
[{
  username: "jhon"
  },
  {
  username: "mark"
}];
```

## OPERATORS

```
SELECT
FROM
WHERE
AND
OR
=
!=
BEETWEEN
IS NOT
IS NOT NULL
LIKE
REGEXP
<
>
<=
>=
%
+

AND ALL basics SQL operators
```


## PROPERTIES

```
data 
  type Array
  
sql
  type String
 
result
  type Array
  ```