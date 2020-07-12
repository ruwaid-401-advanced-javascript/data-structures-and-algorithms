'use strict';

const Vertex = require('../graph/vertex');
const Edge = require('../graph/edge');
const Graph = require('../graph/graph');

global.console = {
  log: jest.fn(),
};

describe('Graph  tests', () => {

  const graph = new Graph();

  const two = new Vertex(2);
  const three = new Vertex(3);
  const six = new Vertex(6);
  const seven = new Vertex(7);
  const eight = new Vertex(8);
  const ten = new Vertex(10);

  it('graph test ', () => {
    const graph = new Graph();
    expect(graph instanceof Graph).toBeTruthy();
  });

  it('Vertex test ', () => {
    const test = new Vertex(2);
    expect(test instanceof Vertex).toBeTruthy();
  });

  it('Edge test ', () => {
    const test = new Edge(2);
    expect(test instanceof Edge).toBeTruthy();
  });

  it('size test ', () => {
    expect(graph.size()).toEqual(0);
  });


  it('addNode test ', () => {
    graph.addNode(two);
    graph.addNode(three);
    expect(graph.size()).toEqual(2);
    graph.addNode(six);
    graph.addNode(seven);
    graph.addNode(eight);
    graph.addNode(ten);
    expect(graph.size()).toEqual(6);
  });

  it('getNeighbors test Error ', () => {
    graph.getNeighbors(50);
    expect(global.console.log).toHaveBeenCalledWith('vertex does not exist!!');
  });

  it('addEdge test Error ', () => {
    graph.addEdge(two, 20);
    expect(graph.getNeighbors(two)).toEqual([]);
    expect(global.console.log).toHaveBeenCalledWith('Vertex Not Found!!!');
  });

  it('addEdge test ', () => {
    graph.addEdge(two, seven);
    expect(graph.getNeighbors(two)).toEqual([{'vertex':{'value': 7},'weight': 0 }]);
  });

  it('afteradding Vertex andedge  test ', () => {
    graph.addEdge(three, eight);
    graph.addEdge(six, seven);
    graph.addEdge(six, eight);
    graph.addEdge(ten, two);
    graph.addEdge(ten, three);
    graph.addEdge(ten, six);
    graph.addEdge(eight, seven);
    expect(graph.size()).toEqual(6);
    expect(graph.getNeighbors(two)).toEqual([{'vertex':{'value': 7},'weight': 0 }]);
  });


  it('afteradding Vertex andedge  test ', () => {
    graph.getNodes();
    expect(global.console.log).toHaveBeenCalled();
  });

});
