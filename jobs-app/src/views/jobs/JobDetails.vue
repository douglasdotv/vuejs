<template>
    <h2>Job id: {{ id }}</h2>
</template>

<script>
export default {
    name: 'JobDetails',
    props: ['id']
}
</script>

<style>
h2 {
    color: navy;
    text-shadow: 2px 2px 2px #ccc;
}
</style>
