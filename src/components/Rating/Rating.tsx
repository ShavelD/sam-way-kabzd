import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


export type RatingPropsType = {}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering")
    let [values, setValues] = useState(0)

    return (
        <div>
            <Star selected={values > 0} setValues={setValues} value={1}/>
            <Star selected={values > 1} setValues={setValues} value={2}/>
            <Star selected={values > 2} setValues={setValues} value={3}/>
            <Star selected={values > 3} setValues={setValues} value={4}/>
            <Star selected={values > 4} setValues={setValues} value={5}/>
        </div>
    );
}

type StarPropsType = {
    value: 1 | 2 | 3 | 4 | 5
    setValues: (value: 1 | 2 | 3 | 4 | 5) => void
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering")

    return <span onClick={() => {props.setValues(props.value)}}>{props.selected ? <b> Star</b> : "Star"}
    </span>
}










// <span onClick={() => {props.setValue()}}>{props.selected ? <b>Star </b> : "Star "}</span>
// }