// JScript File for User interaction : login , sign up
/*
    Impelmenting all the functions for login & signup 
    coded by ChiPV                  2007/06/18
*/

function User() {
  this.oContentLoader = null;
  this.requestDOM = null;

  this.userName = '';
  this.password = '';
  this.isRememberMe = 0;
}

User.prototype = {
  keyDownHandler: function(e) {
    var intKey = 0;
    e = window.event ? event : e;
    intKey = e.keyCode ? e.keyCode : e.charCode;

    if (intKey == 13)
      //enter key
      this.login();
  },

  login: function(pUserName, pPassword) {
    /*
        Login for user
        */
    //set the login process status
    document.getElementById('loginStatus').innerHTML = 'Logging in...';

    if (pUserName == undefined || pPassword == undefined) {
      this.userName = document.getElementById('LoginDiv_UserName').value;
      this.password = document.getElementById('LoginDiv_Password').value;
    } else {
      this.userName = pUserName;
      this.password = pPassword;
    }

    if (document.getElementById('chkRememberMe').checked) this.isRememberMe = 1;
    else this.isRememberMe = 0;

    //set the remember me cookie for 30 days
    createCookie('czRememberMe', this.isRememberMe, 30);

    var strClientData =
      '<UserName>' +
      this.userName +
      '</UserName>' +
      '<Password>' +
      this.password +
      '</Password>' +
      '<isRememberMe>' +
      this.isRememberMe +
      '</isRememberMe>';

    //load the request structure to the request DOM
    this.requestDOM = initRequestDOM('login', strClientData);

    this.oContentLoader = new net.ContentLoader(
      url,
      this.requestDOM,
      method,
      this.login_Callback
    );
    console.log(url);
    //alert(url);
    this.oContentLoader.backingObj = this;
  },

  login_Callback: function() {
    var oThis = this;

    if (this.req.responseText == 'Active user found.') {
      document.getElementById('loginStatus').innerHTML = this.req.responseText;
      return;
    }

    var tmpXMLDoc = this.req.responseXML.documentElement;
    var tmpIsSuccess = getXMLText(tmpXMLDoc, 'isSuccess');
    if (tmpIsSuccess != '0') {
      //login not success
      //document.getElementById("loginStatus").innerHTML = getXMLText(tmpXMLDoc, "Message", true);

      //top.location.href = "http://localhost/wordpresstest/?failMessage=" + getXMLText(tmpXMLDoc, "Message", true);
      top.location.href =
        'http://www.crashzone.com.au/?failMessage=' +
        getXMLText(tmpXMLDoc, 'Message', true);
    } //login success
    else {
      if (this.backingObj.isRememberMe != '0') {
        createCookie('czUserName', this.backingObj.userName, 30);
        createCookie('czPassword', this.backingObj.password, 30);
      }

      top.location.href = '' + getXMLText(tmpXMLDoc, 'RedirectTo');
    }

    oThis = null;
  },

  logout: function() {
    /*
        logout 
        */
    //load the request structure to the request DOM

    //send the jobid to server to remove user from editing mode
    var clientData = '<JobID>' + curJobID + '</JobID>';
    this.requestDOM = initRequestDOM('logout', clientData);

    this.oContentLoader = new net.ContentLoader(
      url,
      this.requestDOM,
      method,
      this.logout_Callback
    );
    this.oContentLoader.backingObj = this;
  },

  logout_Callback: function() {
    var oThis = this;
    oThis = null;
    top.location.href = getXMLText(this.req.responseXML, 'RedirectTo'); //"";
  },

  signUpRef: function() {
    var userName = document.getElementById('SignUpDiv_UserNameRef').value;
    var password = document.getElementById('SignUpDiv_PasswordRef').value;
    var password2 = document.getElementById('SignUpDiv_Password2Ref').value;
    var fullName = document.getElementById('SignUpDiv_FullNameRef').value;

    document.getElementById('SignUpDiv_UserName').value = userName;
    document.getElementById('SignUpDiv_Password').value = password;
    document.getElementById('SignUpDiv_Password2').value = password2;
    document.getElementById('SignUpDiv_FullName').value = fullName;

    document.getElementById('signUpStatusRef').innerHTML = 'Processing...';

    this.signUp();
  },

  signUp: function() {
    /*
        user sign up
        */
    if (!this.isSignUpValid()) return;

    //set the login process status
    document.getElementById('signUpStatus').innerHTML = 'Processing...';

    var strClientData =
      '<UserName>' +
      document.getElementById('SignUpDiv_UserName').value +
      '</UserName>' +
      '<Password>' +
      document.getElementById('SignUpDiv_Password').value +
      '</Password>' +
      '<FullName>' +
      document.getElementById('SignUpDiv_FullName').value +
      '</FullName>';

    if (getQueryString('ref') == 'autoreply') {
      strClientData += '<RefLink>AIAutoReply</RefLink>';
    }

    //TrungTC 20140429 Add code for mysmashmycar repairer
    if (document.getElementById('mysmashJob').value != '') {
      strClientData +=
        '<mysmashjob>' +
        document.getElementById('mysmashJob').value +
        '</mysmashjob>';
    }
    //TrungTC 20140429 Add code end

    //load the request structure to the request DOM
    this.requestDOM = initRequestDOM('signUp', strClientData);

    this.oContentLoader = new net.ContentLoader(
      url,
      this.requestDOM,
      method,
      this.signUp_Callback
    );
    this.oContentLoader.backingObj = this;
  },

  isSignUpValid: function() {
    //check for password
    var SignUpDiv_Password = document.getElementById('SignUpDiv_Password');
    var SignUpDiv_Password2 = document.getElementById('SignUpDiv_Password2');
    if (SignUpDiv_Password.value != SignUpDiv_Password2.value) {
      alert('Password not match');
      return false;
    }

    if (SignUpDiv_Password.value == '') {
      alert('Password can not be blank');
      return false;
    }

    //check for valid characters
    var allTextBox = document
      .getElementById('SignUpDiv')
      .getElementsByTagName('input');
    var regValidCZChar = new RegExp('[^A-Za-z0-9.-@-_\\s*]', 'g');
    for (var i = 0; i < allTextBox.length; i++) {
      if (allTextBox[i].type != 'text' && allTextBox[i].type != 'password')
        continue;

      var tmpValue = allTextBox[i].value;
      if (regValidCZChar.test(tmpValue)) {
        alert('Only letters & numbers are allowed in these fields');
        allTextBox[i].focus();
        allTextBox[i].select();
        return false;
      }
    }

    //check for valid email address format
    var strEmail = document.getElementById('SignUpDiv_UserName').value;
    if (!isValidEmail(strEmail)) return false;

    return true;
  },

  signUp_Callback: function() {
    var oThis = this;

    //redirect user to crashzone main page if sign up successfully
    var nextURL = 'signup.htm'; //"estimate";

    if (this.req.responseText == 'OK') {
      //set the cookie to show usersetting after signup
      createCookie('showUserSetting', '1', 3);
      top.location.href = '' + nextURL;
    } else
      document.getElementById('signUpStatus').innerHTML = this.req.responseText;

    oThis = null;
  },

  forgotPassword: function() {
    /*
        send the request to server to email user their password
        */
    var strEmail = document.getElementById('LoginDiv_UserName').value;
    if (!isValidEmail(strEmail)) {
      document.getElementById('LoginDiv_UserName').focus();
      return;
    }

    //set the login process status
    document.getElementById('loginStatus').innerHTML = 'Processing...';

    var strClientData =
      '<UserName>' +
      document.getElementById('LoginDiv_UserName').value +
      '</UserName>';

    //load the request structure to the request DOM
    this.requestDOM = initRequestDOM('forgotpassword', strClientData);

    this.oContentLoader = new net.ContentLoader(
      url,
      this.requestDOM,
      method,
      this.forgotPassword_Callback
    );
    this.oContentLoader.backingObj = this;
  },

  forgotPassword_Callback: function() {
    document.getElementById('loginStatus').innerHTML = this.req.responseText;

    var oThis = this;
    oThis = null;
  },

  createDemoJob: function() {
    //load the request structure to the request DOM
    this.requestDOM = initRequestDOM('createDemoJob', '');

    this.oContentLoader = new net.ContentLoader(
      url,
      this.requestDOM,
      method,
      this.createDemoJob_Callback
    );
    this.oContentLoader.backingObj = this;
  },

  createDemoJob_Callback: function() {},

  upload: function(pUploadType) {
    var tmpURL = 'upload.aspx?JobID=' + curJobID + '&ut=' + pUploadType;
    openPopup(tmpURL, 'Crashzone', 300, 130);
  },

  renewSession: function() {
    /*
        renew session on server
        */
    //load the request structure to the request DOM
    this.requestDOM = initRequestDOM('renewSession', '');

    this.oContentLoader = new net.ContentLoader(
      url,
      this.requestDOM,
      method,
      this.renewSession_Callback
    );
    this.oContentLoader.backingObj = this;
  },

  renewSession_Callback: function() {
    var oThis = this;
    oThis = null;
  }
};
