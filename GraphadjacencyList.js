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

}
