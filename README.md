# \<sql-data-filter\>

This component will be responsible for filtering a data array

## INSTALL

  ```
bower i --save sacscloud/sql-data-filter
  ```
  
##  EXAMPLE
  
  ```
  <sql-data-filter data="[{username: "Jhon",color: "red"},{username: "Charlie",color: "yellow"},{username: "Mark",color: "red"
}];" sql=""select username from data where color='red'"" result="{{result}}"></sql-data-filter>
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

## TEST

`http://127.0.0.1:8081/components/sql-data-filter/`


## PROPERTIES

```
data 
  type Array
  
sql
  type String
 
result
  type Array
  ```
