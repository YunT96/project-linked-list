import "./styles.css";
import LinkedList from "./linkedlist";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("size:");
console.log(list.size());

console.log("head:");
console.log(list.getHead());

console.log("tail:");
console.log(list.getTail());

console.log("at index 2:");
console.log(list.at(2));

console.log("contains hamster:");
console.log(list.contains("hamster"));

console.log("find snake and return index:");
console.log(list.find("snake"));

console.log("toString:");
console.log(list.toString());

console.log("insert goldfish at index 3:");
list.insertAt("goldfish", 3);

console.log("remove at index 5:");
list.removeAt(5);
console.log(list.toString());
