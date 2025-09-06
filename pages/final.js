import { useEffect } from "react";

export default function Final() {
  useEffect(() => {
    const hearts = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerText = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "-20px";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      heart.style.animation = "fall 4s linear forwards";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    }, 500);

    return () => clearInterval(hearts);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      color: "#fff",
      padding: "20px"
    }}>
      <h1>🎉 The Final Surprise 🎉</h1>
      <p>Thank you for going through this journey 💖</p>
      <p style={{ marginTop: "30px", fontStyle: "italic" }}>
        Crafted with ❤️ by Abhii
      </p>

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
