var React = require('react');
var classNames = require('classnames');

var ETBuilderIcon = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired,
    size: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    style: React.PropTypes.object
  },
  getDefaultProps: function() {
    return {
      color: '#FFFFFF',
      size: 12
    }
  },
  _renderGraphics: function() {
    switch (this.props.icon) {
      case 'text-bold':
        return (
          <g><path d="M8.8 5.5c.4-.5.7-1.2.7-2C9.5 1.6 7.9 0 6 0H2.5c-.2 0-.4.1-.5.2-.3.2-.5.4-.5.8v10c0 .4.2.6.5.8.1.1.3.2.5.2H7c1.9 0 3.5-1.6 3.5-3.5 0-1.3-.7-2.3-1.7-3zm-1.3-2C7.5 4.3 6.8 5 6 5H3.5V2H6c.8 0 1.5.7 1.5 1.5zm1 5c0 .8-.7 1.5-1.5 1.5H3.5V7H7c.8 0 1.5.7 1.5 1.5z" fill-rule="evenodd" /></g>
        );
      case 'text-italic':
        return (
          <g><path d="M9.5 0h-5a1 1 0 1 0 0 2h1.345l-2.134 8H2.5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H5.806L7.94 2H9.5a1 1 0 0 0 0-2z" fill-rule="evenodd" /></g>
        );
      case 'text-underline':
        return (
          <g><path d="M6 10c2.2 0 4-1.8 4-4.1V1c0-.6-.4-1-1-1S8 .4 8 1v4.9C8 7.1 7.1 8 6 8s-2-.9-2-2.1V1c0-.6-.4-1-1-1S2 .4 2 1v4.9C2 8.2 3.8 10 6 10zm4.5 1h-9c-.3 0-.5.2-.5.5s.2.5.5.5h9c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z" fill-rule="evenodd" /></g>
        );
    }
  },
  render: function () {
    var styles = {
      width: this.props.size,
      height: this.props.size,
      fill: this.props.color
    };

    return (
      <svg className={'et-fb-icon et-fb-icon--' + this.props.icon} viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet" fit style={styles}>
        {this._renderGraphics()}
      </svg>
    );
  }
});

module.exports = ETBuilderIcon;