var React = require('react');
var classNames = require('classnames');

var ETBuilderFormButton = React.createClass({
  propTypes: {
    block: React.PropTypes.bool,
    children: React.PropTypes.node,
    inverse: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    success: React.PropTypes.bool,
    type: React.PropTypes.string.isRequired
  },
  render: function() {
    var classes = classNames({
      'et-fb-form-button': true,
      'et-fb-form-button--block': this.props.block,
      'et-fb-form-button--inverse': this.props.inverse,
      'et-fb-form-button--primary': this.props.primary,
      'et-fb-form-button--success': this.props.success
    });

    return (
      <button type={this.props.type} className={classes}>
        {this.props.children}
      </button>
    );
  }
});

module.exports = ETBuilderFormButton;