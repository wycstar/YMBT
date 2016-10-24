$(document).ready(function()
{
    $("#keyword-input-wrapper").mouseover(function()
    {
        $(this).css("border-color", "red");
        //$(this).css("box-shadow", "3px 3px 5px #333");
    })
    $("#keyword-input-wrapper").mouseleave(function()
    {
        $(this).css("border-color", "white");
        $(this).css("box-shadow", "none");
    })
})