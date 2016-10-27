$(document).ready(function()
{
    $("#keyword-input-wrapper").mouseover(function()
    {
        $(this).css("border-color", "#fd6853");
    })
    $("#keyword-input-wrapper").mouseleave(function()
    {
        $(this).css("border-color", "white");
    })
    $("#keyword-submit").mouseover(function()
    {
        $(this).css("background-color", "#ff5943");
        $(this).css("border-color", "#ff5943");
    })
    $("#keyword-submit").mouseleave(function()
    {
        $(this).css("background-color", "#fd6853");
        $(this).css("border-color", "#fd6853");
    })
})