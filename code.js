function augmentingPath(graph, start, end) {
    var graphSize = Object.keys(graph).length;
    var parent = [];
    var visited = {};
    for (var i = 0; i < graphSize; i++) {
        var tmpKey = Object.keys(graph)[i];
        var tmpObject = { [tmpKey] : false };
        Object.assign(visited, tmpObject);
    }   

    return findEnd(graph, start, visited, null, parent, end);
}

function findEnd(graph, node, visited, parent, parentArr, end) {
    parentArr.push(node);
    visited[node] = true;
    if (node == undefined) {return [];}
    if (node === end) {
        return parentArr;
    }
    var tmp4 = (Object.keys(graph[node]).length);
    for (var i = 0; i < Object.keys(graph[node]).length; i++) {
        if (visited[Object.keys(graph[node])[i]] == false)  {
            return findEnd(graph, Object.keys(graph[node])[i], visited, node, parentArr, end);
        }
    } 
    parentArr.pop();
    var prevNode = parentArr.pop();
    return findEnd(graph, prevNode, visited, parentArr[parentArr.length-1], parentArr, end);
}
