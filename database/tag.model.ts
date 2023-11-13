import { Schema, models, model, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Assuming tag names should be unique
  },
  description: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question", // Referencing the 'Question' model
    },
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User", // Referencing the 'User' model
    },
  ],
  createdOn: {
    type: Date,
    default: Date.now, // Defaulting to the current date and time
  },
});

// Creating the model if it does not exist, otherwise, reusing the existing model
const Tag = models.Tag || model("Tag", TagSchema);

// Exporting the model
export default Tag;
