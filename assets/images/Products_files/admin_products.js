$(document).ready(function() {

    $("body").on("click", ".delete_product", function() {
        $(this).closest("tr").addClass("show_delete");
        $(".popover_overlay").fadeIn();
    });

    $("body").on("click", ".cancel_remove", function() {
        $(this).closest("tr").removeClass("show_delete");
        $(".popover_overlay").fadeOut();
    });

    $("body").on("click", ".upload_image", function() {
        $(".image_input").trigger("click");
    });

    $("body").on("change", ".image_input", function() {
        $('.form_data_action').val("upload_image");
        $(".add_product_form").trigger("submit");
    });

    $("body").on("submit", ".add_product_form", function() {
        let form = $(this);

        $.ajax({
            url: form.attr("action"),
            type: 'POST',
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
            success: function(res) {
                let form_data_action = $('.form_data_action').val();

                if(form_data_action == "upload_image") {
                    $(".image_preview_list").html(res);
                }
                else if (form_data_action == "remove_image") {
                    console.log(res);
                };
                $(".form_data_action").val("add_product");
            }
        });
 
        return false
    });

    /* To delete an image */
    $("body").on("click", ".delete_image", function() {
        $('.form_data_action').val("remove_image");
        $(".add_product_form").trigger("submit");
    });
});