export default function Surprise() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      color: "#fff",
      padding: "20px"
    }}>
      <h1>🌸 Surprise 🌸</h1>
      <p>You made it to the secret page 💖</p>
      <p>More magic is waiting for you ✨</p>
      <a href="/message" style={{
        marginTop: "20px",
        padding: "12px 24px",
        background: "#fff",
        color: "#6a0572",
        borderRadius: "25px",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}>
        Next ➡️
      </a>
    </div>
  );
}
