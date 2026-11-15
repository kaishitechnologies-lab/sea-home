import { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(1);
  return (
    <div className="buy-pagination">
      <span>Showing <b>1 – 6</b> of <b>184</b> properties</span>
      <div className="buy-pages">
        <button className="arrow" onClick={() => setPage(Math.max(1, page - 1))}>‹</button>
        {[1, 2, 3].map((n) => (
          <button key={n} className={page === n ? "active" : ""} onClick={() => setPage(n)}>{n}</button>
        ))}
        <span className="dots">...</span>
        <button className={page === 31 ? "active" : ""} onClick={() => setPage(31)}>31</button>
        <button className="arrow" onClick={() => setPage(Math.min(31, page + 1))}>›</button>
      </div>
    </div>
  );
}