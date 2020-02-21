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
    let formData = new FormData(),
      config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

    formData.append('uuid',payload.id);
    formData.append('title', payload.title);
    formData.append('description', payload.description);
    formData.append('category', payload.selectedCategory);
    formData.append('languages', payload.languages);
    formData.append('tags', payload.tagsText);
    formData.append('contentIndex', payload.contentIndex);
    // The field uploaded by the file must be set to the raw parameter in the file list this.cert_path[0].raw
    formData.append('duration',  payload.duration ? payload.duration : '');
    formData.append('thumbnail', payload.image ?  payload.image.raw : '');
    return Repository.post(`${resource}`,formData,config);
  },
  updateCourse(payload){
    return Repository.patch(`${resource}`,payload);
  },
  deleteCourse(courseID) {
    return Repository.delete(`${resource}/${courseID}`);
  }

};
