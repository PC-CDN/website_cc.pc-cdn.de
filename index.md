<script>
var cookieList = (document.cookie) ? document.cookie.split(';') : []; var cookieValues = {}; for (var i = 0, n = cookieList.length; i != n; ++i) { var cookie = cookieList[i]; var f = cookie.indexOf('='); if (f >= 0) { var cookieName = cookie.substring(0, f); var cookieValue = cookie.substring(f + 1); 	 	console.log ("cookieName + " + cookieName + " cookieValue " + cookieValue); if (!cookieValues.hasOwnProperty(cookieName)) { cookieValues[cookieName] = cookieValue; } } }
</script>
