class animal
{
    getdata()
    {
        document.write("hello world");
    }
}
class tiger extends animal
{
    getdata()
    {
        document.write("hello animal")
    }
}
let z=new tiger();
z.getdata()