import * as Yup from "yup";
// const Yup = require("yup");

export const UserValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .max(8, "Name can be maximum 8 characters")
        .required("Name is required")
        .label("Name"),
    age: Yup.number()
        .min(5, "Age must be greater than 5 years")
        .max(30, "Age must be greater than 30 years")
        .required("Age is required")
        .label("Age"),
    
});
