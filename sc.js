document.write (""); 

function getCookieValue(a) { const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)'); return b ? b.pop() : ''; } document.write ("cookiefirst-consent: <p>" + getCookieValue("cookiefirst-consent") + "</p>"); 

document.write ("<hr>"); 

function getCookieValue(a) { const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)'); return b ? b.pop() : ''; } document.write ("cookiefirst-id: <p>" + getCookieValue("cookiefirst-id") + "</p>"); 


