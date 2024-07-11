class node{
    constructor(v)
    {
        this.value=v
        this.next=null;
        this.prev=null;
    }
}
class Dlinkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isempty()
    {
        if(this.size==0)
        {
            return 1;
        }else{
            return 0;
        }
    }
    pushB(v)
    {
        var n=new node(v);
        if(this.isempty())
        {
            this.head=n
        }else{
            n.next=this.head;
            this.head.prev=n;
            this.head=n;
        }
        this.size++;
    }
    pushE(v)
    {
        var n=new node(v)
        if(this.isempty())
        {
            alert("list is empty");
        }else{
            var c=this.head
            while(c.next!=null)
            {
                c=c.next               
            }
            c.next=n;
            n.prev=c;
        }
        this.size++;
    }
    pushSPC(v,pos)
    {
        var n=new node(v)
        if(pos==1)
        {
            this.pushB(v)
        }else if(pos==this.size)
        {
            this.pushE(v)
        }else{
            if(pos>this.size)
            {
                print("not possible");
            }else{
                var i=1
                var c=this.head
                while(i<pos-1)
                {
                    i++
                    c=c.next;
                }
                var temp=c.next;
                n.next=temp;
                temp.prev=n
                c.next=n;
                this.size++;
            }
        }
    }
    popB()
    {
        if(this.isempty())
        {
            print("empty");
        }else{
            var c=this.head;
            this.head=c.next;
            this.head.prev=null
            this.size--;
        }
    }
    popE()
    {
        if(this.isempty())
        {
            print("empty");
        }else{
            var c=this.head
            while(c.next!=null)
            {
                var temp=c
                c=c.next
            }
            temp.next=c.next;
            this.size--;
        }
    }
    popSPC(pos)
    {
        if(pos==1)
        {
            this.popB()
        }else if(pos==this.size)
        {
            this.popE()
        }else{
            if(pos>this.size || pos<1)
            {
                print("not possible")
            }else{
                var i=1;
                var c=this.head
                while(i<pos)
                {
                    var temp=c;
                    c=c.next;
                    i++;
                }
                temp.next=c.next;
                c=c.next;
                c.prev=temp;
                this.size--;
            }
        }
    }
    print()
    {
        var c=this.head
        while(c.next!=null)
        {
            console.log(c.value);
            c=c.next;
        }
        console.log(c.value);
    }
}
var z=new Dlinkedlist()
z.pushB(30)
// z.pushSPC(20,1)
z.pushB(20)
z.pushB(10)
z.pushE(40)
z.pushE(50)
z.pushSPC(35,4)
z.popSPC(4)
z.popB()
z.popE()
// z.pushSPC(50,5)
// z.popB()
// z.popB()
// z.popB()
z.pushSPC(21,1)
z.popSPC(2)
z.print()