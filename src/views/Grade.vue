<template>
  <div class="container">
    <h1>Examination Schedule</h1>
    <table class="table table-bordered">
      <tr>
         <th>ลำดับ</th>
        <th>StudentID</th>
        <th>SubjectID</th>
        <th>SubjectCode</th>
        <th>SubjectNameTH</th>
        <th>SubjectNameEN</th>
        <th>EduYearTH</th>
        <th>Grade</th>
      </tr>
      <tr v-for="(v, k,) in info" :key="v">
        <td>{{k+1}}</td>
        <td>{{(v.StudentID)}}</td>
        <td>{{(v.SubjectID)}}</td>
        <td>{{v.SubjectCode}}</td>
        <td>{{v.SubjectNameTH}}</td>
          <td>{{v.SubjectNameEN}}</td>
            <td>{{v.EduYearTH}}</td>
        <td>{{v.Grade}}</td>

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
        StudentID:'',
        SubjectID:'',
        SubjectCode:'',
        SubjectNameTH:'',
        SubjectNameEN:'',
        EduYearTH:'',
        EduTerm:'',
        Grade:''
       
      }
    };
  },
  mounted() {
    var self = this;

    axios
      .get("https://sispsu.herokuapp.com/api/grade/5930213034/")
      .then(function(response) {
        console.log(JSON.stringify(response.data.data));
        self.info = response.data.data;
      });
  }
};
</script>