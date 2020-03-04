import VueRouter from "vue-router";
import routes from "./routes";
import {notEmptyObject} from '@/utils/helpers'
// configure router
const router = new VueRouter({
    routes, // short for routes: routes
    linkExactActiveClass: "active",
    mode: 'history',
    scrollBehavior: (to) => {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    }
});

//Update Breadcrumb metadata from parameters
router.beforeEach((to, from, next) => {
  //check if router name is addlesson or addquiz or add gloassary
  //update section breadcrumb
  //update course bredcrumb
  //else
  //if(to.name==='newcourse')
  if(notEmptyObject(to.params)) {
   if(Object.entries(to.meta).length !== 0)
   {
     to.meta.breadcrumb[to.meta.breadcrumb.length-1].text =   to.params.title;}
  }
  next();
});

export default router;
