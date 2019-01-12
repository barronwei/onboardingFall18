import React, { Component } from "react";
import ToDoList from "../ToDoList"
import AddBar from "../AddBar";
import SearchBar from "../SearchBar"

class ToDos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            holder: [],
            counter: 0,
            search: "",
        };
    }

    handleSubmit = (todo) => {
        this.setState({
            holder: [...this.state.holder, todo],
            counter: this.state.counter + 1,
        })
    }

    handleSearch = (e) => {
        this.setState({
            search: e.target.value,
        })
    }
    handleDelete = (el) => {
        this.setState({holder: this.state.holder.filter(item => {return item !== el})})
    }

    render() {
        return (
        <React.Fragment>
            <div>
                <div><ToDoList list={this.state.holder} search={this.state.search} delete={this.handleDelete}/></div>
                <div>
                    <AddBar submit={this.handleSubmit} counter={this.state.counter}/>
                    <SearchBar search={this.handleSearch} svalue={this.state.search}/>
                </div>
            </div>
         </React.Fragment>
        );
    }
}

export default ToDos;
