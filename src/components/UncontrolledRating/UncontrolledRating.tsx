import React, {useReducer, useState} from "react";
import {action} from "@storybook/addon-actions";
import {reducer, TOGGLE_CONSTANT} from "../UncontrolledAcordion/reducer";

type RatingPropsType = {}

type ActionType = {
    type: string
}

type StateType = {
    value: number
}

function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering")

    // let [value, setValue] = useState(0)
    // const VALUE_STAR = "VALUE-SET"
    // const reducer = (state: StateType, action: ActionType): StateType => {
    //     switch (action.type) {
    //         case VALUE_STAR:
    //             return
    //         default:
    //             throw new Error("bad action")
    //     }
    //     return
    // }
    // let [value, dispatch] = useReducer(reducer, {value: 0})

    return (
        <div>
            {/*<Star selected={value > 0} setValue={() => {*/}
            {/*    dispatch({type: VALUE_STAR})*/}
            {/*}}/>*/}
            {/*<Star selected={value > 1} setValue={() => {*/}
            {/*    setValue(2)*/}
            {/*}}/>*/}
            {/*<Star selected={value > 2} setValue={() => {*/}
            {/*    setValue(3)*/}
            {/*}}/>*/}
            {/*<Star selected={value > 3} setValue={() => {*/}
            {/*    setValue(4)*/}
            {/*}}/>*/}
            {/*<Star selected={value > 4} setValue={() => {*/}
            {/*    setValue(5)*/}
            {/*}}/>*/}
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.setValue()
    }}>{props.selected ? <b>Star </b> : "Star "}</span>
}

export default UncontrolledRating;