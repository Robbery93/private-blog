import React from "react";
import posts from "../data/posts.json";
import Bloglink from "../components/Bloglink";

function BlogOverview() {

    return (
        <article className="blog-overview">
        <h1>Blog overzicht</h1>
            <p>Aantal blogposts: {posts.length}</p>
            <ul className="blog-list">
                <Bloglink id={0}/>
                <Bloglink id={1}/>
                <Bloglink id={2}/>
                <Bloglink id={3}/>
                <Bloglink id={4}/>
                <Bloglink id={5}/>
                <Bloglink id={6}/>
                <Bloglink id={7}/>
                <Bloglink id={8}/>
                <Bloglink id={9}/>
                <Bloglink id={10}/>
                <Bloglink id={11}/>
                <Bloglink id={12}/>
                <Bloglink id={13}/>
                <Bloglink id={14}/>
                <Bloglink id={15}/>
                <Bloglink id={16}/>
                <Bloglink id={17}/>
                <Bloglink id={18}/>
                <Bloglink id={19}/>
            </ul>
        </article>
    )
}

export default BlogOverview;