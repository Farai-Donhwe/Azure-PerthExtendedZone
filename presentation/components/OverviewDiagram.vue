<template>
<div class="az-overview">
  <!-- Top row: User Interfaces | Management & Services | Azure Infra -->
  <div class="az-top-row">
    <!-- User Interfaces -->
    <div class="az-panel az-ui-panel">
      <div class="az-panel-header">User Interfaces</div>
      <div class="az-ui-items">
        <div class="az-ui-item"><span class="az-icon az-icon-portal"></span><span>Portal</span></div>
        <div class="az-ui-item"><span class="az-icon az-icon-api"></span><span>REST API</span></div>
        <div class="az-ui-item"><span class="az-icon az-icon-cli"></span><span>CLI / PS</span></div>
      </div>
    </div>

    <!-- Arrow: UI → Management -->
    <div class="az-conn az-conn-h">
      <div class="az-conn-line-h"><div class="az-flow-dot az-fd-r"></div><div class="az-flow-dot az-fd-l"></div></div>
    </div>

    <!-- Azure Management & Services (center) -->
    <div class="az-panel az-mgmt-panel">
      <div class="az-panel-header">Azure management and services</div>
      <div class="az-svc-grid">
        <div class="az-svc"><span class="az-dot" style="background:#0078d4"></span>Policy</div>
        <div class="az-svc"><span class="az-dot" style="background:#00b7c3"></span>Azure AD</div>
        <div class="az-svc"><span class="az-dot" style="background:#5c2d91"></span>ARM Templates</div>
        <div class="az-svc"><span class="az-dot" style="background:#e3008c"></span>Tags</div>
        <div class="az-svc"><span class="az-dot" style="background:#50e6ff"></span>Resource Graph</div>
        <div class="az-svc"><span class="az-dot" style="background:#ffb900"></span>Audit</div>
        <div class="az-svc"><span class="az-dot" style="background:#00a4ef"></span>Automation</div>
      </div>
      <div class="az-svc-grid">
        <div class="az-svc"><span class="az-dot" style="background:#e81123"></span>Security Center</div>
        <div class="az-svc"><span class="az-dot" style="background:#0078d4"></span>Monitor</div>
        <div class="az-svc"><span class="az-dot" style="background:#0078d4"></span>Log Analytics</div>
        <div class="az-svc"><span class="az-dot" style="background:#0078d4"></span>Defender</div>
        <div class="az-svc"><span class="az-dot" style="background:#50e6ff"></span>Sentinel</div>
        <div class="az-svc"><span class="az-dot" style="background:#ffb900"></span>Key Vault</div>
        <div class="az-svc"><span class="az-dot" style="background:#00b7c3"></span>Automanage</div>
      </div>
      <div class="az-cat-bar">
        <span>Inventory</span><span>Billing</span><span>Monitoring</span><span>Secrets</span><span>Governance</span><span>Compliance</span>
      </div>
    </div>

    <!-- Arrow: Management → Infra -->
    <div class="az-conn az-conn-h">
      <div class="az-conn-line-h"><div class="az-flow-dot az-fd-r"></div><div class="az-flow-dot az-fd-l"></div></div>
    </div>

    <!-- Azure Infra -->
    <div class="az-panel az-infra-panel">
      <div class="az-panel-header">Azure Infra and Service Control</div>
      <div class="az-infra-icon">
        <svg viewBox="0 0 40 32" width="36" height="28">
          <rect x="8" y="14" width="24" height="10" rx="2" fill="#1a1a2e" stroke="#0078d4" stroke-width="1"/>
          <rect x="12" y="17" width="3" height="2" rx=".5" fill="#50e6ff"/>
          <rect x="17" y="17" width="3" height="2" rx=".5" fill="#50e6ff"/>
          <rect x="22" y="17" width="3" height="2" rx=".5" fill="#50e6ff"/>
          <rect x="27" y="17" width="3" height="2" rx=".5" fill="#50e6ff"/>
          <rect x="12" y="20" width="3" height="2" rx=".5" fill="#00b7c3"/>
          <rect x="17" y="20" width="3" height="2" rx=".5" fill="#00b7c3"/>
          <rect x="22" y="20" width="3" height="2" rx=".5" fill="#00b7c3"/>
          <rect x="27" y="20" width="3" height="2" rx=".5" fill="#00b7c3"/>
          <path d="M12 12 Q20 4 28 12" fill="none" stroke="#0078d4" stroke-width="1.2"/>
          <circle cx="20" cy="7" r="3" fill="#0078d4" opacity=".3"/>
        </svg>
      </div>
    </div>
  </div>

  <!-- Azure Control Plane bar -->
  <div class="az-cp-bar">
    <div class="az-cp-flow az-cp-flow-1"></div>
    <div class="az-cp-flow az-cp-flow-2"></div>
    <span>Azure control plane</span>
  </div>

  <!-- Dotted separator -->
  <div class="az-separator"></div>

  <!-- Extended Zone Azure Services -->
  <div class="az-ez-services">
    <div class="az-ez-header">Extended Zone Azure Services</div>
    <div class="az-ez-grid">
      <div class="az-ez-svc">
        <svg viewBox="0 0 20 20" width="16" height="16"><rect x="2" y="4" width="16" height="12" rx="2" fill="#0078d4"/><rect x="5" y="7" width="4" height="3" rx=".5" fill="#50e6ff"/><rect x="11" y="7" width="4" height="3" rx=".5" fill="#50e6ff"/></svg>
        <span>Virtual Machines</span>
      </div>
      <div class="az-ez-svc">
        <svg viewBox="0 0 20 20" width="16" height="16"><circle cx="10" cy="10" r="7" fill="none" stroke="#326ce5" stroke-width="1.5"/><circle cx="10" cy="10" r="2.5" fill="#326ce5"/><circle cx="10" cy="4" r="1.2" fill="#326ce5"/><circle cx="15" cy="13" r="1.2" fill="#326ce5"/><circle cx="5" cy="13" r="1.2" fill="#326ce5"/></svg>
        <span>Kubernetes</span>
      </div>
      <div class="az-ez-svc">
        <svg viewBox="0 0 20 20" width="16" height="16"><rect x="3" y="6" width="14" height="8" rx="1.5" fill="none" stroke="#0078d4" stroke-width="1.2"/><line x1="10" y1="6" x2="10" y2="14" stroke="#0078d4" stroke-width="1"/><line x1="3" y1="10" x2="17" y2="10" stroke="#0078d4" stroke-width="1"/></svg>
        <span>Virtual Networks</span>
      </div>
      <div class="az-ez-svc">
        <svg viewBox="0 0 20 20" width="16" height="16"><circle cx="7" cy="10" r="3" fill="none" stroke="#e3008c" stroke-width="1.2"/><circle cx="13" cy="10" r="3" fill="none" stroke="#e3008c" stroke-width="1.2"/><line x1="10" y1="8" x2="10" y2="12" stroke="#e3008c" stroke-width="1.2"/></svg>
        <span>Private Links</span>
      </div>
      <div class="az-ez-svc">
        <svg viewBox="0 0 20 20" width="16" height="16"><ellipse cx="10" cy="10" rx="7" ry="4" fill="none" stroke="#50e6ff" stroke-width="1.2"/><ellipse cx="10" cy="7" rx="7" ry="4" fill="#1a1a2e" stroke="#50e6ff" stroke-width="1.2"/></svg>
        <span>Disks</span>
      </div>
      <div class="az-ez-svc">
        <svg viewBox="0 0 20 20" width="16" height="16"><rect x="4" y="5" width="12" height="10" rx="1" fill="none" stroke="#0078d4" stroke-width="1.2"/><rect x="6" y="7" width="4" height="3" fill="#50e6ff" rx=".5"/><rect x="6" y="11" width="8" height="2" fill="#50e6ff" rx=".5"/></svg>
        <span>Storage</span>
      </div>
      <div class="az-ez-svc">
        <svg viewBox="0 0 20 20" width="16" height="16"><rect x="5" y="4" width="10" height="12" rx="1.5" fill="none" stroke="#ffb900" stroke-width="1.2"/><line x1="7" y1="8" x2="13" y2="8" stroke="#ffb900" stroke-width=".8"/><line x1="7" y1="10" x2="13" y2="10" stroke="#ffb900" stroke-width=".8"/><line x1="7" y1="12" x2="11" y2="12" stroke="#ffb900" stroke-width=".8"/></svg>
        <span>SQL Server MI</span>
      </div>
      <div class="az-ez-svc">
        <svg viewBox="0 0 20 20" width="16" height="16"><circle cx="10" cy="10" r="6" fill="none" stroke="#336791" stroke-width="1.2"/><ellipse cx="10" cy="10" rx="3" ry="6" fill="none" stroke="#336791" stroke-width=".8"/><line x1="4" y1="10" x2="16" y2="10" stroke="#336791" stroke-width=".8"/></svg>
        <span>PostgreSQL</span>
      </div>
    </div>
  </div>

  <!-- Extended Zone Infrastructure -->
  <div class="az-ez-infra">
    <svg viewBox="0 0 36 28" width="28" height="22">
      <rect x="6" y="12" width="24" height="10" rx="2" fill="#1a1a2e" stroke="#555" stroke-width="1"/>
      <rect x="9" y="15" width="2.5" height="1.5" rx=".3" fill="#50e6ff"/>
      <rect x="13" y="15" width="2.5" height="1.5" rx=".3" fill="#50e6ff"/>
      <rect x="17" y="15" width="2.5" height="1.5" rx=".3" fill="#00b7c3"/>
      <rect x="21" y="15" width="2.5" height="1.5" rx=".3" fill="#00b7c3"/>
      <rect x="25" y="15" width="2.5" height="1.5" rx=".3" fill="#50e6ff"/>
      <path d="M10 10 Q18 2 26 10" fill="none" stroke="#888" stroke-width="1"/>
      <circle cx="18" cy="5" r="2.5" fill="#444" opacity=".5"/>
    </svg>
    <span>Extended Zone Infrastructure</span>
  </div>

  <!-- Bottom: Customer Management (left) and Customer User (right) -->
  <div class="az-bottom-row">
    <div class="az-cust-mgmt">
      <svg viewBox="0 0 28 28" width="22" height="22">
        <rect x="3" y="3" width="22" height="22" rx="3" fill="none" stroke="#76b947" stroke-width="1.5"/>
        <line x1="8" y1="10" x2="20" y2="10" stroke="#76b947" stroke-width="1"/>
        <line x1="8" y1="14" x2="20" y2="14" stroke="#76b947" stroke-width="1"/>
        <line x1="8" y1="18" x2="16" y2="18" stroke="#76b947" stroke-width="1"/>
        <polyline points="6,10 7.5,11.5 10,9" fill="none" stroke="#76b947" stroke-width=".8"/>
        <polyline points="6,14 7.5,15.5 10,13" fill="none" stroke="#76b947" stroke-width=".8"/>
      </svg>
      <span>Customer<br/>Management</span>
    </div>
    <!-- Vertical connector from Customer Mgmt up to User Interfaces -->
    <div class="az-cust-vline">
      <div class="az-flow-dot-v az-fdv-up"></div>
      <div class="az-flow-dot-v az-fdv-down"></div>
    </div>
    <div class="az-cust-user">
      <svg viewBox="0 0 28 28" width="22" height="22">
        <circle cx="14" cy="10" r="5" fill="none" stroke="#aaa" stroke-width="1.2"/>
        <path d="M6 24 Q6 17 14 17 Q22 17 22 24" fill="none" stroke="#aaa" stroke-width="1.2"/>
      </svg>
      <span>Customer User</span>
    </div>
  </div>

  <!-- Left-side vertical connector overlay (Customer Mgmt ↔ UI and ↔ User) -->
  <div class="az-left-vconn">
    <div class="az-vconn-line">
      <div class="az-flow-dot-v az-fdv-up"></div>
      <div class="az-flow-dot-v az-fdv-down"></div>
    </div>
  </div>
