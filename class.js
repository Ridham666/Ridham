class demo{
    constructor (a,b,c,d)
    {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    disp()
    {
        document.write(this.a)
        document.write(this.b)
        document.write(this.c)
        document.write(this.d)
    }
}

let z= new demo(1,2,3,4);
let x= new demo(5,6,7,8);
let y= new demo(9,10,11,12);
let w= new demo(13,14,15,16);
z.disp()
x.disp()
y.disp()
w.disp()
// console.log(z.a);
// console.log(z.b);
// console.log(z.c);
// console.log(z.d);

// if(z.a>z.b)
// {
//     console.log(z.a, "is maximum");
// }else{
//     console.log(z.b,"is maximum");
// }