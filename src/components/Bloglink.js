import React from 'react';
import {NavLink} from "react-router-dom";
import posts from "../data/posts.json";

const Bloglink = ({ id }) => {
    return (
        <li>
            <NavLink to={`/blogposts/${id}`} className="link">{posts[id].title}</NavLink>
        </li>
    );
};

export default Bloglink;