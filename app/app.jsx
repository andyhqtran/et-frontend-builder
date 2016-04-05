var React = require('react');
var ReactDOM = require('react-dom');

var ETBuilderHeader = require('./components/header/header')

var ETBuilderButton = require('./components/button/button')

var ETBuilderFormButton = require('./components/forms/form-button/form-button')
var ETBuilderFormTextInput = require('./components/forms/form-text-input/form-text-input')
var ETBuilderFormTextarea = require('./components/forms/form-textarea/form-textarea')

var App = React.createClass({
  render: function() {
    return (
      <div id='page-container'>
      	<ETBuilderHeader />
        Initialized
        <ETBuilderButton type="button" primary>Test</ETBuilderButton>
        <form>
          <ETBuilderFormTextInput type="text" placeholder="First Name" error requried />
          <ETBuilderFormTextInput type="text" placeholder="Last Name" success requried />
          <ETBuilderFormTextInput type="email" placeholder="Email Address" requried />
          <ETBuilderFormTextarea placeholder="Description" requried />
          <ETBuilderFormButton type="submit" primary>Submit</ETBuilderFormButton>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('et-fb'));