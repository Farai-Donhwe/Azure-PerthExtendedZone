<template>
<div class="azd">
  <!-- Main grid: left sidebar (Customer Mgmt) + center content -->
  <div class="azd-grid">
    <!-- LEFT SIDEBAR: Customer Management with bracket lines -->
    <div class="azd-left">
      <div class="azd-cust-mgmt">
        <!-- Checklist icon -->
        <svg viewBox="0 0 32 32" width="28" height="28" class="azd-cust-icon">
          <rect x="4" y="2" width="24" height="28" rx="3" fill="none" stroke="#76b947" stroke-width="1.8"/>
          <line x1="11" y1="10" x2="24" y2="10" stroke="#76b947" stroke-width="1.2"/>
          <line x1="11" y1="16" x2="24" y2="16" stroke="#76b947" stroke-width="1.2"/>
          <line x1="11" y1="22" x2="20" y2="22" stroke="#76b947" stroke-width="1.2"/>
          <polyline points="7,9.5 8.5,11 10.5,8.5" fill="none" stroke="#76b947" stroke-width="1.2"/>
          <polyline points="7,15.5 8.5,17 10.5,14.5" fill="none" stroke="#76b947" stroke-width="1.2"/>
          <polyline points="7,21.5 8.5,23 10.5,20.5" fill="none" stroke="#76b947" stroke-width="1.2"/>
        </svg>
        <div class="azd-cust-label">Customer<br/>Management</div>
      </div>
      <!-- Bracket lines (top → UI, bottom → Customer User) -->
      <div class="azd-bracket">
        <div class="azd-bracket-vline">
          <div class="azd-bracket-dot azd-bracket-dot-up"></div>
          <div class="azd-bracket-dot azd-bracket-dot-down"></div>
        </div>
        <div class="azd-bracket-arm azd-bracket-top"></div>
        <div class="azd-bracket-arm azd-bracket-bot"></div>
      </div>
    </div>

    <!-- CENTER CONTENT -->
    <div class="azd-center">
      <!-- ROW 1: User Interfaces ↔ Mgmt & Services ↔ Azure Infra -->
      <div class="azd-row1">
        <!-- User Interfaces -->
        <div class="azd-box azd-ui-box">
          <div class="azd-box-title">User<br/>interfaces</div>
          <div class="azd-ui-list">
            <div class="azd-ui-row">
              <svg viewBox="0 0 16 16" width="14" height="14"><rect x="1" y="2" width="14" height="10" rx="1.5" fill="#0078d4"/><rect x="3" y="4" width="10" height="6" rx=".5" fill="#50e6ff"/><rect x="4" y="13" width="8" height="1.5" rx=".5" fill="#0078d4"/></svg>
              <span>Portal</span>
            </div>
            <div class="azd-ui-row">
              <svg viewBox="0 0 16 16" width="14" height="14"><text x="8" y="12" font-size="12" font-weight="700" fill="#ffb900" text-anchor="middle" font-family="monospace">{ }</text></svg>
              <span>REST API</span>
            </div>
            <div class="azd-ui-row">
              <svg viewBox="0 0 16 16" width="14" height="14"><rect x="1" y="3" width="14" height="10" rx="1.5" fill="#003a6e"/><text x="8" y="11" font-size="6" fill="#50e6ff" text-anchor="middle" font-family="monospace">&gt;_</text></svg>
              <span>CLI / PS</span>
            </div>
          </div>
        </div>

        <!-- Bidirectional arrow -->
        <div class="azd-arrow-h">
          <svg viewBox="0 0 28 12" width="24" height="10">
            <line x1="2" y1="6" x2="26" y2="6" stroke="#999" stroke-width="1"/>
            <polygon points="0,6 5,3 5,9" fill="#999"/>
            <polygon points="28,6 23,3 23,9" fill="#999"/>
          </svg>
          <div class="azd-arrow-track"><div class="azd-pulse azd-pulse-r"></div><div class="azd-pulse azd-pulse-l"></div></div>
        </div>

        <!-- Azure Management & Services -->
        <div class="azd-box azd-mgmt-box">
          <div class="azd-box-title">Azure management and services</div>
          <!-- Row 1 of icons -->
          <div class="azd-icon-row">
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><path d="M10 2 L17 6 L17 14 L10 18 L3 14 L3 6 Z" fill="#0078d4" opacity=".8"/><path d="M10 6 L14 8 L14 12 L10 14 L6 12 L6 8 Z" fill="#50e6ff"/></svg>
              <span>Policy</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><circle cx="10" cy="8" r="4" fill="#00b7c3"/><path d="M4 18 Q4 13 10 13 Q16 13 16 18" fill="#00b7c3" opacity=".6"/></svg>
              <span>Azure AD</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><rect x="3" y="3" width="14" height="14" rx="2" fill="#5c2d91"/><rect x="5" y="6" width="4" height="1.5" rx=".3" fill="#fff" opacity=".7"/><rect x="5" y="9" width="6" height="1.5" rx=".3" fill="#fff" opacity=".5"/><rect x="5" y="12" width="3" height="1.5" rx=".3" fill="#fff" opacity=".4"/></svg>
              <span>ARM<br/>Templates</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><path d="M12 3 L17 8 L12 8 Z" fill="#e3008c" opacity=".5"/><rect x="3" y="3" width="14" height="14" rx="1.5" fill="none" stroke="#e3008c" stroke-width="1.2"/><line x1="6" y1="11" x2="14" y2="11" stroke="#e3008c" stroke-width="1"/><line x1="6" y1="14" x2="11" y2="14" stroke="#e3008c" stroke-width="1"/></svg>
              <span>Tags</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><circle cx="6" cy="6" r="2.5" fill="#50e6ff"/><circle cx="14" cy="6" r="2.5" fill="#50e6ff"/><circle cx="10" cy="14" r="2.5" fill="#50e6ff"/><line x1="6" y1="8" x2="10" y2="12" stroke="#50e6ff" stroke-width=".8"/><line x1="14" y1="8" x2="10" y2="12" stroke="#50e6ff" stroke-width=".8"/><line x1="8" y1="6" x2="12" y2="6" stroke="#50e6ff" stroke-width=".8"/></svg>
              <span>Resource<br/>Graph</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><rect x="4" y="3" width="12" height="14" rx="1.5" fill="#ffb900"/><path d="M7 8 L9 10.5 L13 6" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>
              <span>Audit</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><circle cx="10" cy="10" r="7" fill="none" stroke="#00a4ef" stroke-width="1.2"/><circle cx="10" cy="10" r="3" fill="#00a4ef"/><rect x="9" y="4" width="2" height="3" rx=".5" fill="#00a4ef"/><rect x="9" y="13" width="2" height="3" rx=".5" fill="#00a4ef"/><rect x="4" y="9" width="3" height="2" rx=".5" fill="#00a4ef"/><rect x="13" y="9" width="3" height="2" rx=".5" fill="#00a4ef"/></svg>
              <span>Automation</span>
            </div>
          </div>
          <!-- Row 2 of icons -->
          <div class="azd-icon-row">
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><path d="M10 2 L17 6 L17 14 L10 18 L3 14 L3 6 Z" fill="#e81123" opacity=".8"/><path d="M10 7 L12 10 L10 10 L10 14 L8 11 L10 11 Z" fill="#fff" opacity=".7"/></svg>
              <span>Security<br/>Center</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><rect x="3" y="5" width="14" height="10" rx="1.5" fill="#0078d4"/><polyline points="5,12 8,8 11,10 14,7" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round"/></svg>
              <span>Monitor</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><circle cx="9" cy="9" r="5" fill="none" stroke="#0078d4" stroke-width="1.5"/><line x1="13" y1="13" x2="17" y2="17" stroke="#0078d4" stroke-width="1.5" stroke-linecap="round"/><rect x="6" y="7" width="2" height="4" fill="#50e6ff"/><rect x="9" y="5" width="2" height="6" fill="#50e6ff"/></svg>
              <span>Log<br/>Analytics</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><path d="M10 2 L17 6 L17 14 L10 18 L3 14 L3 6 Z" fill="#0078d4"/><path d="M10 6 L13 8 L13 12 L10 14 L7 12 L7 8 Z" fill="#50e6ff"/></svg>
              <span>Defender</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><circle cx="10" cy="10" r="7" fill="none" stroke="#50e6ff" stroke-width="1.2"/><circle cx="10" cy="10" r="1.5" fill="#50e6ff"/><line x1="10" y1="4" x2="10" y2="8" stroke="#50e6ff" stroke-width="1"/><line x1="10" y1="12" x2="10" y2="16" stroke="#50e6ff" stroke-width="1"/><line x1="4" y1="10" x2="8" y2="10" stroke="#50e6ff" stroke-width="1"/><line x1="12" y1="10" x2="16" y2="10" stroke="#50e6ff" stroke-width="1"/></svg>
              <span>Sentinel</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><rect x="5" y="6" width="10" height="10" rx="1.5" fill="#ffb900"/><circle cx="10" cy="5" r="3" fill="#ffb900"/><rect x="9" y="9" width="2" height="5" rx=".5" fill="#fff" opacity=".7"/><circle cx="10" cy="9" r="1" fill="#fff" opacity=".7"/></svg>
              <span>Key Vault</span>
            </div>
            <div class="azd-svc-item">
              <svg viewBox="0 0 20 20" width="18" height="18"><circle cx="10" cy="10" r="7" fill="none" stroke="#00b7c3" stroke-width="1.2"/><path d="M7 10 L9 12.5 L14 7" fill="none" stroke="#00b7c3" stroke-width="1.5" stroke-linecap="round"/></svg>
              <span>Automanage</span>
            </div>
          </div>
          <!-- Category pills -->
          <div class="azd-cats">
            <span>Inventory</span><span>Billing</span><span>Monitoring</span><span>Secrets</span><span>Governance</span><span>Compliance</span>
          </div>
        </div>

        <!-- Bidirectional arrow -->
        <div class="azd-arrow-h">
          <svg viewBox="0 0 28 12" width="24" height="10">
            <line x1="2" y1="6" x2="26" y2="6" stroke="#999" stroke-width="1"/>
            <polygon points="0,6 5,3 5,9" fill="#999"/>
            <polygon points="28,6 23,3 23,9" fill="#999"/>
          </svg>
          <div class="azd-arrow-track"><div class="azd-pulse azd-pulse-r"></div><div class="azd-pulse azd-pulse-l"></div></div>
        </div>

        <!-- Azure Infra & Service Control -->
        <div class="azd-box azd-infra-box">
          <div class="azd-box-title">Azure Infra and<br/>Service Control</div>
          <div class="azd-infra-icon">
            <svg viewBox="0 0 48 44" width="42" height="38">
              <!-- Cloud shape -->
              <path d="M14 22 Q8 22 8 17 Q8 12 14 12 Q14 6 22 6 Q28 6 30 10 Q31 8 34 8 Q40 8 40 14 Q44 14 44 18 Q44 22 40 22 Z" fill="none" stroke="#0078d4" stroke-width="1.2"/>
              <path d="M14 22 Q8 22 8 17 Q8 12 14 12 Q14 6 22 6 Q28 6 30 10 Q31 8 34 8 Q40 8 40 14 Q44 14 44 18 Q44 22 40 22 Z" fill="#0078d4" opacity=".15"/>
              <!-- Server rack -->
              <rect x="10" y="25" width="28" height="14" rx="2" fill="#1a1a2e" stroke="#555" stroke-width="1"/>
              <rect x="13" y="28" width="4" height="2.5" rx=".5" fill="#50e6ff"/>
              <rect x="19" y="28" width="4" height="2.5" rx=".5" fill="#50e6ff"/>
              <rect x="25" y="28" width="4" height="2.5" rx=".5" fill="#50e6ff"/>
              <rect x="31" y="28" width="4" height="2.5" rx=".5" fill="#50e6ff"/>
              <rect x="13" y="32" width="4" height="2.5" rx=".5" fill="#00b7c3"/>
              <rect x="19" y="32" width="4" height="2.5" rx=".5" fill="#00b7c3"/>
              <rect x="25" y="32" width="4" height="2.5" rx=".5" fill="#00b7c3"/>
              <rect x="31" y="32" width="4" height="2.5" rx=".5" fill="#00b7c3"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- CONTROL PLANE BAR -->
      <div class="azd-cp">
        <div class="azd-cp-glow azd-cp-glow-1"></div>
        <div class="azd-cp-glow azd-cp-glow-2"></div>
        <span>Azure control plane</span>
      </div>

      <!-- DOTTED SEPARATOR -->
      <div class="azd-sep"></div>

      <!-- EXTENDED ZONE SERVICES -->
      <div class="azd-box azd-ez-box">
        <div class="azd-ez-title">Extended Zone Azure Services</div>
        <div class="azd-ez-row">
          <div class="azd-ez-item">
            <svg viewBox="0 0 20 20" width="20" height="20"><rect x="2" y="4" width="16" height="12" rx="2" fill="#0078d4"/><rect x="4" y="6" width="5" height="4" rx=".5" fill="#50e6ff"/><rect x="11" y="6" width="5" height="4" rx=".5" fill="#50e6ff"/><rect x="4" y="11" width="12" height="3" rx=".5" fill="#003a6e"/></svg>
            <span>Virtual<br/>Machines</span>
          </div>
          <div class="azd-ez-item">
            <svg viewBox="0 0 20 20" width="20" height="20"><circle cx="10" cy="10" r="7.5" fill="none" stroke="#326ce5" stroke-width="1.4"/><circle cx="10" cy="10" r="2.8" fill="#326ce5"/><circle cx="10" cy="3.5" r="1.4" fill="#326ce5"/><circle cx="15.5" cy="13.5" r="1.4" fill="#326ce5"/><circle cx="4.5" cy="13.5" r="1.4" fill="#326ce5"/><line x1="10" y1="5" x2="10" y2="7.5" stroke="#326ce5" stroke-width=".8"/><line x1="14" y1="12" x2="12.5" y2="11" stroke="#326ce5" stroke-width=".8"/><line x1="6" y1="12" x2="7.5" y2="11" stroke="#326ce5" stroke-width=".8"/></svg>
            <span>Kubernetes<br/>Services</span>
          </div>
          <div class="azd-ez-item">
            <svg viewBox="0 0 20 20" width="20" height="20"><rect x="2" y="5" width="16" height="10" rx="2" fill="none" stroke="#0078d4" stroke-width="1.3"/><line x1="10" y1="5" x2="10" y2="15" stroke="#0078d4" stroke-width="1"/><line x1="2" y1="10" x2="18" y2="10" stroke="#0078d4" stroke-width="1"/><circle cx="6" cy="7.5" r="1" fill="#50e6ff"/><circle cx="14" cy="7.5" r="1" fill="#50e6ff"/><circle cx="6" cy="12.5" r="1" fill="#50e6ff"/><circle cx="14" cy="12.5" r="1" fill="#50e6ff"/></svg>
            <span>Virtual<br/>Networks</span>
          </div>
          <div class="azd-ez-item">
            <svg viewBox="0 0 20 20" width="20" height="20"><circle cx="6.5" cy="10" r="4" fill="none" stroke="#e3008c" stroke-width="1.3"/><circle cx="13.5" cy="10" r="4" fill="none" stroke="#e3008c" stroke-width="1.3"/><line x1="9" y1="7.5" x2="11" y2="7.5" stroke="#e3008c" stroke-width="1.3"/><line x1="9" y1="12.5" x2="11" y2="12.5" stroke="#e3008c" stroke-width="1.3"/></svg>
            <span>Private<br/>Links</span>
          </div>
          <div class="azd-ez-item">
            <svg viewBox="0 0 20 20" width="20" height="20"><ellipse cx="10" cy="12" rx="7" ry="3.5" fill="none" stroke="#50e6ff" stroke-width="1.2"/><ellipse cx="10" cy="8" rx="7" ry="3.5" fill="#1a1a2e" stroke="#50e6ff" stroke-width="1.2"/><line x1="3" y1="8" x2="3" y2="12" stroke="#50e6ff" stroke-width="1.2"/><line x1="17" y1="8" x2="17" y2="12" stroke="#50e6ff" stroke-width="1.2"/></svg>
            <span>Disks</span>
          </div>
          <div class="azd-ez-item">
            <svg viewBox="0 0 20 20" width="20" height="20"><rect x="3" y="4" width="14" height="12" rx="1.5" fill="none" stroke="#0078d4" stroke-width="1.2"/><rect x="5" y="6" width="5" height="4" rx=".5" fill="#50e6ff"/><rect x="12" y="6" width="3" height="2" rx=".3" fill="#50e6ff"/><rect x="12" y="9" width="3" height="2" rx=".3" fill="#50e6ff"/><rect x="5" y="12" width="10" height="2" rx=".5" fill="#50e6ff" opacity=".6"/></svg>
            <span>Storage<br/>Accounts</span>
          </div>
          <div class="azd-ez-item">
            <svg viewBox="0 0 20 20" width="20" height="20"><ellipse cx="10" cy="6" rx="6" ry="3" fill="#e87d0d" opacity=".8"/><rect x="4" y="6" width="12" height="8" fill="#e87d0d" opacity=".6"/><ellipse cx="10" cy="14" rx="6" ry="3" fill="#e87d0d" opacity=".8"/><ellipse cx="10" cy="6" rx="6" ry="3" fill="none" stroke="#e87d0d" stroke-width="1"/></svg>
            <span>SQL Server<br/>MI</span>
          </div>
          <div class="azd-ez-item">
            <svg viewBox="0 0 20 20" width="20" height="20"><circle cx="10" cy="10" r="7" fill="none" stroke="#336791" stroke-width="1.2"/><ellipse cx="10" cy="10" rx="3.5" ry="7" fill="none" stroke="#336791" stroke-width=".8"/><line x1="3" y1="10" x2="17" y2="10" stroke="#336791" stroke-width=".8"/><circle cx="12" cy="7" r="1" fill="#336791"/></svg>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>

      <!-- EXTENDED ZONE INFRASTRUCTURE -->
      <div class="azd-infra-bottom">
        <svg viewBox="0 0 48 36" width="36" height="28">
          <path d="M12 18 Q6 18 6 14 Q6 10 12 10 Q12 5 19 5 Q24 5 26 8 Q27 6 30 6 Q35 6 35 10 Q38 10 38 13 Q38 16 35 16" fill="none" stroke="#888" stroke-width="1"/>
          <path d="M12 18 Q6 18 6 14 Q6 10 12 10 Q12 5 19 5 Q24 5 26 8 Q27 6 30 6 Q35 6 35 10 Q38 10 38 13 Q38 16 35 16" fill="#555" opacity=".15"/>
          <rect x="10" y="20" width="24" height="12" rx="2" fill="#1a1a2e" stroke="#555" stroke-width="1"/>
          <rect x="13" y="23" width="3" height="2" rx=".3" fill="#50e6ff" opacity=".7"/>
          <rect x="18" y="23" width="3" height="2" rx=".3" fill="#50e6ff" opacity=".7"/>
          <rect x="23" y="23" width="3" height="2" rx=".3" fill="#00b7c3" opacity=".7"/>
          <rect x="28" y="23" width="3" height="2" rx=".3" fill="#00b7c3" opacity=".7"/>
          <rect x="13" y="27" width="3" height="2" rx=".3" fill="#50e6ff" opacity=".5"/>
          <rect x="18" y="27" width="3" height="2" rx=".3" fill="#50e6ff" opacity=".5"/>
          <rect x="23" y="27" width="3" height="2" rx=".3" fill="#00b7c3" opacity=".5"/>
          <rect x="28" y="27" width="3" height="2" rx=".3" fill="#00b7c3" opacity=".5"/>
        </svg>
        <span>Extended Zone Infrastructure</span>
      </div>

      <!-- CUSTOMER USER (bottom center) -->
      <div class="azd-cust-user">
        <svg viewBox="0 0 28 28" width="24" height="24">
          <circle cx="14" cy="9" r="5" fill="none" stroke="#bbb" stroke-width="1.3"/>
          <path d="M5 25 Q5 17 14 17 Q23 17 23 25" fill="none" stroke="#bbb" stroke-width="1.3"/>
        </svg>
        <span>Customer User</span>
      </div>
    </div>
  </div>
  <!-- Vertical flow line: Customer User → Extended Zone Infra (center bottom) -->
  <div class="azd-vert-flow">
    <div class="azd-vf-line">
      <div class="azd-vf-dot azd-vf-dot-up"></div>
    </div>
  </div>
