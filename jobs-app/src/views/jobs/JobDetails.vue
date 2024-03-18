<template>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <p>{{ job.details }}</p>
        <p>Job id: {{ id }}</p>
    </div>
    <div v-else>
        <p>Loading</p>
    </div>
</template>

<script>
export default {
    name: 'JobDetails',
    props: ['id'],
    data() {
        return {
            job: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
            .then(response => response.json())
            .then(data => this.job = data)
            .catch(error => console.log(error));
    }
}
</script>

<style>
h2 {
    color: navy;
    text-shadow: 2px 2px 2px #ccc;
}
</style>
