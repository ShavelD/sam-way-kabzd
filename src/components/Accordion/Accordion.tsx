import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    // let [accordionCollapsed, setAccordionCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onChange}/>
        { !props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick= {props.onClick}>{ props.title }</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;