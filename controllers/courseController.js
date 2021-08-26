/* eslint-disable node/no-unsupported-features/es-syntax */
const Course = require('../models/courseModel')

exports.deleteCourse = async (req, res, next) => {
  const course = await Course.findByIdAndRemove(req.params.id)

  res.status(204).json({
    status: 'success',
    data: null,
  })
}

exports.updateCourse = async (req, res, next) => {

    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    status: 'Success',
    data: {
      course,
    },
  })
}

exports.addNewCourse = async (req, res) => {

  const course = await Course.create(req.body)
  res.status(201).json({
    status: 'Success',
    data: {
      course,
    },
  })
}
exports.getCourse = async (req, res, next) => {
  const course = await Course.findById(req.params.id)


  return res.status(200).json({
    status: 'Success',
    data: {
      course,
    },
  })
}
exports.getAllCourse = async (req, res, next) => {

  const courses = await Course.find() 

  res.status(200).json({
    status: 'Success',
    times: req.requestTime,
    result: courses.length,
    data: {
      courses,
    },
  })
}
