	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
// Give the parameter a variable name
var dynamicContent = getParameterByName('token');
var uri = window.location.toString();
var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/\r\n/g, "\n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } };

$(document).ready(function () {
    if (dynamicContent) {
        if (dynamicContent.length >= 2 && dynamicContent.length <= 108) {

            var queryString = window.location.search;
            var urlParams = new URLSearchParams(queryString);
            var hashstored = urlParams.get("token");
            const nosearch = urlParams.get('q');
            if (nosearch == "") {
                window.location.href = window.location.origin;
            }
            if (hashstored !== null) {
                localStorage.setItem("hash", hashstored);
            }
            var clean_uri = uri.split("?token=")[0];
            window.history.replaceState({}, document.title, clean_uri);

            // Array of valid domains to check against
            var validDomains = ["blogflysafelink.blogspot.com", "example.com", "anotherdomain.com"];

            var ref = document.referrer;
            var src = Base64.encode(ref);
            console.log(src);

            var refMatch = ref.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im);

            if (refMatch && refMatch[1]) {
                var refDomain = refMatch[1];

                // Check if the referring domain is in the valid domains array
                if (validDomains.includes(refDomain)) {
                    setTimeout(showVerifyBox);
                    sessionStorage.setItem('tempID', hashUse);
                    localStorage.removeItem('hash');
                    ref = undefined;
                }
            }
        }
    }
});


	function openSite() {
		var permID = sessionStorage.getItem("tempID");
		sessionStorage.setItem('id', permID);
		sessionStorage.removeItem("tempID");
		var randIdx = Math.random() * links.length;
		randIdx = parseInt(randIdx, 10);
		var link = links[randIdx];
		var manglink = link;
		var win = window.open(manglink, '_self');
		win.focus();
	};
