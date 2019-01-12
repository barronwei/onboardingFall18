import React, { Component, Fragment } from "react";

class ToDoList extends Component {
    render() {
        if (this.props.list.length > 0) {
            const filter = this.props.list.filter(el => {return el.text.includes(this.props.search)})
            if (filter) {
                return (
                    <Fragment>
                        <ul>
                            {filter.map(el => {return (
                                <li key={el.id}>
                                    {el.text}
                                    <button onClick={() => this.props.delete(el)}>Delete</button>
                                </li>
                            )})}
                        </ul>
                    </Fragment>
                )
            }
            else {
                return (
                    <div>There is nothing fam.</div>
                )
            }
        }
        else {
            return (
                <div>There is nothing fam.</div>
            )
        }
    }
}
  
export default ToDoList;