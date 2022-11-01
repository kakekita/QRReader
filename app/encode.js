var alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var code = null;



$.getJSON("code.json")
    .done(function (json) {
        code = json;
});
