import {ZodError , ZodSchema} from "zod";

export function checkValidation<T>(schema: ZodSchema<T>, data: T) {

  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, errors: null };
  }

  const errors: Record<string, string> = {};

  result.error.issues.forEach((err) => {
        const key = err.path.join(".");
        errors[key] = err.message;
  });

  return { success: false, errors };
}