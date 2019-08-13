<template>
  <!-- <div class="container"> -->
  <!-- <h1>Examination Schedule</h1> -->
  <table class="table ">
<tr>
        <!-- <th>ลำดับ</th>
        <th>StudentID</th>  -->
        <!-- <th>SubjectID</th> -->
        <td class = "sbjname">SubjectNameEN</td>
        <td>SubjectCode</td>
        <td>Credit</td>
        <!-- <th>SubjectNameTH</th> -->

        <!-- <th>EduYearTH</th> -->
        <td>Grade</td>
  </tr>

  <template v-for="(v) in info" >
  <tr v-if="(v.EduYearTH == '2559')" :key="v">
       
  <!-- <tr v-for="(v, k,) in info" :key="v"> -->
 <!-- <td>{{k+1}}</td>
  <td>{{(v.StudentID)}}</td> -->
  <!-- <td>{{(v.SubjectID)}}</td> -->
  <td class = "sbjname">{{v.SubjectNameEN}}</td> 
  <td>{{v.SubjectCode}}</td>
  <!-- <td>{{a.Credit}}</td> -->
  <!-- <td>{{v.SubjectNameTH}}</td> -->
  
  <!-- <td>{{v.EduYearTH}}</td> -->
  <td>{{v.Grade}}</td>
</tr>
  </template>
  <!-- <div v-for="(v, k,) in info" :key="v">
            <h2>{{k}} {{(v)}}  </h2>
             
            <hr>
  </div>-->
  </table>
  <!-- <b-container fluid >
 
    <b-row >
      <b-col class="head" cols="6">Subject Name</b-col>
      <b-col id="currID" class="head1" cols="3">Credit</b-col>
      <b-col id="currID" class="head1" >Grade</b-col>
    </b-row>
<template v-for="(v ) in info" >
    <b-row class="rowhead" v-if="(v.EduYearTH == '2559')" :key="v">
      <b-col  class="text" cols="7">{{v.SubjectNameEN}}</b-col>
      <b-col  class="" cols="3">{{v.SubjectCode}}</b-col>
      <b-col  class="" >{{v.Grade}}</b-col>
      </b-row>
    </template>
      
  </b-container> -->
  <!-- </div> -->


</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {
        StudentID: "",
        SubjectID: "",
        SubjectCode: "",
        SubjectNameTH: "",
        SubjectNameEN: "",
        EduYearTH: "",
        EduTerm: "",
        Grade: ""
      },
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
    };
  },
  mounted() {
   
    var self = this;
    var enroll = this;
    axios
      .get("https://sispsu.herokuapp.com/api/grade/5930213034/")
      .then(function(response) {
        console.log(JSON.stringify(response.data.data));
        self.info = response.data.data;
      });
      axios
      .get("https://sispsu.herokuapp.com/api/enroll/5930213034/")
      .then(function(response) {
        console.log("Enroll5555+"+JSON.stringify(response.data.data));
        enroll.enrollg = response.data.data;
      });



  },

};

</script>

<style >
.head {
  background-color: rgb(135, 216, 209);
  /* margin-left: 20px;
  margin-right: 20px; */
  /* font-weight: bold; */
  text-align: left;
}
.text{
text-align: left;
text-overflow: ellipsis;
}
.rowhead{

}
.head1{
   background-color: rgb(158, 216, 209);
   /* font-weight: bold; */
}
.head2{
  background-color: red;
}
tr:nth-child(even) { background-color:  rgb(220,220,220); }
  tr:nth-child(odd) { background-color:#FFFFFF; }
    tr:first-child {background-color:#FFFFFF;}
    .sbjname{
      text-align: left;
    }
</style>

