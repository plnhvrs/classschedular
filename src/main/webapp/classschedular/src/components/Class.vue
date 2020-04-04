<template>
    <!-- Modal -->

    <b-modal id="classEdit" title="Class details:">
        <div>
            <b-form>
                <label for="class-name">Class name:</label>
                <b-form-input
                        id="class-name"
                        v-model="name"
                        type="text"
                        required
                        placeholder="Enter class (series) name">
                </b-form-input>
            </b-form>
        </div>
    </b-modal>
</template>


<script>
export default {
  name: 'Class',

  data: function(){
  return{
         id: 1, name: 'Paardrijden vrijdag 11' , date: 'Friday', start: "11:00", end: '12:00', repeat: 'Weekly', userRoles: 'Gevorderd'
}
}
}



</script>