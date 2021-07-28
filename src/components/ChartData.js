import React, {useState, useEffect} from 'react'
import  {Bar}  from 'react-chartjs-2';

function ChartData() {
        const [power, setPower] = useState([]);
        const [formValue, setFormValue] = useState('')
        const [graphDate, setGraphData] = useState([])

        // const powerVals = ([
        //         {
        //                 "power_id": "2015",
        //                 "power_values": {
        //                         "q1": {
        //                                 "AvaliableGen": '6262.19',
        //                                 "PeakGen": '3847',
        //                                 "Generation": '3466.34',
        //                                 "ConstGas": '1777.04',
        //                                 "ConstWater": '434',
        //                                 "ConstLoad": '23',
        //                                 "ConstTransmission": '35.39',
        //                                 "TotalConsGen": "1913.55"
        
        //                         },
        //                         "q2": {
        //                                 "AvaliableGen": '6885.21',
        //                                 "PeakGen": '3419.49',
        //                                 "Generation": '3053.43',
        //                                 "ConstGas": '2313.04',
        //                                 "ConstWater": '530.05',
        //                                 "ConstLoad": '54',
        //                                 "ConstTransmission": '125.11',
        //                                 "TotalConsGen": "2969.71"
        
        //                         },"q3": {
        //                                 "AvaliableGen": '6857.08',
        //                                 "PeakGen": '4445.04',
        //                                 "Generation": '3998.58',
        //                                 "ConstGas": '755.85',
        //                                 "ConstWater": '120.82',
        //                                 "ConstLoad": '1153.43',
        //                                 "ConstTransmission": '198.85',
        //                                 "TotalConsGen": "2201.59"
        
        //                         },"q4": {
        //                                 "AvaliableGen": '6455.15',
        //                                 "PeakGen": '4311.44',
        //                                 "Generation": '3897.59',
        //                                 "ConstGas": '1325.06',
        //                                 "ConstWater": '17.51',
        //                                 "ConstLoad": '195.69',
        //                                 "ConstTransmission": '213.76',
        //                                 "TotalConsGen": "1670.43"
        
        //                         },
        //                 },
        //         },
        //         {
        //                 "power_id": "2016",
        //                 "power_value":  {
        //                         "q1": {
        //                                 "AvaliableGen": '6559.62',
        //                                 "PeakGen": '4184.52',
        //                                 "Generation": '3805.59',
        //                                 "ConstGas": '2043.51',
        //                                 "ConstWater": '34.84',
        //                                 "ConstLoad": '66.01',
        //                                 "ConstTransmission": '248.50',
        //                                 "TotalConsGen": "2268.20"

        //                         },"q2": {
        //                                 "AvaliableGen": '7035.18',
        //                                 "PeakGen": '3075.03',
        //                                 "Generation": '2627.92',
        //                                 "ConstGas": '3518.46',
        //                                 "ConstWater": '343.53',
        //                                 "ConstLoad": '16.30',
        //                                 "ConstTransmission": '280.81',
        //                                 "TotalConsGen": "4003.25"

        //                         },"q3": {
        //                                 "AvaliableGen": '7468.26',
        //                                 "PeakGen": '3498.76',
        //                                 "Generation": '3160.20',
        //                                 "ConstGas": '3553',
        //                                 "ConstWater": '31.76',
        //                                 "ConstLoad": '184.00',
        //                                 "ConstTransmission": '349.32',
        //                                 "TotalConsGen": "3950.21"

        //                         },"q4": {
        //                                 "AvaliableGen": '7824.48',
        //                                 "PeakGen": '3864.58',
        //                                 "Generation": '3467.81',
        //                                 "ConstGas": '3419.66',
        //                                 "ConstWater": '15.44',
        //                                 "ConstLoad": '133.36',
        //                                 "ConstTransmission": '199.86',
        //                                 "TotalConsGen": "3681.47"

        //                         },
        //                 } 
        //         }
        // ])
        
        // let powerNum = [];
        // let powerOther = []
        useEffect(() => {
                
                fetch("/power/").then(res => {
                        if(res.ok){
                                return res.json()
                        };

                        // for(const dataObj of res.data.data){
                        // powerNum.push(parseInt(dataObj.q1))
                        // }
                }).then(jsonRes => {setPower(jsonRes.powerList)
                        jsonRes.powerList.forEach(result =>{
                                if(result.id === '2015'){
                                        result.powerQs.forEach(newStuff => {graphDate.push(newStuff.AvaliableGen)})
                                        // graphDate.push(result.powerQs.forEach((new) => {}))}
                                }}
                        )
                
                })
                // .then(data => data.powerList.forEach(result =>{
                //         if(result.id === '2015'){
                //                 graphDate.push(result.powerQs)}
                //         }
                //         ))
                // console.log(power)
        }, [])

        console.log('graphDate', graphDate)


        // const filterPower =
        //         power.filter(p => p.power_id === formValue)
        
        // const [display, setDisplay] = useState([filterPower])

        // console.log('display', display)

        const handleChange = e => {
                setFormValue(e.target.value)
                setGraphData([])
                console.log(e.target.value)
                console.log('power', power)
                power.forEach(result =>{
                        console.log('formValue', formValue)
                        result.powerQs.forEach(newStuff => {graphDate.push(newStuff.AvaliableGen)})}
                        // if(result.id === 2016){
                        //         result.powerQs.forEach(newStuff => {graphDate.push(newStuff.AvaliableGen)})
                        //         // graphDate.push(result.powerQs.forEach((new) => {}))}

                                
                        // }}

                        
                )
        }

        const handleSubmit = e => {
                e.preventDefault();
                setFormValue(formValue)
                console.log('formValue', formValue)
                

                // setDisplay(filterPower)
                
                
        }

        console.log(power)
        // console.log(powerNum)

        const data = {
                labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
                datasets: [
                  {
                    //label: '# of Votes',
                    data: graphDate,
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              };
              
              const options = {
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              };

        

        

        



        

        return (
                <div>   <form action="">
                                <select name="formValue" value={formValue} onChange={handleChange} id="">
                                        <option value="2016">2016</option>
                                        <option  value="2015">2015</option>
                                </select>
                                
                        </form>
                        {
                         
                                //power.filter(p => p.id === formValue).map(k => <li>{k.powerQs.ConstGas}</li>)
                                // powerVals.filter(p => p.power_id === formValue).map((k, i) =>
                                //         <div key={i}>
                                //                 {
                                //                         k.power_value.map(q => <li>{q.q1.map()}</li>)
                                //                 }
                                //         </div>

                                // )

                                
                        }

                        <Bar data={data} options={options}/>
                </div>
        )
}

export default ChartData
