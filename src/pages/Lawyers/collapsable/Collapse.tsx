import React, { useState } from 'react'
import { readConfigFile } from 'typescript'
import personnel from '../../../data/personnel'


const data = personnel.find(i => i.id === 12002)

type PropsTypeS = {
    state: boolean,
    toggle: React.MouseEventHandler<HTMLLabelElement>,
    header: string,
    content: string | string[]
}

const FancyParagraph = () => {

    return (
        <div>
            Jessica Pearson is a partner at Pearson Specter Litt, a <strong>Harvard Law School graduate</strong> known for her <strong>intelligence</strong> and <strong>integrity</strong>. 
            Pearson possesses outstanding negotiating skills and leadership abilities. She excels in <strong>Mergers & Acquisitions</strong> and <strong>Leveraged Buyouts</strong>, having represented many prominent companies in various corporate transactions.
            With <strong>extensive knowledge</strong> in various industries, clients <strong>trust</strong> her to protect their legal interests and achieve their goals.
        </div>
    )

}
const Collapse = (props: PropsTypeS) => {


    // return (
    //     <div className="wrapper">
    //         <div className="collapsible">
    //             <label onClick={props.toggle}>{props.header} <img src='/images/arrow.svg' className={props.state ? 'rotate' : ""} /></label>
    //             <div className={props.state ? "text collapsible-collapsed" : "text collapsible-notcollapsed"}>
    //                 {typeof props.content === 'string' ? props.content :
    //                     Array.isArray(props.content) ?
    //                         <ul>
    //                             {props.content.map((i) => <li key={i}>{i}</li>)}
    //                         </ul> : null}

    //             </div>

    //         </div>
    //     </div>

    // )

    return (
        <div className="wrapper">
            <div className="collapsible">
                <label onClick={props.toggle}>{props.header} <img src='/images/arrow.svg' className={props.state ? 'rotate' : ""} /></label>
                <div className={props.state ? "text collapsible-collapsed" : "text collapsible-notcollapsed"}>
                    {typeof props.content === 'string' ? props.header == "About" ? <FancyParagraph /> : props.content :
                        Array.isArray(props.content) ?
                            <ul>
                                {props.content.map((i) => <li key={i}>{i}</li>)}
                            </ul> : null}

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

