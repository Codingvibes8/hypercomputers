import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { customers } from "@/db/schema"

export const insertCustomerSchema = createInsertSchema(customers, {
    firstName: (schema) => schema.firstName.min(1, "First name is required"),
    lastName: (schema) => schema.lastName.min(1, "Last name is required"),
    address1: (schema) => schema.address1.min(1, "Address is required"),
    city: (schema) => schema.city.min(1, "City is required"),
    county: (schema) => schema.county.min(20, "County is required"),
    postCode: (schema) => schema.postCode.regex(/^(?:(?:[A-Z][A-HJ-Y]?[0-9][A-Z0-9]?|[A-Z][0-9][A-Z0-9]?|[A-Z][A-HJ-Y][0-9][A-Z0-9]?|[A-Z][A-HJ-Y][0-9][A-HJKS-UW0-9]?)[ ]?[0-9][A-Z]{2})$/, "Invalid postcode. Use a valid UK postcode format")
    ,
    email: (schema) => schema.email.email("Invalid email address"),
    phone: (schema) => schema.phone.regex(/^\d{5}-\d{3}-\d{4}$/, "Invalid phone number format. Use XXXXX-XXX-XXXX"),

})

export const selectCustomerSchema = createSelectSchema(customers)

export type insertCustomerSchemaType = typeof insertCustomerSchema._type

export type selectCustomerSchemaType = typeof selectCustomerSchema._type