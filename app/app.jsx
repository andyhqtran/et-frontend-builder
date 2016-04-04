var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <div id='page-container'>
        Initialized
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('et-fb'));