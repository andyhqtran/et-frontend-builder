var React = require('react');
var classNames = require('classnames');

var ETBuilderFormTextarea = React.createClass({
  propTypes: {
    error: React.PropTypes.bool,
    success: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    value: React.PropTypes.string
  },
  render: function() {
    var classes = classNames({
      'et-fb-form-textarea': true,
      'et-fb-form-textarea--error': this.props.error,
      'et-fb-form-textarea--success': this.props.success
    });

    return (
      <textarea className={classes}
                placeholder={this.props.placeholder}
                required={this.props.required} />
    );
  }
});

module.exports = ETBuilderFormTextarea;