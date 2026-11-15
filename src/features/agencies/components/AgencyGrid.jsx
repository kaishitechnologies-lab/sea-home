import AgencyCard from "./AgencyCard";
import { agencies } from "../data/agenciesData";

export default function AgencyGrid() {
  return (
    <>
      <div className="ag-grid">
        {agencies.map((a) => <AgencyCard key={a.id} a={a} />)}
      </div>

      <div className="ag-pager">
        <span>Showing 1 – 6 of 42 accredited partner agencies</span>
        <div className="ag-pager__btns">
          <button disabled>Previous</button>
          <button className="is-active">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </div>
    </>
  );
}