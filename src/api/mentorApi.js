const BASE_URL = import.meta.env.VITE_API_BASE_URL;
// change if your FastAPI runs elsewhere

// ============================
// Market Intelligence
// ============================
export async function getTrendingSkills() {
  const res = await fetch(`${BASE_URL}/trending-skills`);

  if (!res.ok) {
    throw new Error("Failed to fetch trending skills");
  }

  return res.json();
}

// ============================
// Start Mentor Session
// ============================
export async function startMentorSession(skill, mode) {
  const res = await fetch(`${BASE_URL}/session/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ skill, mode })
  });

  if (!res.ok) {
    throw new Error("Failed to start mentor session");
  }

  return res.json(); 
  // { session_id, mentor_message }
}

// ============================
// Chat with Mentor
// ============================
export async function sendMentorMessage(sessionId, message) {
  const res = await fetch(`${BASE_URL}/session/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      session_id: sessionId,
      message
    })
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json(); 
  // { mentor_message, turn_count, difficulty_level }
}
