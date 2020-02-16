import Repository from "./repository";
const resource = "/interaction"


export default {
  getAll() {
    return Repository.get(`${resource}`);
  },

  get(interactionID) {
    return Repository.get(`${resource}/${interactionID}`);
  },

  createInteraction(payload){
    return Repository.post(`${resource}`,payload);
  },

  updateInteraction(payload){
    return Repository.patch(`${resource}`,payload);
  },
  deleteInteraction(interactionID) {
    return Repository.delete(`${resource}/${interactionID}`);
  }

};
