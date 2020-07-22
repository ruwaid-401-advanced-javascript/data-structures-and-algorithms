'use strict';


const Graph = require('../graph');

class GetEdgeClass extends Graph {

  getEdge(arr) {
    let counter = 0;
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
      let x = this._adjancyList.get(arr[i-1]);
      for (let j = 0; j < x.length; j++) {
        if (arr[i].value === x[j].vertex.value) {
          counter++;
          sum += x[j].weight;
          break;
        }
      }

    }
    if(counter === arr.length-1){
      return `True, $${sum}`;
    }else{
      return `False, $0`;

    }
  }
}

module.exports = GetEdgeClass;

// const Vertex = require('../vertex');
// let graph = new  GetEdgeClass();

// const two = new Vertex(2);
// const three = new Vertex(3);
// const six = new Vertex(6);
// const seven = new Vertex(7);
// const eight = new Vertex(8);
// const ten = new Vertex(10);

// graph.addNode(two);
// graph.addNode(three);
// graph.addNode(six);
// graph.addNode(seven);
// graph.addNode(eight);
// graph.addNode(ten);

// graph.addEdge(three, eight,5);
// graph.addEdge(six, seven,4);
// graph.addEdge(six, eight,2);
// graph.addEdge(ten, two,8);
// graph.addEdge(ten, three,4);
// graph.addEdge(ten, six,7);
// graph.addEdge(eight, seven,1);
// console.log(graph);
// console.log(graph.getNeighbors(three));

// console.log(graph.getEdge([ten,six,seven]));