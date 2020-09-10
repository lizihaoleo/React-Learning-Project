import React from 'react';
import './assignment2.css'

class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos:["A","B","C","AA","ABX"],
        search:[]
      };
      this.myRef = React.createRef();
    }

    addTodo(e){
        if (e.key === 'Enter'){
            this.setState({
            todos: this.state.todos.concat(e.target.value)}, () => console.log(this.state.todos));
        }
    }

    removeTodo(x){
        console.log("remove to do",x);
        let filteredArray = this.state.todos.filter(item => item !== x);
        this.setState({todos: filteredArray}, () => console.log(this.state.todos));
    }

    submitTodo(e){
        e.preventDefault();
        this.setState({
            todos: this.state.todos.concat(this.myRef.current.value)});
    }

    search(e){
        var pattern = e.target.value;
        
        if (e.key === 'Enter' && pattern){
            let serchArray = this.state.todos.filter(item => item.startsWith(pattern));
            this.setState({search:serchArray});
        }
        else if (!pattern){
            // nothimg need to search
            this.setState({search:[]});
        }
    }

    render(){
        return (<div>
                <li>Todo List </li>
                
                <li>
                    <input type="text" autoFocus ref={this.myRef} onKeyDown={(e) => this.addTodo(e)}></input>
                    <button type="button" onClick={ (e) => this.submitTodo(e)} className="btn">Save</button>
                </li>
                <li>
                    <input type="text" placeholder="Search.." onKeyDown={(e)=>this.search(e)}></input>
                </li>

                {/* search result list */}
                <ol>
                    {this.state.search.length > 0 ?
                    this.state.search.map((x,idx) => {
                        return (
                            <li className="searchbox"key={idx+x}>{x}</li>
                        )
                    }): null}
                </ol>

                {/* display all todo lists */}
                <ol>
                    { 
                    this.state.todos.map((x,idx) => {
                        return (
                        <li key={idx+x} onClick={(e) => this.removeTodo(x)}>
                            {x}
                        </li>
                            )
                    })}
                </ol>
        </div>)
    }
}

export default TodoList;
