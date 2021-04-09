$(document).ready(function(){

    /**
     * 
     *  DROPDOWN MENUS
     * 
    /**/

    // REFS
    var dropDown = $('.with-dropdown');
    var dropLink = dropDown.children('a');
    var dropMenu = dropDown.children('.dropdown-menu');

    // CLICK EVENT
    dropLink.click(function() {
        // MENU ACTIVE DURING CLICK EVENT
        var actualMenu = $(this).next('.dropdown-menu');

        dropMenu.not(actualMenu).hide();
        actualMenu.toggle();
    });


// END OF DOC READY
});