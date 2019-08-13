<template>
  <div class="table">
    <b-container fluid>
      <b-row>
        <b-col class="head">1/2562</b-col>
      </b-row>
      <div v-for="(v) in info" :key="v" >
        <b-row class="test">
          <b-col cols="4" class="col1">
            <b-row>
              <b-col class="datetime1">
                <div class="sjtime">{{(v.From)}}</div>
                <div class="sjtime">{{(v.To)}}</div>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="8">
            <b-row>
              <b-col class="subject1">
                <div class="sjname">{{(v.SubjectNameEN)}}</div>
                <div class="sjdate">ExamDate : {{(v.ExamDate)}}</div>
                <div class="sjroom">ROOM : {{(v.ExamRooms.toString())}}</div>
                <div class="sjcode">SubjectCode : {{(v.SubjectCode)}}</div>
                <div class="sjsection">SectionCode : {{(v.SectionCode)}}</div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
* {
  font-family: 'Open Sans', sans-serif;
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
  /* background-color: ${color}; */
  background-color: rgb(194, 238, 200);
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
  size: 18px;
}
.col1 {
  border-right: 2px solid orange;
}
.sjname {
  font-size: 18px;
  font-weight: bold;
  color: chocolate;
}
.sjdate {
  font-size: 18px;
}
.sjcode {
  font-size: 18px;
}
.sjtime {
  font-size: 20px;
}
.sjsection {
  font-size: 18px;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {
        ID: "",
        SectionOfferID: "",
        EduYearTH: "",
        EduTerm: "",
        SubjectCode: "",
        SubjectNameTH: "",
        SubjectNameEN: "",
        SectionCode: "",
        ExamDate: "",
        From: "",
        To: "",
        ExamRooms: "",
        ExamDateType: ""
      }
    };
  },
  mounted() {
    var self = this;

    axios
      .get("https://sispsu.herokuapp.com/api/examschedule/5930213034/2561/2/M")
      .then(function(response) {
        console.log(JSON.stringify(response.data.data));
        self.info = response.data.data;
      });
  }
};
</script>
