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
        width: pos.width,
        height: pos.height,
        opacity: window.getComputedStyle(ReactDOM.findDOMNode(this)).opacity
      }
    });
  },
  vsh: function() {
    var questo = this;
    $.vMove(questo, 200, 2, 500);
    setTimeout(function () {
      $.vMove(questo, -200, 1/2, 500)
    }, 550);
  },
  hsh: function() {
    var questo = this;
    $.hMove(questo, 200, 2, 500);
    setTimeout(function () {
      $.hMove(questo, -200, 1/2, 500)
    }, 550);
  },
  vex: function() {
    var questo = this;
    $.vStretch(questo, 200, 2, 500);
    setTimeout(function () {
      $.vStretch(questo, -200, 1/2, 500)
    }, 550);
  },
  hex: function() {
    var questo = this;
    $.hStretch(questo, 200, 2, 500);
    setTimeout(function () {
      $.hStretch(questo, -200, 1/2, 500)
    }, 550);
  },
  fade: function() {
    var questo = this;
    $.fade(questo, -1, 1/2, 500);
    setTimeout(function () {
      $.fade(questo, 1, 2, 500)
    }, 550);
  },
  render: function() {
    var inline = this.state.inline;
    return (
      <div style={inline} id="inside">
        <button onClick={this.vsh}>Sh->V</button>
        <button onClick={this.hsh}>Sh->H</button>
        <button onClick={this.vex}>Ex->V</button>
        <button onClick={this.hex}>Ex->H</button>
        <button onClick={this.fade}>Fade</button>
      </div>
    );
  }
});

ReactDOM.render(
  <Inside />,
  document.getElementById("test-container")
);
