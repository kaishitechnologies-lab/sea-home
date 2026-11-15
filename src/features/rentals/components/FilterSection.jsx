import React, { useState } from 'react';
import {
  Compass,
  Building2,
  CheckCircle2,
  Fuel,
  Droplets,
  PawPrint,
  Waves,
  RotateCcw,
  SlidersHorizontal,
} from 'lucide-react';

const MIN = 300;
const MAX = 3000;
const STEP = 50;

const MUST_HAVES = [
  { key: 'fiber', label: '300Mbps Fiber Tested', Icon: CheckCircle2 },
  { key: 'generator', label: 'Backup Generator Active', Icon: Fuel },
  { key: 'pool', label: 'Private Pool', Icon: Droplets },
  { key: 'pet', label: 'Pet Friendly', Icon: PawPrint },
  { key: 'ocean', label: 'Ocean View', Icon: Waves },
];

const BEDROOMS = ['Any', '1', '2', '3', '4+'];

const fmt = (n) => `$${n.toLocaleString('en-US')}`;
const pct = (v) => ((v - MIN) / (MAX - MIN)) * 100;

const FilterSection = () => {
  const [bedrooms, setBedrooms] = useState('Any');
  const [[lo, hi], setRange] = useState([MIN, MAX]);
  const [tags, setTags] = useState(['fiber']);

  const onMin = (e) => setRange(([, h]) => [Math.min(Number(e.target.value), h - STEP), h]);
  const onMax = (e) => setRange(([l]) => [l, Math.max(Number(e.target.value), l + STEP)]);

  const toggleTag = (key) =>
    setTags((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

  const reset = () => {
    setBedrooms('Any');
    setRange([MIN, MAX]);
    setTags([]);
  };

  return (
    <div className="filter-wrapper">
      <div className="filter-card">
        <div className="filter-grid-top">
          {/* Province */}
          <div>
            <label className="filter-label">Province &amp; Coastal Hub</label>
            <div className="filter-field">
              <Compass size={17} />
              <select defaultValue="colombo">
                <option value="colombo">Colombo 03 &amp; 07 Diplomatic Core (94)</option>
                <option value="galle">Galle Fort &amp; Southern Coast (61)</option>
                <option value="kandy">Kandy Hill Country (38)</option>
                <option value="negombo">Negombo &amp; Western Coast (47)</option>
              </select>
            </div>
          </div>

          {/* Typology */}
          <div>
            <label className="filter-label">Residence Typology</label>
            <div className="filter-field">
              <Building2 size={17} />
              <select defaultValue="all">
                <option value="all">All Architectural Types</option>
                <option value="villa">Colonial Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="apartment">Apartment</option>
                <option value="estate">Tea Estate Bungalow</option>
              </select>
            </div>
          </div>

          {/* Monthly lease */}
          <div>
            <div className="filter-range-head">
              <label className="filter-label">Monthly Lease</label>
              <span className="filter-range-value">
                {fmt(lo)} - {fmt(hi)}
                {hi === MAX ? '+' : ''} USD
              </span>
            </div>
            <div className="range-slider">
              <div className="range-track">
                <div
                  className="range-fill"
                  style={{ left: `${pct(lo)}%`, right: `${100 - pct(hi)}%` }}
                />
              </div>
              <input type="range" min={MIN} max={MAX} step={STEP} value={lo} onChange={onMin} />
              <input type="range" min={MIN} max={MAX} step={STEP} value={hi} onChange={onMax} />
            </div>
          </div>

          {/* Bedrooms */}
          <div>
            <label className="filter-label">Bedrooms Required</label>
            <div className="filter-bedroom-group">
              {BEDROOMS.map((b) => (
                <button
                  key={b}
                  className={bedrooms === b ? 'active' : ''}
                  onClick={() => setBedrooms(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Must-haves + actions */}
        <div className="filter-bottom-row">
          <div className="filter-tags-group">
            <span className="filter-label">Expat Must-Haves:</span>
            {MUST_HAVES.map(({ key, label, Icon }) => (
              <button
                key={key}
                className={`filter-tag ${tags.includes(key) ? 'active' : ''}`}
                onClick={() => toggleTag(key)}
              >
                <Icon size={14} /> {label}
              </button>
            ))}
          </div>

          <div className="filter-actions-group">
            <button className="btn-reset" onClick={reset}>
              <RotateCcw size={13} /> Reset
            </button>
            <button className="btn-apply">
              <SlidersHorizontal size={16} /> Apply Filter (342)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;