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
    $.hMove(questo, 200, 1/2, 500);
    $.vMove(questo, 200, 2, 500);
    setTimeout(function() {
      $.hMove(questo, -200, 2, 500);
      $.vMove(questo, 200, 1/2, 500);
      setTimeout(function() {
        $.hMove(questo, -200, 1/2, 500);
        $.vMove(questo, -200, 2, 500);
        setTimeout(function() {
          $.hMove(questo, 200, 2, 500);
          $.vMove(questo, -200, 1/2, 500);
        }, 510);
      }, 510);
    }, 510);
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
