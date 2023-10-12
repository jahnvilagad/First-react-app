import React from "react";

import { dumpLogs } from "./Utills";

import classes from './BlogCard.module.css'

const BlogCard = (props) => {
    dumpLogs(props);

    return (
        <div className={classes.BlogCard}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {/* <button onClick={btnclick}>Hide</button> */}
        </div>
    )
}

export default BlogCard;