var alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var code = null;

function encode() {
    
}

$.getJSON("codes.json").done(function (json) {
    code = json;
}).then(() => {
    alert("読み込み完了");
});
