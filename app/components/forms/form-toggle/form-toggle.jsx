var React = require('react');
var classNames = require('classnames');

var ETBuilderFormToggle = React.createClass({
  render: function() {
    var classes = classNames({
      'et-fb-form-toggle': true,
      'et-fb-form-toggle--on': this.props.value === 'on',
      'et-fb-form-toggle--off': this.props.value === 'off' || !this.props.value
    });

    return (
        <div className={classes}>
          <div className="et-fb-form-toggle__label et-fb-form-toggle__label--on">Yes</div>
          <div className="et-fb-form-toggle__label et-fb-form-toggle__label--off">No</div>
          <div className="et-fb-form-toggle__handle"></div>
        </div>
    );
  }
});

module.exports = ETBuilderFormToggle;