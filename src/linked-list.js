const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append( data ) {
        let nod = new Node ( data );
        if ( !this._head ) {
          this._head = nod;
          this._tail = nod;             
        }
        else {
          nod.prev = this._tail;
          this._tail.next = nod;
          this._tail = nod;
        }       
        this.length += 1;             
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let counter = 0;
        let cur = this._head;
        while ( counter < index ) {            
            cur = cur.next;
            counter += 1;
        }
        return cur.data;
    }

    insertAt(index, data) {
    
    }
    
    isEmpty() {
        return this.length === 0 ? true : false;
    }

    clear() {
        let cur = this._head;
        for ( let i=0; i<this.length; i++ ) {
            this._head = null;
            this._head = cur.next;            
        }
    }

    deleteAt(index) {
        let cur = this._head;
        for ( let i=0; i<index; i++ ) {
            cur = cur.next;            
        }
        for ( let j=this.length - index; j<this.length; j++ ) {
            
        }
    }

    reverse() {}

    indexOf(data) {
        let counter = 0;
        let cur = this._head;
        let rez = -1;
        while ( counter < this.length ) {            
            if ( cur.data === data ) { rez = counter; }
            cur = cur.next;
            counter += 1;
        }
        return rez;
    }
}

module.exports = LinkedList;
