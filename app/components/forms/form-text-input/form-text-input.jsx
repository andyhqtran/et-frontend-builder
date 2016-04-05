var React = require('react');

var ETBuilderFormTextInput = React.createClass({
  propTypes: {
    modifier: React.PropTypes.string,
    type: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool
  },
  render: function() {
    return (
      <input type={this.props.type}
             className={this.props.modifier ? 'et-fb-form-input et-fb-form-input--' + this.props.modifier : 'et-fb-form-input'}
             placeholder={this.props.placeholder}
             required={this.props.required} />
    )
  }
});

module.exports = ETBuilderFormTextInput;