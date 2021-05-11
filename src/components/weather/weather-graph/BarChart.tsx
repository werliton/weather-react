import React, { useRef } from 'react';
import * as d3 from "d3";

interface BarChartProps {
    data: number[],
    width: number,
    height: number
}

const BarChart: React.FC<BarChartProps> = ({ data, width, height }) => {
    const graphRef = useRef(null)

    const svg = d3
        .select(graphRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)

    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", (d,i) => i * 70)
        .attr("y", (d,i) => height - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "blue")

    return (
        <div ref={graphRef}></div>
    )
}

export default BarChart;