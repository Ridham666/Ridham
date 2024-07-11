var a=[];
var z=0;
function main1()
{
    var w=document.getElementById("text1").value
    var x=document.getElementById("text2").value
    var y=document.getElementById("text3").value
    var z=document.getElementById("text4").value
    var obj={"userId":w,"id":x,"title":y,"body":z}
    fetch("http://localhost:3000/a",{
        method :"POST",
        body: JSON.stringify(obj),
        headers :{
            "content-type": "application/json; charset=UTF-8"
        }
    })
    document.getElementById("text1").value=""
    document.getElementById("text2").value=""
    document.getElementById("text3").value=""
    document.getElementById("text4").value=""
}
