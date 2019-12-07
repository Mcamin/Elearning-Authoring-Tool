
// GeneralViews
import NotFound from '@/pages/NotFoundPage.vue';
import Wrapper from "@/layout/Dashboard/Wrapper";
import CreateNewCourse from "../pages/CreateNewCourse";


// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Playground = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/Playground.vue");
const Library = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/Library.vue");
const SignIn = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/SignIn.vue");
const Course = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/Course.vue");
const NewQuiz = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/NewLesson.vue");
const NewLesson = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/NewQuiz.vue");

const routes = [
    {
        path: "/",
        component: Wrapper,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard
            },
          {
            path: "profile",
            name: "profile",
            component: Profile
          },
          {
            path: "newcourse",
            name: "newcourse",
            component: CreateNewCourse
          },
          {
            path: "library",
            name: "library",
            component: Library
          },
          {
            path: "SignIn",
            name: "signin",
            component: SignIn
          },
          {
            path: "playground",
            name: "playground",
            component: Playground
          },
          {
            path: "newquiz",
            name: "NewQuiz",
            component: NewQuiz
          },
          {
            path: "newlesson",
            name: "newLesson",
            component: NewLesson
          }
        ]
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
