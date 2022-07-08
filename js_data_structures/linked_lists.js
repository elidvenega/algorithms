// linked lists in JS

// const list = {
//     head: {
//         value: 6
//         next: {
//             value: 10                                             
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null	
//                     }
//                 }
//             }
//         }
//     }
// };

// Implementing a linked list in JS
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)

console.log(list.head.next.data) //returns 5






