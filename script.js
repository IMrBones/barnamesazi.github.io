const header = document.getElementById('header');
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.width = "100%";
        header.style.margin = "0% 0% 0% 0%";
        header.style.borderRadius = "0px";
    }
    else {
        header.style.width = "99%";
        header.style.margin = "0.5% 0.5% 0.5% 0.5%";
        header.style.borderRadius = "8px";
    }
}

const coll = document.querySelectorAll('.student-button');
var noLongerOpen = false;
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        
        if (noLongerOpen == false) {
            event.stopPropagation();
            var content = this.nextElementSibling;
            var arrow = this.querySelector('.arrow');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                arrow.classList.remove("rotate");
            }
            else {
                content.style.maxHeight = content.scrollHeight + "px";
                arrow.classList.add("rotate");
            }
       }
    });
}

var themedark = false;

const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('mouseenter', function() {
    if (themedark) {
        themeButton.src = 'icons/sunpurple.png';
    }
    else {
        themeButton.src = 'icons/darkmodepurple.png';
    }
});
themeButton.addEventListener('mouseleave', function() {
    if (themedark) {
        themeButton.src = 'icons/sunwhite.png';
    }
    else {
        themeButton.src = 'icons/darkmodewhite.png';
    }
});
themeButton.addEventListener('click', function() {
    if (themedark) {
        themeButton.src = 'icons/darkmodewhite.png';
        themedark = false;
    }
    else {
        themeButton.src = 'icons/sunwhite.png';
        themedark = true;
    }
    const darkmodeon = document.body.classList.toggle('dark-mode');
    setCookie('theme', darkmodeon ? 'dark' : 'light', 7);
});

function setCookie(name, value, days) {
    const expirationdate = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expirationdate + '; path=/';
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

function applyTheme() {
    const theme = getCookie('theme');
    if (theme == 'dark') {
        themeButton.src = 'icons/darkmodewhite.png';
        themedark = false;
        document.body.classList.add('dark-mode');
    }
    else {
        themeButton.src = 'icons/sunwhite.png';
        themedark = true;
        document.body.classList.remove('dark-mode');
    }
}

applyTheme();