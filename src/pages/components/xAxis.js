//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate




function XAxis(props) {
    const { xScale, height, width, axisLable } = props;
    //Note:
    //1. XAxis works for two cases: the xScale is linear (i.e., scatter plot) and the xScalse is discrete (i.e., bar chart)
    //2. you can use typeof(xScale.domain()[0]) to decide the return value
    //3. if typeof(xScale.domain()[0]) is a number, xScale is a linear scale; if it is a string, it is a scaleBand.

    if (xScale) {
        if (typeof (xScale.domain()[0]) == "number") {
            // console.log(xScale.domain());
            return <g>
                <line x1={0} y1={height} x2={width} y2={height} stroke="black"></line>
                {xScale.ticks().map((tick) => {
                    return <g key={tick} transform={`translate(${xScale(tick)}, ${height})`}>
                        <line y2={10} stroke={"black"}></line>
                        <text y={20} style={{ textAnchor: 'middle', fontSize: '10px' }}>{tick}</text>
                    </g>
                })}
                <text style={{ textAnchor: 'end', fontSize: '15px' }} transform={`translate(${width}, ${height - 10})`}>
                    {axisLable}
                </text>
            </g>
        }
        return <g>
            <line x1={0} y1={height} x2={width} y2={height} stroke="black"></line>
            {xScale.domain().map((tick) => {
                return <g key={tick} transform={`translate(${xScale(tick)}, ${height})`}>
                    <line y="0"></line>
                    <text y="3" transform="rotate(75, 0, 3)" style={{ textAnchor: 'start', fontSize: '10px' }}>{tick}</text>
                </g>
            })}
            <text style={{ textAnchor: 'end', fontSize: '15px' }} transform={`translate(${width}, ${height - 10})`}>
                {axisLable}
            </text>
        </g>
    } else {
        return <g></g>
    }
}

export default XAxis