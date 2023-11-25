export default function UserInput({initialState, handleChangeInvestment}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={initialState.initialInvestment} required onChange={(event) => handleChangeInvestment('initialInvestment', event.target.value)} />
                </p>

                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={initialState.annualInvestment} required onChange={(event) => handleChangeInvestment('annualInvestment', event.target.value)} />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={initialState.expectedReturn} required onChange={(event) => handleChangeInvestment('expectedReturn', event.target.value)} />
                </p>

                <p>
                    <label>Duration</label>
                    <input type="number" value={initialState.duration} required onChange={(event) => handleChangeInvestment('duration', event.target.value)} />
                </p>
            </div>
        </section >
    );
}