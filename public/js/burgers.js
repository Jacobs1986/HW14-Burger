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

})