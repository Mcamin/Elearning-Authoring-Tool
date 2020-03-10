import Repository from "./repository";
const resource = "/interactions"


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
    return Repository.patch(`${resource}/${payload.targetInteraction}`,payload.props);
  },
  deleteInteraction(interactionID) {
    return Repository.delete(`${resource}/${interactionID}`);
  }

};
