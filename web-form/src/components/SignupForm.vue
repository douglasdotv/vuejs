<template>
    <div>
        <form @submit="handleSubmit">
            <h1 class="form-title">Join us!</h1>

            <div class="main-form">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required v-model="email">

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required
                    v-model="password">
                <p class="validation-error" v-if="passwordError">{{ passwordError }}</p>

                <label for="role">Role:</label>
                <select id="role" name="role" required v-model="role">
                    <option value="" disabled>Select a role</option>
                    <option value="designer">Web Designer</option>
                    <option value="developer">Web Developer</option>
                </select>
            </div>

            <div class="skills">
                <label for="skills">Skills:</label>
                <input type="text" id="skills" name="skills" placeholder="Enter a skill" v-model="tempSkill"
                    @keyup="addSkill">

                <button class="remove-skill-button" v-for="skill in skills" :key="skill" @click="removeSkill(skill)">
                    {{ skill }}
                </button>
            </div>

            <div class="terms">
                <input type="checkbox" id="terms" name="terms" required v-model="terms">
                <label for="terms">I agree to the terms and conditions</label>
            </div>

            <div class="additional">
                <input type="checkbox" id="newsletter" name="newsletter" value="newsletter" v-model="options">
                <label for="newsletter">Subscribe to our newsletter</label>
                <input type="checkbox" id="updates" name="updates" value="updates" v-model="options">
                <label for="updates">Receive updates by email</label>
            </div>

            <label class="hidden" for="submit">Submit</label>
            <button type="submit" id="submit">Create account</button>
        </form>
    </div>

    <div class="dev-info">
        <h2>Email: {{ email }} </h2>
        <h2>Password: {{ password }} </h2>
        <h2>Role: {{ role }} </h2>
        <h2>Terms: {{ terms }} </h2>
        <h2>Options: {{ options }} </h2>
        <h2>Skills: {{ skills }} </h2>
    </div>
</template>

<script>
export default {
    name: 'SignupForm',
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            options: [],
            skills: [],
            tempSkill: '',
            passwordError: ''
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === ',') {
                const skill = this.tempSkill.trim().replace(/,$/, '');
                this.tempSkill = '';
                if (this.skills.includes(skill) || !skill) return;
                this.skills.push(skill);
            }
        },
        removeSkill(skill) {
            this.skills = this.skills.filter(s => s !== skill);
        },
        handleSubmit(e) {
            e.preventDefault();

            this.passwordError = this.password.length < 8
                ? 'Password must be at least 8 characters'
                : '';

            if (this.passwordError || !this.email || !this.role || !this.terms) return;

            const data = {
                email: this.email,
                password: this.password,
                role: this.role,
                terms: this.terms,
                options: this.options,
                skills: this.skills
            };

            console.log(data);
        }
    }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: #fff;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input,
select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: auto;
    margin: 0 10px 0 0;
}

input:focus,
select:focus {
    outline: none;
    border-bottom: 1px solid #2c3e50;
}

button#submit {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 20px 0 0;
    font-size: 1em;
    background: #2c3e50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #1a252f;
}

button.remove-skill-button {
    display: inline-block;
    margin: 5px;
    font-size: 12px;
    background: #2c3e50;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}

.form-title {
    margin: 0 0 20px;
    font-size: 1.5em;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    text-shadow: 2px 2px 0 #2c3e50;
    text-align: center;
}

.main-form {
    margin-bottom: 10px;
}

.terms {
    margin: 10px 0 0;
}

.additional input[type="checkbox"]:not(:first-of-type) {
    margin-left: 10px;
}

.dev-info {
    font-family: monospace;
    font-size: 0.8em;
    margin-top: 40px;
    border: 1px solid #ddd;
    padding: 20px;
}

.validation-error {
    color: #e74c3c;
    font-size: 0.8em;
    margin: 5px 0 0;
}

.hidden {
    display: none;
}
</style>