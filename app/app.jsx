var React = require('react');
var ReactDOM = require('react-dom');

var ETBuilderHeader = require('./components/header/header')

var ETBuilderButton = require('./components/button/button')

var ETBuilderFormButton = require('./components/forms/form-button/form-button')
var ETBuilderFormTextInput = require('./components/forms/form-text-input/form-text-input')
var ETBuilderFormTextarea = require('./components/forms/form-textarea/form-textarea')
var ETBuilderFormToggle = require('./components/forms/form-toggle/form-toggle')

var App = React.createClass({
  render: function() {
    var demoStyles = {
      padding: '40px'
    };

    return (
      <div id='page-container'>

        <div style={demoStyles}>
        	<ETBuilderHeader />
        </div>

        <div style={demoStyles}>
          <ETBuilderButton type="button" primary>Default</ETBuilderButton>
          <ETBuilderButton type="button" primary>Primary</ETBuilderButton>
          <ETBuilderButton type="button" success>Success</ETBuilderButton>
          <ETBuilderButton type="button" inverse>Inverse</ETBuilderButton>
        </div>

        <div style={demoStyles}>
          <ETBuilderFormTextarea placeholder="Default" requried />
          <ETBuilderFormTextarea placeholder="Error" error requried />
          <ETBuilderFormTextarea placeholder="Success" success requried />
        </div>

        <div style={demoStyles}>
          <ETBuilderFormTextInput type="text" placeholder="Default" requried />
          <ETBuilderFormTextInput type="text" placeholder="Error" error requried />
          <ETBuilderFormTextInput type="text" placeholder="Success" success requried />
        </div>

        <div style={demoStyles}>
          <ETBuilderFormToggle value="" />
        </div>

        <div style={demoStyles}>
          <ETBuilderFormButton type="button">Default</ETBuilderFormButton>
          <ETBuilderFormButton type="button" primary>Primary</ETBuilderFormButton>
          <ETBuilderFormButton type="button" success>Success</ETBuilderFormButton>
          <ETBuilderFormButton type="button" inverse>Inverse</ETBuilderFormButton>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('et-fb'));