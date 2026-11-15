import React from 'react';
import { Lock, FileText, Wifi, CarFront, ShieldCheck } from 'lucide-react';

const SecurityGuarantee = () => {
  const features = [
    {
      icon: <Lock size={24} />,
      title: "Escrow Deposit Protection",
      desc: "Your security bond remains segregated inside licensed bank trust accounts until photographic check-out inspection sign-off, protecting you against arbitrary deductions."
    },
    {
      icon: <FileText size={24} />,
      title: "Bilingual Tenancy Deeds",
      desc: "Every lease is formatted in verified dual-column legal English & Japanese certified by Supreme Court conveyancers, clearly outlining maintenance responsibilities."
    },
    {
      icon: <Wifi size={24} />,
      title: "Tested Fiber & Redundancy",
      desc: "Our engineering team independently speedtests Wi-Fi (minimum 300Mbps rating) and performs load checks on automatic generator switches prior to your lease execution."
    },
    {
      icon: <CarFront size={24} />,
      title: "VIP Concierge Move-In",
      desc: "From Katunayake airport chauffeur transfers to local eSIM configuration, utility account transfers, and initial organic grocery stock, we engineer a friction-free touchdown."
    },
  ];

  return (
    <div className="guarantee-bg">
      {/* Using rentals-content so it aligns perfectly with the grid above it */}
      <div className="rentals-content">
        
        {/* Header Section */}
        <div className="guarantee-header">
          <div className="guarantee-title-area">
            <span className="guarantee-subtitle">Standard of Care Protocol</span>
            <h2 className="guarantee-title">The Expat Tenant Security Guarantee</h2>
            <p className="guarantee-desc">
              Renting in Sri Lanka as an overseas citizen has traditionally come with uncertainty. 
              SeaHome Lands establishes an institutional benchmark to eradicate unexpected surprises.
            </p>
          </div>
          <div className="guarantee-protocol-badge">
            <ShieldCheck size={20} /> Tokyo & Colombo Legal Registry Protocol
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="guarantee-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="guarantee-card">
              <div className="guarantee-icon">
                {feat.icon}
              </div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SecurityGuarantee;