# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The function starts off with creating an object whose length is equal to the number of nodes in the graph. This takes $V$ time. Then, the function calls on another recursive function.

Very similar to Dijsktra's algorithm, the recursive function travels through all available nodes searching for a specific type of node (end node in this case). If it reaches a dead end it will traverse back through previous nodes to search for other nodes. If the function finds the end node, it returns. If it does not, the algorithm eventually traverses all the way back to the starting node, traveling the most out of each case. 

In the worst case scenario, the end node is not accessible from the start node and each node is connected from one node to the next in a continuous line. The algorithm has to traverse to the farthest node then all the way back. Each node (except the farthest node) is traveled twice and each edge is traveled twice. Thus the time is $2V + 2E$.

Adding the times together, the total runtime complexity is $T(V,E) ∈ \Theta(3V + 2E)$.

### Sources

I built off of my code for Dijkstra's Algorithm. 

I used this link to get some methods for objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values 

I used this link to learn more about referencing objects: https://stackoverflow.com/questions/5000953/how-to-get-value-in-an-objects-key-using-a-variable-referencing-that-key 

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” - Natalie Sleight
