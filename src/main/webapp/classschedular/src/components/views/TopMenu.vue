<template>
    <b-navbar toggleable="md" type="light" variant="light" sticky class="mb-5">
        <b-navbar-brand to="/">
            <img src="../../assets/favicon-32x32.png" class="d-inline-block align-top" alt="Happy class scheduling">
            Happy Class Scheduling
        </b-navbar-brand>

        <b-navbar-toggle target="topMenu">
            <template v-slot:default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
        </b-navbar-toggle>

        <b-collapse id="topMenu" is-nav>
            <b-navbar-nav align="right" class="ml-auto">

                <b-nav-item to="/schedule" class="ml-5">Schedule</b-nav-item>
                <b-nav-item v-if="$currentUser.isAdmin" to="/classes" class="ml-5">Classes</b-nav-item>
                <b-nav-item v-if="$currentUser.isAdmin" to="/subscriptions" class="ml-5">Subscriptions</b-nav-item>
                <b-nav-item v-if="$currentUser.isAdmin" to="/users" class="ml-5">Users</b-nav-item>
                <b-nav-item to="/help" class="ml-5">Help</b-nav-item>
                <b-nav-item to="/account" class="ml-5">Account</b-nav-item>
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>
</template>


<script src="../controllers/TopMenu.js">
</script>
