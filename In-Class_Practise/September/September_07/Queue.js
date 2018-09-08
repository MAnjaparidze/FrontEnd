// FIFO
class Queue {
    constructor() {
        this.tasks = [];
    }
    enqueue(task) {
        this.tasks.push(task);
    }
    dequeue() {
        return this.tasks.shift();
    }

    firstElement() {
        return this.tasks[0];
    }

    log() {
        console.log(this.tasks);
    }
}

class PQueue {
    constructor() {
        this.tasks = [];
    }
    enqueue(task) {
        if (this.tasks.length) {
            this.tasks.push(task);
        }
        else {
            let inserted = false;

            for (let i = 0; i < this.tasks.length; i++) {
                if (task[1] < this.tasks[i][1]) {
                    this.tasks.splice(i, 0, task);
                    // inserted = true;
                    return;
                }
            }

            // if (!inserted) {
            this.tasks.push(task);
            // }
        }
    }
    dequeue() {
        return this.tasks.shift();
    }

    firstElement() {
        return this.tasks[0];
    }

    isEmpty() {
        return this.tasks.length === 0;
    }

    log() {
        console.log(this.tasks);
    }
}

let myQueue = new Queue();
myQueue.enqueue('1');
myQueue.enqueue('3');
myQueue.enqueue('5');
myQueue.enqueue('7');
myQueue.log();
console.log(myQueue.firstElement());
myQueue.dequeue();
myQueue.log();
console.log(myQueue.firstElement());

// let pQueue = new PQueue();

// pQueue.enqueue(['Task', 1]);
// pQueue.enqueue(['Task 2', 2]);
// pQueue.enqueue(['Task 3', 3]);
// pQueue.enqueue(['Task 4', 1]);

// pQueue.log();

// SET
/*
    add(el)/has(el)/remove(el)/subSet
*/