//if (navigator.appName.indexOf("Microsoft Internet Explorer") != -1)
//{
    document.open();
    document.write('<div>');
    document.write('<span><object id="ipcam" name="0" style="left: 0px; top:0px; width: 320px; height: 240px;" classid="clsid:8b254f59-e661-41af-a1a4-43e91436778e" codebase="DvmMJCam.ocx#version=1,0,0,18" align="absbottom" viewastext></object></span>');
    document.write('<span><object id="ipcam" name="1" style="left: 0px; top:0px; width: 0px; height: 0px;" classid="clsid:8b254f59-e661-41af-a1a4-43e91436778e" codebase="DvmMJCam.ocx#version=1,0,0,18" align="absbottom" viewastext></object></span>');
    document.write('<span><object id="ipcam" name="2" style="left: 0px; top:0px; width: 0px; height: 0px;" classid="clsid:8b254f59-e661-41af-a1a4-43e91436778e" codebase="DvmMJCam.ocx#version=1,0,0,18" align="absbottom" viewastext></object></span>');
    document.write('<span><object id="ipcam" name="3" style="left: 0px; top:0px; width: 0px; height: 0px;" classid="clsid:8b254f59-e661-41af-a1a4-43e91436778e" codebase="DvmMJCam.ocx#version=1,0,0,18" align="absbottom" viewastext></object></span>');
    document.write('<span><object id="ipcam" name="4" style="left: 0px; top:0px; width: 0px; height: 0px;" classid="clsid:8b254f59-e661-41af-a1a4-43e91436778e" codebase="DvmMJCam.ocx#version=1,0,0,18" align="absbottom" viewastext></object></span>');
    document.write('<span><object id="ipcam" name="5" style="left: 0px; top:0px; width: 0px; height: 0px;" classid="clsid:8b254f59-e661-41af-a1a4-43e91436778e" codebase="DvmMJCam.ocx#version=1,0,0,18" align="absbottom" viewastext></object></span>');
    document.write('<span><object id="ipcam" name="6" style="left: 0px; top:0px; width: 0px; height: 0px;" classid="clsid:8b254f59-e661-41af-a1a4-43e91436778e" codebase="DvmMJCam.ocx#version=1,0,0,18" align="absbottom" viewastext></object></span>');
    document.write('<span><object id="ipcam" name="7" style="left: 0px; top:0px; width: 0px; height: 0px;" classid="clsid:8b254f59-e661-41af-a1a4-43e91436778e" codebase="DvmMJCam.ocx#version=1,0,0,18" align="absbottom" viewastext></object></span>');
    document.write('<span><object id="ipcam" name="8" style="left: 0px; top:0px; width: 0px; height: 0px;" classid="clsid:8b254f59-e661-41af-a1a4-43e91436778e" codebase="DvmMJCam.ocx#version=1,0,0,18" align="absbottom" viewastext></span>');
    document.write('</div>');
    
    document.write('<p align="left" style="font-size:12px;color:white;">');
    
    document.write('&nbsp;&nbsp;&nbsp;&nbsp;<span id="t5">');
    document.write(top.str_ocx_notify);
    document.write('</span><br>');
    
    document.write(' <span id="t6">');
    document.write(top.str_ocx_notify_1);
    document.write('<br>');
    document.write(top.str_ocx_notify_2);
    document.write('<br><br>');

    document.write(top.str_ocx_please_onclick);
    document.write('</span><a href="#" onclick="javascript:download_activex()" id="t7">');
    document.write(top.str_ocx_download);
    document.write('</a>');

    document.write(' <span id="t8">');
    document.write(top.str_ocx_then_install);
    document.write('</span><span id="t10">');
    document.write(top.str_ocx_refresh_page);
    document.write('</span></p>');
    document.close();
//}