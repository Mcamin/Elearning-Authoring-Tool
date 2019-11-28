
// GeneralViews
import NotFound from '@/pages/NotFoundPage.vue';
import Wrapper from "@/layout/Dashboard/Wrapper";


// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const CreateNewCourse = () => import(/* webpackChunkName: "createnewcourse" */ "@/pages/CreateNewCourse.vue");

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
            path: "createcourse",
            name: "createcourse",
            component: CreateNewCourse
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
