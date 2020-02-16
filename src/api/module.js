import Repository from "./repository";
const resource = "/module"


export default {
  getAll() {
    return Repository.get(`${resource}`);
  },

  get(moduleID) {
    return Repository.get(`${resource}/${moduleID}`);
  },

  createModule(payload){
    return Repository.post(`${resource}`,payload);
  },

  updateModule(payload){
    return Repository.patch(`${resource}`,payload);
  },
  deleteModule(moduleID) {
    return Repository.delete(`${resource}/${moduleID}`);
  }

};
