// var k=0;
function getdata()
{
    // if(document.getElementById("btn")=="update")
    // {
    //     data[k].userId=document.getElementById("text1").value
    //     data[k].id=document.getElementById("text2").value
    //     data[k].title=document.getElementById("text3").value
    //     data[k].body=document.getElementById("text4").value
    //     dis1()
    //     document.getElementById("btn").value="getdata"
    //     document.getElementById("text1").value=""
    //     document.getElementById("text2").value=""
    //     document.getElementById("text3").value=""
    //     document.getElementById("text4").value=""
    // }else{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json() )
        .then((data) => postdata(data))
    // }
}
function postdata(data){
    fetch("http://localhost:3000/a",{
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
    .then(()=>{console.log(1);})
}
function dis1(){
    fetch("http://localhost:3000/a")
    .then((res) => res.json())
    .then((data) => dis(data))
}
function dis(data){
    tbl="<table border 2>"
    for(let i=0;i<data.length;i++){
        tbl+="<tr><td>"+data[i].userId+"</td><td>"+data[i].id+"</td><td>"+data[i].title+"</td><td>"+data[i].body+"</td><td><button onclick='delete1("+data[i].id+")'> delete </button></td><td><button onclick='update1("+data[i].id+")'> update </button></td> </tr>"
    }
    tbl+="</table>"
    document.getElementById("ans").innerHTML=tbl
}
function update1(i){
    k=i
    z=prompt("enter userid")
    x=prompt("enter id")
    y=prompt("title")
    w=prompt("body")
    // k=i
    // document.getElementById("text1").value=data[i].userId
    // document.getElementById("text2").value=data[i].id
    // document.getElementById("text3").value=data[i].title
    // document.getElementById("text4").value=data[i].body
    // dis1()
     document.getElementById("btn").value="update"
    fetch("http://localhost:3000/a/"+i,{
        method: "PUT",
        body: JSON.stringify({userId:z,id:x,title:y,body:w}),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
}
function delete1(i){
    fetch("http://localhost:3000/a/"+i,{
        method: "delete",
        body: JSON.stringify(),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
}
dis1()

