export const checkRouter = (currentPath,path) =>{
  return currentPath === path;
};

export const notEmptyObject = (obj) => {
  return Object.entries(obj).length!==0 && obj.constructor === Object;
};
