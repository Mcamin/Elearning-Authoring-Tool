
// GeneralViews
import NotFound from '@/pages/NotFoundPage.vue';
import Wrapper from "@/layout/Wrapper";

import CreateNewCourse from "../pages/NewCourse";



// Admin pages
const Login = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/Login.vue");
const Library = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/Library.vue");
const Home = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/Home.vue");
const Courses = () => import(/* webpackChunkName: "dashboard" */"@/pages/Courses.vue");
const NewCourse = () => import(/* webpackChunkName: "dashboard" */"@/pages/NewCourse.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const AddLesson = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/AddLesson.vue");



const routes = [
    {
        path: "/",
        component: Wrapper,
        redirect: "/login",
        children: [
          {
            path: "home",
            name: "home",
            component: Home
          },
          {
            path: "courses",
            name: "courses",
            component: Courses
          },
          {
            path: "profile",
            name: "profile",
            component: Profile
          },
          {
            path: "newcourse",
            name: "newcourse",
            component: NewCourse
          },
          {
            path: "library",
            name: "library",
            component: Library
          },
          {
            path: "addlesson",
            name: "addlesson",
            component: AddLesson
          },

        ]
    },
  { path: "/login",
    name: "login",
    component: Login,
  },
    { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/WrapperElements/Views/' + name + '.vue');
   return res;
};**/

export default routes;
