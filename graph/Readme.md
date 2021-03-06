## Github actions
[link](https://github.com/ruwaid-401-advanced-javascript/data-structures-and-algorithms/pull/26/checks)

# graph

Implement Graph Data structure.  The graph should be represented as an adjacency list

## Challenge

* AddNode()
  Adds a new node to the graph
  Takes in the value of that node
  Returns the added node
* AddEdge()
  Adds a new edge between two nodes in the graph
  Include the ability to have a “weight”
  Takes in the two nodes to be connected by the edge
  Both nodes should already be in the Graph
* GetNodes()
  Returns all of the nodes in the graph as a collection (set, list, or similar)
* GetNeighbors()
  Returns a collection of edges connected to the given node
  Takes in a given node
  Include the weight of the connection in the returned collection
* Size()
  Returns the total number of nodes in the graph

## Approach & Efficiency

i used class 
### BIG O
#### graph 
* AddNode Method
  * space --> Big O = O(1) -->  constant space always will add a one memory location
  * time --> Big O = O(1) -->  constant time
* AddEdge Method
  * space --> Big O = O(1) -->  constant space always will add a one memory location
  * time --> Big O = O(1) -->  constant time
* GetNodes Method
  * space --> Big O = O(1) -->  constant space always will add a one memory location
  * time --> Big O = O(n) -->  time varies as number of nodes increase or decrease
* GetNeighbors Method
  * space --> Big O = O(1) -->  constant space always will add a one memory location
  * time --> Big O = O(1) -->  constant time
* Size Method
  * space --> Big O = O(1) -->  constant space always will add a one memory location
  * time --> Big O = O(1) -->  constant time



## Solution

![UML](../assets/graph.png)