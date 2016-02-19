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

var Result = React.createClass({
  render: function() {
    return (<p>{this.props.title}, {this.props.year}.</p>);
  }
});

var OmdbCall = React.createClass({
  render: function() {
    console.log(this.props.data.Search);
    var results = this.props.data.Search.map(function(item) {
      return <Result title={item.Title} year={item.Year} />;
    });
    return (<div>{results}</div>);
  }
});

// ReactDOM.render(
//   <NavBar appName="yo" home="home" contact="reachout" />,
//   document.getElementById('navbar-container')
// );
//
// ReactDOM.render(
//   <Hello name="World" />,
//   document.getElementById('container')
// );
//
// ReactDOM.render(
//   <Footer author="EMC" />,
//   document.getElementById('footer-container')
// );

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
      ReactDOM.render(
        <OmdbCall data={data} />,
        document.getElementById('api-container')
      );
    },
    error: function() {
      console.log('invalid.');
    }
  });
};
q.addEventListener("input", ipCallback, false);
