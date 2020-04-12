<template>
    <header class="masthead">
        <div class="container col-md-5 mx-auto">
            <h3>Account</h3>
            <br>
            <b-form>
                <b-form-group
                        class="mb-1"
                        label="Username:"
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
                        v-if="$currentUser.isAdmin"
                        class="mb-1"
                        label="Organization name:"
                        label-for="organization-name"
                        description="">
                    <b-form-input
                            id="organization-name"
                            v-model="organization"
                            type="text"
                            required
                            placeholder="Edit your user name">
                    </b-form-input>
                </b-form-group>
                <p v-for="subscription in $currentUser.subscriptions" :key="subscription.id">
                    {{subscription.name }} valid from {{subscription.starting}}, untill: {{subscription.ending}} {{ subscription.currentCredit != null ? '(Credit left:' +subscription.currentCredit+') ' : ''}}
                </p>
                <br>
                <b-button variant="primary" class="float-right">Save</b-button>
            </b-form>
        </div>
    </header>
</template>


<script src="../controllers/Account.js">
</script>