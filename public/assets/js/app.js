$(document).ready(function() {
    
    // click event to devour burger
    $(".devour").on("click", function(event) {
        event.preventDefault();
        
        var id = $(this).data("id");
        var eatMe = $(this).data("iseaten");
        console.log("ID",id)
        console.log("eatMe", eatMe);
        
        
        var newBurgerState = {
            devoured: eatMe
        };
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("changed sleep to", eatMe);
                // Reload the page to get the updated list
                location.reload();
            });
        });

    //click event to add burger
    $("#submit").on("click", function(event){
        event.preventDefault();

        $.post("/api/burgers/", {
            burger_name: $("#ca").val()
        }).then(function(result) {
            console.log(result);
            location.reload();
        })
    })
});