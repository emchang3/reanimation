var React = require('react');
var ReactDOM = require('react-dom');

var Inside = React.createClass({
  getInitialState: function() {
    return {
      position: {}
    };
  },
  componentDidMount: function() {
    var pos = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState({
      position: {
        left: pos.left,
        top: pos.top
      }
    });
  },
  moveRight: function() {
    var questo = this;
    var startTime = new Date().getTime();
    var startPos = [parseInt(this.state.position.left), parseInt(this.state.position.top)];

    var horizontalTimer = setInterval(function () {
      var step = Math.min(1, (new Date().getTime() - startTime) / 500);
      questo.setState({
        position: {
          left: startPos[0] + (Math.pow(step, 2) * parseInt(500)) + "px",
          top: startPos[1] + "px"
        }
      });
      console.log(questo.state.position);
      if( step == 1) { clearInterval(horizontalTimer); };
    }, 0.0001);
  },
  render: function() {
    var position = this.state.position;
    return (
      <div style={position} id="inside">
        <button onClick={this.moveRight}>Blah</button>
      </div>
    );
  }
});

ReactDOM.render(
  <Inside />,
  document.getElementById("test-container")
);
