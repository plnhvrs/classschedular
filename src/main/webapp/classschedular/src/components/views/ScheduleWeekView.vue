<template>
    <div class="mx-auto">
        <table id="schedule" class="">
            <thead>
            <tr>
                <th v-for="day in days" v-bind:key="day.name" class="text-center"><p>{{ day.name }}</p></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in classesMappedToTable" v-bind:key="row.index" class="">
                <template v-for="cls in row">
                    <td v-if="cls" v-bind:key="cls.id" v-on:click="manageClass(cls)" v-bind:class="getClass(cls)"
                        class="schedule-block text-center">
                        <i>{{cls.time}}</i>
                        <br>
                        <h1 class="small">{{ cls.name }}</h1>
                        <template v-for="user in cls.users">
                            <i v-bind:key="user.id" class="small"> {{user.name}}</i>
                            <br v-bind:key="user.name">
                        </template>
                        <b-dropdown v-if="canEnroll(cls)" pill v-b-modal="'enroll'" variant="success" size="sm"
                                    right text="Right align" class="m-2 float-right" no-caret>
                            <template v-slot:button-content>
                                <b-icon icon="person-plus"></b-icon>
                            </template>
                            <b-dropdown-item  class="small">Enroll for single class</b-dropdown-item>
                            <b-dropdown-item  class="small">Enroll for series</b-dropdown-item>
                        </b-dropdown>
                        <b-dropdown v-if="isEnrolled(cls)" pill v-b-modal="'cancel'" variant="danger" size="sm"
                                    right text="Right align" class=" m-2 float-right" no-caret>
                            <template v-slot:button-content>
                                <b-icon icon="person-dash"></b-icon>
                            </template>
                            <b-dropdown-item class="small">Cancel single class</b-dropdown-item>
                            <b-dropdown-item class="small">Cancel all in series</b-dropdown-item>
                        </b-dropdown>

                    </td>
                    <td v-else v-bind:key="cls" class=" no-cls">
                    </td>
                </template>
            </tr>
            </tbody>
        </table>

    </div>

</template>

<script src="../controllers/ScheduleWeekView.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.schedule-block{
width:125px;
height:125px;
border: 2px solid #6c757d;
cursor: context-menu;
}
.schedule-block:hover{
background: #f8f9fa;
}

.isEnrolled{
background: #84e19a;
}

.canEnroll{
background: #FCFE5D;
}

.no-cls {
width:125px;
height:125px;
background: #ffffff;
}


</style>
