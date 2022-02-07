var dark = "";
var close = 0;

$(function () {
    // START
    let checkbox = $("input[name=dark-mode]");

    // To by pass Firefox's form save (Can also press CTRL+SHIFT+R)
    // checkbox.prop('checked', false).checkboxradio('refresh');
    checkbox.on("click", ChangeTheme);

    // Main logo button that will gravitate all components towards it
    $("#WH").on("click", GravitateLogo);

    // Window header function buttons (Minimize, Maximize, Close)
    $("#min").on("click", MinimizeWindow);
    $("#max").on("click", MaximizeWindow);
    $("#exit").on("click", CloseWindow);
})

function ChangeTheme ()
{
    if (!Boolean(dark))
    {
        $("body").css("background-color", "#292929");
        $(".logo-btn").css({
            "background-color": "#FFFFFF",
            "color"           : "#292929"
        }); 
        dark = "true";
    }
    else
    {
        $("body").css("background-color", "#FFFFFF");
        $(".logo-btn").css({
            "background-color": "#292929",
            "color"           : "#FFFFFF"
        }); 
        dark = "";
    }
}

function GravitateLogo ()
{
    if (close == 0)
    {
        // Grab project-window class divs and make them disappear for now
        $(".project-browser").css("display", "none");
        close = 1;
    }
    else
    {
        $(".project-browser").css("display", "block");
        close = 0;
    }
}

function MinimizeWindow ()
{
    // Dock it somewhere (Will need to think of an idea)
}

function MaximizeWindow ()
{
    // Enlarge and bring it to focus
}

function CloseWindow ()
{
    // Close the window
    $("#react").css("display", "none");
}