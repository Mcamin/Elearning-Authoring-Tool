import Repository from "./repository";
const resource = "/lessons"


export default {
  getAll() {
    return Repository.get(`${resource}`);
  },

  get(lessonID) {
    return Repository.get(`${resource}/${lessonID}`);
  },

  createLesson(payload){
    return Repository.post(`${resource}`,payload);
  },

  updateLesson(payload){
    return Repository.patch(`${resource}/${payload.targetLesson}`,payload.props);
  },
  deleteLesson(lessonID) {
    return Repository.delete(`${resource}/${lessonID}`);
  }

};
