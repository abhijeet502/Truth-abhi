export default function Message() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      color: "#333",
      padding: "20px"
    }}>
      <h1>💌 A Small Message 💌</h1>
      <p>You’re more amazing than words can describe ✨</p>
      <p>Keep smiling, it suits you the best 🌸</p>
      <a href="/final" style={{
        marginTop: "20px",
        padding: "12px 24px",
        background: "#333",
        color: "#fff",
        borderRadius: "25px",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}>
        Final Surprise 🎉
      </a>
    </div>
  );
}
