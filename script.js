var dark = "";

$(function () {
    // START
    let checkbox = $("input[name=dark-mode]");
    // To by pass Firefox's form save (Can also press CTRL+SHIFT+R)
    // checkbox.prop('checked', false).checkboxradio('refresh');
    checkbox.on("click", ChangeTheme);
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