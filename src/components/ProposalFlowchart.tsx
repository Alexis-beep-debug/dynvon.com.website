"use client";

import { useLanguage } from "@/lib/LanguageContext";

interface FlowNode {
  label: string;
  detail: string;
  color: string;
  borderColor: string;
}

export default function ProposalFlowchart() {
  const { locale } = useLanguage();
  const en = locale === "en";

  const intake: FlowNode = {
    label: en ? "Property intake form" : "Objekt-Aufnahmeformular",
    detail: en ? "Employee fills out on-site" : "Mitarbeiter füllt vor Ort aus",
    color: "bg-emerald-500/15",
    borderColor: "border-emerald-500/40",
  };

  const processing: FlowNode = {
    label: en ? "Automatic processing" : "Automatische Verarbeitung",
    detail: en ? "Prices calculated instantly" : "Preise sofort berechnet",
    color: "bg-indigo-500/15",
    borderColor: "border-indigo-500/40",
  };

  const pdfGen: FlowNode = {
    label: en ? "Proposal generated" : "Angebot erstellt",
    detail: en ? "Professional PDF, ready to send" : "Professionelles PDF, versandfertig",
    color: "bg-violet-500/15",
    borderColor: "border-violet-500/40",
  };

  const outputs: FlowNode[] = [
    {
      label: "CRM",
      detail: en ? "Deal created" : "Deal angelegt",
      color: "bg-amber-500/15",
      borderColor: "border-amber-500/40",
    },
    {
      label: en ? "Accounting" : "Buchhaltung",
      detail: en ? "Quote synced" : "Angebot synchronisiert",
      color: "bg-amber-500/15",
      borderColor: "border-amber-500/40",
    },
    {
      label: en ? "Cloud Storage" : "Cloud-Speicher",
      detail: en ? "PDF archived" : "PDF archiviert",
      color: "bg-amber-500/15",
      borderColor: "border-amber-500/40",
    },
    {
      label: en ? "Email" : "E-Mail",
      detail: en ? "Sent to client" : "An Kunden gesendet",
      color: "bg-amber-500/15",
      borderColor: "border-amber-500/40",
    },
  ];

  const sync: FlowNode = {
    label: en ? "Auto-sync every 15 min" : "Auto-Sync alle 15 Min.",
    detail: en ? "CRM ↔ Email tool" : "CRM ↔ E-Mail-Tool",
    color: "bg-slate-500/15",
    borderColor: "border-slate-500/40",
  };

  const tracking: FlowNode = {
    label: en ? "Email tracking" : "E-Mail-Tracking",
    detail: en ? "Opens & clicks detected" : "Öffnungen & Klicks erkannt",
    color: "bg-rose-500/15",
    borderColor: "border-rose-500/40",
  };

  const result: FlowNode = {
    label: en ? "Hot lead flagged" : "Heißer Lead markiert",
    detail: en ? "Sales team notified" : "Vertrieb wird benachrichtigt",
    color: "bg-emerald-500/15",
    borderColor: "border-emerald-500/40",
  };

  return (
    <div className="mt-6 p-6 sm:p-8 rounded-xl border border-border bg-surface/20">
      <p className="text-xs font-mono text-accent-light uppercase tracking-widest mb-6 text-center">
        {en ? "How it works" : "So funktioniert es"}
      </p>

      <div className="flex flex-col items-center gap-3">
        {/* Step 1: Intake */}
        <Node node={intake} />
        <Arrow />

        {/* Step 2: Processing */}
        <Node node={processing} />
        <Arrow />

        {/* Step 3: PDF */}
        <Node node={pdfGen} />
        <Arrow />

        {/* Step 4: Outputs — 4 boxes in a row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg">
          {outputs.map((out, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg border ${out.borderColor} ${out.color} text-center transition-all hover:scale-105`}
            >
              <div className="text-xs font-semibold text-foreground">{out.label}</div>
              <div className="text-[10px] text-muted mt-0.5">{out.detail}</div>
            </div>
          ))}
        </div>

        {/* Step 5: Sync + Tracking */}
        <div className="flex items-center gap-4 mt-3 w-full max-w-lg">
          <div className={`flex-1 p-3 rounded-lg border ${sync.borderColor} ${sync.color} text-center transition-all hover:scale-105`}>
            <div className="text-xs font-semibold text-foreground">{sync.label}</div>
            <div className="text-[10px] text-muted mt-0.5">{sync.detail}</div>
          </div>
          <svg className="w-6 h-4 text-muted shrink-0" viewBox="0 0 24 16" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 8h20M18 4l4 4-4 4" />
          </svg>
          <div className={`flex-1 p-3 rounded-lg border ${tracking.borderColor} ${tracking.color} text-center transition-all hover:scale-105`}>
            <div className="text-xs font-semibold text-foreground">{tracking.label}</div>
            <div className="text-[10px] text-muted mt-0.5">{tracking.detail}</div>
          </div>
        </div>

        <Arrow />

        {/* Step 6: Result */}
        <Node node={result} pulse />
      </div>
    </div>
  );
}

function Node({ node, pulse }: { node: FlowNode; pulse?: boolean }) {
  return (
    <div
      className={`w-full max-w-xs p-4 rounded-lg border ${node.borderColor} ${node.color} text-center transition-all hover:scale-105 ${pulse ? "ring-2 ring-emerald-500/20" : ""}`}
    >
      <div className="text-sm font-semibold text-foreground">{node.label}</div>
      <div className="text-xs text-muted mt-1">{node.detail}</div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-px h-4 bg-border" />
      <svg className="w-3 h-3 text-muted" viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 9L2 5h8L6 9z" />
      </svg>
    </div>
  );
}
