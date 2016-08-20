var React=require("react");
var Database2=require("./Database2.js");
var Database1 = React.createClass({
  render: function() {
var rows=[];
    this.props.data.forEach(function(data) {
    var pressure =data.pressure;
    var humidity=data.humidity;
    var sunrise =data.sunrise;
    var sunset=data.sunset;
    var clouds =data.clouds;
    var wind=data.wind;
    var id=data._id;
    var name=data.name;

      rows.push(<Database2 pressure={pressure}  humidity={humidity}  sunrise={sunrise} sunset={sunset} clouds={clouds} wind={wind} id={id} name={name}/>);

      });
return (

  <div className="panel-body">
   <table className="table table-bordered table-inverse" >
    <tbody>{rows}</tbody>
   </table>
  </div>
);
}
});


module.exports=Database1;
