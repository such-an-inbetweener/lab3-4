import { Schema, model } from 'mongoose';

const employmentCenterSchema = new Schema({
    name_and_surname: {
        type: String,
        minlength: 3,
        required: true
    },
    sex: {
        type: String,
        minlength: 3,
        required: true
    },
    birthdate: {
        type: Date,
    },
    education: {
        type: String,
        minlength: 3,
    },
    speciality: {
        type: String,
        minlength: 3,
    },
    accountdate: {
        type: Date,
    },
});

const EmploymentCenter = model("employmentCenter", employmentCenterSchema);

export default EmploymentCenter;