import { createRouter, createWebHistory } from 'vue-router'
import Body from './../components/Body.vue'
import Login from './../components/Login.vue'
import Projects from './../components/Projects.vue'
import Project from './../components/Project.vue'
import ProjectsAdmin from './../components/ProjectsAdmin.vue'
import ProjectEdit from './../components/ProjectEdit.vue'
import Users from './../components/Users.vue'
import User from './../components/UserEdit.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Body,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/projects',
        name : 'Projects',
        component: Projects,
    },
    {
        path: '/projects/:projectName',
        name : 'Project',
        component: Project,
    },
    {
        path: '/admin/projects',
        name : 'ProjectsAdmin',
        component: ProjectsAdmin,
    },
    {
        path: '/admin/projects/:projectId',
        name : 'ProjectEdit',
        component: ProjectEdit,
    },
    {
        path: '/admin/users',
        name : 'Users',
        component: Users,
    },
    {
        path: '/admin/users/:userId',
        name : 'User',
        component: User,
    },


]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router