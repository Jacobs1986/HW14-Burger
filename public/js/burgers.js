$(function () {

    // create a new burger
    $(".create-form").on("submit", (event) => {
        event.preventDefault();
        console.log("Submit button clicked")
        let newBurger = {
            name: $("#bn").val().trim()
        };
        console.log(newBurger);

        // post to the api
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the location
                location.reload();
            }
        )
    })
    // change eaten state of burger
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newdevour = 1;
        console.log(`The id for ${this} is ${id}`)
        console.log(`The new devoured state is ${newdevour}`);

        let newEatState = {
            devoured: newdevour
        }

        // send the PUT request
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newEatState
        }).then(
            function() {
                console.log("changed devoured to", newdevour)
            }
        )
    })
})