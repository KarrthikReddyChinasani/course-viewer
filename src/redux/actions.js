export const addCourse = (payload) => ({
    type: 'ADD_COURSE',
    payload
})

export const allCourses = (payload) => ({
    type: "ALL_COURSES",
    payload
})

export const startLoader = (payload) => ({
    type: "START_LOADER",
    payload
})

export const stopLoader = (payload) => ({
    type: "STOP_LOADER",
    payload
})

export const fetchAuthors = (payload) => ({
    type: "LOAD_AUTHORS",
    payload
})