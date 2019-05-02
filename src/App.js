import React from 'react';
import './App.css';
import {
Switch,
Link,
Route,
Redirect
} from 'react-router-dom'
import DropDown from './DropDown'
import Home from './Home'
import ToDos from './ToDos'
import AddToDo from './AddToDo'
import PreviousToDos from './PreviousToDos'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentToDos: ["do this", "do that","dont forget this"],
            ToDoToAdd: '',
            previousToDos:[]

        }
    }
    _addToDo = ()=>{
        this.setState({
            currentToDos:this.state.currentToDos.concat(this.state.ToDoToAdd),
            ToDoToAdd:''
        })
    }
    _modifyToDo = (ToDoToAdd)=>{
        console.log(ToDoToAdd)
        this.setState({
            ToDoToAdd
        })
    }
    _deleteToDo = (deleteThis)=>{
        let currentToDos = this.state.currentToDos
        currentToDos.splice(currentToDos.indexOf(deleteThis), 1)
        this.setState({
            currentToDos,
            previousToDos: this.state.previousToDos.concat(deleteThis)
        })
    }
    render() {
        return (
        <div className="App">
            <header className="App-header">

            <div className="todo-container">


                <DropDown/>
                <br/>

                <Route
                    exact path="/"
                    component={Home}
                />

                <Route 
                    path="/todo" 
                    render={(props)=>(
                        <ToDos 
                            {...props} 
                            currentToDos={this.state.currentToDos}
                            deleteToDo={this._deleteToDo}
                        />
                    )}
                />

                <Route 
                    path="/add" 
                    render={(props)=>(
                        <AddToDo
                            {...props}
                            onSubmit={this._addToDo}
                            onChange={this._modifyToDo}
                            currentValue={this.state.ToDoToAdd}
                        />
                    )}
                />

                <Route
                    path="/previous"
                    render={(props)=>(
                    
                        <PreviousToDos
                            {...props}
                            previousToDos={this.state.previousToDos}
                        />
                    )}
                />

            </div>

            </header>
        </div>
        );
    }
}


export default App;
