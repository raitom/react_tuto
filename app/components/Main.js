var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function(){
    return (
      <h1>Coucou !</h1>      
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));
