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
      </tr>
      <tr v-for="(v, k,) in enrollg" :key="v">
        <td>{{k+1}}</td>
        <td>{{(v.StudentID)}}</td>
        <td>{{(v.EduYearTH)}}</td>
        <td>{{(v.SubjectNameTH)}}</td>
        <td>{{v.SubjectNameEN}}</td>
        <td>{{v.EduTerm}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
   
    data(){
         return {
        id: this.$route.params.id ,
        blog : [],
        props:['id'],
enrollg: {
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
         }
         
    
    },
    created(){
        var geturl = this
        axios
      .get("https://sispsu.herokuapp.com/api/enroll/"+this.id)
      .then(function(response) {
        console.log("Enroll5555+"+JSON.stringify(response.data.data));
        geturl.enrollg = response.data.data;
      });
    
    }

}
</script>   