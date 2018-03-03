var language=getcookie('language');
if (language=='')
	language='english';
	
if (language=='simple_chinese')
	document.write('<script src="simple_chinese/string.js"><\/script>');
else if (language=='english')
	document.write('<script src="english/string.js"><\/script>');
else if (language=='spain')
    document.write('<script src="spain/string.js"><\/script>');
else if (language=='korean')
    document.write('<script src="korean/string.js"><\/script>');
else if (language=='tc_chinese')
    document.write('<script src="tc_chinese/string.js"><\/script>');
else if (language=='german')
    document.write('<script src="german/string.js"><\/script>');
else if (language=='french')
    document.write('<script src="french/string.js"><\/script>');
else if (language=='italy')
    document.write('<script src="italy/string.js"><\/script>');
else if (language=='portuguese')
    document.write('<script src="portuguese/string.js"><\/script>');
else if (language=='hungarian')
    document.write('<script src="hungarian/string.js"><\/script>');
else if (language=='arabia')
    document.write('<script src="arabia/string.js"><\/script>');
else if (language=='poland')
    document.write('<script src="poland/string.js"><\/script>');
else if (language=='russisch')
    document.write('<script src="russisch/string.js"><\/script>');
else if (language=='thai')
    document.write('<script src="thai/string.js"><\/script>');
else if (language=='nederland')
    document.write('<script src="nederland/string.js"><\/script>');
       
function getcookie(name)  //get()取值(把值传出来)
{
	var strCookie=document.cookie;
    var arrCookie=strCookie.split('; ');
    for (var i=0;i<arrCookie.length;i++)
    {
		var arr=arrCookie[i].split('=');
        if (arr[0]==name)
			return unescape(arr[1]);
    }
    return '';
}
function setcookie(name,value,expirehours)  //set（）赋值(接收别人的赋值)
{
	var cookieString=name+'='+escape(value);
    if (expirehours>0)
    {
		var date=new Date();
        date.setTime(date.getTime()+expirehours*3600*1000);
        cookieString=cookieString+'; expires='+date.toGMTString();
	}
    document.cookie=cookieString;
}
function showerror(camera,msg,err)
{
	var err_info;
	switch(err)
	{
	case 0:
		err_info='';
		break;
	case -1:
		err_info=str_err_connect;
		break;
	case -2:
		err_info=str_err_socket;
		break;
	case -3:
		err_info=str_err_timeout;
		break;
	case -4:
		err_info=str_err_version;
		break;
	case -5:
		err_info=str_err_cancel;
		break;
	case -6:
		err_info=str_err_closed;
		break;
	case -8:
		err_info=str_err_file;
		break;
	case -9:
		err_info=str_err_param;
		break;
	case -10:
		err_info=str_err_thread;
		break;
	case -11:
		err_info=str_err_status;
		break;
	case -12:
		err_info=str_err_id;
		break;
	case 1:
		err_info=str_fail_user;
		break;
	case 2:
		err_info=str_fail_maxconns;
		break;
	case 3:
		err_info=str_fail_version;
		break;
	case 4:
		err_info=str_fail_id;
		break;
	case 5:
		err_info=str_fail_pwd;
		break;
	case 6:
		err_info=str_fail_pri;
		break;
	case 7:
		err_info=str_fail_unsupport;
		break;	
	default:
		err_info=str_err_unknown;
		break;
	}
	if (camera=='')
		alert(msg+' : '+err_info);
	else
		alert(camera+' : '+msg+' : '+err_info);
}




