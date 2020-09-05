class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }


}

const starTrekQueue = new Queue();
starTrekQueue.enqueue('Kirk');
starTrekQueue.enqueue('Spock');
starTrekQueue.enqueue('Uhura');
starTrekQueue.enqueue('Sulu');
starTrekQueue.enqueue('Chekov');

console.log('star trek queue is:' + JSON.stringify(starTrekQueue));

function peek(queue) {
  if (queue.first) return queue.first.value
}

function isEmpty(queue) {
  if (!queue.first) return true;
  else return false;
}

function display(queue) {
  if (!isEmpty(queue)) {
    let { first, last } = queue;
    let array = [];
    while (first.next) {
      array.push(first.value);
      first = first.next;
    }
    array.push(last.value)
    console.log('The queue contains:' + array)
  }
  else console.log('The queue is empty');
}

display(starTrekQueue);
