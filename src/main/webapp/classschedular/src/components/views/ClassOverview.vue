<template>

        <div class="mx-auto">
            <h3>Class overview</h3>
            <br>
            <b-table id="classes" :items="rows" :fields="fields">
                <template v-slot:cell(registered)="">
                    <b-icon icon="check-box" variant="success"></b-icon>
                </template>
                <template v-slot:cell(delete)="data">
                    <b-button variant="outline-primary" size="sm" class="pb-0">
                        <b-icon v-on:click="deleteClass(data.item)" icon="trash" variant="danger"></b-icon>
                    </b-button>
                </template>
            </b-table>
        </div>

</template>


<script src="../controllers/ClassOverview.js">
</script>
