'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjancyList = new Map();
  }

  // initialze vertex into the adjacancyList without neighbors
  addNode(vertex) {
    this._adjancyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight) {
    if (!this._adjancyList.has(startVertex) ||
      !this._adjancyList.has(endVertex)
    ) {
      console.log('Vertex Not Found!!!');
    } else {
      // get the neighbours of the start vertex and add to them 
      const adjacencies = this._adjancyList.get(startVertex);
      // add edge with vertex and weight
      adjacencies.push(new Edge(endVertex, weight));
    }
  }

  getNeighbors(vertex) {
    if (this._adjancyList.has(vertex)) {
      return this._adjancyList.get(vertex);
    } else {
      console.log('vertex does not exist!!');
    }
  }

  getNodes() {
    // console.log(this._adjancyList.entries());
    for (const [vertex, edge] of this._adjancyList.entries()) {
      console.log('----------------------');
      console.log('V ====> ', vertex);
      console.log('E ====>', edge);
    }
  }


  breadthfirst(startNode) {
    const queue = []; // Behaviour of the queue: first in first out 
    const vistedNodes = new Set(); // track the nodes that we visited

    queue.push(startNode);
    vistedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (vistedNodes.has(neighborNode)) {
          continue;
        } else {
          vistedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }

    }
    return vistedNodes;
  }

  size() {
    return this._adjancyList.size;
  }




}


const graph = new Graph();
console.log(graph);


const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const ten = new Vertex(10);

graph.addNode(two);
graph.addNode(three);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(eight);
graph.addNode(ten);
// console.log(graph);




graph.addEdge(two, seven);
graph.addEdge(three, eight);
graph.addEdge(six, seven);
graph.addEdge(six, eight);
graph.addEdge(ten, two);
graph.addEdge(ten, three);
graph.addEdge(ten, six);
graph.addEdge(eight, seven);

console.log(graph.size());


// console.log(graph);
// console.log(graph.getNeighbors(ten));

// graph.getNodes();
// console.log('==================================================');
// console.log('Neighbors: ', graph.getNeighbors(ten));



// console.log('***********************************************');
// graph.breadthfirst(ten);