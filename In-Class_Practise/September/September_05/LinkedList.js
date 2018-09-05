function LinkedList() {
    let head = null;
    let length = 0;
    let Node = function (value) {
        this.value = value;
        this.next = null;
    }

    this.length = () => length;
    this.head = () => head;

    // Add new Node
    this.add = (value) => {
        let node = new Node(value);
        if (head === null) {
            head = node;
        }
        else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    // Remove Node
    this.remove = (value) => {
        let current = head;
        let prevNode;
        if (current.value === value) {
            head = current.next;
        }
        else {
            while (current.value !== value) {
                prevNode = current;
                current = current.next;
            }
            prevNode.next = current.next;
        }
        length--;
    }

    this.isEmpty = () => {
        return length === 0;
        // return head === 0;
    }

    this.indexOf = (value) => {
        let current = head;
        let index = -1;
        while (current) {
            index++
            if (current.value === value) {
                return index;
            }
            current = current.next;
        }
        return -1;
    }

    // return value by the index
    this.valueAt() = (index) => {
        // code
    }

    // add new value by index
    this.insertAt = (index, value) => {
        // code
    }
}


let list = new LinkedList();
list.add(1);
list.add(13);
list.add(16);
list.add(20);
console.log(list.length());
console.log(list.head().value);