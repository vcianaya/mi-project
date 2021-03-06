var gps = require("./../gps-tracking");

var options = {
    'debug': true,
    'port': 5000,
    'device_adapter': "GT06"
}

var server = gps.server(options, function (device, connection) {
    device.on("login_request", function (device_id, msg_parts) {
        // Some devices sends a login request before transmitting their position
        // Do some stuff before authenticate the device... 
        // Accept the login request. You can set false to reject the device.
        this.login_authorized(true);
    });
    //PING -> When the gps sends their position  
    device.on("ping", function (data) {
        //After the ping is received, but before the data
        coordenadas_gps = {
            'device_id' : device.uid,
            'latitude': data.latitude,
            'longitude':  data.longitude,
            'speed': data.speed
        };
        console.log(coordenadas_gps);
        return data;
    });

    connection.on('error', function (data) {
        console.log("Connection Error: ");
        console.log(data);       
    });
});