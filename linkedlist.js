class node
{
    constructor(v)
    {
        this.value=v;
        this.next=null;
    }
}
class linklist
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    isempty()
    {
        if(this.size==0)
        {
            return 1;
        }
    }
    pushB(v)
    {
        var n=new node(v);
        if(this.isempty())
        {
            this.head=n;
            // this.head.next=null;
        }else{
            n.next=this.head;
            this.head=n;
            
        }
        this.size++;
    }
    pushE(v)
    {
        var n=new node(v);
        if(this.isempty())
        {
            alert("linklist is empty")
            // this.head=n;
        }else{
            var h=this.head;
            while(h.next!=null)
            {
                h=h.next;
            }
            h.next=n;
        }
        this.size++;
    }
    pushSPC(v,pos)
    {
        var n=new node(v);
        if(pos==1)
        {
            this.pushB(v);
        }else if(pos==this.size){
            this.pushE(v);
        }else{
            if(pos>this.size)
            {
                this.print("not possible");
            }else{
                var i=1;
                var c=this.head;
                while(i<pos-1)
                {
                    c=c.next;
                    i++;
                }
                var temp=c.next;
                n.next=temp;
                c.next=n;
            }
        }
        this.size++;
    }
    popB()
    {
        var c=this.head; 
        this.head=c.next
        this.size--;
    }
    popE()
    {
        var c=this.head;
        while(c.next!=null)
        {
            var temp=c;
            c=c.next;
        }
        temp.next=c.next
        this.size--;
    }
    popSPC(pos)
    {
        if(pos==1)
        {
            this.popB()
        }
        else if(pos==this.size)
        {
            this.popE();
        }else{
            if(pos>this.size || pos<1)
            {
                print("not possible");
            }else{
                var i=1;
                var c=this.head;
                while(i<pos)
                {
                    i++
                    var temp=c
                    c=c.next;
                }
                temp.next=c.next
                this.size--;
            }
        }
    }
    print()
    {
        var c=this.head;
        while(c.next != null)
        {
            console.log(c.value);
            c=c.next;
        }
        console.log(c.value);    
    }
}
var z=new linklist()
z.pushB(20)
z.pushB(100)
z.pushB(30)
z.pushE(200);
z.pushE(300);
z.pushE(40);
z.pushSPC(150,4)
z.print()
console.log("special pop:");
z.popSPC(1)
z.popSPC(3)
z.popSPC(4)
// z.popB()
// z.popE()
z.print()


