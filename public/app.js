// Select the button element by its ID (assuming the button has an ID).
const button = document.getElementById('checkout-button');
const errors = document.getElementById('errors');

button.addEventListener('click', async () => {
  try {
    // Send a POST request to create a checkout session.
    const response = await fetch('/payment/6511df8e640653c947a1dc17', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Correct the header field name
        authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTE2NzBlM2ZiYzA0N2Q5YzFiNDNjYyIsImVtYWlsIjoiYmVkbzJAZ20uY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2OTU3NDAwNDgsImV4cCI6MTY5NTgyNjQ0OH0.0CDNrEGF0AW98T7TGQmjog-OfIkiImaQDP6as7ZChuQ',
      },
    });

    if (!response.ok) {
      // Handle errors by parsing the JSON response.
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    // Parse the successful response.
    const { url } = await response.json();

    // Redirect the user to the generated URL.
    window.location.href = url;
  } catch (error) {
    errors.innerHTML = error.message;
    console.error(error);
  }
});
