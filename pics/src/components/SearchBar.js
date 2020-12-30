import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    // - onSubmit prop passed from Apps component
    // - onSubmit contains the function App.handleSearchSubmit
    // - When we call this.props.onSubmit we are actually invoking the function
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <label>Image Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(event) => {
              this.setState({ term: event.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
