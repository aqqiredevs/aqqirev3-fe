// app/contact/page.jsx
import { redirect } from "next/navigation";

// Server Action - runs on the server
async function submitForm(formData) {
  "use server";

  // Extract form data
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate data
  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  // Process the form (save to database, send email, etc.)
  console.log("Form submitted:", { name, email, message });

  // Simulate async operation
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Redirect after successful submission
  redirect("/contact/success");
}

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

        <form action={submitForm} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition duration-200 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
