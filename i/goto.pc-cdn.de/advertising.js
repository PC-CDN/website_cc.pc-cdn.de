/*
0 = Platzhalter
1 = amzn Riesen Auswahl 
2 = amzn Prime Vifeo
3 = amzn generic
4 = amzn Audible
*/


text0m = '<img src="https://template.pc-cdn.de/assets/bg-images/onepixel-transparent.png" width="320" height="50" border="0">';
text1m = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=42&l=ez&f=ifr&linkID=4bea22640fcbe2f017b7864de3f91b12&t=nippes-21&tracking_id=nippes-21" width="234" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>';
text2m = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=42&l=ur1&category=de_piv&banner=10QJEG92VW3S57RE9AG2&f=ifr&linkID=e814b58a4505800f285f658dc6905bdd&t=nippes-21&tracking_id=nippes-21" width="234" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe></iframe>';
text3m = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=42&l=ur1&category=amazongeneric&banner=1KQQZNJRVEBT2N0SAP82&f=ifr&linkID=fa8d5000e6d18da70152a3d7df6be2f2&t=nippes-21&tracking_id=nipped-21" width="234" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>';
text4m = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=42&l=ur1&category=audible&banner=1400ZA2TDZEWV86FV202&f=ifr&linkID=25053bf9cb069e589cf6eb2ae4e25547&t=nippes-21&tracking_id=nippes-21" width="234" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>';

text0d = '<img src="https://template.pc-cdn.de/assets/bg-images/onepixel-transparent.png" width="468" height="50" border="0">';
text1d = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=26&l=ez&f=ifr&linkID=640954d4ec4bdf23812ba59241f92c6e&t=nippes-21&tracking_id=nippes-21" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>';
text2d = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=26&l=ur1&category=de_piv&banner=1031ZXV21Q2E6TDPEZ02&f=ifr&linkID=3d7916d20f44975db97241323ec8ace9&t=nippes-21&tracking_id=nippes-21" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe></iframe>';
text3d = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=13&l=ur1&category=amazongeneric&banner=0HKWS4G1V016X4K0S2R2&f=ifr&linkID=4c46c0d6931705c68ffaf621003da67c&t=nippes-21&tracking_id=nippes-21" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>';
text4d = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=13&l=ur1&category=audible&banner=0Y6RHT2ZHBXVVVNG4KR2&f=ifr&linkID=d0642ffb6aefcfb73564816f361e2499&t=nippes-21&tracking_id=nippes-21" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>';

if (document.getElementById('adsContent.0.mobile')) {
document.getElementById("adsContent.0.mobile").innerHTML = text0m;
} 
if (document.getElementById('adsContent.0.desktop')) {
document.getElementById("adsContent.0.desktop").innerHTML = text0d;
} 


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

if (document.getElementById('adsContent.3.mobile')) {
document.getElementById("adsContent.3.mobile").innerHTML = text3m;
} 
if (document.getElementById('adsContent.3.desktop')) {
document.getElementById("adsContent.3.desktop").innerHTML = text3d;
} 

if (document.getElementById('adsContent.4.mobile')) {
document.getElementById("adsContent.4.mobile").innerHTML = text4m;
} 
if (document.getElementById('adsContent.4.desktop')) {
document.getElementById("adsContent.4.desktop").innerHTML = text4d;
} 
