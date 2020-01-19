
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
const Playground = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/Playground.vue");

const routes = [
    {
        path: "/",
        component: Wrapper,
        redirect: "/home",
        children: [
          {
            path: "home",
            name: "home",
            component: Home,
            meta:{
              breadcrumb:[
                {name: 'Home'}
              ]
            }
          },
          {
            path: "playground",
            name: "playground",
            component: Playground
          },
          {
            path: "courses",
            name: "courses",
            component: Courses,
            meta:{
              breadcrumb:[
                {name: 'Home',link:'home'},
                {name: 'Courses'},
              ]
            }
          },
          {
            path: "profile",
            name: "profile",
            component: Profile,
            meta:{
              breadcrumb:[
                {name: 'Home',link:'home'},
                {name: 'Profile'},
              ]
            }
          },
          {
            path: "/newcourse/:title",
            name: "newcourse",
            component: NewCourse,
            props: true,
            meta:{
              breadcrumb:[
                {name: 'Home',link:'home'},
                {name: 'Courses',link:'Courses'},
                {name: ':title'},
              ]
            }
          },
          {
            path: "library",
            name: "library",
            component: Library,
            meta:{
              breadcrumb:[
                {name: 'Home',link:'home'},
                {name: 'Library',link:'library'},
              ]
            }
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
