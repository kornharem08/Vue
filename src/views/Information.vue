<template>
<div class="aa">
<Test></Test>
<User></User>
  </div>
</template>

<script>
import Test from '@/components/Test.vue'
import User from '@/components/User.vue'

export default {
  name: 'aa',
  components: {
    Test, User
  }
  
}
</script>