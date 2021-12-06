import React from "react";
import {useHistory, useParams} from "react-router-dom";
import posts from "../data/posts.json"

function BlogPost() {

    const { id } = useParams();
    const { title, content, date } = posts[id];

    const history = useHistory();

    return(
        <div className="blogpost">
            <h1>Title: {title}</h1>
            <sub>Date submitted: {date}</sub>
            <h3>Content</h3>
            <p>{content}</p>

            <button type="button" onClick={() => history.push("/")}>Terug naar homepage</button>
            <button type="button" onClick={() => history.push("/blogposts")}>Terug naar blogoverzicht</button>
        </div>
    )
}

export default BlogPost;