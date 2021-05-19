function logout() {

    setTimeout(function(){  send('logout', {}); close(500); }, 10000);

}
