const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'يجب وجود الاسم'],
    },
    summary: {
      type: String,
      required: [true, 'يجب وجود ملخص '],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
);

const Course = mongoose.model('courses', CourseSchema);
module.exports = Course; 
