import { getCourses } from "../api/courseApi";
import { getAuthors } from "../api/authorApi";

export const addCourse = payload => ({
  type: "ADD_COURSE",
  payload
});

export const allCourses = payload => ({
  type: "ALL_COURSES",
  payload
});

export const startLoader = payload => ({
  type: "START_LOADER",
  payload
});

export const stopLoader = payload => ({
  type: "STOP_LOADER",
  payload
});

export const fetchAuthors = payload => ({
  type: "LOAD_AUTHORS",
  payload
});

export const fetchCourses = () => {
  return function(dispatch, getState) {
    return getCourses()
      .then(res => {
        dispatch(allCourses(res));
      })
      .catch(err => {
        console.log("error", err);
      });
  };
};

export const fetchAuthorNames = () => {
    return function(dispatch, getState) {
        return getAuthors()
          .then(res => dispatch(fetchAuthors(res)))
          .catch(err => console.log("error", err));
      };
}