import React from "react";
import styles from './app.module.scss'
import stules2 from './app1.module.scss'


export interface HelloWorldProps {
    userName: string;
    lang: string;
}
export const App = (props: HelloWorldProps) => (
    <h1 className={styles.text}>
        Hi {props.userName} from React! <span className={stules2.text2}>Welcome</span> to {props.lang}!
    </h1>
);