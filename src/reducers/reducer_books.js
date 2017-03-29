
export default function() {
  console.log("In Books Reducer", arguments)
  return [
    {title: "The Ruby Programming Language", numPages: 123, author: "David Flanagan", imageName: "The Ruby Programming Language.jpg"},
    {title: "Da Vinci Code", numPages: 456, author: "Dan Brown", imageName: "Da Vinci Code.jpg"},
    {title: "Smalltalk 80", numPages: 200, author: "Adele Goldberg", imageName: "Smalltalk 80.jpg"},
    {title: "Object Oriented JavaScript", numPages: 300, author: " Stoyan Stefanov", imageName: "Object Oriented JavaScript.jpg"}
  ]
}
