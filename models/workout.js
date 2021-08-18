const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Originally used wrong use of {} in defining string and number.  Fixed
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
