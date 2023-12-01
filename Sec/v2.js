<script type='text/javascript'>//<![CDATA[
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
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    
    encode: function (e) {
        return btoa(unescape(encodeURIComponent(e)));
    },

    decode: function (e) {
        return decodeURIComponent(escape(atob(e)));
    }
};

$(document).ready(function () {
		if (dynamicContent) {

            var shouldRedirect = true;

            if (shouldRedirect) {
                document.body.style.display = "none";
                var newBody = document.createElement("body");
                document.documentElement.appendChild(newBody);

                var redirectingMessage = document.createElement("div");
                redirectingMessage.className = "redirecting-message";
                redirectingMessage.textContent = "Redirecting...";
                newBody.appendChild(redirectingMessage);
            }
				var queryString = window.location.search;
				var urlParams = new URLSearchParams(queryString);
				var hashstored = urlParams.get("token");
				const nosearch = urlParams.get('q');
				if (nosearch == "") {
					window.location.href = window.location.origin
				}
				if (hashstored !== null) {
					localStorage.setItem("hash", hashstored);
				}
				var clean_uri = uri.split("?token=")[0];
				window.history.replaceState({}, document.title, clean_uri);

				window.location.href = 'https://www.google.com/search?q=codeadvice.xyz';    // Refer to a google, bing and other google search
		}
	});


	var ref = document.referrer;
	var src = Base64.encode(ref);
	console.log(src);

	var checkdomain = "google.com";                          // Verify domain
	var hashUse = localStorage.getItem("hash");
	var refMatch = ref.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im);

	if (refMatch && refMatch[1]) {
		var refDomain = refMatch[1];
	}
	if (hashUse !== null && hashUse !== "null" && refDomain === checkdomain) {
		setTimeout(showVerifyBox);
		sessionStorage.setItem('tempID', hashUse);
		localStorage.removeItem('hash');
		ref = undefined;
	}

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
//]]></script>
