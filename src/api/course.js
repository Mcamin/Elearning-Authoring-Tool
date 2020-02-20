import Repository from "./repository";
const resource = "/courses";


export default {
  getAll() {
    return Repository.get(`${resource}`);
  },

  get(courseID) {
    return Repository.get(`${resource}/${courseID}`);
  },

  createCourse(payload){
    return Repository.post(`${resource}`,payload);
  },

  updateCourse(payload){
    return Repository.patch(`${resource}`,payload);
  },
  deleteCourse(courseID) {
    return Repository.delete(`${resource}/${courseID}`);
  }

};
