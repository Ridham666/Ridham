function add(){
    var x=document.getElementById("text1").value
    var obj={"name":x}
    fetch("http://localhost:3000/a",{
        method : "POST",
        body : JSON.stringify(obj),
        headers :{
            "content-type": "application/json; charset=UTF-8"
        }
    })
    document.getElementById("text1").value=""
}
function main(){
    fetch("http://localhost:3000/a")
    .then((res) => res.json())
    .then((data) => update1(data))
}
function update1(data){
    for(let i=0;i<data.length;i++)
    {
        if(document.getElementById("text1").value === data[i].name)
        {
            update(data[i].id)
        }
    }
    
    
}
function update(k)
{
    // x=prompt()
    console.log(k);
    fetch("http://localhost:3000/a/"+k,{
        method: "PUT",
        body: JSON.stringify({name:0}),
        headers :{
            "content-type": "application/json; charset=UTF-8"
        }
    })
    // .then(() => display())
    
}
function display()
{
    fetch("http://localhost:3000/a")
    .then((res) => res.json())
    .then((data) =>console.log(data))
}
display()