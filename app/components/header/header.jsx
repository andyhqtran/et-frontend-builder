var React = require('react');

var ETBuilderButton = require('../button/button')

var ETBuilderHeader = React.createClass({
	render: function() {
		return (
			<div className="et-fb-header">
        <ETBuilderButton type="button" modifier="success">Save</ETBuilderButton>
        <ETBuilderButton type="button" modifier="primary">Save</ETBuilderButton>
				<ETBuilderButton type="button" modifier="inverse">Save</ETBuilderButton>
			</div>
		);
	}
});

module.exports = ETBuilderHeader;