</div>
</template>

<style scoped>
/* ─── Root ─── */
.azd {
  position: relative;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 10px;
  line-height: 1.25;
  color: #ddd;
}

/* ─── Grid: sidebar + center ─── */
.azd-grid {
  display: flex;
  gap: 0;
}

/* ─── Left sidebar (Customer Management) ─── */
.azd-left {
  flex: 0 0 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 0.2em;
}
.azd-cust-mgmt {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15em;
  position: relative;
  z-index: 2;
}
.azd-cust-icon { opacity: .9; }
.azd-cust-label {
  font-size: 0.8em;
  font-weight: 600;
  color: #76b947;
  text-align: center;
  line-height: 1.2;
}

/* Bracket lines */
.azd-bracket {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 46px;
  width: 10px;
}
.azd-bracket-vline {
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 1.5px;
  background: #76b947;
  overflow: visible;
}
.azd-bracket-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  left: -1.5px;
  background: #76b947;
  box-shadow: 0 0 5px #76b947;
}
.azd-bracket-dot-up { animation: bracketUp 3s linear infinite; }
.azd-bracket-dot-down { animation: bracketDown 3s linear infinite; animation-delay: 1.5s; }
@keyframes bracketUp {
  0%   { bottom: 0; opacity: 0; }
  8%   { opacity: 1; }
  92%  { opacity: 1; }
  100% { bottom: 100%; opacity: 0; }
}
@keyframes bracketDown {
  0%   { top: 0; opacity: 0; }
  8%   { opacity: 1; }
  92%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
.azd-bracket-arm {
  position: absolute;
  left: 0;
  width: 8px;
  height: 1.5px;
  background: #76b947;
}
.azd-bracket-top { top: 8px; }
.azd-bracket-bot { bottom: 8px; }

/* ─── Center area ─── */
.azd-center {
  flex: 1;
  min-width: 0;
}

/* ─── Row 1: UI ↔ Mgmt ↔ Infra ─── */
.azd-row1 {
  display: flex;
  align-items: stretch;
  gap: 0;
}

/* ─── Boxes ─── */
.azd-box {
  border: 1px solid #444;
  border-radius: 4px;
  padding: 0.3em;
  background: rgba(18, 18, 30, 0.9);
}
.azd-box-title {
  font-size: 0.85em;
  font-weight: 600;
  color: #ccc;
  text-align: center;
  margin-bottom: 0.25em;
  line-height: 1.2;
}

/* User Interfaces box */
.azd-ui-box {
  flex: 0 0 68px;
}
.azd-ui-list {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
}
.azd-ui-row {
  display: flex;
  align-items: center;
  gap: 0.3em;
  font-size: 0.78em;
  color: #bbb;
}

/* Management & Services box */
.azd-mgmt-box {
  flex: 1;
  min-width: 0;
}

/* Service icon rows */
.azd-icon-row {
  display: flex;
  justify-content: center;
  gap: 0.15em;
  margin-bottom: 0.2em;
}
.azd-svc-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.08em;
  width: 42px;
  text-align: center;
}
.azd-svc-item span {
  font-size: 0.62em;
  color: #999;
  line-height: 1.15;
}

