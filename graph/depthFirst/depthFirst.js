'use strict';

const Graph = require('../graph');

class DepththFirstGraph extends Graph{

  deapthFirst(startNode) {
    const stack = [];
    const visitedNodes = new Set();

    stack.push(startNode);
    visitedNodes.add(startNode);

    while (stack.length) {

      const currentNode = stack.pop();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {

        const neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        stack.push(neighborNode);
      }
    }
    return visitedNodes;
  }
}

module.exports = DepththFirstGraph;