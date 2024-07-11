//overwrite is not possible
class demo
{
    add(a,b)
    {
        this.a = a;
        this.b = b;
    }
    add(a,b,c)
    {
        this.a =a;
        this.b =b;
        this.c =c;
    }
    dis()
    {
        document.write(this.a);
        document.write(this.b);
        document.write(this.c);
    }
}
var z= new demo(2,5)
z.dis()
// document.write(z.add(2,5));