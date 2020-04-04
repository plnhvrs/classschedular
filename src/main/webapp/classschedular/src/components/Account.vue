<template>
    <header class="masthead">
        <div class="container col-md-5 mx-auto">
            <h3>Account</h3>
            <br>
            <b-form>
                <b-form-group
                        class="mb-1"
                        label="User name:"
                        label-for="class-name"
                        description="">
                    <b-form-input
                        id="user-name"
                        v-model="name"
                        type="text"
                        required
                        placeholder="Edit your user name">
                </b-form-input>
                </b-form-group>
                <b-form-group
                        class="mb-1"
                        label="Credit:"
                        label-for="class-credit"
                        description="">
                <b-form-input  id="user-credit"
                               v-model="credit"
                               type="text"
                               readonly></b-form-input>
                </b-form-group>
                <br>
                <b-button variant="primary" class="float-right">Save</b-button>
            </b-form>
        </div>
    </header>
</template>


<script>

export default {
  name: 'Account',
  data: function(){return this.$currentUser}
}
</script>