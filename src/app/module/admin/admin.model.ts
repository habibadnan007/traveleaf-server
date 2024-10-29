import mongoose, { Schema } from 'mongoose'
import { TAdmin } from './admin.interface'

const AdminSchema = new Schema<TAdmin>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  profileImg: {
    type: String,
    default: null,
  },
  postsCount: {
    type: Number,
    default: 0,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  district: {
    type: String,
    required: true, // Assuming TDistrict is a string
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

const Admin = mongoose.model('Admin', AdminSchema)

export default Admin
