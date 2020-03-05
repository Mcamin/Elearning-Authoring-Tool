import Repository from "./repository";
const resource = "/modules";


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
    return Repository.patch(`${resource}/${payload.targetModule}`,payload.props);
  },
  deleteModule(moduleID) {
    return Repository.delete(`${resource}/${moduleID}`);
  }

};
