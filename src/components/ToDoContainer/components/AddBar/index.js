import React, { Component } from "react";

class AddBar extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
    }

    handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    render() {
        return (
        <React.Fragment>
            AddBar
            <input type="text" name="input" value={this.state.input} onChange={this.handleChange}/>
            <button onClick={() => this.props.submit({text: this.state.input, id: this.props.counter})}>Add</button>
        </React.Fragment>   
        );
    }
}

export default AddBar;
