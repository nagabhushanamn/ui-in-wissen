

console.log('-index-v1.js');

let clock1 = document.getElementById('clock-1')
let clock2 = document.getElementById('clock-2')
let clock3 = document.getElementById('clock-3')

function Clock(props) {
    const { timeZone } = props;
    return `
        <div class="card">
            <div class="card-header">${timeZone}</div>
            <div class="card-body">
                <span class="badge badge-dark">
                    ${new Date().toLocaleTimeString('en-US', { timeZone })}
                </span>
            </div>
        </div>
    `
}


setInterval(() => {
    clock1.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
    clock2.innerHTML = Clock({ timeZone: 'Asia/Dubai' })
    clock3.innerHTML = Clock({ timeZone: 'America/New_york' })
}, 1000);