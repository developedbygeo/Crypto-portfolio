import { LineChart, Line } from 'recharts';

import LoadingSpinner from './UI/LoadingSpinner/LoadingSpinner';
import { SpinnerProps } from './UI/LoadingSpinner/LoadingSpinner.styled';
import { LineChartData } from '../shared/models/data.model';
import { Card } from '../components/UI/Card.styled';

type ChartProps = {
    type?: 'markets' | 'portfolio';
    data: LineChartData;
} & SpinnerProps;

const stonks = '#7AC231';
const notStonks = '#DA0A0A';

const Chart = ({ data, type = 'markets', alignSelf, justifySelf }: ChartProps) => {
    if ('current_price' in data) {
        const isPositive = data.priceChange24H > 0 ? stonks : notStonks;
        const { sevenDaySparkline } = data;

        return (
            <Card>
                <LineChart
                    width={400}
                    height={300}
                    data={sevenDaySparkline.price}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                    <Line type="monotone" dataKey="uv" stroke={isPositive} />
                </LineChart>
            </Card>
        );
    } else {
        return (
            <Card>
                <LoadingSpinner alignSelf={alignSelf} justifySelf={justifySelf} />
                <h3>There appears to be an error with the fetched data</h3>
                <p>Please try refreshing the browser.</p>
            </Card>
        );
    }
};

export default Chart;
