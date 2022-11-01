var alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var code = null;

function encode() {
    
}

$.getJSON("codes.json").done(function (json) {
    code = json;
});
