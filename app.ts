// how to create interface in typescript

interface Todo { // it is an interface, and it tells that what properties and types a Todo will contain. 
  name: string;
  completed?: boolean // '?' it tells that completed property is optional and if it exist then it will be of 'boolean' type.
}

interface ITodoService { // it is another interface for checking ITodoService.
  add(todo: Todo) : Todo; // this method will add the item 'todo' that will have the interface of "Todo", and will return the value that will also have the interface of "Todo".
  delete(todoId: number) : void; // this method will receive the 'todoId' of 'number' type and return 'nothing/void'.
  getAll() : Todo[]; // this method will return 'array' of 'items' that will have interface of 'Todo'.
  getById(todoId: number) : Todo; // this method receives the 'todoId' as argument of type 'number' and will return the item that will have the interface of 'Todo'.
}

var todo: Todo = {
  name : 'Pick the cloths'
}