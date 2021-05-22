# Graph : 
### A graph data structure consists of a finite (and possibly mutable) set of vertices (also called nodes or points), together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

# Challenge : 
### Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods: AddNode() , AddEdge() ,GetNodes()  ,GetNeighbors() , Size().

# Approach & Efficiency
### AddNode()
### AddEdge()
### GetNodes()
### GetNeighbors()
### Size()

## Big O :
### AddNode() : time : O(1) Space : O(n+m)
### AddEdge(): time : O(1) Space : O(n+m)
### GetNodes():time : O(1) Space : O(n+m)
### GetNeighbors():time : O(1) Space : O(n+m)
### Size():time : O(1) Space : O(n+m)

# API : 
### 1.AddNode()
###### Adds a new node to the graph
###### Takes in the value of that node
###### Returns the added node

### 2.AddEdge()
###### Adds a new edge between two nodes in the graph
###### Include the ability to have a “weight”
###### Takes in the two nodes to be connected by the edge
###### Both nodes should already be in the Graph

### 3.GetNodes()
###### Returns all of the nodes in the graph as a collection (set, list, or similar)

### 4.GetNeighbors()
###### Returns a collection of edges connected to the given node
###### Takes in a given node
###### Include the weight of the connection in the returned collection

### 5.Size()
###### Returns the total number of nodes in the graph
