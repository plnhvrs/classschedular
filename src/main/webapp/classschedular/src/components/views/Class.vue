<template>
    <!-- Modal -->
    <b-modal id="classEdit" title="Class details:">
        <div class="col-md-11 mx-auto">
            <b-form>
                <b-form-group
                        id="class-name-group"
                        label="Class name:"
                        label-for="class-name"
                        description="">
                    <b-form-input
                            id="class-name"
                            v-model="lesson.name"
                            type="text"
                            required
                            placeholder="Enter class (series) name">
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        id="startDate-group"
                        label="Date:"
                        label-for="startDate"
                        description="">
                    <b-form-input
                            id="startDate"
                            v-model="lesson.startDate"
                            type="date"
                            required
                            locale="nl"
                            placeholder="Enter the start date">
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        id="startTime-group"
                        label="Time:"
                        label-for="startTime"
                        description="">
                    <b-form-input
                            id="startTime"
                            v-model="lesson.startTime"
                            type="time"
                            required
                            placeholder="Enter the start time">
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        id="duration-group"
                        label="Duration (HH:mm):"
                        label-for="duration"
                        description="">
                    <b-form-input
                            id="duration"
                            v-model="lesson.duration"
                            type="time"
                            required
                            placeholder="Enter the class duration">
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        id="enrollment-group"
                        label="Enrollment deadline:"
                        label-for="enrollment"
                        description="">
                    <b-form-input
                            id="enrollment"
                            v-model="lesson.enrollmentDeadline"
                            type="date"
                            locale="nl"
                            placeholder="Enter the start date">
                    </b-form-input>
                </b-form-group>
                <hr class="mt-5 mb-5">
                <b-form-group
                        id="repeat-group"
                        label="Repeat?"
                        label-for="startTime"
                        description="">
                    <b-form-checkbox
                            id="repeat"
                            v-model="lesson.repeat"
                            name="repeat">
                        Class is part of a series
                    </b-form-checkbox>
                </b-form-group>
                <b-form-group
                        id="repeat-group"
                        v-if="lesson.repeat"
                        label="Occurs:"
                        label-for="startTime"
                        description="">
                    <b-form-select id="repeatType"
                                   v-model="lesson.repeatType"
                                   :options="repeatOptions">
                    </b-form-select>
                </b-form-group>
                <b-form-group
                        v-if="lesson.repeat"
                        id="repeatNumber-group"
                        label="Every "
                        label-for="repeatNumber"
                        label-text-align
                        label-cols-sm="2"
                        label-cols-lg="2"
                        v-bind:description="lesson.repeatType=='Weekly' ? 'week(s)' : 'day(s)'">
                    <b-form-input
                            id="repeatNumber"
                            v-model="lesson.repeatNumber"
                            type="number">
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        v-if="lesson.repeat"
                        id="endDate-group"
                        label="End date:"
                        label-for="endDateIndef"
                        description="">
                    <b-form-checkbox
                            id="endDateIndef"
                            name="repeatEndDate"
                            v-model="hasRepeatEndDate"
                    >
                        Class series has an end date
                    </b-form-checkbox>
                </b-form-group>
                <b-form-group
                        v-if="lesson.repeat && hasRepeatEndDate"
                        id="endDate-group"
                        label=""
                        label-for="endDate"
                        description="">
                    <b-form-input
                            id="endDate"
                            v-model="lesson.repeatEndDate"
                            type="date"
                            locale="nl"
                            placeholder="Enter the end date">
                    </b-form-input>
                </b-form-group>
                <hr class="mt-5 mb-5">
                <b-form-group
                        id="subscriptions-group"
                        label="Subscription types possible:"
                        label-for="subscriptions"
                        description="">
                    <b-form-checkbox-group
                            id="subscriptions"
                            v-model="lesson.subscriptions"
                            :options="subscriptionOptions">
                    </b-form-checkbox-group>
                </b-form-group>

            </b-form>
        </div>
    </b-modal>
</template>

<script src="../controllers/Class.js">
</script>