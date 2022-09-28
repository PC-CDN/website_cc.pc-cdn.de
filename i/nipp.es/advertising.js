text2d = '<iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=3&p=288&l=ez&f=ifr&linkID=4bea22640fcbe2f017b7864de3f91b12&t=tipwwwtippsco-21&tracking_id=tipwwwtippsco-21" width="320" height="50" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>';
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
