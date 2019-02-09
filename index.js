

$(function() {
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        $("ul").append(
            '<li><span class="shopping-item">' +
            $('#shopping-list-entry').val() + '</span>' +
            '<div class="shopping-item-controls">' +
              '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
              '</button>' +
              '<button class="shopping-item-delete">' +
               '<span class="button-label">delete</span>' +
              '</button>' +
            '</div></li>'
        );
    });
  
    $('ul').on('click', '.shopping-item-delete', function(event) {
        this.closest('li').remove();
    });

    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $('.shopping-item').toggleClass('.shopping-item_checked');
    });

});