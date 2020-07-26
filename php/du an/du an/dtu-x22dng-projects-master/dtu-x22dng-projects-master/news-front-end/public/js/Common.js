// JScript File Common used methods
/*
    Coded by Chi PV 04/04/2006
    
    This JS file contains all common use function for all AI web applications
*/

// declare all common global vars
//var _relativePath = "a/" //the relative path for xmlhttp request or redirect on the client, as on www.crashzone.com.au, the CZ program is located at www.crashzone.com.au/a, while user login at www.crashzone.com.au
var url;                //url on the server
var method;             //xmlhttp request send method

//create a request DOM that will be sent to the server
function initRequestDOM(strAction,clientData)
{
    if (!clientData)
        clientData = "";
    
    //build the request DOM structure
    var domain = "http://" + window.location.toString().split("//")[1].split("/")[0] + "/czWWW/";
    url = "server.aspx?time=" + new Date().getTime();

    if (domain != "http://localhost/" && domain != "http://TrungPC/")
        //url = domain + "/czDev/server.aspx?time=" + new Date().getTime();
        url = domain + "server.aspx?time=" + new Date().getTime();    

    
    method = "POST";
    var params = "<clientRequest>"
            + "<action>" + strAction + "</action>"   
            + "<clientData>" + clientData + "</clientData>"
            + "</clientRequest>";


    return loadXMLFromString(params);
}


//the xmlhttprequest object class
var net = new Object();
net.READY_STATE_UNINITAALIZED = 0;
net.READY_STATE_LOADING = 1;
net.READY_STATE_LOADED = 2;
net.READY_STATE_INTERACTIVE = 3;
net.READY_STATE_COMPLETE = 4;
net.ContentLoader = function(url,params,method,onload,onerror,isNotSend)
{
    this.url = url;
    this.method = method;
    this.req = null;
    this.onload = onload;
    this.onerror = (onerror) ? onerror : this.defaultError;
    this.params = params;
    (isNotSend == undefined)?this.loadXMLDoc():null;
}

net.ContentLoader.prototype =
{
    loadXMLDoc: function() {

        if (window.ActiveXObject) {
            this.req = new ActiveXObject("Microsoft.XMLHTTP");
           
        }
        else {
            this.req = new XMLHttpRequest();
           
        }
        if (this.req) {

            var loader = this;
            this.req.onreadystatechange = function() {
                loader.onReadyState.call(loader);
            }
            this.req.open(this.method, this.url, true);
            this.req.send(this.params);
        }

    },

    onReadyState: function() {
        var loader = this;
        var req = this.req;
        var ready = req.readyState;
        if (ready == net.READY_STATE_COMPLETE) {
            var httpStatus = req.status;
            if (httpStatus == 200 || httpStatus == 0) {
                loader.serverRedirect.call(loader);
                this.onload.call(this);
            }
            else {
                this.onerror.call(this);
            }
        }
    },

    serverRedirect: function() {
        try {
            var tmpRedirectTo = getXMLText(this.req.responseXML.documentElement, "RedirectTo", true);
            if (tmpRedirectTo != "") {
                top.location.href = tmpRedirectTo;
            }
        }
        catch (ex) { }
    },

    defaultError: function() {
        //Error handler for request , can be some exception on the server , currently we use this for Internet Connection dropped 
        try {
            handleConnectionLost(true);
        }
        catch (ex) { }
    }
}

function handleConnectionLost(isLostConnection)
{
    //hide all status msg for user
    try
    {
        if (isLostConnection)
        {
            showConnectionLostMaskDiv(true,true);
            var tmpScrollPos = getScrollBarPos();
            var tmpClientDimension = getClientDimension();
            var tmpLeft, tmpTop;
            var ConnectionDiv = document.getElementById("ConnectionDiv");
            var ConnectionTextDiv = document.getElementById("ConnectionTextDiv");
            ConnectionTextDiv.innerHTML = "";
            ConnectionDiv.style.display = "";
            tmpTop = tmpScrollPos.y + parseInt(tmpClientDimension.y / 2)
            tmpLeft = parseInt((tmpClientDimension.x - ConnectionDiv.offsetWidth) / 2);
            ConnectionDiv.style.display = "none";
            ConnectionTextDiv.innerHTML = "Unable to reach Crashzone It's Free.<br/> Please check your internet connection. Press OK to login again";
            ConnectionDiv.style.top = tmpTop;
            ConnectionDiv.style.left = tmpLeft;
            ConnectionDiv.style.display = "";
            showMessage(false);
        }
        else
        {
            var ConnectionDiv = document.getElementById("ConnectionDiv");
            var ConnectionTextDiv = document.getElementById("ConnectionTextDiv");
            ConnectionTextDiv.innerHTML = "";
            ConnectionDiv.style.display = "none";
            showConnectionLostMaskDiv(false);
        }
    }
    catch(ex){}
    
}

String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");

} 

//get the query string value from the browser's address
function getQueryString(variable) 
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var pair;
    for (var i=0;i<vars.length;i++) 
    {
        pair = vars[i].split("=");
        if (pair[0] == variable) 
        {
            while(pair[1].indexOf("%20") > 0)
                pair[1] = pair[1].replace("%20"," ");   

            return pair[1];
        }

    } 
    return "QueryStringNotExsit";
}

//return the css file path depend on client
function detectCSS()
{
        
    var screenWidth=  screen.width//document.body.clientWidth;
   
    
    if (screenWidth == 240 || screenWidth == 320) //for Pocket PC QVGA resolution
    {
        
        imageDir = "Images/QVGA/";
        setCSS("CSS/QVGA/");
        setCSSImage();
        return;
    }
    else    //(screenWidth == 480) //for Pocket PC VGA resolution and desktop version
    {
        imageDir = "Images/VGA/";
        setCSS("CSS/VGA/");
        setCSSImage();
        return;
    }
}

