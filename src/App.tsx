import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingPropsType, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAcordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import {PropsType} from "./components/UncontrolledOnOff/UncontrolledOnOff";

//function declaration
function App() {

    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [value,setValue] = useState("")
    return (
        <div className={"App"}>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<>*/}
            {/*    <input onChange={(event) => {*/}
            {/*const actualValue = event.currentTarget.value;*/}
            {/*setValue(actualValue)}*/}
            {/*}/>*/}
            {/*</>*/}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}*/}
            {/*/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"} />*/}

            <UncontrolledRating />
            {/*<Rating  />*/}

        </div>
    );
}

type PageTitlePropsType = {
     title: string
}
function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    return <h1>{ props.title }</h1>
}



export default App;
