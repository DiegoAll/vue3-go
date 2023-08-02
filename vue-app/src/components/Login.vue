<template>

<div class="container">
    <div class="row">
        <div class="col">
            <h1 class="mt-5">Login</h1>
            <hr>
            <!--<form method="post" action="/login" class="needs-validation" novalidate>-->
            <!--changed by form-tag-->
             <!-- v-model Bind inputs to data-->
            <form-tag @myevent="submitHandler">
                <text-input
                    v-model="email"
                    label="Email"
                    type="email"
                    name="email"
                    required="true">
                </text-input>

                <text-input
                    v-model="password"
                    label="Password"
                    type="password"
                    name="password"
                    required="true">
                </text-input>
            
                <hr>
                <input type="submit" class="btn btn-primary" value="Login">
            </form-tag>
        </div>
    </div>
</div>


</template>


<script>
import FormTag from './forms/FormTag.vue'
import TextInput from './forms/TextInput.vue'
export default {
    name: 'login',
    components: {
        FormTag,
        TextInput,
    },
    data(){
        return{
            email: "",
            password: "",
        }
    },
    methods: {
        submitHandler(){
            console.log("submitHandler called - success!")
        }

    },
    mounted(){
        // **the lifecycle hook**

        // Validaciones de bootstrap
        (function () {
            'use strict'
          
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')
          
            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
              .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                  if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                  }
              
                  form.classList.add('was-validated')
                }, false)
              })
          })()

    }
}
</script>