import React, {useState, useEffect} from 'react'
import  {Bar}  from 'react-chartjs-2';
import axios from 'axios'
import './style/style.css'

function ChartTest() {
        const [powerx, setPower] = useState([])
        const [formValue, setFormValue] = useState(2015)
        const [dataDisplay, setDataDisplay] = useState([]);
        const [ConstGas, setConstGas] = useState([])
        const [ConstLoad, setConstLoad] = useState([])
        const [ConstTransmission, setConstTransmission] = useState([])
        const [ConstWater, setConstWater] = useState([])
        const [Generation, setGeneration] = useState([])
        const [PeakGen, setPeakGen] = useState([])
        const [TotalConsGen, setTotalConsGen] = useState([])


        useEffect(() => {
                getData();
                
        }, [])

        
        const getData = async () => {
                try{
                        const res = await axios.get('/power/').then((data) => {
                                //console.log(data.data.powerList)
                                data.data.powerList.forEach(result =>{
                                        result.powerQs.forEach(newStuff => {
                                                if(result.id === 2015){
                                                        dataDisplay.push(newStuff.AvaliableGen);
                                                        ConstGas.push(newStuff.ConstGas);
                                                        ConstLoad.push(newStuff.ConstLoad);
                                                        ConstTransmission.push(newStuff.ConstTransmission)
                                                        ConstWater.push(newStuff.ConstWater)
                                                        Generation.push(newStuff.Generation)
                                                        PeakGen.push(newStuff.PeakGen)
                                                        TotalConsGen.push(newStuff.TotalConsGen)
                                                }
                                                })
                                                
                                        }) 
                                        setPower(data.data.powerList)
                        })
                        
                        
                                
                        
                        
                }catch(e){
                        console.error(e.message)
                }
        }


        



        const handleChange = (e) =>{
                setFormValue(e.target.value)
                handleAction(e.target.value)
                
                
        }

        const handleAction = (action) =>{
                let graphDate = []
                let gasDate=[]
                let LoadDate=[]
                let TransmissionDate=[]
                let WaterDate=[]
                let GenerationDate=[]
                let PeakGenDate=[]
                let TotalConsGen =[]

                powerx.forEach(result =>{
                        result.powerQs.forEach(newStuff => {
                                if(result.id === action){
                                        graphDate.push(newStuff.AvaliableGen);
                                        gasDate.push(newStuff.ConstGas)
                                        LoadDate.push(newStuff.ConstLoad)
                                        TransmissionDate.push(newStuff.ConstTransmission)
                                        WaterDate.push(newStuff.ConstWater)
                                        GenerationDate.push(newStuff.Generation)
                                        PeakGenDate.push(newStuff.PeakGen)
                                        TotalConsGen.push(newStuff.TotalConsGen)
                                }
                                })
                                
                        }) 
                        
                        setDataDisplay(graphDate) 
                        setConstGas(gasDate) 
                        setConstLoad(LoadDate)
                        setConstTransmission(TransmissionDate) 
                        setConstWater(WaterDate)
                        setGeneration(GenerationDate)
                        setPeakGen(PeakGenDate)
                        setTotalConsGen(TotalConsGen)


                        
                        console.log('peak', gasDate)
                        console.log(graphDate)   
        }

        return (
                <div className="reader_design">
                        <h2>Accessment Test</h2>
                        <p>Select A Year to Display Values</p>
                        <select name="formValue" value={formValue} onChange={handleChange} id="">
                                        <option value="2016">2016</option>
                                        <option  value="2015">2015</option>
                        </select>
                        {/* {handleAction(2015)} */}
                      <Bar data={{
                        labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
                        datasets: [
                          {
                            label: 'Average Avaliable Generation MW',
                            data: dataDisplay,
                            backgroundColor: 'red',
                            //borderWidth: 1,
                            barThickness: 12
                          },
                          {
                                  label: 'Avg. Constraint due to Gas MW',
                                  data: ConstGas,
                                  backgroundColor: 'orange',
                                  //borderWidth: 1,
                                  barThickness: 12
                                },
                                {
                                        label: 'Avg. Contraints due to Load rejection MW',
                                        data: ConstLoad,
                                        backgroundColor: 'yellow',
                                        //borderWidth: 1,
                                        barThickness: 12
                                      },
                                      {
                                        label: 'Avg. Constraint due to Transmission MW',
                                        data: ConstTransmission,
                                        backgroundColor: 'green',
                                        //borderWidth: 1,
                                        barThickness: 12
                                      },
                                      {
                                        label: 'Avg. Constraint due to Load Rejection MW',
                                        data: ConstWater,
                                        backgroundColor: 'blue',
                                        //borderWidth: 1,
                                        barThickness: 12
                                      },
                                      {
                                        label: 'Average Generation',
                                        data: Generation,
                                        backgroundColor: 'indigo',
                                        //borderWidth: 1,
                                        barThickness: 12
                                      },
                                      {
                                        label: 'Avg. Peak Generation MW',
                                        data: PeakGen,
                                        backgroundColor: 'violet',
                                        //borderWidth: 1,
                                        barThickness: 12
                                      },
                                      {
                                        label: 'Average Total Constrained Generation MW',
                                        data: TotalConsGen,
                                        backgroundColor: 'cyan',
                                        //borderWidth: 1,
                                        barThickness: 12
                                      },
                        ],
                        // datasets: [
                        //         {
                        //           //label: '# of Votes',
                        //           data: ConstGas,
                        //           backgroundColor: [
                        //             'rgba(65, 192, 192, 0.2)',
                        //           ],
                        //           borderWidth: 1,
                        //           barThickness: 12
                        //         },
                        //       ],
                      
                      }} 
                      
                      options={{
                        tooltips:{
                          mode:'index',
                          callbacks:{
                            label:function(toolTipItem){
                              return ("Revenue: $"+toolTipItem.value)
                            }
                          }
                
                        },
                        scales:{
                          xAxes:[
                            {
                              gridLines:{
                              color:'cyan'
                            },
                              scaleLabel:{
                                labelString:'Months',
                                display:true,
                                fontColor:'blue',
                                fontSize:20
                              },
                              ticks:{
                                fontColor:'green'
                              }
                            }
                          ],
                          yAxes:[
                          {
                            gridLines:{
                              color:'cyan'
                            },
                            scaleLabel:{
                                labelString:'Revenue',
                                display:true,
                                fontColor:'blue',
                                fontSize:20,
                              },
                            ticks:{
                              beginAtZero:true,
                              fontColor:'green',
                              
                            }
                          }
                          ]
                        }
                      }}>
                        </Bar>  
                </div>
        )
}

export default ChartTest