//set the CSS image based on the client resolution
function setCSSImage()
{
    
    //set some image's src property for main page
    document.getElementById("imgWorkingStatus").src = imageDir + "offline.gif";
    document.getElementById("imgNewJob").src = imageDir + "newJob.png";
    document.getElementById("imgLoadJobData").src = imageDir + "LoadJobData.jpg";
    document.getElementById("mainPage_SyncImg").src = imageDir + "sync.gif";
    
    document.getElementById("mainDiv_SearchImg").src = imageDir + "search.jpg";
    document.getElementById("quoteEditIcon").src = imageDir + "details.jpg";
    
    document.getElementById("mainDiv_prevPage").src = imageDir + "prev.jpg";
    document.getElementById("mainDiv_nextPage").src = imageDir + "next.jpg";
}

//set CSS based on client resolution
function setCSS(strCSSPath)
{
    var CSSFile = new Array(strCSSPath + "Menu.css",
                            strCSSPath + "summary.css",
                            strCSSPath + "quoteMenu.css",
                            strCSSPath + "quoteAdj.css",
                            strCSSPath + "autoText.css"                            
                            );
    
    var oHead = document.getElementsByTagName("head")[0];
    for(var i=0; i<CSSFile.length; i++ )
        createCSSElem(CSSFile[i],oHead);
}

//dynamically create a CSS element in the head of an HTML document
function createCSSElem(CSSFileName,oHead)
{
    var oCSS = document.createElement("link");
    oCSS.rel = "Stylesheet";
    oCSS.type = "text/css";
    
    oCSS.href = CSSFileName;//strCSSPath + "Menu.css";
    oHead.appendChild(oCSS);  
}

//clone a JS object 
function cloneObject(srcObj,isDeep)
{
    var objectClone = new srcObj.constructor();
    for (var property in srcObj)
    if (!isDeep)
      objectClone[property] = srcObj[property];
    else if (typeof srcObj[property] == 'object')
      objectClone[property] = cloneObject(srcObj[property],isDeep);
    else
      objectClone[property] = srcObj[property];
    return objectClone;
}

//detect user browser
function getBrowser()
{
    var tmpUserAgent = navigator.userAgent.toLowerCase();
    //alert(tmpUserAgent);    
    if (tmpUserAgent.indexOf("msie") > -1)
        return "IE";
    else if (tmpUserAgent.indexOf("firefox") > -1)
        return "FIREFOX";
    else if (tmpUserAgent.indexOf("chrome") > -1)
        return "CHROME";
    else if (tmpUserAgent.indexOf("safari") > -1)
        return "SAFARI"
    else
        return "OPERA";
    
}

//get the scroll position
function getScrollBarPos()
{
    var scrollPos = new Object()

    scrollPos.x = 0;
    scrollPos.y = 0;
    
	
    if (self.pageYOffset) // all except Explorer
    {
	    scrollPos.x = self.pageXOffset;
	    scrollPos.y = self.pageYOffset;	    
    }
    else if (document.documentElement && document.documentElement.scrollTop)
	    // Explorer 6 Strict
    {
	    scrollPos.x = document.documentElement.scrollLeft;
	    scrollPos.y = document.documentElement.scrollTop;
	 
    }
    else if (document.body) // all other Explorers
    {    
        scrollPos.x = document.body.scrollLeft;
	    scrollPos.y = document.body.scrollTop;
	  
    }
    
    return scrollPos;
}

//get the mouse cursor position
function getMousePos(ev) 
{
    ev = (window.event) ? window.event : ev;
    
    if(ev.pageX || ev.pageY) {

        
        return { x: ev.pageX, y: ev.pageY };
        
	}
	else
	{
	    //may be there is a different between IE 6 strict mode and normal mode
	    var scrollPos = getScrollBarPos();
	    
	    return {    x:ev.clientX + scrollPos.x - document.body.clientLeft,
		            y:ev.clientY + scrollPos.y  - document.body.clientTop 	};
	}
	
}


//get the page height
function getPageDimension()
{
    var x,y;
    var test1 = document.body.scrollHeight;
    var test2 = document.body.offsetHeight;
    if (test1 > test2) // all but Explorer Mac
    {
	    x = document.body.scrollWidth;
	    y = document.body.scrollHeight;
    }
    else // Explorer Mac;
         //would also work in Explorer 6 Strict, Mozilla and Safari
    {
	    x = document.body.offsetWidth;
	    y = document.body.offsetHeight;
    }
        
    var pageDimension = new Object();
    pageDimension.x = x;
    pageDimension.y = y;
    
    return pageDimension;
  
}

//get the client screen dimension
function getClientDimension()
{
    var clientDimension = new Object();
    if (self.innerHeight) // all except Explorer
    {
	    clientDimension.x = self.innerWidth;
	    clientDimension.y = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight)
	    // Explorer 6 Strict Mode
    {
	    clientDimension.x = document.documentElement.clientWidth;
	    clientDimension.y = document.documentElement.clientHeight;
    }
    else if (document.body) // other Explorers
    {
	    clientDimension.x = document.body.clientWidth;
	    clientDimension.y = document.body.clientHeight;
    }
    
    return clientDimension;
}

//get the cursor's pos in input text
function getCaretPosition (ctrl) {

	var CaretPos = 0;
	// IE Support
	if (document.selection) {

		ctrl.focus();
		var Sel = document.selection.createRange ();

		Sel.moveStart ('character', -ctrl.value.length);

		CaretPos = Sel.text.length;
	}
	// Firefox support
	else if (ctrl.selectionStart || ctrl.selectionStart == '0')
		CaretPos = ctrl.selectionStart;

	return (CaretPos);

}

//Set the cursor's pos in input text
function setCaretPosition(ctrl, pos)
{

	if(ctrl.setSelectionRange)
	{
		ctrl.focus();
		ctrl.setSelectionRange(pos,pos);
		
	}
	else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}

