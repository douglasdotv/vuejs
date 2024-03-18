<template>
        <h1 class="main-title">Available Jobs</h1>
        <div v-for="job in jobs" :key="job.id">
            <h2>{{ job.title }}</h2>
            Click <router-link :to="{ name: 'job-details', params: { id: job.id } }">here</router-link> for details.
        </div>
</template>

<script>
export default {
    name: 'Jobs',
    data() {
        return {
            jobs: [
                { id: 1, title: 'Java Developer' },
                { id: 2, title: 'DevOps Engineer' },
                { id: 3, title: 'QA' },
            ]
        }
    }
}
</script>

<style>
    h2 {
        color: navy;
        text-shadow: 2px 2px 2px #ccc;
    }
    a {
        color: green;
        text-shadow: 1px 1px 1px #ccc;
        text-decoration: none;
    }
</style>