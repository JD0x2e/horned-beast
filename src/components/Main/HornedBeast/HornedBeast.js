import { Component } from "react";

class HornedBeast extends Component {
  render() {
    return (
      <article className="article">
        <h2>{this.props.title}</h2>
        <img
          title={this.props.title}
          alt={this.props.title}
          src={this.props.imageUrl}
        />
        <p>{this.props.description}</p>
      </article>
    );
  }
}

export default HornedBeast;
