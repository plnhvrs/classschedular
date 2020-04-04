<template>
<header class="masthead">
<div class="container d-flex flex-column">
<h3>Users</h3>
<br>
<p>
    <b-button  variant="outline-primary"  v-b-modal="'userEdit'"><b-icon icon="person-plus"></b-icon> New user</b-button>
<User></User>
</p>
<br>
    <b-table id="classes" :fields="fields" :items="users">
        <template v-slot:cell(edit)="">
            <a href=""><b-icon icon="pencil"></b-icon></a>
        </template>
        <template v-slot:cell(delete)="">
            <a href=""><b-icon icon="trash" variant="danger"></b-icon></a>
        </template>

    </b-table>
</div>
</header>
</template>

<script>
import User from './User.vue'

export default {
  name: 'Users',
  components:{
    User
  },
  data: function(){
  return{
         fields: ['edit','id','name','delete'],
         users: [{ id: 1, name: 'Pauline'},{ id: 2, name: 'Christophe'}]
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
