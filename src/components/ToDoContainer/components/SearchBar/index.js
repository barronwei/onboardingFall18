import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ""};
  }
  render() {
    return (
      <div>
        <label>
          SearchBar
          <input type="text" name="input" value={this.props.svalue} onChange={this.props.search} />
        </label>
      </div>
    );
  }
}
  
export default SearchBar;
