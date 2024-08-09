const numb =[2,3,7,9,8,10]
//document.getElementById("demo1").innerHTML = numb;
numb.push("11");
document.getElementById("demo2").innerHTML = numb;
const numbs =[2,3,7,9,8,10]
document.getElementById("demo3").innerHTML = numbs;
numbs.unshift("1");
document.getElementById("demo4").innerHTML = numbs;
const numbe =[2,3,7,9,8,10]
document.getElementById("demo5").innerHTML = numbe;
numbe.splice(3,0,"22")
document.getElementById("demo6").innerHTML = numbe;
const val =[2,3,7,9,8,10]
document.getElementById("demo7").innerHTML = myArrayMax(val);
function myArrayMax(arr){
    return Math.max.apply(null,arr)
}

const value = [2,3,7,9,8,10]
document.getElementById("demo8").innerHTML = myArrayMin(value);
function myArrayMin(arr){
    return Math.min.apply(null,arr)
}

const values = [2,3,7,9,8,10]
const citrus = values.slice(1);
document.getElementById("demo9").innerHTML = values + "<br><br>" + citrus;

let x = myFunction(4, 3);
document.getElementById("demo01").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}