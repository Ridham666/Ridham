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
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    }
}
let t1=new time(5,40,50)
console.log("t1 is:");
t1.disp()
let t2=new time(15,41,50)
console.log("t2 is:");
t2.disp()
t1.add(t2)
console.log("new t1 is:");
t1.disp()