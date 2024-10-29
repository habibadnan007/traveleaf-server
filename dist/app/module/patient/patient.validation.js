"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPatientZodSchema = void 0;
const zod_1 = require("zod");
const createPatientZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required.'),
    email: zod_1.z.string().email('Invalid email format.'),
    phone: zod_1.z
        .string()
        .min(10, 'Phone number must be at least 10 characters long.'),
    gender: zod_1.z.enum(['Male', 'Female', 'Other'], {
        required_error: 'Gender is required.',
    }),
    district: zod_1.z.enum([
        'Dhaka',
        'Faridpur',
        'Gazipur',
        'Gopalganj',
        'Jamalpur',
        'Kishoreganj',
        'Madaripur',
        'Manikganj',
        'Munshiganj',
        'Mymensingh',
        'Narayanganj',
        'Narsingdi',
        'Netrokona',
        'Rajbari',
        'Shariatpur',
        'Sherpur',
        'Tangail',
        'Bogra',
        'Joypurhat',
        'Naogaon',
        'Natore',
        'Chapainawabganj',
        'Pabna',
        'Rajshahi',
        'Sirajganj',
        'Dinajpur',
        'Gaibandha',
        'Kurigram',
        'Lalmonirhat',
        'Nilphamari',
        'Panchagarh',
        'Rangpur',
        'Thakurgaon',
        'Barguna',
        'Barishal',
        'Bhola',
        'Jhalokati',
        'Patuakhali',
        'Pirojpur',
        'Bandarban',
        'Brahmanbaria',
        'Chandpur',
        'Chattogram',
        'Cumilla',
        "Cox's Bazar",
        'Feni',
        'Khagrachari',
        'Lakshmipur',
        'Noakhali',
        'Rangamati',
        'Habiganj',
        'Moulvibazar',
        'Sunamganj',
        'Sylhet',
        'Bagerhat',
        'Chuadanga',
        'Jessore',
        'Jhenaidah',
        'Khulna',
        'Kushtia',
        'Magura',
        'Meherpur',
        'Narail',
        'Satkhira',
    ], { required_error: 'District is required.' }),
    dateOfBirth: zod_1.z.string({ required_error: 'Date of birth is required.' }),
    bloodGroup: zod_1.z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O+'], {
        required_error: 'Blood group is required.',
    }),
    weight: zod_1.z.number().optional(), // Optional field
    height: zod_1.z.number().optional(), // Optional field
    allergies: zod_1.z.string().optional(), // Optional field
    isDeleted: zod_1.z.boolean().default(false), // Default value
});
exports.createPatientZodSchema = createPatientZodSchema;