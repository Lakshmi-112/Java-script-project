function myfunction(){
    alert("I am an alert box!");
}

function myfunction1(){
    alert("Welcome to javascript");
}

function getalert(){
    document.write("Welcome to Javascript");
}
function getalert1(){
    document.getElementById("result").innerHTML="Welcome to Javascript";
}
function myfunction2(){
    var txt;
    if (confirm("press a button!")===true){
        txt="You Pressed OK!";
    }else{
        txt="You Pressed Cancel!";
    }
    document.getElementById("demo").innerHTML=txt;
}


function calc(){
let value1=document.getElementById("form").value;
value1=Number(value1);
let value2=document.getElementById("form1").value;
value2=Number(value2);
let mul=value1*value2;
let add=value1+value2;
let sub=value1-value2;
let div=Math.round(value1/value2)

document.getElementById("p1").innerHTML="Result Multiplication: " + mul;
document.getElementById("p2").innerHTML="Result Addition: " + add;
document.getElementById("p3").innerHTML="Result Subtraction: " + sub;
document.getElementById("p4").innerHTML="Result Division:" + div;
}
document.getElementById("btn-6").onclick=calc;

function vision(btn_id)
{
    if(confirm("Are you want to delete")===true)
    {
        document.getElementById(btn_id).style.visibility="hidden";
    }
}
function imgZoom()
{
document.getElementById("img1").style.width="701px"
}
function imgOut()
{
document.getElementById("img1").style.width="300px"
}

function strCalculator()
{
   let str= document.getElementById("txt-box").value;
    let texts=str.length;
    let word=str.trim().split(/\s+/).length;
    let caps=str.toUpperCase();
    let lows=str.toLowerCase();
    document.getElementById("p9").innerHTML="Text Count: "+texts;
    document.getElementById("p10").innerHTML="Word Count: "+word;
    document.getElementById("p11").innerHTML="Capital Letter: "+caps;
    document.getElementById("p12").innerHTML="Lower Letter: "+lows;
}
document.getElementById("txt-box").addEventListener("input",strCalculator);
document.getElementById("p9").onclick=strCalculator;
document.getElementById("p10").onclick=strCalculator;
document.getElementById("p11").onclick=strCalculator;
document.getElementById("p12").onclick=strCalculator;


function addRow() {
    let parent = document.querySelector(".parent");
    let existingInput = document.getElementById("inp");  
    let bre = document.createElement("br"); 
    let row = document.createElement("input"); 
    row.type = "text"; 
    row.style.marginLeft = "50px";  
    row.style.width = "300px";  
    parent.insertBefore(bre, existingInput.nextSibling);  
    parent.insertBefore(row, bre.nextSibling);
}

document.getElementById("btn-9").onclick = addRow;

// window.onload=function(){
//     let div=document.createElement("div");
//     div.className="parent";
//     let label=document.createElement("label");
//     label.textContent="Name";
//     let inp=document.createElement("input");
//     document.body.appendChild(div);
//     div.appendChild(label);
//     div.appendChild(inp)
//     console.log(div);
//     console.log(inp);
//     let hr=document.createElement("hr");
//     document.body.appendChild(hr);
// }
function LoginPage()
{
    window.open("login.html","popupwindow","width=400,height=400,resizable=yes,scrollbars=yes")
    
}
function getDate() {
    let dateMonth = prompt("Give Date (dd/mm)");
    let birthday = "";

    switch (dateMonth) {
        case "22/02":
            birthday = "Venkata Lakshmi Lagudu";
            break;
        case "15/04":
            birthday = "Swetha Manda"; 
            break;
            case "04/05":
            birthday="Anand";
            break;
        case "05/06":
            birthday="Baji";
            break;
        case "17/06":
            birthday="Lakshmi Prasanna";
            break;
        default:
            birthday = "No birthday found for this date";
            break;
    }
    if(birthday==="No birthday found for this date")
    {
        document.getElementById("p13").textContent="TNo birthday found for this date ";

    }
    else
    {
        document.getElementById("p13").textContent="Todays's Birthday is "+ birthday ;
       
    }    
}

function checkStrength() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    let fill = document.getElementById("strength-fill");

    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[!@#\$%\^\&*\)\(+=._-]/.test(password);
    let isLongEnough = password.length >= 8;

    let strength = 0;
    if (hasUpper) strength++;
    if (hasLower) strength++;
    if (hasNumber) strength++;
    if (hasSpecial) strength++;
    if (isLongEnough) strength++;
    if (strength <= 2) {
        result.textContent = "Weak Password";
        result.style.color = "red";
        fill.style.width = "33%";
        fill.style.backgroundColor = "red";
    } else if (strength === 3 || strength === 4) {
        result.textContent = "Moderate Password";
        result.style.color = "orange";
        fill.style.width = "66%";
        fill.style.backgroundColor = "orange";
    } else {
        result.textContent = "Strong Password";
        result.style.color = "green";
        fill.style.width = "100%";
        fill.style.backgroundColor = "green";
    }
}
function imgScrollStart()
{
    let val=document.getElementById("marque")
    val.start();
}
function imgScrollStop()
{
    let val=document.getElementById("marque")
    val.stop();
}
