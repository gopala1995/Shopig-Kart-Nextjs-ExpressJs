import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    mobile: { type: String, require: true },
    role: {
      type: String,
      enum: ["user" | "admin" | "deliveryBoy"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.User | mongoose.model("User", userSchema);

export default UserModel;
