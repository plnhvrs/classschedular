<template>
<header class="masthead bg-primary text-white">
<div class="container d-flex flex-column">
<h3>Classes</h3>
<br>
<table id="classes">
 <thead>
    <tr>
      <th>Name</th>
      <th>Day</th>
      <th>Start date/time</th>
      <th>End date/time</th>
      <th>Repeat?</th>
      <th>User roles</th>
    </tr>
  </thead>
    <tbody>
      <tr v-for="row in rows" v-bind:key="row.id">
        <td>{{row.name}}</td>
        <td>{{row.date}}</td>
        <td>{{row.start}}</td>
        <td>{{row.end}}</td>
        <td>{{row.repeat}}</td>
        <td>{{row.userRoles}}</td>
      </tr>
    </tbody>
</table>
</div>
</header>
</template>

<script>


export default {
  name: 'Classes',
  data: function(){
  return{
         rows: [{ id: 1, name: 'Paardrijden vrijdag 11' , date: 'Friday', start: "11:00", end: '12:00', repeat: 'Weekly', userRoles: 'Gevorderd' }]
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
