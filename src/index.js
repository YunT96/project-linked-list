import "./styles.css";
import LinkedList from "./linkedlist";

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.prepend(1);
list.append(123);

console.log("size:");
console.log(list.size());

console.log("head:");
console.log(list.getHead());

console.log("tail:");
console.log(list.getTail());

console.log("at index 2:");
console.log(list.at(2));

console.log("contains 123:");
console.log(list.contains(123));

console.log("find 123 and return index:");
console.log(list.find(123));
