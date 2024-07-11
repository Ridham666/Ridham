var allTask = []
var k=0;
function getdata() {
    if(document.getElementById("button-addon2").value=="update")
            {

               allTask[k] = document.getElementById("text1").value
               display()
                document.getElementById("button-addon2").value = "button"
                document.getElementById("text1").value = ""
               
            }
            else{

                console.log(1);
                var data = document.getElementById("text1").value
                allTask.push(data)
                display();
                document.getElementById("text1").value =""
            }
}

function display() {
    var tbl = "<table class='table table-striped'>"
    for (let i = 0; i < allTask.length; i++) {
        tbl += "<tr><td class='w-75'>" + allTask[i] + "</td><td class='w-25 ' style='margin:5px'><button type='button' onclick='delete1("+i+")' class='btn btn-outline-primary  '><i class='fa-solid fa-trash'></i></button></i><button type='button' class='btn btn-outline-primary' onclick='update1("+i+")'><i class='fa fa-refresh' aria-hidden='true'></i></button></td></tr>"
    }
    tbl += "</table>"
    document.getElementById("ans").innerHTML = tbl;



}

function delete1(i)
{
    allTask.splice(i,1)
    display()
}

function update1(i)
{
    k=i
    console.log(i);
    document.getElementById("text1").value=allTask[i]
    document.getElementById("button-addon2").value="update"
    display()
}