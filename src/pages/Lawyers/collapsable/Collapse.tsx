import React, { useState } from 'react'


type PropsTypeS = {
    state: boolean,
    toggle: React.MouseEventHandler<HTMLLabelElement>,
    header: string,
    content: string | string[]
}


interface ParagraphWithBoldWordsProps {
    text: string;
}
function ParagraphWithBoldWords({ text }: ParagraphWithBoldWordsProps) {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return (
        <div>
            {parts.map((part, index) => {
                if (part.match(/^\*\*.+\*\*$/)) {
                    return <strong key={index}>{part.substring(2, part.length - 2)}</strong>;
                } else {
                    return <span key={index}>{part}</span>;
                }
            })}
        </div>
    );
}

const Collapse = (props: PropsTypeS) => {



    return (
        < div className="wrapper" >
            <div className="collapsible">
                <label onClick={props.toggle}>{props.header} <img alt="arrow" src={process.env.PUBLIC_URL + '/images/arrow.svg'} className={props.state ? 'rotate' : ""} /></label>
                <div className={props.state ? "text collapsible-collapsed" : "text collapsible-notcollapsed"}>
                    {typeof props.content === 'string' ? (
                        // <p>{props.content}</p>
                        <>
                            <ParagraphWithBoldWords text={props.content} />
                        </>
                    ) : Array.isArray(props.content) ? (
                        <ul>
                            {props.content.map((i) => (
                                <li key={i}>{i}</li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </div>
        </div>
    )


}

type PropsTypeE = {
    theData: {
        id: number,
        name: string,
        img: string,
        background: string,
        practice: string[],
        achievements: string[]

    } | undefined;
}

const CollapseAll = (props: PropsTypeE) => {
    //take in id
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const toggle = (selectedState: string) => {
        setFirst(state => (selectedState === "state1" ? !state : false));
        setSecond(state => (selectedState === "state2" ? !state : false));
        setThird(state => (selectedState === "state3" ? !state : false));
    };



    if (!props.theData) {
        return (<div>Page Not Found</div>)
    }


    return (

        <div>
            <Collapse state={first} toggle={() => toggle("state1")} header="About" content={props.theData.background || "This string is empty"} />
            <Collapse state={second} toggle={() => toggle("state2")} header="Experience" content={props.theData.achievements || "This string is empty"} />
            <Collapse state={third} toggle={() => toggle("state3")} header="Areas of Focus" content={props.theData.practice || "This string is empty"} />

        </div>
    )
}




export default CollapseAll

