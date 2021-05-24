import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import { makeStyles, Theme } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';

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
    const { weatherResults } = useSelector((state:AppState) => state.weathers)
  
    const classes = useStyles()

    const graphRef = useRef(null)

    const svgHeight=  300
    const svgWidth = 600
    const barWidth = Math.round(svgWidth / data.length)

    useEffect(() => {
        const forecast = weatherResults?.results?.forecast
      

        const svg = d3
            .select(graphRef.current)
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .style('background-color', '#e2d0d0')

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(forecast.map(item => item.max)) as number])
            .range([0, svgWidth])
        
        const yScale = d3.scaleLinear()
        .domain([0, d3.max(forecast.map(item => item.max)) as number])
        .range([0, svgHeight])

        // const x_axis = d3.axisBottom(xScale)

        // const y_axis = d3.axisLeft(yScale)

        // svg.append("g")
        //     .attr("transform", "translate(50, 10)")
        //     .call(y_axis)

        // const xAxisTranslate = svgHeight - 20
        
        // svg.append("g")
        // .attr("transform", `translate(50, ${xAxisTranslate})`)
        // .call(x_axis)

        // render rectangle
        svg.selectAll("rect")
            .data(forecast)
            .enter()
            .append("rect")
            .attr("x", (d,i) => i * 65)
            .attr("y", (d) => svgHeight - yScale(d.max))
            .attr("width", barWidth/2)
            .attr("height", (d, i) => yScale(d.max))
            .attr("transform", (d, i) => {
                const translate = [barWidth * 1, 0]
                return `translate(${translate})`
            })
            .attr("fill", (d,i) => d.max < 21 ? '#9e0404' : '#5288AC')
        // Incluir labels
        svg.selectAll("text")
            .data(forecast)
            .enter()
            .append("text")
            .text(d => `${d.max}º`)
            .attr("x", (d, i) => i * 65 + (barWidth + 10))
            .attr("y", (d, i) => (svgHeight - d.max * 5) - 5)

    }, [data, barWidth, weatherResults])

    return (
        // <div id="graph" className={classes.container}>
            <svg ref={graphRef}></svg>
        // </div>
    )
}

export default BarChart;