import React from "react";
import {StyleSheet} from "src/types";

const styles: StyleSheet = {
    navStyle: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    anotherStyle: {
        color: "white",
        backgroundColor: "black"
    }
};
const HelloWorld = () => (
    <div style={styles.anotherStyle}>
        <h1>Hello World</h1>

        <hr />

        <h3>Environmental variables:</h3>
        <p>
            process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
        </p>
        <p>
            process.env.NAME: <b>{process.env.NAME}</b>
        </p>
        <p>
            process.env.VERSION: <b>{process.env.VERSION}</b>
        </p>
    </div>
);

export default HelloWorld;
