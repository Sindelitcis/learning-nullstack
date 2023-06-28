import Nullstack from 'nullstack'

import './Application.css'
import { Plus } from './icons/Plus'
import { Trash } from './icons/Trash'
import { Edit } from './icons/Edit'

class Application extends Nullstack {

  todo_input = ''
  todos = []

  deleteTask({ index }) {
    this.todos = this.todos.filter((todo, i) => {
      if (index === i) return false
      return true
    })
  }

  addTodoTask() {
    this.todos.push(this.todo_input)
    this.todo_input = ''
  }

  render() {
    return (
      <body>
        <main>
          <h1>To-do list</h1>

          <p>Simple app to manage your daily to-dos</p>

          <div class="todo-wrapper">
            <form onsubmit={this.addTodoTask}>
              <input bind={this.todo_input} placeholder='write new to-do' />

              <button><Plus /></button>
            </form>

            <ul>
              {this.todos.map((task, index) => <li>
                <b>{task} </b>

                <div>
                  <button onclick={() => this.deleteTask({ index })} > <Trash /></button>

                  {/* <button><Edit /></button> */}

                </div>
              </li>)}
            </ul>
          </div>
        </main>
      </body >
    )
  }

}

export default Application
