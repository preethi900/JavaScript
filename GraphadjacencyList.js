class Graph{
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vert) {
        if(!this.adjacencyList[vert]) {
        this.adjacencyList[vert] = []; 
        }
        return this.adjacencyList;
    }

    addEdge(vert1,vert2) {
        this.adjacencyList[vert1].push(vert2);
        this.adjacencyList[vert2].push(vert1);
    }

    removeEdge(vert1,vert2) {
        this.adjacencyList[vert1]=this.adjacencyList[vert1].filter(v => v !== vert2);
        this.adjacencyList[vert2]=this.adjacencyList[vert2].filter(v => v !== vert1);
    }

    removeVertex(vert) {
        for(var i = 0 ; i < this.adjacencyList[vert].length ;i++) {
            this.removeEdge(vert,this.adjacencyList[vert][i]);
            i--;
            if(this.adjacencyList[vert].length === 0) {
                break;
            }
        }
        delete this.adjacencyList[vert];

    }

    DFSRecursive(vert) {
        const visited = {};
        const results = [];
        const list = this.adjacencyList;
        function DFS(vertex) {
            if(!vertex) {
                return undefined;
            }
            visited[vertex] = "true";
            results.push(vertex);
            list[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return DFS(neighbor)
                }
            }) ;
            
            
        }
        DFS(vert);
        console.log(visited);
        return results;
   }

   DFSIterative(vert) {
       const stack = [];
       const visited = {};
       const results = [];
       stack.push(vert);
       let vertex;
       while(stack.length !== 0) {
           vertex = stack.pop();
           if(!visited[vertex]) {
               visited[vertex]  = "true";
               results.push(vertex);
               this.adjacencyList[vertex].forEach(neighbor => {
                    stack.push(neighbor);
                });
            }
        }
       return results;
  }

  BFS(vert) {
      const queue = [vert];
      const visited = {};
      const result = [];
      let vertex;
      while(queue.length !== 0) {
          vertex = queue.shift();
          if(!visited[vertex]) {
              visited[vertex] = "true";
              result.push(vertex);
              this.adjacencyList[vertex].forEach(neighbor => {
                  queue.push(neighbor);
              });
          }
      }
    
      return result;
  }

}

var list = new Graph();
list.addVertex("A");
list.addVertex("B");
list.addVertex("C");
list.addVertex("D");
list.addVertex("E");
list.addVertex("F");
list.addEdge("A","B");
list.addEdge("A","C");
list.addEdge("B","D");
list.addEdge("C","E");
list.addEdge("D","E");
list.addEdge("D","F");
list.addEdge("E","F");
//list.removeEdge("Tokyo","Dakota");
//list.removeVertex("Tokyo");

//list.DFSRecursive("A");
console.log(list.DFSIterative("A"));
