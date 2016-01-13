var React = require('react'),
 Detector = require('./third-party/Detector.js'),
 TWEEN = require('./third-party/Tween.js'),
 DAT = require('./globe.js');

var WorldMap = React.createClass({
  getInitialState: function(){
    return{data: this.props.country}
  },
  componentWillReceiveProps: function(props) {
    this.setState({data: props.country});
  },
  componentDidMount: function() {
    var _this = this;
    var container = this.refs.container.getDOMNode();
    // if(!Detector.webgl){
    //   Detector.addGetWebGLMessage();
    // } else {

      // var container = document.getElementById('container');

      var opts = {imgDir: 'assets/'};
      var globe = new DAT.Globe(container, opts, this.props.changeCountry);
      globe.animate();
    // }
  },
  render: function() {
    return (
      <div>
      <div className="container" ref="container"></div>

      <div id="overlay"></div>

      </div>
    );
  },

});