function enableSelection(target,isEnable)
{
    if (typeof target.onselectstart!="undefined") //IE route
	    target.onselectstart=function(){return isEnable}
    else if (typeof target.style.MozUserSelect!="undefined") //Firefox route
    {
        if (!isEnable)
	        target.style.MozUserSelect="none";
	    else
	        target.style.MozUserSelect="";
	        
	}
    else //All other route (ie: Opera)
	    target.onmousedown=function(){return isEnable}
    
    target.style.cursor = "default"
}

function openPopup(aURL,aTitle,width,height)
{
    var tmpOpt = "status=1,resizable=no,scrollbars=no,toolbar=no,menubar=no";
    if (width != undefined)
        tmpOpt += ",width=" + width;
    if (height != undefined)
        tmpOpt += ",height=" + height;
    
    window.open(aURL,aTitle,tmpOpt);
}

//add an event to the control
function addEvent(pElem,pEvent,pFunction)
{
    if (pElem.addEventListener) 
    {
        pElem.addEventListener (pEvent,pFunction,false);
    } 
    else if (pElem.attachEvent) 
    {
        pElem.attachEvent ("on" + pEvent,pFunction);
    } 
}

//remove all child element in a given element
function removeAllChild(elemID)
{
    if (elemID == null)
        return;
    var tmpElem;
    if (typeof elemID == "string")
        tmpElem = document.getElementById(elemID);
    else
        tmpElem = elemID;
    while(tmpElem.hasChildNodes())
    {
        tmpElem.onclick = null;
        tmpElem.onfocus = null;
        tmpElem.removeChild(tmpElem.childNodes[0]);
    }
        
    return tmpElem;
}

//remove all child element in a given element from a specific position
function removeAllChildAfter(elemID,index)
{
    var tmpElem = document.getElementById(elemID);
    tmpElem = cleanDOM(tmpElem);
    while(tmpElem.childNodes.length > index)
    {
        tmpElem.onclick = null;
        tmpElem.onfocus = null;
        tmpElem.removeChild(tmpElem.childNodes[index]);
    }

    return tmpElem;
}

function createDivWithContent(pHTMLText)
{
    /*
        create a new div wich innerHTML is set to pHTMLText
        params:
            pHTMLText   :   all html markup that will set to the new div
    */
    var tmpDiv = document.createElement("div");
    tmpDiv.innerHTML = pHTMLText;
    
    return tmpDiv;
}

function getFirstHTMLChild(htmlElem)
{
    if (htmlElem == undefined || htmlElem == null)
    {
        alert("input element is null or undefined");
        return;
    }
    
    var returnElem = htmlElem.firstChild;
    //if (returnElem.nodeName == "#text")
    if (returnElem != undefined && returnElem != null && returnElem.nodeName == "#text")
        returnElem = returnElem.nextSibling;
    
    return returnElem;
}

function getHTMLChild(htmlElem,childNumber)
{
    /*
        return the html child at childNumber position
        params :
            - htmlElem      :   the parent html element which we want to get it's child
            - childNumber   :   the child pos
    */
    if (htmlElem == undefined || htmlElem == null)
    {
        alert("input element is null or undefined");
        return;
    }
    
    //var returnElem = htmlElem.firstChild;
    var returnElem;
    returnElem = htmlElem.firstChild;
    if (returnElem.nodeName == "#text")
        returnElem = returnElem.nextSibling;
    
    for (var i=1; i <= childNumber; i++)
    {
        returnElem = returnElem.nextSibling;
        if (returnElem.nodeName == "#text")
            returnElem = returnElem.nextSibling;
    }
 
    return returnElem;
}

function getNextHTMLSibling(htmlElem)
{
    if (htmlElem == undefined || htmlElem == null)
    {
        alert("input element is null or undefined");
        return;
    }
    
    var returnElem = htmlElem.nextSibling;
    if (returnElem != undefined && returnElem != null && returnElem.nodeName == "#text")
        returnElem = returnElem.nextSibling;
    
    return returnElem;
}

function getPrevHTMLSibling(htmlElem)
{
    if (htmlElem == undefined || htmlElem == null)
    {
        alert("input element is null or undefined");
        return;
    }
    
    var returnElem = htmlElem.previousSibling;
    if (returnElem != undefined && returnElem != null && returnElem.nodeName == "#text")
        returnElem = returnElem.previousSibling;
    
    return returnElem;
}

function setHTMLClassName(htmlElem,oldClassName,newClassName)
{
    /*
        Set the html class name of an html element 
        params:     - htmlElem      : the HTML element that has to set className
                    - newClassName  : the new class name to set 
                    - oldClassName  : the class name will be replace , if the old class name does not exist the new class name will be appended
    */
    if (typeof htmlElem == "string")
        htmlElem = document.getElementById(htmlElem);
        
    if (htmlElem == undefined || htmlElem == null)
    {
        alert("HTML element to set class name does not exists");
        return;
    }
    
    var strClassName = htmlElem.className;
    
    //remove all newClassName if they've already existed in the htmlElement
    var regNewClassName = new RegExp(newClassName , "gi");
    strClassName = strClassName.replace(regNewClassName,"");
    
    if (oldClassName != "" && oldClassName != null && strClassName.indexOf(oldClassName) > -1)
        strClassName = strClassName.replace(oldClassName,newClassName);
    else 
        strClassName = strClassName.trim() + " " + newClassName;
    
    htmlElem.className = strClassName;
}

//cross browser create XML DOM 
function createXMLDOM()
{
    var xmlDoc;
    // code for IE
    if (window.ActiveXObject)
    {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    }
    // code for Mozilla, etc.
    else if (document.implementation && document.implementation.createDocument)
    {
      xmlDoc= document.implementation.createDocument("","",null);
    }
    else
    {
      alert('Your browser cannot handle this script');
    }
    return xmlDoc;
}

//cross browser load xml string to xml document
function loadXMLFromString(xmlString,xmlDoc)
{
    //xmlString = xmlString.replace(/&/g,"&amp;");
    if(!xmlDoc)
        xmlDoc = createXMLDOM();

    if (window.ActiveXObject)
    {
      // IE, create a new XML document using ActiveX
      // and use loadXML as a DOM parser.
      xmlDoc.loadXML(xmlString);
    }

    else if (document.implementation.createDocument) {
          // Mozilla, create a new DOMParser
          var parser = new DOMParser();
          xmlDoc = parser.parseFromString(xmlString, "text/xml");
    } 
    
    return xmlDoc;
}

