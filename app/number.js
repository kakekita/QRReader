var alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var code = null;

function encode() {
    var num = String(79297);
    var rand = Math.floor( Math.random() * alp.length);
    var j = code[alp[rand]].split("");
    var sp = num.split("");
    var str = "";
    for(var i in sp) {
        str += j[Number(sp[i])]
    }
    return str;
}

$.getJSON("codes.json").done(function (json) {
    code = json;
}).then(() => {
    alert("読み込み完了");
});
