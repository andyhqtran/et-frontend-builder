var React = require('react');

var ETBuilderFormButton = React.createClass({
  propTypes: {
    modifier: React.PropTypes.string,
    type: React.PropTypes.string
  },
  render: function() {
    return (
      <button type={this.props.type} className={this.props.modifier ? 'et-fb-form-button et-fb-form-button--' + this.props.modifier : 'et-fb-form-button'}>
        {this.props.children}
      </button>
    )
  }
});

module.exports = ETBuilderFormButton;