import { User } from "./models/User";
import axios from "axios"

const user = new User({ name: "myName", age: 20 });

user.on("change", () => {console.log("Change#1")});
user.on("dsdsd", () => {console.log("asdasdsa")});
console.log(user);

user.trigger("dsdsd")


// axios.post("http://localhost:3000/users",{
//     name: "Eek",
//     age:30
// })

axios.get("http://localhost:3000/users/6")