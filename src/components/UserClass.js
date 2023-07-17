import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUnmount() {
    console.log("will unmount");
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h2>Location: Nashik</h2>
        <h2>Contact: me ;P</h2>
      </div>
    );
  }
}
