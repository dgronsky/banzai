
    (function () {
        debugger;
        var defaultMenu = "home";
        debugger;
        if (typeof menu === 'undefined') {
        menu = defaultMenu;
    }
        var navItem = $(".navbar").find("#nav-" + menu).addClass("active");

    })();

function setActiveMenu(menuId)
{
    $("#"+menuId).addClass("active");
}