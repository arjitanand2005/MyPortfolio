export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year} — Crafted with precision by{" "}
          <span className="text-gold">Arjit Anand</span>
        </p>
      </div>
    </footer>
  );
}
