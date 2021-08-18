import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from 'react-redux';

export default function Home() {
    const averages = useSelector((state) => state.averageState.mnthlyAvrgs);
    const twoday = useSelector((state) => state.dayState.days)
    const recentforecast = (twoday[0].slice(-1)[0]);
    console.log("today hour1", recentforecast["hourly1"][0])
    const current = useSelector((state) => state.currentState.current)
    const mostcurrent = current[0].slice(-1)[0]
    console.log("current", mostcurrent)

    const options = {
      title: {
        text: "Monthly Averages",
      },
      chart: {
        backgroundColor: "#FCFFC5",
        type: "line",
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      series: [
        { name: "Rainfall (mm)",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          },
          {
              name: "Avgmin (F)",
              data: [10, 11, 12, 12, 12, 1, 3, 4, 5, 8, 1, 23]
          },
          {
              name: "Absmax (F)",
              data: [19, 78, 43, 56, 12, 13, 48, 33, 23, 1, 9, 100]
          }
      ],
    };

    const todayforecast = {
      title: {
        text: `${recentforecast["date1"]}`,
      },
      chart: {
        backgroundColor: "#FCFFC5",
        type: "line",
        },
        xAxis: {
            categories: [
                "12am",
                "3am",
                "6am",
                "9am",
                "12pm",
                "3pm",
                "6pm",
                "9pm"
            ]
        },
        series: [
            {
                name: "Today",
                data: [1, 2, 3, 4, 5, 6, 7, 8]
            },
        ]
    };
    const tomorrowforecast = {
      title: {
        text: `${recentforecast["date2"]}`,
      },
      chart: {
        backgroundColor: "#FCFFC9",
        type: "line",
      },
      xAxis: {
        categories: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
      },
      series: [
        {
          name: "Tomorrow",
          data: [1, 2, 3, 4, 5, 6, 7, 8],
        },
      ],
    };
    return (
      <div>
        <h1>hello</h1>
        <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
          <br></br>
          <HighchartsReact highcharts={Highcharts} options={todayforecast} />
                <br></br>

                <br></br>
          <HighchartsReact highcharts={Highcharts} options={tomorrowforecast} />
        </div>
      </div>
    );
}
