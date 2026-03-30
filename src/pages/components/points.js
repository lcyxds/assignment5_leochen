import React from "react";

function Points(props) {
    const { data, xScale, yScale, height, width, hoveredStation, setHoveredStation, setHoveredX, setHoveredY } = props;
    //Note: 
    //the if(data){...} means when data is not null, the component will return the points; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    function getColor(selectedStation, station) {
        if (station === selectedStation) {
            return "red";
        }
        return "steelblue";
    }
    function getRadius(selectedStation, station) {
        if (station === selectedStation) {
            return 10;
        }
        return 5;
    }
    if (data) {
        // console.log(data)
        return <g>
            {/* task:1. remove this comments and put your code here */}
            {data.map((d) => {
                const { station, tripdurationS, tripdurationE } = d;
                return <circle key={station} cx={xScale(tripdurationS)} cy={yScale(tripdurationE)}
                    r={getRadius(d, hoveredStation)} stroke="black" fill={getColor(d, hoveredStation)}
                    onMouseEnter={({ pageX, pageY }) => {
                        setHoveredStation(d);
                        setHoveredX(pageX);
                        setHoveredY(pageY);
                    }} onMouseOut={() => {
                        setHoveredStation(null);
                        setHoveredX(null);
                        setHoveredY(null);
                    }}></circle>
            })}
            {hoveredStation ? <rect x="0" y="0" width={width} height={height} fill="yellow" opacity="0.6"></rect> : null}
            {data.filter(d => d === hoveredStation).map((d) => {
                const { station, tripdurationS, tripdurationE } = d;
                return <circle key={station} cx={xScale(tripdurationS)} cy={yScale(tripdurationE)}
                    r={getRadius(d, hoveredStation)} stroke="black" fill={getColor(d, hoveredStation)}
                    onMouseEnter={({ pageX, pageY }) => {
                        setHoveredStation(d);
                        setHoveredX(pageX);
                        setHoveredY(pageY);
                    }} onMouseOut={() => {
                        setHoveredStation(null);
                        setHoveredX(null);
                        setHoveredY(null);
                    }}></circle>
            })}
        </g>
    } else {
        return <g></g>
    }
}

export default Points