//clear an xml object to empty string
function resetXMLDoc(xmlDoc)
{
    if (document.implementation.createDocument)
    {
      // Mozilla, create a new DOMParser
      var parser = new DOMParser();
      xmlDoc = parser.parseFromString("", "text/xml");
    } else if (window.ActiveXObject){
      // IE, create a new XML document using ActiveX
      // and use loadXML as a DOM parser.
      xmlDoc.loadXML("");
    }
    return xmlDoc;
}

//get the text contained in the xml node 
function getXMLText(aRecord,aTagName,returnBlank,isUpperCase)
{
    /*
        aRecord     : a JS Object (xml node)represent a record in database
        aTagName    : node name to retrieve value
        returnBlank : if value == null , return blank
        isUpperCase : return value in uppercase
    */
    try
    {
        /*
        var tmpText;
        //FF limit node size to 4k, use textContent to over come this
        if (aRecord.getElementsByTagName(aTagName)[0].textContent != undefined)
            tmpText = aRecord.getElementsByTagName(aTagName)[0].textContent;
        else
            tmpText = aRecord.getElementsByTagName(aTagName)[0].firstChild.nodeValue;
        */
            
        if (!isUpperCase)
            return aRecord.getElementsByTagName(aTagName)[0].firstChild.nodeValue
        else
            return aRecord.getElementsByTagName(aTagName)[0].firstChild.nodeValue.toUpperCase();
        
    }
    catch(err)
    {
        if (returnBlank)
            return "";
        else
            return null;
    }
}

//set the XML node value with new value
function setXMLText(aRecord,aTagName,aValue,aXMLDoc)
{
  try
    {
        var tmpNode;
        tmpNode = aRecord.getElementsByTagName(aTagName);
        
        
        //replace all special character in the value with xml markup
        /*
        var str = new String(aValue);
        str = str.replace(/&/g, "&amp;");
        str = str.replace(/</g, "&lt;");
        str = str.replace(/>/g, "&gt;");
        str = str.replace(/"/g, "&quot;");
        */
        
        if (tmpNode.length > 0)
        {
            if (aRecord.getElementsByTagName(aTagName)[0].hasChildNodes())
                aRecord.getElementsByTagName(aTagName)[0].firstChild.nodeValue = aValue;
            else
                aRecord.getElementsByTagName(aTagName)[0].appendChild(aXMLDoc.createTextNode(aValue));
            return true;
        }
        else
        {
            var newNode = aXMLDoc.createElement(aTagName);
            newNode.appendChild(aXMLDoc.createTextNode(aValue));
            aRecord.appendChild(newNode);
        }
    }
    catch(err)
    {
        return false;
    }  
    
}

//remove the xml node from the xml document
function removeXMLNode(aRecord,aTagName)
{
    try
    {
        var tmpNode;
        tmpNode = aRecord.getElementsByTagName(aTagName);
        if (tmpNode.length > 0)
        {
            if (tmpNode[0].hasChildNodes())
                tmpNode[0].removeChild(tmpNode[0].childNodes.item(0));
            return true;
        }        
    }
    catch(err)
    {
        return false;
    }
}

//create an xml node based on an input array
function createXMLNode(parentNodeName,childNodeName,childNodeValue,requestDOM)
{
    if (requestDOM == undefined)
    {
        alert("Can not create xml node, requestDOM = undefined");
        return;
    }
    var tmpNewCNode,tmpNewPNode;
    tmpNewPNode = requestDOM.createElement(parentNodeName);
    
    if (typeof childNodeName == "string")
    {
        tmpNewCNode = requestDOM.createElement(childNodeName);
        tmpNewCNode.appendChild(requestDOM.createTextNode(childNodeValue));
        tmpNewPNode.appendChild(tmpNewCNode);
    }
    else
        for(var i=0; i< childNodeName.length; i++)
        {
            tmpNewCNode = requestDOM.createElement(childNodeName[i]);
            tmpNewCNode.appendChild(requestDOM.createTextNode(childNodeValue[i]));
            tmpNewPNode.appendChild(tmpNewCNode);
        }
    
    return tmpNewPNode;
}

function createXMLNodeWithText(childNodeName,childNodeValue,requestDOM)
{
    if (requestDOM == undefined)
    {
        alert("Can not create xml node, requestDOM = undefined");
        return;
    }
    
    var tmpNewCNode;    
    tmpNewCNode = requestDOM.createElement(childNodeName);
    tmpNewCNode.appendChild(requestDOM.createTextNode(childNodeValue));
    
    return tmpNewCNode;
}



//get the text contained in the XML node and return as number
function getXMLNumber(aRecord,aTagName,returnZero)
{
    try
    {
        var value = parseFloat(aRecord.getElementsByTagName(aTagName)[0].firstChild.nodeValue);
        if (isNaN(value))
        {
            if(returnZero)
                return 0;
            return null;
        }
        else
            return value;
    }
    catch(err)
    {
        if(returnZero)
            return 0;
        return null;
    }
}

