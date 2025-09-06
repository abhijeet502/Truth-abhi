export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      color: "#fff",
      padding: "20px"
    }}>
      <h1>Crafted with ❤️ by Abhii</h1>
      <p>Welcome to something truly special ✨</p>
      <a href="/surprise" style={{
        marginTop: "20px",
        padding: "12px 24px",
        background: "#fff",
        color: "#ff6b81",
        borderRadius: "25px",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}>
        Open Surprise 🎁
      </a>
    </div>
  );
}
