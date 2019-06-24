<template>
  <div class="table">
    <b-container fluid>
      <b-row>
        <b-col class="head">2/2562</b-col>
      </b-row>

      <b-row class="test">
        <b-col cols="4" class="col1">
          <b-row>
            <b-col class="datetime1">
              <div class ="sjtime">13:00 PM</div>
               <div class ="sjtime">16:00 PM</div>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="8">
          <b-row>
            <b-col class="subject1">
                <div class ="sjname">ASEAN STUDENT</div>
                <div class ="sjdate"> Date :27/4/2019</div>
                <div class ="sjroom">Room :5303A</div>  
                <div class ="sjcode">Subject Code: 975-300</div>  
                <div class ="sjsection">Section: 1</div>  
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="test">
        <b-col cols="4" class="col1">
          <b-row>
            <b-col class="datetime1">
              <div class ="sjtime">13:00 PM</div>
               <div class ="sjtime">16:00 PM</div>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="8">
          <b-row>
            <b-col class="subject1">
                <div class ="sjname">DATA MINING</div>
                <div class ="sjdate"> Date :1/5/2019</div>
                <div class ="sjroom">Room :5303A</div>  
                <div class ="sjcode">Subject Code: 140-452</div>  
                <div class ="sjsection">Section: 1</div>  
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');
*{
    font-family: 'Roboto Condensed', sans-serif;
}
.head {
  background-color: rgb(219, 215, 215);
  /* margin-left: 20px;
  margin-right: 20px; */
    font-weight: bold;
  text-align: left;
}
.test {
  border: 5px;
  border-block-color: black;
  background-color: rgb(233, 225, 214);
  /* margin-left: 5px;
  margin-right: 5px; */
  margin-top: 10px;
}
.subject1 {
  text-align: left;
}
.datetime1 {
  text-align: center;
  margin-top: 28px;
}
.date {
  size: 10px;
}
.col1 {
  border-right: 2px solid orange;
}
.sjname{
    font-size: 18px ;
    font-weight: bold;
}
.sjdate{
    font-size: 16px;
}
.sjcode{
    font-size: 14px;
}
.sjtime{
     font-size: 20px;
}
.sjsection{
     font-size: 13px;
}
</style>

