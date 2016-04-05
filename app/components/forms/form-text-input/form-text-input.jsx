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
      'et-fb-form-input': true,
      'et-fb-form-input--error': this.props.error,
      'et-fb-form-input--success': this.props.success
    });

    return (
      <input type={this.props.type}
             className={classes}
             value={this.state.value}
             placeholder={this.props.placeholder}
             required={this.props.required}
             onChange={this._onChange} />
    );
  }
});

module.exports = ETBuilderFormTextInput;