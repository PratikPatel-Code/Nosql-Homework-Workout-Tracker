const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Originally put all in one {} and didn't work

const WorkoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
      },

      name: {
        type: String,
      },

      weight: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      duration: {
        type: Number,
      },
    },
  ],

  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
