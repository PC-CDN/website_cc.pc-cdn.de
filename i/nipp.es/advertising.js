text1m = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=288&l=ez&f=ifr&linkID=4bea22640fcbe2f017b7864de3f91b12&t=nippes-21&tracking_id=nippes-21" width="320" height="50" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>';
text2m = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=42&l=ur1&category=de_piv&banner=10QJEG92VW3S57RE9AG2&f=ifr&linkID=e814b58a4505800f285f658dc6905bdd&t=nippes-21&tracking_id=nippes-21" width="234" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe></iframe>';
text1d = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=26&l=ez&f=ifr&linkID=640954d4ec4bdf23812ba59241f92c6e&t=nippes-21&tracking_id=nippes-21" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>';
text2d = 'ACE.2D';

if (document.getElementById('adsContent.1.mobile')) {
document.getElementById("adsContent.1.mobile").innerHTML = text1m;
} 
if (document.getElementById('adsContent.1.desktop')) {
document.getElementById("adsContent.1.desktop").innerHTML = text1d;
} 
if (document.getElementById('adsContent.2.mobile')) {
document.getElementById("adsContent.2.mobile").innerHTML = text2m;
} 
if (document.getElementById('adsContent.2.desktop')) {
document.getElementById("adsContent.2.desktop").innerHTML = text2d;
} 
