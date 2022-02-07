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

    // Grab file name & info
    $("#ramen-misoya").on("click", RamenMisoyaMenu);
})

/*****************************
Function Name: ChangeTheme
Description: Alternates between light and dark mode
Parameters: N/A
Return: No Return
*****************************/
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

/*****************************
Function Name: GravitateLogo
Description: "Sucks" all browser windows towards the logo and makes them disappear
Parameters: N/A
Return: No Return
*****************************/
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

/*****************************
Function Name: MinimizeWindow
Description: Docks the browser window on the bottom of the viewport
Parameters: N/A
Return: No Return
*****************************/
function MinimizeWindow ()
{
    // Dock it somewhere (Will need to think of an idea)
}

/*****************************
Function Name: MaximizeWindow
Description: Enlarges the specified browser window
Parameters: N/A
Return: No Return
*****************************/
function MaximizeWindow ()
{
    // Enlarge and bring it to focus
}

/*****************************
Function Name: CloseWindow
Description: Closes the specified browser window
Parameters: N/A
Return: No Return
*****************************/
function CloseWindow ()
{
    $("#react").css("display", "none");
}

/////////////////////////
/// PROJECT FUNCTIONS ///
/////////////////////////

/*****************************
Function Name: RamenMisoyaMenu
Description: Displays name on input and prepares information for other functions
Parameters: N/A
Return: No Return
*****************************/
function RamenMisoyaMenu ()
{
    $("#file-name").val("Ramen Misoya Menu");
    $("#ramen-misoya").css("background-color", "#1a67c2");
    $("#ramen-misoya").css("color", "#FFFFFF");
}