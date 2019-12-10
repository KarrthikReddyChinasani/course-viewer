const initialState = {
  courses: []
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      let { courses } = state;
      courses.push(action.payload);
      return Object.assign({}, state, {
        courses
      });
    case "ALL_COURSES":
      return Object.assign({}, state, {
        courses: action.payload
      });
    default:
      return state;
  }
};

export default coursesReducer;
