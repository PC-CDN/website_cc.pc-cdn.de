function getCookieValue(a) { const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)'); return b ? b.pop() : ''; } console.log ("getCookieValue " + getCookieValue("favorite-dark-mode "));

 

