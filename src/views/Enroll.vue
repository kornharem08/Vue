<template>
  <div class="container">
    <h1>Enroll</h1>
    <table class="table table-bordered">
      <tr>
        <th>ลำดับ</th>
        <th>SubjectCode</th>
        <th>EduYearTH</th>
        <th>SubjectNameTH</th>
        <th>SubjectNameEN</th>
        <th>Credit</th>
        <th>EnrolTypeID</th>
      </tr>
      <tr v-for="(v, k,) in info" :key="v">
        <td>{{k+1}}</td>
        <td>{{(v.SubjectCode)}}</td>
        <td>{{(v.EduYearTH)}}</td>
        <td>{{(v.SubjectNameTH)}}</td>
        <td>{{v.SubjectNameEN}}</td>
        <td>{{v.Credit}}</td>
        <td>{{v.EnrolTypeID}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {
        EnrollID: "",
        StudentID: "",
        EduYearTH: "",
        EduTerm: "",
        EnrollOrder: "",
        SubjectCode: "",
        SubjectNameTH: "",
        SubjectNameEN: "",
        SectionCode: "",
        Amount: "",
        Credit: "",
        EnrollMethod: "",
        WithdrawalType: "",
        EnrolTypeID: "",
        EnrolTypeDesc: "",
        EnrollStudyTypeID: "",
        EnrollStudyTypeDesc: "",
        EnrollStatusID: "",
        EnrollStatusDesc: ""
      }
    };
  },
  mounted() {
    var self = this;

    axios
      .get("https://sispsu.herokuapp.com/api/enroll/5930213034/")
      .then(function(response) {
        console.log(JSON.stringify(response.data.data));
        self.info = response.data.data;
      });
  }
};
</script>

<style>
  tr:nth-child(even) { background-color:  rgb(220,220,220); }
    tr:nth-child(odd) { background-color:#FFFFFF; }
    tr:first-child {background-color:#FFFFFF;}
</style>