console.log("-index-v2.js-");



console.log('-index-v1.js');

let clock11 = document.getElementById('clock-11')
let clock22 = document.getElementById('clock-22')
let clock33 = document.getElementById('clock-33')

/*
    <div className="card">
        <div className="card-header">${timeZone}</div>
        <div className="card-body">
            <span className="badge badge-dark">
                ${new Date().toLocaleTimeString('en-US', { timeZone })}
            </span>
        </div>
    </div>
*/

function NewClock(props) {
    const { timeZone } = props;

    // let div1 = React.createElement('div', { className: 'card-header' }, timeZone)
    // let span = React.createElement('span', { className: 'badge badge-dark' }, new Date().toLocaleTimeString('en-US', { timeZone }))
    // let div2 = React.createElement('div', { className: 'card-body' }, span)
    // let div = React.createElement('div', { className: 'card' }, div1, div2)
    // return div;

    // or 

    //  => template syntax = JSX
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge badge-dark">
                    {new Date().toLocaleTimeString('en-US', { timeZone })}
                </span>
            </div>
        </div>
    )

}

setInterval(() => {
    // ReactDOM.render(NewClock({ timeZone: 'Asia/Kolkata' }), clock11)
    // ReactDOM.render(NewClock({ timeZone: 'Asia/Dubai' }), clock22)
    // ReactDOM.render(NewClock({ timeZone: 'America/New_york' }), clock33)

    // or

    ReactDOM.render(<NewClock timeZone='Asia/Kolkata' />, clock11)
    ReactDOM.render(<NewClock timeZone='Asia/Dubai' />, clock22)
    ReactDOM.render(<NewClock timeZone='America/New_york' />, clock33)

}, 1000);