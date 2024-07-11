class node {
    constructor(v) {
        this.value = v;
        this.left = null;
        this.right = null;
    }
}

class tree {
    constructor() {
        this.root = null;
    }

    insert(a) {
        var n = new node(a);
        if (this.root == null) {
            this.root = n;
        } else {
            if (a < this.root.value) {
                if (this.root.left == null) this.root.left = n;
                else this.insertleft(this.root.left, n);
            } else {
                if (this.root.right == null) this.root.right = n;
                else this.insertright(this.root.right, n);
            }
        }
    }

    insertleft(leftnode, n) {
        if (n.value < leftnode.value) {
            if (leftnode.left == null) leftnode.left = n;
            else this.insertleft(leftnode.left, n);
        } else {
            if (leftnode.right == null) leftnode.right = n;
            else this.insertleft(leftnode.right, n);
        }
    }

    insertright(rightnode, n) {
        if (n.value < rightnode.value) {
            if (rightnode.left == null) rightnode.left = n;
            else this.insertright(rightnode.left, n);
        } else {
            if (rightnode.right == null) rightnode.right = n;
            else this.insertright(rightnode.right, n);
        }
    }
    search(h)
    {
        if(this.root.value>=h)
        {
            this.searchv1(this.root.left,h)
        }
        else if(this.root.value<=h)
        {
            this.searchv1(this.root.right,h)
        }
        else{
            alert("tree empty")
        }
    }
    searchv1(z,h)
    {
        if(z.value>=h)
        {
            if(z.value==h)
            {
                alert("found")
            }else{
                this.searchv1(z.left,h)
            }
        }else if(z.value<=h){
            this.searchv1(z.right,h)
        }
        else{
            alert("not found")
        }
    }
    // inorder(root)
    // {
        //     if(root)
    //     {
    //         inorder(root.left)
    //     console.log(root.value);
    //     inorder(root.right)    
    //     }
    // }
}
var flag=0;
function inorder(root,b)
{
    if(root)
    {
        inorder(root.left,b)
        console.log(root.value);
        while(b==root.value)
        {
            console.log("found");
            flag=1;
            if(flag==0)
            {
                alert("not found");
            }
        }
        inorder(root.right,b)
    }
}
// function search(b)
// {
//     if(b==this.root.value)
//     {
//         console.log("found");
//     }else{
//         console.log("not found");
//     }
// }
// Example usage:
let myTree = new tree();
myTree.insert(5);
myTree.insert(3);
myTree.insert(7);
myTree.insert(70);
myTree.insert(10);
myTree.insert(2);
myTree.insert(15);
console.log(myTree);
// inorder(myTree.root,10)
myTree.search(70)

// myTree.inorder()