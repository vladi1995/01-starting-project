import { calculateInvestmentResults } from '../util/investment';
import { formatter } from '../util/investment';

export default function Results({ initialState }) {
    const arrOfData = calculateInvestmentResults(initialState);
    let totalInterest = 0;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {arrOfData.map(row => {
                    totalInterest += row.interest;
                    console.log(totalInterest);
                    return <tr key={row.year}>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(row.valueEndOfYear - totalInterest)}</td>
                    </tr>;
                })}
            </tbody>
        </table>
    );
}