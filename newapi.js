function getdata(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>postdata(data))
}
function postdata(data){
    fetch("http://localhost:3000/a",{
        method:"post",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
}
function dis1(){
    fetch("http://localhost:3000/a")
    .then((res) => res.json())
    .then((data) => dis(data))
}
function dis(data){
    tbl="<table border 2>"
    for(let i=0;i<data.length;i++){
        for(j=0;j<100;j++){
            tbl+="<tr><td>"+data[j].userId+"</td><td>"+data[j].id+"</td><td>"+data[j].title+"</td><td>"+data[j].body+"</td><td><button onclick='delete1("+data[i].id+")'> delete </button></td><td><button onclick='update1("+data[i].id+")'> update </button></td> </tr>"
        }
    }
    tbl+="</table>"
    document.getElementById("ans").innerHTML= tbl
}
dis1()