/* Category pills */
.azd-cats {
  display: flex;
  justify-content: center;
  gap: 0.25em;
  padding-top: 0.2em;
  border-top: 1px solid #333;
  margin-top: 0.15em;
}
.azd-cats span {
  font-size: 0.62em;
  color: #88c8f0;
  padding: 0.1em 0.3em;
  background: rgba(0, 120, 212, 0.12);
  border: 1px solid rgba(0, 120, 212, 0.25);
  border-radius: 2px;
}

/* Infra box */
.azd-infra-box {
  flex: 0 0 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.azd-infra-icon {
  display: flex;
  justify-content: center;
}

/* ─── Bidirectional arrows ─── */
.azd-arrow-h {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 26px;
  flex-shrink: 0;
  position: relative;
}
.azd-arrow-track {
  position: absolute;
  top: 50%;
  left: 2px;
  right: 2px;
  height: 0;
  overflow: visible;
}
.azd-pulse {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  top: -2px;
}
.azd-pulse-r {
  background: #00b7c3;
  box-shadow: 0 0 5px #00b7c3;
  animation: pulseR 2.8s linear infinite;
}
.azd-pulse-l {
  background: #0078d4;
  box-shadow: 0 0 5px #0078d4;
  animation: pulseL 2.8s linear infinite;
  animation-delay: 1.4s;
}
@keyframes pulseR {
  0%   { left: 0; opacity: 0; }
  8%   { opacity: 1; }
  92%  { opacity: 1; }
  100% { left: calc(100% - 4px); opacity: 0; }
}
@keyframes pulseL {
  0%   { left: calc(100% - 4px); opacity: 0; }
  8%   { opacity: 1; }
  92%  { opacity: 1; }
  100% { left: 0; opacity: 0; }
}

/* ─── Control Plane bar ─── */
.azd-cp {
  margin-top: 0.3em;
  background: linear-gradient(90deg, #002050, #0060b0, #0078d4, #0060b0, #002050);
  border-radius: 3px;
  padding: 0.18em 0;
  text-align: center;
  font-size: 0.82em;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.03em;
  position: relative;
  overflow: hidden;
}
.azd-cp-glow {
  position: absolute;
  top: 0;
  left: -25%;
  width: 25%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(80, 230, 255, 0.15), transparent);
  animation: sweep 4.5s ease-in-out infinite;
}
.azd-cp-glow-2 { animation-delay: 2.2s; }
@keyframes sweep {
  0%   { left: -25%; }
  100% { left: 125%; }
}

/* ─── Dotted separator ─── */
.azd-sep {
  border-top: 1.8px dashed #555;
  margin: 0.25em 0;
}

/* ─── Extended Zone Services ─── */
.azd-ez-box {
  padding: 0.25em 0.3em;
}
.azd-ez-title {
  font-size: 0.82em;
  font-weight: 600;
  color: #50e6ff;
  text-align: center;
  margin-bottom: 0.2em;
}
.azd-ez-row {
  display: flex;
  justify-content: center;
  gap: 0.2em;
  flex-wrap: wrap;
}
.azd-ez-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.08em;
  width: 42px;
  text-align: center;
}
.azd-ez-item span {
  font-size: 0.6em;
  color: #bbb;
  line-height: 1.15;
}

