// Receives the home-page quote form (multipart form data).
// The enquiry itself reaches K-Tech through WhatsApp, opened in the visitor's
// browser on submit; this endpoint validates the request so the form can show
// its success state and move on to the thank-you page. Hook an email or CRM
// delivery in here when one is set up.

const REQUIRED_FIELDS = ['Name', 'Phone', 'Email', 'ZIP'] as const;
const MAX_FIELD_LENGTH = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+()\d\s-]{7,20}$/;

function errorResponse(message: string, status = 400): Response {
  return Response.json({ success: false, error: { message } }, { status });
}

function readField(form: FormData, name: string): string {
  const value = form.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return errorResponse('Could not read the form submission.');
  }

  for (const [, value] of form) {
    if (typeof value === 'string' && value.length > MAX_FIELD_LENGTH) {
      return errorResponse('One of the fields is too long.');
    }
  }

  const missing = REQUIRED_FIELDS.filter((name) => !readField(form, name));
  if (missing.length > 0) {
    return errorResponse(`Please fill in: ${missing.join(', ')}.`);
  }
  if (!EMAIL_PATTERN.test(readField(form, 'Email'))) {
    return errorResponse('Please enter a valid email address.');
  }
  if (!PHONE_PATTERN.test(readField(form, 'Phone'))) {
    return errorResponse('Please enter a valid phone number.');
  }

  return Response.json({ success: true });
}