function replaceTemplateValue(strTemplate,pData,isReplaceBlank)
{
    /*
        try to parse all data to the template with the specify keyName
        params :
            - strTemplate       : the template string to replace value
            - pData             : an xml node that contains all necessary data
            - isReplaceBlank    : set to true wil replace the template value with blank value if xml data is not found
    */
    var reKeyMarker = new RegExp("(\\(\\[){1}(\\s*)(\\w)+(\\]\\)){1}","gi");
    var reCustomFieldPrefix = new RegExp("(^C_)");
    var arrMatchField = new Array();
            
    var match = reKeyMarker.exec(strTemplate);
    while (match != null)
    {
        var strFieldName = match[0].substr(2,match[0].length - 4);
        
        if (!reCustomFieldPrefix.test(strFieldName))
        {
            //put the text that will be replace in the template in an array
            arrMatchField.push(strFieldName);
        }

        match = reKeyMarker.exec(strTemplate);
    }
    
    //replace all the marker with the real value
    for(var i=0; i< arrMatchField.length; i++)
    {
        var tmpReplaceText = "([" + arrMatchField[i] + "])";
        var tmpValue = getXMLText(pData,arrMatchField[i],true);
        
        if (tmpValue != "")
            strTemplate = strTemplate.replace(tmpReplaceText,tmpValue);
        else
            if (isReplaceBlank)
                strTemplate = strTemplate.replace(tmpReplaceText,tmpValue);
    }
            
    return strTemplate; 
}

//build an xml string base on the input node name and value array
function buildXMLFromArray(arrNodeName,arrNodeValue)
{
    var result="";
    for(var i=0;i<arrNodeName.length;i++)
    {
        result += "<" + arrNodeName[i] + ">" 
                + arrNodeValue[i] 
                + "</" + arrNodeName[i] + ">";
    }
    
    return result;
}

//build an xml string base on the input node name and value
function buildXMLString(nodeName,nodeValue)
{
    var result="";
    
    result += "<" + nodeName + ">" 
            + nodeValue 
            + "</" + nodeName + ">";
    
    return result;
}

//transform an xml node in to string
//this function can be used to transform an xml node on the client to string and sent it to the server or save to local dojo storage
function getXMLStringFromXMLNode(xmlNode)
{
    var oSerializer;
        
    try
    {
        oSerializer = new XMLSerializer();
    }
    catch(ex)
    {
        oSerializer = null;
    }
    //phung code fix serialize not working on IE 20130611
    if (getBrowser() == "IE")
        return xmlNode.xml;
    return oSerializer.serializeToString(xmlNode);

    //return (oSerializer) ? oSerializer.serializeToString(xmlNode) : xmlNode.xml;
}

function sortNumber(a,b)
{
    return a-b;
}

//sort an xml node list in order
function sortNodeList(nodeList,sortField,sortFieldType,isDesc)
{
    /*
        sort the node list base on field criteria
            - nodeList : the input nodelist
            - sortField : field to sort
            - sortFieldType : "number" : number , "date" : date
            - isDesc    : descending order 
        
    */
    //var resultNodeList = new Array();
    var tmpValue1, tmpValue2;
    
    switch (sortFieldType)
    {
        case "number":
            if (isDesc)
            {
                for(var i=0; i< nodeList.length; i++)
                {
                    for (var j=i +1; j<nodeList.length - 1; j++)
                    {
                        tmpValue1 = getXMLNumber(nodeList[i],sortField,true);
                        tmpValue2 = getXMLNumber(nodeList[j],sortField,true);
                        if (tmpValue1 < tmpValue2)
                        {
                            var tmpNode = nodeList[i];
                            nodeList[i] = nodeList[j];
                            nodeList[j] = tmpNode;
                        }
                    }
                }
            }
            break;
        case "date":
            if (isDesc)
            {
                for(var i=0; i< nodeList.length; i++)
                {
                    for (var j=i +1; j<nodeList.length - 1; j++)
                    {
                        tmpValue1 = getXMLNumber(nodeList[i],sortField,true);
                        tmpValue2 = getXMLNumber(nodeList[j],sortField,true);
                        if (compareDates(tmpValue1,"dd/MM/yyyy",tmpValue2,"dd/MM/yyyy") == 0 )       //tmpValue1 < tmpValue2
                        {
                            var tmpNode = nodeList[i];
                            nodeList[i] = nodeList[j];
                            nodeList[j] = tmpNode;
                        }
                    }
                }
            }
            break;
    }
    return nodeList;
}

//perform a binary search on a node list (DES order list)
function binarySearchDesc(nodeList,searchField,searchNumber)
{
    var mid, lower=0, upper=nodeList.length;
    while (lower<=upper) 
    {
        mid=Math.floor((lower+upper)/2);
        var curValue = getXMLNumber(nodeList[mid],searchField,true);
        if (searchNumber==curValue) 
            return mid;
        if (searchNumber>curValue) 
            upper=mid-1;
        else lower=mid+1
    }
    
    return -1;
}

//perform a binary search on a node list (ASC order list)
function binarySearchAsc(nodeList,searchField,searchNumber)
{
    var mid, lower=0, upper=nodeList.length;
    while (lower<=upper) 
    {
        mid=Math.floor((lower+upper)/2);
        var curValue = getXMLNumber(nodeList[mid],searchField,true);
        if (searchNumber==curValue) 
            return mid;
        if (searchNumber<curValue) 
            upper=mid-1;
        else lower=mid+1
    }
    
    return -1;
}

//perform a binary search on date field  (ASC order list)
//this function will convert the data object in to milisecond then perform a normal search
function binarySearchDateAsc(nodeList,searchField,searchDate)
{
    var mid, lower=0, upper=nodeList.length;
    var searchNumber;
    
    //if searchDate is a date string convert it to js date object and get the date in milisecond 
    if (typeof searchDate == "string")
    {
        var tmpDate = getDateFromFormat(searchDate,"dd/MM/yyyy HH:mm:ss")
        searchNumber =  getDateFromFormat(searchDate,"dd/MM/yyyy HH:mm:ss")
    }
    
    while (lower<=upper) 
    {
        mid=Math.floor((lower+upper)/2);
        var curValue = getXMLText(nodeList[mid],searchField,true);
        
        //convert curValue to milisecond
        curValue = (new Date(getDateFromFormat(curValue,"dd/MM/yyyy HH:mm:ss"))).getTime();
        if (searchNumber==curValue) 
            return mid;
        if (searchNumber<curValue) 
            upper=mid-1;
        else lower=mid+1
    }
    
    return -1;
}

