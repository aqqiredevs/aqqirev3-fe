"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").trim(),
  lastName: z.string().min(1, "Last name is required").trim(),
  email: z.email("Invalid email address").min(1, "Email is required"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Please add a message").trim(),
});

export async function submitForm(prevState: any, formData: FormData) {
  const result = contactFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: z.treeifyError(result.error),
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Form data:", result.data);
  return {
    success: true,
    message: "Thank you! Your message has been sent successfully.",
  };
}
