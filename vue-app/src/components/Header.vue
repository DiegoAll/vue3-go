<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!--<a class="nav-link active" aria-current="page" href="#">Home</a>-->
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link active" to="/projects">Projects</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link active" to="/tests">Tests</router-link>
        </li>

        <li v-if="store.token !== ''" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navBarDropDown" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Admin
            </a>
          <ul class="dropdown-menu" aria-labelledby="navBarDropDown">
            <li>
              <router-link class="dropdown-item" to="/admin/users">Manage Users </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/admin/users/0">Add User </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/admin/projects">Manage Projects </router-link>
            </li>
            <li>
              <!-- "Dynamic route" The path can vary depending the context -->
              <router-link class="dropdown-item" :to="{name:'ProjectEdit', params: {projectId: 0}}"> Add Project</router-link>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <!--<a class="nav-link" href="#">Features</a>-->
          <router-link v-if="store.token == ''" class="nav-link" to="/login">Login</router-link>
          <a href="javascript:void(0);" v-else class="nav-link" @click="logout">Logout</a>
        </li>
      </ul>

      <span class="navbar-text">
        {{ store.user.first_name ?? '' }}
      </span>

    </div>
  </div>
</nav>
</template>

<script>
import { store } from './store.js'
import router from './../router/index.js'
import Security from './security.js'

export default{
  data(){
    return {
      store,
    }
  },
  methods:{
    logout(){
      const payload = {
        token: store.token,
      }

      fetch(process.env.VUE_APP_API_URL + "/users/logout", Security.requestOptions(payload))
      .then((response) => response.json())
      .then((response) => {
        if (response.error){
          console.log(response.message);
        }else{
            store.token = "";
            store.user = {};

            document.cookie = '_site_data=; Path=/; ' +
            'SameSite=Strict; Secure; ' +
            'Expires=Thu, 01 Jan 1970 00:00:01 GMT;'

            router.push("/login");
        }
      })
    }
  }
}
</script>