class graph{
    constructor()
    {
        this.node={};
    }
    addvertex(vertex)
    {
        if(!this.node[vertex])
        {
            this.node[vertex]=[];
        }
        // console.log(this.graph);
    }
    addedge(vertex1,vertex2)
    {
        if(!this.node[vertex1])
        {
            this.addvertex(vertex1);
        }
        if(!this.node[vertex2])
        {
            this.addvertex(vertex2);
        }
        this.node[vertex1].push(vertex2);
        this.node[vertex2].push(vertex1);
        console.log(this.node);
    }
}
var n=new graph()
n.addvertex("A")
n.addvertex("B")
// n.addvertex("C")
n.addedge("A","B")
n.addedge("A","c")
