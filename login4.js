var a=[];
var k=0;
function getdata()
{
    if(document.getElementById("button").value=="update")
    {
        a[k].fname=document.getElementById("text1").value
        a[k].lname=document.getElementById("text2").value
        a[k].phoneno=document.getElementById("text3").value
        display()
        document.getElementById("button").value="submit"
        document.getElementById("text1").value=""
        document.getElementById("tet2").value=""
        document.getElementById("text3").value=""
    }else{
        var x=document.getElementById("text1").value;
        var y=document.getElementById("text2").value;
        var z=document.getElementById("text3").value;
        var v={"fname":x,"lname":y,"phoneno":z};
        a.push(v);
        console.log(a);
        document.getElementById("text1").value=""
        document.getElementById("text2").value=""
        document.getElementById("text3").value=""
        display()

    }    
}
 function display()
{
    var tbl="<table border 2 style='background-color: white;width:100%;'><tr><th>First Name</th><th>Last Name</th><th>Phone no</th><th>Actions</th></tr>"
    for(let i=0;i<a.length;i++)
    {
        tbl+="<tr><td>"+a[i].fname+"</td><td>"+a[i].lname+"</td><td>"+a[i].phoneno+"</td><td><button class='btn-danger' style='border:none;outline:none;height:40px;width:100px;background-color:orange;color:white;border-radius:20px;font-weigth:bold;' onclick='update1("+i+")'>Update</button>&nbsp;&nbsp;&nbsp;&nbsp;<button style='border:none;outline:none;height:40px;width:100px;background-color:red;color:white;border-radius:20px;font-weigth:bold;' onclick='delete1("+i+")'>Delete</button></td></tr>"
    }
    tbl+="</table>"
    document.getElementById("ans").innerHTML=tbl
}
function delete1(i)
{
    a.splice(i,1)
    display()
}
function update1(i)
{
    k=i
    document.getElementById("text1").value=a[i].fname
    document.getElementById("text2").value=a[i].lname
    document.getElementById("text3").value=a[i].phoneno
    document.getElementById("button").value="update"
    display()
}