import React from "react";

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();

    this.state = { spans: 0 };
  }

  componentDidMount() {
    console.log(this.imageRef);
    // Note: clientHeight will be 0 because during this method call
    // the image has not finished downloading
    // console.log(this.imageRef.current.clientHeight);

    // To resolve this issue we can add an event listener "load" and pass it a callback func
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
