function addGlobalStyle(css){
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if(!head){
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
//changes the background
addGlobalStyle('body, body {background: #000000 url(localStorage.getItem("http://fc09.deviantart.net/fs71/f/2012/126/a/b/dj_pon3___wallpaper_by_jave_the_13-d4yr3ln.png")) no-repeat;}');
addGlobalStyle('#room-wheel, #room-wheel {height: 0;}');

        RoomUser.audience.roomElements = [];
    RoomUser.redraw();
