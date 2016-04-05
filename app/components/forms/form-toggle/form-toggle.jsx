var React = require('react');
var classNames = require('classnames');

var ETBuilderFormToggle = React.createClass({
  propTypes: {
    value: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      value: this.props.value
    }
  },
  getDefaultProps: function() {
    return {
      value: 'off'
    }
  },
  _onChange: function(event) {
    var newValue = this.state.value === 'on' ? 'off' : 'on';

    // this.props._onChange(this.props.name, newValue);

    this.setState({
      value: newValue
    });
  },
  render: function() {
    var classes = classNames({
      'et-fb-form-toggle': true,
      'et-fb-form-toggle--on': this.state.value === 'on',
      'et-fb-form-toggle--off': this.state.value === 'off' || !this.state.value
    });

    return (
        <div className={classes} onClick={this._onChange}>
          <div className="et-fb-form-toggle__label et-fb-form-toggle__label--on">Yes</div>
          <div className="et-fb-form-toggle__label et-fb-form-toggle__label--off">No</div>
          <div className="et-fb-form-toggle__handle"></div>
        </div>
    );
  }
});

module.exports = ETBuilderFormToggle;