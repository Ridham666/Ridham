function getdata(){
    var z=document.getElementById("text1").value
    var x=document.getElementById("text2").value
    var y=document.getElementById("text3").value
    var obj={"name":z,"age":x,"salary":y}
    fetch("http://localhost:3000/a",{
        method : "POST",
        body : JSON.stringify(obj),
        headers :{
            "content-type": "application/json; charset=UTF-8"
        }
    })
    document.getElementById("text1").value=""
    document.getElementById("text2").value=""
    document.getElementById("text3").value=""
}
function main1(){
    fetch("http://localhost:3000/a")
    .then((res) => res.json())
    .then((data) => display(data))
}
function display(data)
{
    max=0;
    console.log(data);
    for(let i=0;i<data.length;i++)
    {
        console.log(data[i].salary);
        if(max < parseInt(data[i].salary))
        {
        //    alert(max=a[i].salary)
        max =  parseInt(data[i].salary)
        }
}
console.log(max);
}