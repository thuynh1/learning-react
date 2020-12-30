import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };

    // If we use "function () {}" syntax we need to "this.functionName = this.functionName.bind(this);"
    // If we use "() => {}"" arrow syntax then binding is implicit
    // Note: console.log(this) inside functions to figure out who called the function
  }

  handleSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    // https://www.freecodecamp.org/news/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36/
    // https://stackoverflow.com/questions/48699573/correct-use-of-arrow-functions-in-react
    // https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
