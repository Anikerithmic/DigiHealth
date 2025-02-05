export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#007BFF", padding: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "20px" }}>DigiHealth</h1>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ margin: "0 10px" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </a>
          </li>
          <li style={{ margin: "0 10px" }}>
            <a href="/login" style={{ color: "#fff", textDecoration: "none" }}>
              Login
            </a>
          </li>
          <li style={{ margin: "0 10px" }}>
            <a href="/signup" style={{ color: "#fff", textDecoration: "none" }}>
              Signup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
