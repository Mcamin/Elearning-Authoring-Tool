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
    let formData = new FormData();
    formData.append('uuid',payload.uuid);
    formData.append('title', payload.title);
    formData.append('description', payload.description);
    formData.append('category', payload.selectedCategory);
    formData.append('languages', payload.languages);
    formData.append('tags', payload.tagsText);
    formData.append('duration',  payload.duration ? payload.duration : '');
    formData.append('thumbnail', payload.image ?  payload.image.raw : '');
    return Repository.post(`${resource}`,formData);
  },

  updateCourse(payload){

    return Repository.patch(`${resource}/${payload.targetCourse}`,payload.props);
  },
  deleteCourse(courseID) {
    return Repository.delete(`${resource}/${courseID}`);
  }

};
