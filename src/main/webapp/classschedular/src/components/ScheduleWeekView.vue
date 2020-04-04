<template>

        <div class="container d-flex flex-column">
            <table id="schedule" class="">
                <thead>
                <tr>
                    <th v-for="day in days" v-bind:key="day.name" class="text-center"><p>{{ day.name }}</p></th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="row in classesMappedToTable" v-bind:key="row.index" class="table-secondary">
                        <template v-for="cls in row">

                            <td v-if="cls" v-bind:key="cls.id" v-on:click="manageClass(cls)" v-bind:class="getClass(cls)" class="schedule-block text-center" title="Click to manage">
                                <i>{{cls.time}}</i>
                                <br>
                                <h1 class="small">{{ cls.name }}</h1>
                                <template v-for="user in cls.users">
                                    <i v-bind:key="user.id" class="small"> {{user.name}}</i>
                                    <br v-bind:key="user.name">
                                </template>
                                <b-button v-if="canEnroll(cls)" v-bind:id="cls.id" pill  v-b-modal="'enroll'" variant="success" size="sm" class="m-2 float-right"><b-icon icon="person-plus"></b-icon></b-button>
                                <b-tooltip v-bind:target="cls.id" triggers="hover">
                                    I am tooltip <b>component</b> content!
                                </b-tooltip>
                                <b-button v-if="isEnrolled(cls)" pill  v-b-modal="'cancel'" variant="danger" size="sm" class="m-2 float-right"><b-icon  icon="person-dash"></b-icon></b-button>

                            </td>
                            <td v-else v-bind:key="cls" class=" no-cls">
                            </td>
                        </template>
                    </tr>


                </tbody>
            </table>

        </div>

</template>

<script>
export default {
  name: 'ScheduleWeekView',

  data: function(){
  return{
         days: [{ id: 1, name: 'Monday',classes: [{id: 1,name: 'Paardijden 1', canEnroll:true, isEnrolled:true, time: '10:00 - 11:00', users:[{id:1,name:'Pauline'},{name:'Christophe'}]}]},
         { id: 1, name: 'Tuesday', classes: []},
         { id: 1, name: 'Wednesday', classes: []},
         { id: 1, name: 'Thursday', classes: []},
         { id: 1, name: 'Friday', classes: [{id:2,name: 'Paardijden 315q',time: '10:00 - 11:00',users:[{name:'Pauline'},{name:'Christophe'}]},{id:4,name: 'Paardijden 31sdf5q', canEnroll:true, isEnrolled:false,time: '11:00 - 12:00'}]},
         { id: 1, name: 'Saturday', classes: []},
         { id: 1, name: 'Sunday', classes: [{id:3, name: 'Paardijden 315q',time: '10:00 - 11:00', userRoles:[]}]}]
}},
    computed:
        {
            classesMappedToTable: function() {
                    const rows = [];
                    const maxClassesPerDay = Math.max(...this.days.map(function(day){ return day.classes.length}));
                    var i;
                    for(i = 0 ; i< maxClassesPerDay ; i++){
                        const columns = [];
                        this.days.forEach(function(day){
                            const cls = day.classes[i];
                                columns.push(cls);
                        });
                        rows.push(columns);
                    }
                    return rows;
            }
        },
        methods: {
            manageClass: function(cls){
                console.log(cls.name);

            },
            getClass: function(cls){
                var styledClass = '';
                if(cls.users && cls.users.map(function(user){return user.name.toLowerCase()}).includes(this.$currentUser.name.toLowerCase())){
                    styledClass = 'isEnrolled'
                }else if(cls.userRoles){
                    styledClass = 'canEnroll '
                }
                return styledClass;
            },
            isEnrolled: function(cls){
                if(cls.users && cls.users.map(function(user){return user.name.toLowerCase()}).includes(this.$currentUser.name.toLowerCase())){
                return true;
                }
                return false;
            },
            canEnroll: function(cls){
                if(!this.isEnrolled(cls) && cls.userRoles){
                return true;
                }
                return false;
            }
        }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.schedule-block{
width:125px;
height:125px;
//background: #97a9c4;
border: 2px solid #919ba4;
cursor: context-menu;
}
.schedule-block:hover{
background: #b8cff2;
}

.isEnrolled{
background: #218838;
}

.canEnroll{
background: #ffc107;
}

.no-cls {
width:125px;
height:125px;
background: #ffffff;
}

</style>
