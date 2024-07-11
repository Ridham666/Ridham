class graph {
    constructor(arraySize) {
      this.node = new Array();
      for (var i = 0; i < arraySize; i++) {
        this.node.push(new Array());
      }
      for (var i = 0; i < arraySize; i++) {
        for (var j = 0; j < arraySize; j++) {
          this.node[i].push(0);
        }
      }
    }
    edge(e1, e2,e3) {
      if (this.node.length > e1 && this.node.length > e2) {
        this.node[e1][e2] = e3;
      } else {
        alert("EDGE NOT FOUND");
      }
    }
    
  }
  
  var graphObj = new graph(5);
  graphObj.edge(0, 1,3);
  graphObj.edge(1, 4,5);
  graphObj.edge(1, 2,10);
  // graphObj.edge(2, 2);
  graphObj.edge(2, 3,4);
  graphObj.edge(3, 0,8);
  console.log(graphObj.node);