//perform a binary search on date field  (DESC order list)
//this function will convert the data object in to milisecond then perform a normal search
function binarySearchDateDesc(nodeList,searchField,searchDate)
{
    var mid, lower=0, upper=nodeList.length;
    var searchNumber;
    
    //if searchDate is a date string convert it to js date object and get the date in milisecond 
    if (typeof searchDate == "string")
    {
        var tmpDate = getDateFromFormat(searchDate,"dd/MM/yyyy HH:mm:ss")
        searchNumber =  getDateFromFormat(searchDate,"dd/MM/yyyy HH:mm:ss")
    }
    
    while (lower<=upper) 
    {
        mid=Math.floor((lower+upper)/2);
        var curValue = getXMLText(nodeList[mid],searchField,true);
        
        //convert curValue to milisecond
        curValue = (new Date(getDateFromFormat(curValue,"dd/MM/yyyy HH:mm:ss"))).getTime();
        if (searchNumber==curValue) 
            return mid;
        if (searchNumber>curValue) 
            upper=mid-1;
        else lower=mid+1
    }
    
    return -1;
    
}

//binary search on a node list to find the right postion to insert a new item in ASC order
function binaryFindPosAsc(nodeList,searchField,searchText)
{
    var mid, lower=0, upper=nodeList.length;
    while (lower<upper) 
    {
        mid=Math.floor((lower+upper)/2);
        var curValue = getXMLText(nodeList[mid],searchField,true).toUpperCase();
        if (searchText==curValue) 
            return mid;
        if (searchText<curValue) 
            upper=mid-1;
        else lower=mid+1
    }
    
    return lower;
}

function isEqual(value1,value2)
{
    /*
        if if value1 == value2
        first we check for "number" type then try to check for "text" type
        params:
            - value1  :   value1
            - value2  :   value2
    */
    if (isNaN(value1) || isNaN(value2) || value1 == "" || value2 == "")
        return String(value1) == String(value2);
    else
        return parseFloat(value1) == parseFloat(value2);
}

//replace all new line char to html <br> tag
function makeHTMLNewLine(strToReplace)
{
    if (strToReplace == undefined || strToReplace == null)
        return "";
        
    while (strToReplace.indexOf("\r\n") > -1)
        strToReplace = strToReplace.replace("\r\n","<br/>");
    while (strToReplace.indexOf("\r") > -1)
        strToReplace = strToReplace.replace("\r","<br/>")
    while (strToReplace.indexOf("\n") > -1)
        strToReplace = strToReplace.replace("\n","<br/>")
    
    return strToReplace;
}

//replace the special html markup with normal text 
//being used for display html text in the text box
function htmlToText(strToConvert)
{
     //replace all special character in the value with xml markup
    var str = new String(strToConvert);
    str = str.replace(/&amp;/g, "&");
    str = str.replace(/&lt;/g, "<");
    str = str.replace(/&gt;/g, ">");
    str = str.replace(/&quot;/g, '"');    
    
    return str;
}

//replace the special text with html or xml markup 
function textToHtml(strToConvert)
{
    if (strToConvert == undefined || strToConvert == null)
        return "";
        
    var str = new String(strToConvert);
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/"/g, '&quot;');    
    
    return str;
}

/*========================================
    Validate functions
==========================================*/
function isValidEmail(strEmail)
{
    var str = strEmail.toLowerCase(); // email string
    var reg1 = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/; // not valid
    //var reg2 = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$/; // valid
    var reg2 = /^[a-z0-9_\-']+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|email|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)$/;
    
    // if syntax is valid
    if (!reg1.test(str) && reg2.test(str)) 
        return true;

    alert("\"" + str + "\" is an invalid e-mail."); 
    return false;
}

function isLetterAndNumber(pString)
{
    //check if pString constains letter and number only
    if (pString == undefined || pString == null || pString == "")
        return true;
        
    pString = pString.toLowerCase();
    
    var reg = /[^a-z0-9\s]/g;
    if (reg.test(pString))
        return false;
    return true;
}

function isPositiveNumber(aNumber)
{
    try
    {
        if (parseFloat(aNumber) > 0 )
            return true;
        return false;
    }
    catch(err)
    {
        return false;
    }
}

function isNumber(aNumber)
{
    if (aNumber == undefined || aNumber == null || String(aNumber) == "")
        return false;
        
    //if 0 return true
    if (String(aNumber) == "0" )
        return true;
    return !isNaN(aNumber);
}

function isBitValid(x,y)
{
    if (x >= y)
        if ((x & y) == y)
            return true;
    return false;
}


function isNormalCharacter(intKey,isShiftKey)
{
    /*
    var validCharWithShift = new Array( "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "|", 
                                        "~",
                                        "{", "}", ":", "\"", "<", ">", "?"
                                    );
                                    
    var validChar = new Array(  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
                            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                            "`", "-", "=", "\\",
                            "[", "]", ";", "'", ",", ".", "/"
    
                        );
    var charFromKey = String.fromCharCode(intKey);
    
    if (isShiftKey)
    {
        for(var i=0; i< validCharWithShift.length; i++)
        {
            if (charFromKey == validCharWithShift[i])
                return true;
        }
    }
    
    for(var i=0; i< validChar.length; i++)
    {
        if (charFromKey == validChar[i])
            return true;
    }
    */
    
    var validKeyCode = new Array (  //number 
                                    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 
                                    
                                    //letter
                                    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 
                                    
                                    //special char
                                    192, 189, 187, 220, 221, 219, 222, 186, 191, 190, 188, 111, 106, 109, 107, 110
                    )
    
    for(var i=0; i< validKeyCode.length; i++)
    {
        if (intKey == validKeyCode[i])
            return true;
    }
    return false;
}

/*=======================================
    Format funtions
=========================================*/
function formatCurrency(num,isOnlyNumber) {
    
    if(isNaN(num) || num == null)
        num = "0";

    num = num.toString().replace(/\$|\,/g, '');
        
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
        num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));
    
    if (isOnlyNumber)       //format the number and return it withou $ sign in the return result
        return (((sign) ? '' : '-') + num + '.' + cents).replace(",", "").replace(",", "");      //ChiPV 20100510 replace 2 comma seperator return (((sign)?'':'-') + num + '.' + cents).replace(",","");
    //TrungTC 20101119 modify code for Currency Option
    //return (((sign)?'':'-') + '$' + num + '.' + cents);
    return (((sign) ? '' : '-') + currencyType + num + '.' + cents);
}

