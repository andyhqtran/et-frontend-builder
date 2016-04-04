var React = require('react');
var ReactDOM = require('react-dom');

var ETBuilderHeader = require('./components/header/header')

var App = React.createClass({
  render: function() {
    return (
      <div id='page-container'>
      	<ETBuilderHeader />
        Initialized
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('et-fb'));