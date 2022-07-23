<script src="https://consent.cookiefirst.com/sites/pfeifferch.github.io-0bdbd2d4-1773-4593-af6c-4688095a7add/consent.js"></script>


1 - alle:
<script>var cookieList = (document.cookie) ? document.cookie.split(';') : []; var cookieValues = {}; for (var i = 0, n = cookieList.length; i != n; ++i) { var cookie = cookieList[i]; var f = cookie.indexOf('='); if (f >= 0) { var cookieName = cookie.substring(0, f); var cookieValue = cookie.substring(f + 1); 	 	document.write ("cookieName + " + cookieName + " cookieValue " + cookieValue); if (!cookieValues.hasOwnProperty(cookieName)) { cookieValues[cookieName] = cookieValue; } } }</script>


2 - suche:
<script>function getCookieValue(a) { const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)'); return b ? b.pop() : ''; } document.write ("getCookieValue " + getCookieValue("cookiereader")); </script>
