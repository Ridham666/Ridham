function getdata()
{
    fetch("http://localhost:3000/a")
    .then((res) => res.json())
    .then((data) => display(data))
    
}
getdata()
function display(data){
    tbl="<table border 2><tr><th>userId</th><th>id</th><th>title</th><th>body</th></tr>"
    for(let i=0;i<data.length;i++)
    {
        tbl+="<tr><td>"+data[i].userId+"</td><td>"+data[i].id+"</td><td>"+data[i].title+"</td><td>"+data[i].body+"</td></tr>"
    }
    tbl+="</table>"
    document.getElementById("answer").innerHTML=tbl
}