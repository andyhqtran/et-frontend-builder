var React = require('react');
var classNames = require('classnames');

var ETBuilderFormTextInput = React.createClass({
  propTypes: {
    error: React.PropTypes.bool,
    success: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    type: React.PropTypes.string.isRequired,
    value: React.PropTypes.string
  },
  render: function() {
    var classes = classNames({
      'et-fb-form-input': true,
      'et-fb-form-input--error': this.props.error,
      'et-fb-form-input--success': this.props.success
    });

    return (
      <input type={this.props.type}
             className={classes}
             placeholder={this.props.placeholder}
             required={this.props.required} />
    );
  }
});

module.exports = ETBuilderFormTextInput;