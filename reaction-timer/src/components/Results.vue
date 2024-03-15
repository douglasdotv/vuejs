<template>
    <div class="results">
        <h1>Results</h1>
        <table v-if="scores.length" aria-label="Results table">
            <thead>
                <tr>
                    <th>Attempt</th>
                    <th>Time</th>
                    <th>Rank</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="score in scores" :key="score.id">
                    <td>{{ score.id }}</td>
                    <td>{{ score.time }}ms</td>
                    <td>{{ score.rank }}</td>
                </tr>
            </tbody>
        </table>
        <p v-else>No results yet</p>
    </div>
</template>

<script>
export default {
    props: ['scores'],
}
</script>

<style scoped>
.results {
    margin-top: 50px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    padding: 10px;
    border-bottom: 1px solid #123;
    text-align: center;
}

th {
    background-color: #f2f2f2;
    color: #333;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:hover {
    background-color: #ddd;
}
</style>