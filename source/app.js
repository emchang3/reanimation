var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var NavBar = React.createClass({
  render: function() {
    return <nav>{this.props.appName}
      <ul><li><a href={this.props.home}>{this.props.home}</a></li>
      <li><a href={this.props.contact}>{this.props.contact}</a></li>
      </ul>
    </nav>;
  }
});

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

var Footer = React.createClass({
  render: function() {
    return <footer>&copy; 2016 {this.props.author}</footer>;
  }
});

var OmdbCall = React.createClass({
  render: function() {
    return <div>
    <p><strong>{this.props.title}</strong></p>
    <p><em>{this.props.year}</em></p>
    <p><em>{this.props.director}</em></p>
    <p><em>{this.props.actors}</em></p>
    <p>{this.props.plot}</p></div>;
  }
});

ReactDOM.render(
  <NavBar appName="yo" home="home" contact="reachout" />,
  document.getElementById('navbar-container')
);

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);

ReactDOM.render(
  <Footer author="EMC" />,
  document.getElementById('footer-container')
);

// $.ajax({
//   type: 'get',
//   url: 'http://www.omdbapi.com/?t=kingdom+of+heaven&y=&plot=short&r=json',
//   success: function(data) {
//     ReactDOM.render(
//       <OmdbCall title={data["Title"]} year={data["Year"]} director={data["Director"]} actors={data["Actors"]} plot={data["Plot"]} />,
//       document.getElementById('api-container')
//     );
//   },
//   error: function() {
//     console.log('invalid.');
//   }
// });

// ReactDOM.render(
//   <Something />,
//   document.getElementById("query-container")
// );



var q = document.getElementById("query");
console.log(q);
function ipCallback() {
  console.log(q.value);
  $.ajax({
    type: 'get',
    url: 'http://www.omdbapi.com/?s=' + q.value,
    success: function(data) {
      console.log(data);
      // ReactDOM.render(
      //   <OmdbCall title={data["Title"]} year={data["Year"]} director={data["Director"]} actors={data["Actors"]} plot={data["Plot"]} />,
      //   document.getElementById('api-container')
      // );
    },
    error: function() {
      console.log('invalid.');
    }
  });
};
q.addEventListener("input", ipCallback, false);
