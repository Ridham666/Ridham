class time
{
    constructor(hour,min,sec)
    {
        this.a =hour;
        this.b =min;
        this.c =sec;
    }
    add(z)
    {
        this.a=this.a +z.a
        this.b=this.b +z.b
        this.c=this.c +z.c


    }
    disp()
    {
        document.write(this.a)
        document.write(this.b)
        document.write(this.c)
    }
}
let z=new time(5,40,50)
let z1=new time(15,41,50)


z.add(z1)
z.disp()