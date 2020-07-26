var oUser;
oUser = new User();
export const init = () => {
  var LoginDiv_UserName = document.getElementById('LoginDiv_UserName');
  var LoginDiv_Password = document.getElementById('LoginDiv_Password');

  if (getQueryString('user') != 'QueryStringNotExsit') {
    LoginDiv_UserName.value = getQueryString('user');
    LoginDiv_Password.value = getQueryString('password');
  } else {
    //set the login info from cookie
    LoginDiv_UserName.value = readCookie('czUserName', true);
    LoginDiv_Password.value = readCookie('czPassword', true);

    //set the remember cookie
    var isRememberMe = readCookie('czRememberMe');
    if (isRememberMe == '1')
      document.getElementById('chkRememberMe').checked = true;
    else document.getElementById('chkRememberMe').checked = false;
  }
  if (LoginDiv_UserName.value == '' && LoginDiv_Password.value == '')
    LoginDiv_UserName.focus();
};
