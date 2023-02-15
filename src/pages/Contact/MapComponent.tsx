import React from 'react'
type MapProps = {
    src: string;
    width: string;
    height: string;
}


const MapComponent = (props: MapProps) => {
    return (
        <iframe src={props.src} width={props.width} height={props.height} title="office-location"/>
    )
}

export default MapComponent