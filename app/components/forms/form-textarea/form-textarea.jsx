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
  getInitialState: function() {
    return {
      value: this.props.value
    }
  },
  _onChange: function(event) {
    var newValue = event.target.value;

    // this.props._onChange(this.props.name, newValue);

    this.setState({
      value: newValue
    });
  },
  render: function() {
    var classes = classNames({
      'et-fb-form-textarea': true,
      'et-fb-form-textarea--error': this.props.error,
      'et-fb-form-textarea--success': this.props.success
    });

    return (
      <textarea className={classes}
                value={this.state.value}
                placeholder={this.props.placeholder}
                required={this.props.required}
                onChange={this._onChange} />
    );
  }
});

module.exports = ETBuilderFormTextarea;