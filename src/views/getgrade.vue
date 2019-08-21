<template>
  <div class="container">
    <h1>Enroll</h1>
    <table class="table table-bordered">
      <tr>
        <th>ลำดับ</th>
        <th>SubjectCode</th>
        <th>SubjectNameEN</th>
        <th>ExamDate</th>
        <th>From</th>
        <th>To</th>
        <th>ExamRooms</th>
        
      </tr>
      <tr v-for="(v, k,) in info" :key="v">
        <td>{{k+1}}</td>
        <td>{{(v.SubjectCode)}}</td>
        <td>{{(v.SubjectNameEN)}}</td>
        <td>{{(v.ExamDate)}}</td>
        <td>{{v.From}}</td>
        <td>{{v.To}}</td>
        <td>{{v.ExamRooms.toString()}}</td>
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
        year:this.$route.params.year,
        term:this.$route.params.term,
        mf:this.$route.params.mf,
        blog : [],
        props:['id','year','term','mf'],
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
         }
         
    
    },
    created(){
        var getgrade = this
        axios
      .get("https://sispsu.herokuapp.com/api/examschedule/"+this.id+"/"+this.year+"/"+this.term+"/"+this.mf)
      .then(function(response) {
        console.log("Enroll5555+"+JSON.stringify(response.data.data));
        getgrade.info = response.data.data;
      });
    
    }

}
</script>   