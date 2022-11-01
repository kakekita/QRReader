var alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var code = null;

function encode(n) {
    var num = String(n);
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
    alert("読み込み完了");
});
