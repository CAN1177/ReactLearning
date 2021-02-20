import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log("Clock constructed");
    this.state = { date: new Date() };
  }
  componentWillMount() {
    console.log("componentWillMount: ");
  }
  componentDidMount() {
    console.log("Clock did mount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps: ");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate: ");
  }
  componentWillUpdate() {
    console.log("Clock Will update");
  }
  componentDidUpdate() {
    console.log("Clock did update");
  }
  componentWillUnmount() {
    console.log("Clock will unmount");
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
