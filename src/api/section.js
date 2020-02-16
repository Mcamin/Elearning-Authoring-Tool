import Repository from "./repository";
const resource = "/sections"


export default {
  getAll() {
    return Repository.get(`${resource}`);
  },

  get(sectionID) {
    return Repository.get(`${resource}/${sectionID}`);
  },

  createSection(payload){
    return Repository.post(`${resource}`,payload);
  },

  updateSection(payload){
    return Repository.patch(`${resource}`,payload);
  },
  deleteSection(sectionID) {
    return Repository.delete(`${resource}/${sectionID}`);
  }

};