/* ─── Extended Zone Infrastructure ─── */
.azd-infra-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  margin-top: 0.2em;
  font-size: 0.75em;
  color: #999;
}

/* ─── Customer User ─── */
.azd-cust-user {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
  margin-top: 0.2em;
  font-size: 0.78em;
  color: #bbb;
}

/* ─── Vertical flow line (bottom) ─── */
.azd-vert-flow {
  display: none; /* Arrow already implied by layout proximity */
}

/* ─── Light-mode overrides ─── */
:global(html:not(.dark)) .azd { color: #333; }
:global(html:not(.dark)) .azd-box { background: rgba(248, 250, 253, 0.95); border-color: #ccc; }
:global(html:not(.dark)) .azd-box-title { color: #222; }
:global(html:not(.dark)) .azd-ui-row { color: #444; }
:global(html:not(.dark)) .azd-svc-item span { color: #555; }
:global(html:not(.dark)) .azd-cats span { color: #0060b0; background: rgba(0,120,212,0.06); border-color: rgba(0,120,212,0.18); }
:global(html:not(.dark)) .azd-cp { background: linear-gradient(90deg, #003a6e, #0078d4, #005a9e, #0078d4, #003a6e); }
:global(html:not(.dark)) .azd-sep { border-color: #ccc; }
:global(html:not(.dark)) .azd-ez-item span { color: #555; }
:global(html:not(.dark)) .azd-infra-bottom { color: #666; }
:global(html:not(.dark)) .azd-cust-user { color: #555; }
:global(html:not(.dark)) .azd-cust-label { color: #4a8a20; }
:global(html:not(.dark)) .azd-bracket-vline { background: #4a8a20; }
:global(html:not(.dark)) .azd-bracket-arm { background: #4a8a20; }
</style>
