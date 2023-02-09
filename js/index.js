
$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE
    $.getJSON("posts/posts/posts.json", 
            function (data) {
        var latest = '';
        //LATEST POST
        latest = data[0];
        var post = document.getElementById("latest-post-content");
        post.textContent=latest["content"];

        var heading = document.getElementById("latest-post-heading");
        heading.textContent=latest["heading"];

        var post_image = document.getElementById("latest-post-image");
        img_url = latest["img"];
        post_image.setAttribute("src",img_url);

        // author
        var author = document.getElementById("author-1")
        author_text = latest["author"]
        author.textContent = author_text

        //post date
        var author_date = document.getElementById("date-1")
        date = latest["date"]
        author_date.textContent = date



        //POSTER
        latest = data[1];
        var post = document.getElementById("latest-post-content-2");
        post.textContent=latest["content"];

        var heading = document.getElementById("latest-post-heading-2");
        heading.textContent=latest["heading"];

        var post_image = document.getElementById("latest-post-image-2");
        img_url = latest["img"];
        post_image.setAttribute("src",img_url);

        // author
        var author = document.getElementById("author-2")
        author_text = latest["author"]
        author.textContent = author_text

        //post date
        var author_date = document.getElementById("date-2")
        date = latest["date"]
        author_date.textContent = date




            

    });
});