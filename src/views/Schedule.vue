
<template>
    <div class="schedule">
    <table>
      <tr>
        <th>Day</th>
        <th>8.00-9.00</th>
        <th>9.00-10.00</th>
        <th>10.00-11.00</th>
        <th>11.00-12.00</th>
        <th>12.00-13.00</th>
        <th>13.00-14.00</th>
        <th>14.00-15.00</th>
        <th>15.00-16.00</th>
        <th>16.00-17.00</th>
        <th>17.00-18.00</th>
      </tr>

   <tr v-for="(day,index) in DayArr" :key="day">
        <td>{{day}}</td>

       <td v-for="(column,colIndex) in colArr[index].length" :key="column" :colspan="colArr[index][colIndex]" :style="styleList[index][colIndex]" > </td> 
        <!-- {{colArr[index]}} -->
     
      </tr>
       
    </table>
  </div>
</template>

<script>


export default {
    
/* eslint-disable */
    data(){
        return {
            colArr,
            DayArr,
            styleList
        }
    }


}


var dayTime = [
  {
    Day: "MON",
    TimeStart: "8.30",
    TimeEnd: "10.30"
  },
  {
    Day: "MON",
    TimeStart: "13.30",
    TimeEnd: "15.00"
  },
  {
    Day: "TUE",
    TimeStart: "11.00",
    TimeEnd: "13.00"
  },
  {
    Day: "WED",
    TimeStart: "8.00",
    TimeEnd: "10.00"
  },
  {
    Day: "WED",
    TimeStart: "11.00",
    TimeEnd: "13.30"
  },
  {
    Day: "WED",
    TimeStart: "14.00",
    TimeEnd: "15.00"
  },
  {
    Day: "THU",
    TimeStart: "8.00",
    TimeEnd: "9.00"
  },
   {
    Day: "THU",
    TimeStart: "14.00",
    TimeEnd: "15.00"
  },
  {
    Day: "FRI",
    TimeStart: "12.00",
    TimeEnd: "13.30"
  },
  {
    Day: "SAT",
    TimeStart: "12.00",
    TimeEnd: "13.30"
  },
];
var posdayTime = 0;
var DayArr = ['MON','TUE','WED','THU','FRI','SAT','SUN']
var TimeStart = dayTime[posdayTime].TimeStart;
var TimeEnd = dayTime[posdayTime].TimeEnd;
var dayTimeLength = dayTime.length
let colArr =[[],[],[],[],[],[],[]]
let styleList =[[],[],[],[],[],[],[]]
initCreate();

function initCreate(){
    let checkstarttime 
    let endtime
    let checkHalf
    for(let i =0 ;i< 7;i++){

        
         for(let j =1;j<11;j++){
             checkstarttime = checkStartTime()

            if(checkstarttime == j && dayTimeLength != 0){
           
            if(dayTime[posdayTime].Day == DayArr[i]){
             endtime = checkEndTime(checkstarttime)
             checkHalf = checkHalfTime(endtime)
             colArr[i].push(endtime+1)
             styleList[i].push(checkHalf)
             dayTimeLength--
             j += endtime

              if(posdayTime < dayTime.length - 1){

                posdayTime += 1
                TimeStart = dayTime[posdayTime].TimeStart
                TimeEnd = dayTime[posdayTime].TimeEnd

              }

            }else{
              posdayTime = 0
            }

            }else{
               colArr[i].push(0)
               styleList[i].push(`border:solid; background-color:white; border:solid;`)
            }


         }
    }
   

    console.log(colArr)
}



 function checkHalfTime(col){
     
        
        let timeStart = TimeStart.slice(-2)
        let timeEnd = TimeEnd.slice(-2)
        let style
        if(timeStart == 30 && timeEnd == 30){
            let halfF = 50/(col+1)
            let halfs = 100-halfF
            style = ` border:solid; background: linear-gradient(to right, white ${halfF}%, red ${halfF}%, red ${halfs}%, white ${halfF}%);`
            
        }
        else if(timeStart == 30){
            let halfF = 50/(col+1)
            style = `border:solid; background-color:red; background: linear-gradient(to right, white ${halfF}%, red ${halfF}%); `;
        }else if(timeEnd == 30){
            let halfF = 50/(col+1)
            style = `border:solid; background-color:red; background: linear-gradient(to left, white ${halfF}%, red ${halfF}%); `;
        }
        else{
            style = `border:solid; background-color:red; border:solid;`;
        }

      return style

    }

function checkStartTime() {
  let num;

  if (TimeStart >= 8.0 && TimeStart < 9.0) {
    num = 1;
  } else if (TimeStart >= 9.0 && TimeStart < 10.0) {
    num = 2;
  } else if (TimeStart >= 10.0 && TimeStart < 11.0) {
    num = 3;
  } else if (TimeStart >= 11.0 && TimeStart < 12.0) {
    num = 4;
  } else if (TimeStart >= 12.0 && TimeStart < 13.0) {
    num = 5;
  } else if (TimeStart >= 13.0 && TimeStart < 14.0) {
    num = 6;
  } else if (TimeStart >= 14.0 && TimeStart < 15.0) {
    num = 7;
  }
  return num;
}

function checkEndTime(col) {
  let num;
  let col2 = 0;
  if (TimeEnd > 8.0 && TimeEnd <= 9.0) {
    num = 1;
  } else if (TimeEnd > 9.0 && TimeEnd <= 10.0) {
    num = 2;
  } else if (TimeEnd > 10.0 && TimeEnd <= 11.0) {
    num = 3;
  } else if (TimeEnd > 11.0 && TimeEnd <= 12.0) {
    num = 4;
  } else if (TimeEnd > 12.0 && TimeEnd <= 13.0) {
    num = 5;
  } else if (TimeEnd > 13.0 && TimeEnd <= 14.0) {
    num = 6;
  } else if (TimeEnd > 14.0 && TimeEnd <= 15.0) {
    num = 7;
  }
  col2 = num - col;

  return col2;
}


/* eslint-disable */

</script>
