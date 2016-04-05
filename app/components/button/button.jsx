var React = require('react');
var classNames = require('classnames');

var ETBuilderButton = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    inverse: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    success: React.PropTypes.bool,
    type: React.PropTypes.string.isRequired
  },
  render: function() {
    var classes = classNames({
      'et-fb-button': true,
      'et-fb-button--inverse': this.props.inverse,
      'et-fb-button--primary': this.props.primary,
      'et-fb-button--success': this.props.success
    });

    return (
      <button type={this.props.type} className={classes}>
        {this.props.children}
      </button>
    )
  }
});

module.exports = ETBuilderButton;