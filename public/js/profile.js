const createFeedHandler = async (event) => {
    event.preventDefault();
    console.log("createFeedHandler");
    // const email = document.querySelector("#typeEmailX").value.trim();
    // const password = document.querySelector("#typePasswordX").value.trim();
    // if (email && password) {
    //     const response = await fetch("/api/users/login", {
    //         method: "POST",
    //         body: JSON.stringify({ email, password }),
    //         headers: { "Content-Type": "application/json" },
    //     });

    //     if (response.ok) {
    //         document.location.replace("/");
    //     } else {
    //         alert(
    //             "Failed to login. " +
    //                 response.status +
    //                 ": " +
    //                 response.statusText
    //         );
    //     }
    // } else {
    //     alert("Please fill out all fields.");
    // }
};

const followFeedHandler = async (event) => {
    event.preventDefault();

    const feed_id = event.target.getAttribute("data-feed-id");
    const user_following_id = event.target.getAttribute(
        "data-logged-in-user-id"
    );
    const user_created_id = event.target.getAttribute("data-user-created-id");

    if (feed_id && user_following_id && user_created_id) {
        const response = await fetch("/api/feedfollowers/", {
            method: "POST",
            body: JSON.stringify({
                feed_id,
                user_following_id,
                user_created_id,
            }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            event.target.style.display = "none";
        } else {
            alert(
                "Failed to follow feed." +
                    response.status +
                    ": " +
                    response.statusText
            );
        }
    } else {
        alert("Error");
    }
};

document
    .querySelector(".new-feed-button")
    .addEventListener("click", createFeedHandler);

const followFeedButtons = document.querySelectorAll(".follow-feed-button");
followFeedButtons.forEach((el) =>
    el.addEventListener("click", (event) => followFeedHandler(event))
);
