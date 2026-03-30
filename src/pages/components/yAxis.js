


function YAxis(props) {
    const { yScale, height, axisLable } = props;
    if (yScale) {
            // console.log(yScale.ticks());
        return <g>

            {/* //the if(yScale){...} means when xScale is not null, the component will return the y-axis; otherwise, it returns <g></g>
        //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
        //all your code should be put in this block. Remember to use typeof check if the xScale is linear or discrete. */}
            <line y2={height} stroke="black"></line>
            {yScale.ticks().map((tick) => {
                // console.log(tick);
                return <g key={tick} transform={`translate(-10, ${yScale(tick)})`}>
                    <line x2={10} stroke={"black"}></line>
                    <text style={{ textAnchor: 'end', fontSize: '10px' }}>{tick}</text>
                </g>
            })}
            <text style={{ textAnchor: 'end', fontSize: '15px' }} transform={`translate(20, 0)rotate(-90)`}>
                {axisLable}
            </text>
        </g>
    } else {
        return <g></g>
    }

}

export default YAxis