class ProgressTable extends Component {
    constructor(props, parentNode, params) {
        super(props, parentNode, params);
        this.html = 
        `<div class="progress-table">
            <span>Progress table</span><br>
            <canvas id="myChart"></canvas>
        </div>`;
    }
    chartJSctx() {
        let ctx = document.getElementById('myChart').getContext('2d');
        let chart = new Chart(ctx, {

            type: 'line',

            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [1243, 1343, 2415, 1454, 400, 0] 
                }]
            },

            options: {}
        });
    }
    
    render() {
        let parentNode = document.getElementById(this.parentNode);
        parentNode.insertAdjacentHTML('beforeend', this.html);
        console.log(parentNode);
        this.chartJSctx();
    }
}