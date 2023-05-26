import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
    link: {
      type: String,
      trim: true,
    },
    tags: {
      type: [String],
      trim: true,
    },
    time_to_read: {
      type: Number,
      required: true,
    },
    markdown: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
