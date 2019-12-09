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
    default:
      return state;
  }
};

export default coursesReducer;
