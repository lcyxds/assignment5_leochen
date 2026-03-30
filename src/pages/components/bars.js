import React from "react";

function Bars(props) {
    const { data, xScale, yScale, height, hoveredStation, setHoveredStation } = props;

    //Note: 
    //the if(data){...} means when data is not null, the component will return the bars; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    function getColor(selectedStation, station) {
        if (station === selectedStation) {
            return "red";
        }
        return "steelblue";
    }
    if (data) {
        return <g>
            {/* {task:
                    1. remove this comments and put your code here
                    2. pay attention to the height of the bars, it should be height-yScale(d.start)} */}
            {data.map((d) => {
                const { station, start } = d;
                let x = xScale(station);
                let y = yScale(start);
                return <rect key={station} x={x} y={y} width={xScale.step()} height={height - y} stroke="black" fill={getColor(hoveredStation, d)}
                    onMouseEnter={() => setHoveredStation(d)} onMouseOut={() => setHoveredStation(null)}></rect>
            })}
        </g>
    } else {
        return <g></g>
    }
}

export default Bars