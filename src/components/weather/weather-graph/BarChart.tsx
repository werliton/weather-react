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
    const svgWidth = 450
    const barWidth = (svgWidth / data.length)
    const barPadding = 10

    useEffect(() => {
        const svg = d3
            .select(graphRef.current)
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .style('padding', 10)
            .style('background-color', '#c7b7b7')

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d,i) => i * 70)
            .attr("y", (d) => svgHeight - d)
            .style('padding', 10)
            .attr("width", barWidth - barPadding)
            .attr("height", (d, i) => d * 10)
            .attr("transform", (d, i) => {
                const translate = [barWidth * 1, 0]
                return `translate(${translate})`
            })
            .attr("fill",'#5288AC')
    }, [data, barWidth])

    return (
        <div id="graph" className={classes.container}>
            <svg ref={graphRef}></svg>
        </div>
    )
}

export default BarChart;