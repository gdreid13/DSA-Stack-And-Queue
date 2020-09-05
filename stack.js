class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }


}

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

function peek(stack) {
  if (!stack.top) return null;
  else return `The top of stack is ${stack.top.data}`;
}

console.log('Peeking:' + peek(starTrek));

function isEmpty(stack) {
  if (!stack.top) return true;
  else return false;
}

function display(stack) {
  while (!stack.top) {

  }
}

function is_palindrome(s) {
  let newStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  console.log('new string:' + newStr);
  
  let stack = new Stack();
  for (let i = 0; i < newStr.length; i++) {
    stack.push(newStr[i])
  }
  let reverseStr = '';
  while (!isEmpty(stack)) {
    reverseStr += stack.pop()
  }
  console.log('reverse string:' + reverseStr);
  if (newStr === reverseStr) return true;
  else return false;
}

console.log(is_palindrome('A man, a plan, a canal: Panama'))

