
// Frontend service connecting to the Node.js / Express backend
export const getTravelAdvice = async (destination: string) => {
  try {
    const response = await fetch('/api/advice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ destination }),
    });
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Backend communication error:", error);
    return "Could not connect to the assistant backend.";
  }
};

export const getAdviceHistory = async () => {
  try {
    const response = await fetch('/api/history');
    return await response.json();
  } catch (error) {
    console.error("Error fetching history:", error);
    return [];
  }
};

export const saveRideRequest = async (pickup: string, dropoff: string) => {
  try {
    await fetch('/api/rides', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pickup, dropoff }),
    });
  } catch (error) {
    console.error("Error saving ride:", error);
  }
};
