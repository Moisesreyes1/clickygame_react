import React from "react";

class Counter extends React.Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1});
    };

    onChange = (index, val) => {
        this.setState({
          count: this.state.count.map((product, i) => (
            i === index ? {...product, count: val} : product
          ))
        })
      }
    render() {
        return (
            <div className="panel panel-primary">
                <p>Score: {this.state.count}</p>
                <p>Top Score: {this.state.count}</p>
            </div>
        );
    }
}

export default Counter;