<template>
    <div class="not-found-container">
        <h1 class="main-title">404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist.</p>
        <router-link to="/" class="home-link">Back to Home</router-link>
    </div>
</template>

<script>
export default {
    name: '404',
}
</script>

<style scoped>
.not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: navy;
    color: #ff79c6;
    text-align: center;
}

h1 {
    font-size: 6rem;
    font-weight: bold;
    background: -webkit-linear-gradient(#f9c0c0, #b9f2ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h2 {
    font-size: 2rem;
    color: #ffffff;
}

p {
    margin: 20px;
    color: #ffe4e1;
}

.home-link {
    padding: 10px 20px;
    margin-top: 20px;
    border: 1px solid #ff79c6;
    border-radius: 5px;
    color: #ff79c6;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
}

.home-link:hover {
    background-color: #ff79c6;
    color: navy;
}
</style>
