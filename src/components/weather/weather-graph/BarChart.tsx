import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import { makeStyles, Theme } from '@material-ui/core';

interface BarChartProps {
    data: number[],
    width?: number,
    height?: number
}

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding:20
    }
}))

const BarChart: React.FC<BarChartProps> = ({ data }) => {
    const classes = useStyles()

    const graphRef = useRef(null)

    const svgHeight=  300
    const svgWidth = 600
    const barWidth = Math.round(svgWidth / data.length)
    const barPadding = 10

    useEffect(() => {
        const svg = d3
            .select(graphRef.current)
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .style('background-color', '#e2d0d0')

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d,i) => i * 65)
            .attr("y", (d) => svgHeight - d * 5)
            .attr("width", barWidth/2)
            .attr("height", (d, i) => d * 10)
            .attr("transform", (d, i) => {
                const translate = [barWidth * 1, 0]
                return `translate(${translate})`
            })
            .attr("fill",'#5288AC')

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text(d => `${d}º`)
            .attr("x", (d, i) => i * 65 + (barWidth + 10))
            .attr("y", (d, i) => (svgHeight - d * 5) - 5)
            
    }, [data, barWidth])

    return (
        <div id="graph" className={classes.container}>
            <svg ref={graphRef}></svg>
        </div>
    )
}

export default BarChart;