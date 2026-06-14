/**
 * Sends a contact form submission to the live API endpoint.
 * Automatically handles logging and returns success status.
 *
 * @param {Object} data - Contact form data payload
 * @param {string} data.name - Submitter name
 * @param {string} [data.email] - Submitter email
 * @param {string} [data.phone] - Submitter phone number
 * @param {string} [data.subject] - Message subject
 * @param {string} [data.message] - Message content / details
 * @returns {Promise<boolean>} Resolves to true if form was accepted successfully, false otherwise
 */
export async function submitContactForm(data) {
  try {
    const url = 'https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/contact?projectId=e015b984-9937-4df6-8d16-49ec9237a122';
    
    // Prepare payload fields exactly
    const payload = {
      name: data.name,
      email: data.email || '',
      phone: data.phone || '',
      subject: data.subject || 'General Inquiry',
      message: data.message || `Callback requested for ${data.name}. Phone: ${data.phone}`
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('API submission failed:', response.status, errText);
      return false;
    }

    return true;
  } catch (err) {
    console.error('Error submitting form to API:', err);
    return false;
  }
}
