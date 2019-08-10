<template>
  <div class="container">
    <h1>Examination Schedule</h1>
    <table class="table table-bordered">
      <tr>
        <th>ลำดับ</th>
        <th>วันที่</th>
        <th>เริ่ม</th>
        <th>สิ้นสุด</th>
        <th>ชื่อวิชา</th>
        <th>ห้องสอบ</th>
      </tr>
      <tr v-for="(v, k,) in info" :key="v">
        <td>{{k+1}}</td>
        <td>{{(v.ExamDate)}}</td>
        <td>{{(v.From)}}</td>
        <td>{{v.To}}</td>
        <td>{{v.SubjectNameTH}}</td>
        <td>{{v.ExamRooms.toString()}}</td>
      </tr>
      <!-- <div v-for="(v, k,) in info" :key="v">
            <h2>{{k}} {{(v)}}  </h2>
             
            <hr>
      </div>-->
    </table>
  </div>
</template>

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

