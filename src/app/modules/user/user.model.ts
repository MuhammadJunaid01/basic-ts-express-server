import { Schema, model } from "mongoose";
import { IUser } from "./user.inetrface";
import bcrypt from "bcrypt";
import config from "../../config";

const userSchema = new Schema<IUser>(
  {
    name: {
      firstName: {
        type: String,
        required: true,

        trim: true,
      },
      middleName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);
userSchema.pre("save", async function (next) {
  console.log("Before saving document:", this);
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});
// userSchema.pre("find", async function () {
//   console.log(this);
// });
const User = model<IUser>("User", userSchema);

export default User;
