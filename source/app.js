var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('./animus.js');

var Inside = React.createClass({
  getInitialState: function() {
    return {
      inline: {}
    };
  },
  componentDidMount: function() {
    var pos = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState({
      inline: {
        left: pos.left,
        top: pos.top,
        opacity: window.getComputedStyle(ReactDOM.findDOMNode(this)).opacity
      }
    });
  },
  moveRight: function() {
    var questo = this;
    // $.move(questo, 100, 0, 1, 500);
    $.fade(questo, -1, 1, 500);
  },
  render: function() {
    var inline = this.state.inline;
    return (
      <div style={inline} id="inside">
        <button onClick={this.moveRight}>Blah</button>
      </div>
    );
  }
});

ReactDOM.render(
  <Inside />,
  document.getElementById("test-container")
);
