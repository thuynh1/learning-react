import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // Things to do in the constructor
  constructor(props) {
    super(props); // Calls the React.Component's (parent) constructor

    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" };
  }

  // Async call to determine user's geolocation
  async getLatitude() {
    window.navigator.geolocation.getCurrentPosition(
      // Success callback
      (position) => {
        // !!! We have to call setState in order to update the state object
        this.setState({ lat: position.coords.latitude });

        // DO NOT EVER!!! directly update this.state object
        // BAD => this.state.lat = position.coords.latitude
      },
      // Error callback
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  handleLocationUpdate() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.lat && !this.state.errorMessage) {
      return <Spinner message="Please accept location request" />;
    }
  }

  // BEST PRACTICE: Good place to do data-loading
  componentDidMount() {
    console.log("Component was rendered to the screen");
    this.getLatitude();
  }

  componentDidUpdate() {
    console.log("Component was updated");
  }

  componentWillUnmount() {
    console.log("Component was removed");
  }

  // Note: render() must be defined. React yells as you if this is missing
  render() {
    return <div>{this.handleLocationUpdate()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
