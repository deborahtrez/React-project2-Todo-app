const express = require ('express')
const router = express.Router()
const todomodel = require('../models/todo')

//deliver all todo items
router.get('/', (request, response) =>{
    todomodel.find()
    .then(todos => {response.json(todos)})
    .catch(error => {response.json(error)})
})

//deliver todo item by id
router.get('/:id', (request, response) => {
    todomodel.findById(request.params.id)
    .then(todos => {response.json(todos)})
    .catch(error => {response.json(error)})
})

//add new todo to list
router.post('/create', (request, response) => {
    const list = new todomodel({
        todo_description: request.body.todo_description,
        todo_responsible: request.body.todo_responsible,
        todo_priority: request.body.todo_priority
    })

    list.save()
    .then(todos => {response.json(todos)})
    .catch(error => {response.json(error)})
})

//edit or update todo item
router.post('/edit:id', (request, response) => {
    todomodel.findById(request.params.id)
    .then(todolist => {
        todolist.todo_description = request.body.description
        todolist.todo_responsible = request.body.todo_responsible
        todolist.todo_priority = request.body.todo_priority

        todolist.save()
        .then(() => {response.json('To do item has been updated')})
        // .catch(() => {response.json('Item updating failed')})
    })
    .catch(error => {response.json(error)})
})

//delete a to do item
router.delete('/:id', (request, response) => {
    todomodel.findByIdAndDelete(request.params.id)
    .then( () => {response.json('Todo item has been deleted')})
    .catch(error => (response.json(error)))
})

module.exports = router