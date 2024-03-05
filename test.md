## Stack implementation (linked list)
LIFO: last in first out
Dynamic, don't have fixed size.
Stack has a head, which points to the toppest node.
If the stack is empty, the head points to null
````c
typedef struct _stack{}{
	Node* head;
	int size; //optional
}
````

methods:
- bool pop (or int pop)
- bool push
- bool isEmpty
- int getSize
- Stack* initStack
- int Top

## Stack implementation (array)
make use of `topOfArr` to indicate the index of top element and size of the stack, and an array to store the stack elements.
Has fixed size
---
## Queue implementation (linked list)
direction of linked list: head (front) to tail (rear)
head ptr to the frontmost node, tail ptr to the rearmost node

Methods:
- Queue* init
- void enqueue: enter the queue from the rear
- int dequeue: pop the frontmost node in the queue
- void deleteQueue
