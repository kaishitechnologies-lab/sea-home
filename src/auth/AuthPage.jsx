import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Added
import { 
  Building2, Settings, RefreshCw, Languages, 
  Mail, Lock, Eye, Fingerprint, Building, ArrowRight,
  CheckCircle2, Info, Phone, ArrowLeft // Added ArrowLeft
} from 'lucide-react';
import './auth.css';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="auth-page-wrapper">
      
      {/* BACK BUTTON - Placed here to sit top left */}
      <button className="back-btn" onClick={() => navigate('/home')}>
        <ArrowLeft size={20} />
      </button>

      <div className="auth-card">
        
        {/* ================= LEFT PANEL ================= */}
        <div className="auth-left-panel">
          <div className="brand-header">
            <div className="brand-logo-box">
              <Building2 size={24} />
            </div>
            <div>
              <h3 className="brand-name">Colombo – Tokyo Conveyancing</h3>
              <p className="brand-sub">Bilateral Vault & Property Registry</p>
            </div>
          </div>

          <h1 className="hero-heading">Secure Stewardship for High-Value Coastal Land</h1>
          <p className="hero-description">
            Authorized gateway for international titleholder audits, deed escrow tracking, Central Bank IIA dividend reconciliations, and multilingual legal execution.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <Settings className="feature-icon" size={22} />
              <div>
                <h4 className="feature-title">Bim Saviya Title Class 1</h4>
                <p className="feature-desc">Direct synchronized read-access to the Land Registry of Sri Lanka.</p>
              </div>
            </div>

            <div className="feature-item">
              <RefreshCw className="feature-icon" size={22} />
              <div>
                <h4 className="feature-title">Inward Investment Account (IIA)</h4>
                <p className="feature-desc">Compliant capital repatriation logs and Central Bank notices.</p>
              </div>
            </div>

            <div className="feature-item">
              <Languages className="feature-icon" size={22} />
              <div>
                <h4 className="feature-title">Bilingual Notary Records</h4>
                <p className="feature-desc">English & Japanese certified condominium deed translations.</p>
              </div>
            </div>
          </div>

          <div className="hotline-box">
            <p className="hotline-title">PRIORITY CONVEYANCER HOTLINE</p>
            <div className="hotline-numbers">
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} /> LK: +94 (11) 234-5678
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} /> JP: +81 (3) 5555-8900
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="auth-right-panel">
          <div className="top-meta">
            <span className="auth-label">AUTHORIZED GATEWAY</span>
            <div className="lang-switch">
              <button className="lang-btn active">EN</button>
              <button className="lang-btn">日本語</button>
            </div>
          </div>
          
          <h2 className="form-title">
            {isSignUp ? 'Client Portal Registration' : 'Client Portal Sign In'}
          </h2>

          <div className="role-tabs">
            <button className="role-tab active">
              <Building size={16} /> Investor & Buyer
            </button>
            <button className="role-tab">
              <RefreshCw size={16} /> Tenant & Expat
            </button>
            <button className="role-tab">
              <Building2 size={16} /> Agency & Broker
            </button>
          </div>

          <div className="info-banner">
            <Info size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>
              {isSignUp 
                ? "Provide your details to request access. Our compliance team will verify your institutional status."
                : "Managing offshore deed escrows, Bim Saviya audits, and lease dividend yields."}
            </span>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            
            {/* Email Input */}
            <div className="input-group">
              <div className="label-row">
                <label className="input-label">Registered Work or Investor Email</label>
              </div>
              <div className="input-wrapper">
                <Mail className="input-icon" size={18} />
                <input 
                  type="email" 
                  className="auth-input" 
                  placeholder="investor@domain.com or name@institution.jp" 
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="input-group">
              <div className="label-row">
                <label className="input-label">Master Password</label>
                {!isSignUp && <a href="#" className="forgot-link">Forgot Password?</a>}
              </div>
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input 
                  type="password" 
                  className="auth-input" 
                  placeholder="••••••••••••••••" 
                />
                <Eye className="eye-icon" size={18} />
              </div>
            </div>

            {/* Checkbox Row */}
            <div className="checkbox-row">
              <label className="checkbox-label">
                <input type="checkbox" />
                {isSignUp ? "I agree to the Terms of Service" : "Remember this secure device for 30 days"}
              </label>
              {!isSignUp && (
                <div className="fido-badge">
                  <CheckCircle2 size={14} /> FIDO2 ENABLED
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button className="btn-submit" type="submit">
              {isSignUp ? 'Request Access' : 'Sign In to Secure Portal'} 
              <ArrowRight size={18} />
            </button>
          </form>

          {/* SSO Authentication (Only show on Sign In) */}
          {!isSignUp && (
            <>
              <div className="divider">
                <span>Or authenticate via</span>
              </div>
              
              <div className="btn-group">
                <button className="btn-secondary">
                  <Fingerprint size={18} /> Passkey / Face ID
                </button>
                <button className="btn-secondary">
                  <Building size={18} /> Institutional SSO
                </button>
              </div>
            </>
          )}

          {/* Toggle Sign In / Sign Up */}
          <div className="signup-footer">
            {isSignUp ? (
              <>
                Already registered?{' '}
                <button className="signup-link" onClick={() => setIsSignUp(false)}>
                  Sign In Here
                </button>
              </>
            ) : (
              <>
                New foreign buyer or institutional fund?{' '}
                <button className="signup-link" onClick={() => setIsSignUp(true)}>
                  Apply for Private Client Onboarding &gt;
                </button>
              </>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
}