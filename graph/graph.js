'use strict';

const Edge = require('./edge');

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
    for (const [vertex, edge] of this._adjancyList.entries()) {
      console.log('----------------------');
      console.log('V ====> ', vertex);
      console.log('E ====>', edge);
    }
  }

  size() {
    return this._adjancyList.size;
  }

}

module.exports = Graph;
