var one="";
var two="";
var operator="";
function Myclear(){
    document.getElementById("answer").value="";
}
function Clear_last(){
    let text = document.getElementById("answer").value;
    let len = text.length;
    let ans=text.slice(0,len-1);    
    document.getElementById("answer").value=ans;
}
function Mywrite(num){
    var temp=document.getElementById("answer").value;
    if(temp.length==1&&temp=="0")
    temp="";
    temp=temp+num;
    document.getElementById("answer").value=temp;
}
function Myoperator(op){
    one=document.getElementById("answer").value;
    document.getElementById("answer").value="";
    operator=op;
}
function Myoutput(){
    two=document.getElementById("answer").value;
    let x=parseInt(two);
    let y=parseInt(one);
    let ans="";
    if(operator=="/")
    ans=one/two;
    else if(operator=="*")
    ans=one*two;
    else if(operator=="-")
    ans=one-two;
    else
    ans=x+y;
    one="";
    two="";
    operator="";
    document.getElementById("answer").value=ans;
}
