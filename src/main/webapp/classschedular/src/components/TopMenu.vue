<template>
    <b-navbar toggleable="md" type="light" variant="light" sticky class="mb-5">
        <b-navbar-brand to="/">
            <img src="../assets/favicon-32x32.png" class="d-inline-block align-top" alt="Happy class scheduling">
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

                <b-nav-item to="/schedule" class="ml-4">Schedule</b-nav-item>
                <b-nav-item to="/classes" class="ml-4">Classes</b-nav-item>
                <b-nav-item to="/users" class="ml-4">Users</b-nav-item>
                <b-nav-item to="/account" class="ml-4">Account</b-nav-item>
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>
</template>

