//1a.Get all the countries from Asia continent /region using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response;
    var result=JSON.parse(data);
var result1=result.filter((ele)=>(ele.region==="Asia"))
var result2=result1.map((ele)=>console.log(ele.name.common))}

//1b.Get all the countries with a population of less than 2 lakhs using Filter function

var request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload=function(){
    var data1=request1.response;
    var result3=JSON.parse(data1);
    var result4=result3.filter((ele)=>(ele.population<200000))
var result5=result4.map((ele)=>console.log(ele.name.common))}

//1c.Print the following details name, capital, flag, using forEach function

var request2=new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload=function(){
    var data2=request2.response;
    var result6=JSON.parse(data2);
    result6.forEach((ele)=>console.log(`${ele.name.common}:${ele.capital}:${ele.flags.png}`))}

//1d.Print the total population of countries using reduce function

var request3=new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send();
request3.onload=function(){
    var data3=request3.response;
    var result7=JSON.parse(data3);
var result8=result7.reduce((sum,i)=>sum+i.population,0)
console.log(result8)}

//1e.Print the country that uses US dollars as currency.

var request4=new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send();
request4.onload=function(){
    var data4=request4.response;
    var result9=JSON.parse(data4);
 var result10=result9.filter((element)=>element.currencies && element.currencies.USD)
var result11=result10.forEach((element)=>console.log(element.name.common))}


