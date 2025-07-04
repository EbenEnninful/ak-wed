// pages/api/rsvp.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // This forwards the request to your real Django backend
        const response = await fetch(process.env.DJANGO_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        });
  
        // Handle errors from the Django backend
        if (!response.ok) {
          const errorData = await response.json();
          return res.status(response.status).json(errorData);
        }
  
        // Send the successful response back to the frontend
        const data = await response.json();
        res.status(200).json(data);
  
      } catch (error) {
        res.status(500).json({ message: 'Proxy Server Error', error: error.message });
      }
    } else {
      // Handle any other method than POST
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }