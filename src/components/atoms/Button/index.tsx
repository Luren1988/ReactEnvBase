import React from "react";
//import ReactDOM from "react-dom";

import './index.scss'

type Props = {
    text?: string,
    textColor?: string,
    textSize?: string,
    bgColor?: string,
}

const Button: React.FC<Props> = props => {
    const text = (props.text) ? props.text : ""

    const classname = () => {

        let arr: string[] = [];

        if (props.textColor) {
            arr.push(`${props.textColor}`)
        }

        if (props.textSize) {
            arr.push(`${props.textSize}`)
        }
        if (props.bgColor) {
            arr.push(`${props.bgColor}`)
        }

        return arr.join(' ');
    }


    return (
        <button className={classname()}
        >{text}</button>
    )
}

export default Button;

