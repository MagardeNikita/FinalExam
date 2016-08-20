var React=require("react");
var Database2= React.createClass({
render: function() {

return (
  <div>
  <table className="table table-bordered table-inverse" >
   <tbody>
   <tr>
   <td>
   {this.props.name}
   </td>
   </tr>
      <tr>
      <td>Pressure</td>
      <td>{this.props.pressure}</td>
      </tr>
      <tr>
      <td>Humidity</td>
      <td>{this.props.humidity}</td>
      </tr>
      <tr>
      <td>sunrise</td>
      <td>{this.props.sunrise}</td>
      </tr>
      <tr>
      <td>sunset</td>
      <td>{this.props.sunset}</td>
      </tr>
      <tr>
      <td>clouds</td>
      <td>{this.props.clouds}</td>
      </tr>
      <tr>
      <td>wind</td>
      <td>{this.props.wind}</td>
      </tr>
      </tbody>
      </table>
</div>


     );
  }
});
module.exports=Database2;