function formatHour(hour)
{
    hour = parseFloat(hour);
    
    if (hour == 0)
        hour = "0.00";
    else 
        hour = hour.toFixed(2);
        
    return hour;
}

function formatCompleteDate(pTextBox)
{
    /*
        Format the incomplete date string to complete date string
        eg. 9           -> 09/curMonth/curYear
            9/          -> 09/curMonth/curYear
            9/10        -> 09/10/curYear
            9/10/       -> 09/10/curYear
            9/10/09     -> 09/10/2009
        Params: - pTextBox: the text box to format the text
    */
    var tmpValue = pTextBox.value;
    
    if (tmpValue == "")
        return;
    
    var arrDayInMonth = new Array(-1,31,28,31,30,31,30,31,31,30,31,30,31);    
    var arrDatePart = tmpValue.split("/");
    var tmpDay = arrDatePart[0];
    var tmpMonth = arrDatePart[1];
    var tmpYear = arrDatePart[2];
    var tmpCurDate = new Date();
    
    //check year
    if (tmpYear == undefined || !isNumber(tmpYear))
        tmpYear = tmpCurDate.getFullYear();
    
    //if leaf year, adding one day to Feb
    if ( ((tmpYear % 4 == 0) && (tmpYear % 100 != 0)) || (tmpYear % 400 == 0))
        arrDayInMonth[2] = arrDayInMonth[2] + 1;
    
    //check month
    if (tmpMonth == undefined || !isNumber(tmpMonth))
    {
        tmpMonth = tmpCurDate.getMonth() + 1;
    }
    else if (parseFloat(tmpMonth) > 12 || parseFloat(tmpMonth) < 1)
    {
        alert("invalid month");
        pTextBox.focus();
        return;
    }
    
    //check day
    if (tmpDay == undefined || !isNumber(tmpDay))
    {
        tmpDay = tmpCurDate.getDay();
    }
    else if (parseFloat(tmpDay) > arrDayInMonth[parseFloat(tmpMonth)] || parseFloat(tmpDay) < 1)
    {
        alert("invalid day");
        pTextBox.focus();
        return;
    }
    
    //format day, month, year
    tmpYear = (tmpYear % 2000)+ 2000;
    if (parseFloat(tmpMonth) < 10)  tmpMonth = "0" + parseFloat(tmpMonth);
    if (parseFloat(tmpDay) < 10)    tmpDay = "0" + parseFloat(tmpDay);
                    
    pTextBox.value = tmpDay + "/" + tmpMonth + "/" + tmpYear;            
}



/*
    Date Time Fucntions
*/
function aiDate(strDate,strToFormat,strFromFormat)
{
    if (strDate == "" || strDate == null)
        return "";
    
    if (strFromFormat == undefined || strFromFormat == null)
        strFromFormat = "dd/MM/yyyy HH:mm:ss";
        
    var tmpDate =  new Date(getDateFromFormat(strDate,strFromFormat));
    return formatDate(tmpDate,strToFormat);
}

function GetDay(nDay)
{
	var Days = new Array("Sunday","Monday","Tuesday","Wednesday",
	                     "Thursday","Friday","Saturday");
	return Days[nDay]
}

function GetMonth(nMonth)
{
	var Months = new Array("January","February","March","April","May","June",
	                       "July","August","September","October","November","December");
	return Months[nMonth] 	  	 
}

function getCurDate(isShortDate)
{
	var Today = new Date();
	var strDate ;
	if(typeof isShortDate == "undefined")
	{
	    var suffix = "th";
	    switch (Today.getDate())
	    {
		    case 1:
		    case 21:
		    case 31: 
			    suffix = "st"; break;
		    case 2:
		    case 22:
			    suffix = "nd"; break;
		    case 3:
		    case 23:
			    suffix = "rd"; break;
	    };

	    strDate = GetDay(Today.getDay()) + " " + Today.getDate();
	    strDate += suffix + " " + GetMonth(Today.getMonth()+1) + ", " + Today.getFullYear();
	}
	else
	{
	    strDate = Today.getDate() + "/" +  Today.getMonth() + "/" + Today.getFullYear();
	}
	return strDate;
}

function getDate(aDate)
{
    var tmp = aDate.getDate();
    if (tmp < 10)
        return "0" + tmp;
    return tmp;
}


function getMonth(aDate)
{
    var tmp = aDate.getMonth() + 1;
    if (tmp < 10)
        return "0" + tmp;
    return tmp;
}

function getHours(aDate)
{ 
    var tmp = aDate.getHours();
    if (tmp < 10)
        return "0" + tmp;
    return tmp;
}

function getMinutes(aDate)
{ 
    var tmp = aDate.getMinutes();
    if (tmp < 10)
        return "0" + tmp;
    return tmp;
}



function getSeconds(aDate)
{ 
    var tmp = aDate.getSeconds();
    if (tmp < 10)
        return "0" + tmp;
    return tmp;
}

// Extra function : preserve for future use
function displayAllNodes(xmlDoc)
{
    var tmpRecord;
    var tmpElem = document.getElementById("repairerTable");
    var strColText = new Array();
    var noOfChildNodes,curChild;
    
    //remove unneccessary white space text node in the DOM : for crossbrowser compatible
    
    tmpRecord = cleanDOM(xmlDoc.getElementsByTagName("RepairerInfo")[0]);
    
    noOfChildNodes = tmpRecord.childNodes.length;
    
    for(var i=0; i< noOfChildNodes ; i++)
    {
        curChild = tmpRecord.childNodes[i];
        strColText[0] = curChild.nodeName;
        strColText[1] = curChild.firstChild.nodeValue;

        tmpElem.appendChild(createRowWithText(strColText));        
    }
}

