import BarChart from './components/BarChart';
const Home = () => {
    return (
        <div>
            <BarChart title={'三大框架满意度'} seriesData={[20,50,30]}/>
            <BarChart title={'三大框架市场占有'} seriesData={[40,50,20]}/>
        </div>
    )
}
export default Home