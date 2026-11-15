export default function Page({ title, children }) {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}