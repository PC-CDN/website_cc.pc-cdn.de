text2d = 'ACE.2D';
text2m = 'ACE.2M';
text1d = 'ACE.1D';
text1m = 'ACE.1M';

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
