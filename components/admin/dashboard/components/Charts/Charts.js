import React from 'react'
import { Doughnut, Bar } from 'react-chartjs-2'
import ChartsCard from '../../../ui/cards/ChartsCard'
import classes from './Charts.module.css'

const Charts = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['#B21F00', '#DA932C', '#66B92E', '#00A6B4', '#6800B4'],
        hoverBackgroundColor: ['#501800', '#4B5000', '#175000', '#003350', '#35014F'],
        borderWidth: 0,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  return (
    <div className={classes.main__charts}>
      <ChartsCard>
        <Doughnut
          data={data}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </ChartsCard>

      <ChartsCard>
        <Doughnut
          data={data}
          options={{
            title: {
              display: true,
              text: 'Average Rainfall per month',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </ChartsCard>

      <ChartsCard>
        <Bar
          data={data}
          options={{
            responsive: true,
            title: { text: 'THICCNESS SCALE', display: true },
            scales: {
              yAxes: {
                ticks: {
                  beginAtZero: true
                }
              }
            }
          }}
        />
      </ChartsCard>
    </div>
  )
}

export default Charts
