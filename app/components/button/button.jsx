var React = require('react');

var ETBuilderButton = React.createClass({
  propTypes: {
    modifier: React.PropTypes.string,
    type: React.PropTypes.string
  },
  render: function() {
    return (
      <button type={this.props.type} className={this.props.modifier ? 'et-fb-button et-fb-button--' + this.props.modifier : 'et-fb-button'}>
        {this.props.children}
      </button>
    )
  }
});

module.exports = ETBuilderButton;