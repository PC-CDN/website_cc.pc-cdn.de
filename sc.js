document.write ("<hr> CF CONSENT"); 

function getCookieValue(a) { const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)'); return b ? b.pop() : ''; } document.write ("cookiefirst-consent: " + getCookieValue("cookiefirst-consent")); 

document.write ("<hr> CF ID"); 

function getCookieValue(a) { const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)'); return b ? b.pop() : ''; } document.write ("cookiefirst-id: " + getCookieValue("cookiefirst-Id")); 