</div>
</template>

<style scoped>
/* ─── Container ─── */
.az-overview {
  position: relative;
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 0.3em;
  font-size: 11px;
  line-height: 1.3;
  color: #e0e0e0;
}

/* ─── Top row: 3-col with connectors ─── */
.az-top-row {
  display: flex;
  align-items: stretch;
  gap: 0;
}

/* ─── Panels ─── */
.az-panel {
  border: 1px solid #444;
  border-radius: 5px;
  padding: 0.35em 0.4em;
  background: rgba(20, 20, 35, 0.85);
}
.az-panel-header {
  font-size: 0.82em;
  font-weight: 600;
  color: #ccc;
  margin-bottom: 0.3em;
  text-align: center;
}

/* User Interfaces panel */
.az-ui-panel {
  flex: 0 0 72px;
  display: flex;
  flex-direction: column;
}
.az-ui-items {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}
.az-ui-item {
  display: flex;
  align-items: center;
  gap: 0.3em;
  font-size: 0.72em;
  color: #bbb;
}

/* Small icon squares */
.az-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  flex-shrink: 0;
}
.az-icon-portal { background: #0078d4; }
.az-icon-api { background: #ffb900; }
.az-icon-cli { background: #00b7c3; }

/* Management & Services panel (center – largest) */
.az-mgmt-panel {
  flex: 1;
  min-width: 0;
}
.az-svc-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.15em 0.3em;
  margin-bottom: 0.25em;
  justify-content: center;
}
.az-svc {
  display: flex;
  align-items: center;
  gap: 0.2em;
  font-size: 0.65em;
  color: #bbb;
  white-space: nowrap;
}
.az-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Category bar */
.az-cat-bar {
  display: flex;
  justify-content: center;
  gap: 0.4em;
  padding: 0.15em 0;
  border-top: 1px solid #333;
  margin-top: 0.15em;
}
.az-cat-bar span {
  font-size: 0.6em;
  color: #888;
  padding: 0.1em 0.35em;
  background: rgba(0, 120, 212, 0.1);
  border-radius: 2px;
  border: 1px solid rgba(0, 120, 212, 0.2);
}

/* Azure Infra panel */
.az-infra-panel {
  flex: 0 0 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.az-infra-icon {
  display: flex;
  justify-content: center;
  margin-top: 0.2em;
}

/* ─── Horizontal connectors ─── */
.az-conn-h {
  display: flex;
  align-items: center;
  width: 22px;
  flex-shrink: 0;
  justify-content: center;
}
.az-conn-line-h {
  width: 100%;
  height: 1.5px;
  background: linear-gradient(90deg, #555, #777);
  position: relative;
  overflow: visible;
}

/* Flow dots on horizontal connectors */
.az-flow-dot {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #00b7c3;
  box-shadow: 0 0 4px #00b7c3;
  top: -1.5px;
}
.az-fd-r { animation: flowR 2.5s linear infinite; }
.az-fd-l { animation: flowL 2.5s linear infinite; animation-delay: 1.2s; background: #0078d4; box-shadow: 0 0 4px #0078d4; }

@keyframes flowR {
  0%   { left: -4px; opacity: 0; }
  8%   { opacity: 1; }
  92%  { opacity: 1; }
  100% { left: calc(100% + 4px); opacity: 0; }
}
@keyframes flowL {
  0%   { left: calc(100% + 4px); opacity: 0; }
  8%   { opacity: 1; }
  92%  { opacity: 1; }
  100% { left: -4px; opacity: 0; }
}

/* ─── Azure Control Plane bar ─── */
.az-cp-bar {
  margin-top: 0.35em;
  background: linear-gradient(90deg, #003a6e, #0078d4, #003a6e);
  border-radius: 3px;
  padding: 0.2em 0;
  text-align: center;
  font-size: 0.78em;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.04em;
  position: relative;
  overflow: hidden;
}
.az-cp-flow {
  position: absolute;
  top: 0;
  left: -30%;
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(80, 230, 255, 0.12), transparent);
  animation: cpSweep 4s ease-in-out infinite;
}
.az-cp-flow-2 {
  animation-delay: 2s;
}
@keyframes cpSweep {
  0%   { left: -30%; }
  100% { left: 130%; }
}

/* ─── Dotted separator ─── */
.az-separator {
  border-top: 1.5px dashed #555;
  margin: 0.25em 0;
}

/* ─── Extended Zone Services ─── */
.az-ez-services {
  border: 1px solid #444;
  border-radius: 5px;
  padding: 0.3em 0.4em;
  background: rgba(20, 20, 35, 0.85);
}
.az-ez-header {
  font-size: 0.78em;
  font-weight: 600;
  color: #50e6ff;
  text-align: center;
  margin-bottom: 0.25em;
}
.az-ez-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.2em 0.5em;
}
.az-ez-svc {
  display: flex;
  align-items: center;
  gap: 0.2em;
  font-size: 0.65em;
  color: #bbb;
  white-space: nowrap;
}

/* ─── Extended Zone Infrastructure ─── */
.az-ez-infra {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  margin-top: 0.3em;
  padding: 0.2em;
  font-size: 0.72em;
  color: #999;
}

/* ─── Bottom row: Customer Mgmt + Customer User ─── */
.az-bottom-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.3em;
  padding: 0 0.5em;
}
.az-cust-mgmt, .az-cust-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15em;
  font-size: 0.68em;
  color: #bbb;
  text-align: center;
}
.az-cust-vline {
  flex: 1;
  height: 1.5px;
  background: linear-gradient(90deg, #76b947, #555, #aaa);
  position: relative;
  overflow: visible;
  margin: 0 0.8em;
}

/* Vertical flow dots */
.az-flow-dot-v {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  top: -1.5px;
}
.az-fdv-up {
  background: #76b947;
  box-shadow: 0 0 4px #76b947;
  animation: flowR 3s linear infinite;
}
.az-fdv-down {
  background: #aaa;
  box-shadow: 0 0 3px #aaa;
  animation: flowL 3s linear infinite;
  animation-delay: 1.5s;
}

/* ─── Left vertical connector (overlay) ─── */
.az-left-vconn {
  display: none; /* handled by bottom row horizontal line */
}

/* ─── Light mode overrides ─── */
:global(html:not(.dark)) .az-overview { color: #333; }
:global(html:not(.dark)) .az-panel { background: rgba(245, 248, 252, 0.95); border-color: #ccc; }
:global(html:not(.dark)) .az-panel-header { color: #333; }
:global(html:not(.dark)) .az-svc { color: #555; }
:global(html:not(.dark)) .az-ui-item { color: #555; }
:global(html:not(.dark)) .az-cat-bar span { color: #555; background: rgba(0,120,212,0.06); border-color: rgba(0,120,212,0.15); }
:global(html:not(.dark)) .az-cp-bar { background: linear-gradient(90deg, #005a9e, #0078d4, #005a9e); }
:global(html:not(.dark)) .az-ez-services { background: rgba(245,248,252,0.95); border-color: #ccc; }
:global(html:not(.dark)) .az-ez-svc { color: #555; }
:global(html:not(.dark)) .az-ez-infra { color: #666; }
:global(html:not(.dark)) .az-cust-mgmt, :global(html:not(.dark)) .az-cust-user { color: #555; }
:global(html:not(.dark)) .az-separator { border-color: #ccc; }
:global(html:not(.dark)) .az-conn-line-h { background: linear-gradient(90deg, #bbb, #999); }
:global(html:not(.dark)) .az-cust-vline { background: linear-gradient(90deg, #76b947, #ccc, #999); }
</style>
