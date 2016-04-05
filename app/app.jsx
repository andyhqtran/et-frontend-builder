var React = require('react');
var ReactDOM = require('react-dom');

var ETBuilderHeader = require('./components/header/header')

var ETBuilderFormButton = require('./components/forms/form-button/form-button')
var ETBuilderFormTextInput = require('./components/forms/form-text-input/form-text-input')

var App = React.createClass({
  render: function() {
    return (
      <div id='page-container'>
      	<ETBuilderHeader />
        Initialized

        <form>
          <ETBuilderFormTextInput placeholder="Full Name" requried="true" />
          <ETBuilderFormButton>Submit</ETBuilderFormButton>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('et-fb'));