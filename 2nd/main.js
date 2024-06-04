var res = fetch("https://jsonplaceholder.typicode.com/users");
var currentDiv;

res
.then((r) => {
    return r.json();
})
.then((data) => {
    for (var i = 0; i < data.length; i++) {
    var button = document.createElement("button");
    button.style.margin="20px";
    button.innerHTML = data[i].username;
    button.setAttribute("data-id", data[i].id);
    document.body.appendChild(button);
    }

    document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", async () => {
        try {
        var userId = button.getAttribute("data-id");
        if (currentDiv) {
            currentDiv.remove();
        }
        var ress = await fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=" + userId
        );
        var posts = await ress.json();
        var div = document.createElement("p");
        posts.forEach((post) => {
            var postDiv = document.createElement("div");
            postDiv.innerHTML = "-"+post.body+".<br>";
            div.appendChild(postDiv);
        });
        document.body.appendChild(div);
        currentDiv = div;
        } catch (error) {
        alert("Error fetching user posts:", error);
        }
    });
    });
});


