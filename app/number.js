var alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var code = null;

function encode(n) {
    var num = String(n);
    var rand = Math.floor( Math.random() * alp.length);
    alert(alp[rand]);
    var j = code[alp[rand]].split("");
    var sp = num.split("");
    var str = "";
    for(var i in sp) {
        str += j[Number(sp[i])];
    }
    return str;
}

function decode(s) {
    var a = s.substr(0,1);
    var c = s.substr(1,s.length-1);
    alert(c);
    var str = "";
    var csp = code[a].split("");
    for(var i in c.split("")) {
        str += String(csp.indexOf(c[i]));
    }
    return str;
}

$.ajaxSetup({ async: false });
$.getJSON("codes.json").done(function (json) {
    code = json;
    alert("読み込み完了");
    //alert(encode(25565));
});
$.ajaxSetup({ async: true });
