var React=require("react");
var {Router, Route, browserHistory }=require('react-router');
var Weather = React.createClass({

getWeather: function()
    {

        $.ajax({
         url: 'http://api.openweathermap.org/data/2.5/weather?q='+this.refs.city.value+'&appid=cb0c17c6e774bf603f97b566ebf8dbdb',
         dataType: 'json',
         type: 'GET',

         success: function(data)
         {
           console.log("nikita");

          var pressure=JSON.stringify(data.main.pressure);
          var humidity=JSON.stringify(data.main.humidity);
          var sunrise=JSON.stringify(data.sys.sunrise);
          var sunset=JSON.stringify(data.sys.sunset);
            var clouds=JSON.stringify(data.clouds);
              var wind=JSON.stringify(data.wind);
                var name=JSON.stringify(data.name);
                console.log(name);


              $.ajax({
               url: 'http://localhost:8081/routes',
               dataType: 'json',
               type: 'POST',
               data: {pressure:pressure , humidity:humidity, sunrise:sunrise, sunset:sunset, clouds:clouds, wind:wind ,name:name},
               success: function(data)
               {
                 console.log("added");
               }.bind(this),
               error:function(err)
               {
                 console.log("error");
               }.bind(this)
            });



         }.bind(this),
         error: function(xhr, status, err) {
           console.error(err.toString());
         }.bind(this)
      });
    },



render: function() {
return(
      <div>
      <div className="form-group">
        <input type="text" ref="city" className="form-control " />
        <button type="submit" id="send-button" onClick={this.getWeather} className="btn btn-primary" data-dismiss="modal">Add</button>
      </div>

</div>

  );
}
});
module.exports=Weather;
