// pages/api/rsvp.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await fetch(process.env.DJANGO_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          return res.status(response.status).json(errorData);
        }
  
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        // This line is changed to return the specific error
        res.status(500).json({ message: `Proxy Error: ${error.message}` });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }