<template>
    <div class="col-md-10 mx-auto">
        <h3>Class Management</h3>
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
                <b-button variant="outline-primary" size="sm" class="pb-0" v-on:Click="'editClass(data.item)'" v-b-modal="'classEdit'">
                    <b-icon icon="pencil"></b-icon>
                </b-button>
            </template>
            <template v-slot:cell(delete)="data">
                <b-button variant="outline-primary" size="sm" class="pb-0">
                    <b-icon v-on:click="deleteClass(data.item)" icon="trash" variant="danger"></b-icon>
                </b-button>
            </template>
        </b-table>

    </div>
</template>


<script src="../controllers/Classes.js">
</script>
