let theme_switcher = document.querySelector(".theme-switcher");

let icon = localStorage.getItem("icon");
let theme = localStorage.getItem("theme");

SetTheme(theme, icon);
theme_switcher.addEventListener("click", () => {
    if(theme_switcher.getAttribute('name') == 'sunny-outline'){
        SetTheme('dark', 'moon-outline');

        theme_switcher.setAttribute('name', 'moon-outline');
    }else{
        SetTheme('sunny', 'sunny-outline');
        theme_switcher.setAttribute('name', 'sunny-outline');
    }
})

function SetTheme(theme, icon){

    document.documentElement.className = theme;
    theme_switcher.setAttribute('bi', icon);
    localStorage.setItem("icon", icon);
    localStorage.setItem("theme", theme);
    if((theme_switcher.getAttribute('name') == '' & theme == '') || (theme == null && icon == null)){
        theme_switcher.setAttribute('sunny', 'sunny-outline');
    }
}
