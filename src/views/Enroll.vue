<template>
  <div class="container">
    <h1>Enroll</h1>
    <table class="table">
      <tr>
        <td>ลำดับ</td>
        <td>SubjectCode</td>
        <td>EduYearTH</td>
        <td>SubjectNameTH</td>
        <td>SubjectNameEN</td>
        <td>Credit</td>
        <td>EnrolTypeID</td>
      </tr>
      <tr v-for="(value, index,) in info" :key="index">
        <td>{{index+1}}</td>
        <td>{{(value.SubjectCode)}}</td>
        <td>{{(value.EduYearTH)}}</td>
        <td>{{(value.SubjectNameTH)}}</td>
        <td>{{value.SubjectNameEN}}</td>
        <td>{{value.Credit}}</td>
        <td>{{value.EnrolTypeID}}</td>
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
        // console.log(JSON.stringify(response.data.data));
        self.info = response.data.data;
      });
  }
};
</script>

<style>
  tr:nth-child(even) { background-color:  rgb(220,220,220,.5); }
    tr:nth-child(odd) { background-color:#FFFFFF,.5; }
    tr:first-child {background-color:#FFFFFF,.5;}
</style>