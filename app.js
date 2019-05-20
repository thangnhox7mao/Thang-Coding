function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+ d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

 setCookie('username','user',1);

 var delete_cookie = function(name) {
   document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};