//clear text node in front of HTML element : cross-browser 
function cleanDOM(xmlNode)
{
    if (!(document.implementation && document.implementation.createDocument))
        return xmlNode;

    var z=xmlNode.childNodes,i;
    
    z?(i=z.length):'';
    
    while(i--)
    {
        if (z[i].nodeType==3&&!/[^\t\n\r\s]/.test(z[i].nodeValue)||z[i].nodeType==8)
            xmlNode.removeChild(z[i]);
        else
            if (z[i].hasChildNodes())
                z[i] = cleanDOM(z[i]);
    }
    
    return xmlNode;
}

/*
    calculate html element position in the web page
*/
function calOffsetLeft(elem)
{
    return calOffset(elem,"offsetLeft");
}
        
function calOffsetTop(elem)
{
    return calOffset(elem,"offsetTop");
}

function calOffset(elem,attr)
{
    if (typeof elem == "string")
        elem = document.getElementById(elem);
    var el = elem;
    var offset = 0;
    while (el)
    {
        offset += el[attr];
        el = el.offsetParent;
    }
    return offset;
}

//delay a number of milisecond
function delay(millis)
{
    date = new Date();
    var curDate = null;

    do 
    { 
        var curDate = new Date(); 
    }while(curDate-date < millis);
}


function showMaskDiv(isShow,alpha)
{
    var tmpMaskDiv = document.getElementById("maskDiv");
    var tmpBody = document.getElementsByTagName("body")[0];
    
    pageDimension = getPageDimension();
    if (isShow)
    {
        //when showing the mask div , sometime the content of current view is changed , and the mask div's width will cause the browser to show the scroll bar 
        //so we set the body class to no overflow while showing the mask div (except user viewing the usersetting page)
        if (document.getElementById("UserSettingDiv").style.display != "")
            tmpBody.className = "bodyNoOverflow";
        
        if (alpha != undefined && alpha != null)
            tmpMaskDiv.className = "maskDivAlpha";
        else
            tmpMaskDiv.className = "maskDiv";
            
        tmpMaskDiv.style.width = pageDimension.x;// - 21; 
        tmpMaskDiv.style.height = pageDimension.y;// - 5;  
        tmpMaskDiv.style.top = 0;
        tmpMaskDiv.style.display = "";
    }
    else
    {
        //when showing the mask div , sometime the content of current view is changed , and the mask div's width will cause the browser to show the scroll bar 
        //so we set the body class to overflow after hiding the mask div
        tmpBody.className = "body";
        tmpMaskDiv.style.display = "none";
    }
}

function showConnectionLostMaskDiv(isShow,alpha)
{
    var tmpMaskDiv = document.getElementById("connectionLostMaskDiv");
    var tmpBody = document.getElementsByTagName("body")[0];
    
    pageDimension = getPageDimension();
    if (isShow)
    {
        //when showing the mask div , sometime the content of current view is changed , and the mask div's width will cause the browser to show the scroll bar 
        //so we set the body class to no overflow while showing the mask div (except user viewing the usersetting page)
        if (document.getElementById("UserSettingDiv").style.display != "")
            tmpBody.className = "bodyNoOverflow";
        
        if (alpha != undefined && alpha != null)
            tmpMaskDiv.className = "maskDivAlpha";
        else
            tmpMaskDiv.className = "maskDiv";
            
        tmpMaskDiv.style.width = pageDimension.x;// - 21; 
        tmpMaskDiv.style.height = pageDimension.y;// - 5;  
        tmpMaskDiv.style.top = 0;
        tmpMaskDiv.style.display = "";
    }
    else
    {
        //when showing the mask div , sometime the content of current view is changed , and the mask div's width will cause the browser to show the scroll bar 
        //so we set the body class to overflow after hiding the mask div
        tmpBody.className = "body";
        tmpMaskDiv.style.display = "none";
    }
}

function showMessage(isShow,msg,YPos)
{   
    
    var messageDiv = document.getElementById("messageDiv");
    var messageText = document.getElementById("messageText");
    
    
    if(isShow)
    {
        messageText.innerHTML = msg;
        messageDiv.className = "visibleMessageDiv";
        
        if(YPos != undefined)
            messageDiv.style.top = YPos;
    }
    else
    {
        messageDiv.className = "hiddenMessageDiv";
    }
}

function showElement(pElem,isShow)
{
    if (typeof pElem == "string")
        pElem = document.getElementById(pElem);
    if (pElem == null || pElem == undefined)
        return;    
            
    if (isShow == undefined || isShow == null)
    {
        if (pElem.style.display == "")
            isShow = false;
        else 
            isShow = true;
        showElement(pElem,isShow);
        return;
    }
    if (isShow)
        pElem.style.display = "";
    else
        pElem.style.display = "none";
}

function setComboBoxSelectedIndex(pComboBox,pValue)
{
    /*
        set the selected index in the combo box
        params:
            - ppComboBox: the combo box control or id 
            - pValue : the value in combo box to search for and set selected index
    */
    if (typeof pComboBox == "string")
        pComboBox = document.getElementById(pComboBox);
    
    if (pComboBox == undefined || pComboBox == null)
    {
        alert("Select box not found.");
        return;
    }
    
    for(i=0; i<pComboBox.options.length; i++)
    {
        if (pComboBox.options[i].value == pValue)
        {
            pComboBox.selectedIndex = i;
            return;
        }
    }
    
    //if no match , set the selected index to 0
    if (pComboBox.options.length == i)
        pComboBox.selectedIndex = 0;
}


function readCookie(name,isReturnBlank)
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++)
    {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    
    if (isReturnBlank)
        return "";
    return null;
}


function createCookie(name,value,days)
{
    if (days)
    {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function noenter() 
{
    /*
        Prevent IE default submit behavior
    */
    return !(window.event && window.event.keyCode == 13); 
}


