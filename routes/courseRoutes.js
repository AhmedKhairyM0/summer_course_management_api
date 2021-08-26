const Router = require('express').Router()

const {
  getAllCourse,
  addNewCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController')

//api/v1/courses/540541561545
Router.route('/').get(getAllCourse).post(addNewCourse)

Router.route('/:id').get(getCourse).patch(updateCourse).delete(deleteCourse)

module.exports = Router
