import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const BarChart = ({title,seriesData}) => {
    const chartRef = useRef(null)
    useEffect(() => {
        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: title
            },
            xAxis: {
                type: 'category',
                data: ['Vue', 'React', 'Angular']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: seriesData,
                    type: 'bar'
                }
            ]
        };
        option && myChart.setOption(option);
    })
    return (
        <div ref={chartRef} id='main' style={{width: 500,height: 400}}></div>
    )
}
export default BarChart