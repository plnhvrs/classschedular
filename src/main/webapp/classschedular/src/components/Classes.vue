<template>
    <header class="masthead">
        <div class="container d-flex flex-column">
            <h3>Classes</h3>
            <br>
            <p>
                <b-button variant="outline-primary" v-b-modal="'classEdit'">
                    <b-icon icon="plus-circle"></b-icon>
                    New class (series)
                </b-button>
                <Class></Class>
            </p>
            <br>
            <b-table id="classes" :items="rows" :fields="fields">
                <template v-slot:cell(edit)="">
                    <a href="">
                        <b-icon icon="pencil"></b-icon>
                    </a>
                </template>
                <template v-slot:cell(delete)="">
                    <a href="">
                        <b-icon icon="trash" variant="danger"></b-icon>
                    </a>
                </template>
            </b-table>
        </div>
    </header>
</template>

<script>
import Class from './Class.vue';

export default {
  name: 'Classes',
  components:{
    Class
  },
  data: function(){
  return{
            fields: ['edit','id','name', 'date','start','end', 'repeat', 'userRoles','delete'],
         rows: [{ id: 1, name: 'Paardrijden vrijdag 11' , date: 'Friday', start: "11:00", end: '12:00', repeat: 'Weekly', userRoles: 'Gevorderd' }]
}
}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
