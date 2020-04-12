<template>

    <div class="col-md-10 mx-auto">
<h3>Users</h3>
<br>
<p>
    <b-button  variant="outline-primary"  v-b-modal="'userEdit'"><b-icon icon="person-plus"></b-icon> New user</b-button>
<User></User>
</p>
<br>
    <b-table id="classes" :fields="fields" :items="users">
        <template v-slot:cell(edit)="">
            <b-button variant="outline-primary" size="sm" class="pb-0 mr-2"><b-icon icon="pencil"></b-icon></b-button>
            <b-button variant="outline-primary" size="sm" class="pb-0">
                <b-icon icon="trash" variant="danger"></b-icon>
            </b-button>
        </template>
        <template v-slot:cell(active)="data">
            <b-icon v-if="data.item.active" icon="check"></b-icon>
        </template>
        <template v-slot:cell(roles)="data">
            {{data.item.roles.join(', ') }}
        </template>
        <template v-slot:cell(subscriptions)="data">
                <p v-for="subscription in data.item.subscriptions" :key="subscription.id">
                {{subscription.name }} valid from {{subscription.starting}}, untill: {{subscription.ending}} {{ subscription.currentCredit != null ? '(Credit left:' +subscription.currentCredit+') ' : ''}}
                </p>
        </template>
        <template v-slot:cell(addSubscription)>
            <b-button class="btn-sm" variant="success" small v-b-modal="'assignCredit'" ><b-icon icon="plus"></b-icon> Assign subscription</b-button>
        </template>

    </b-table>
</div>

</template>

<script src="../controllers/Users.js">
</script>
