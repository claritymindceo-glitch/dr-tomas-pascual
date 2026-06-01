import React, { useRef, useState } from "react";
import { Mail, Phone, Send, User, X, CheckCircle2, AlertCircle } from "lucide-react";
import { useI18n } from "../i18n/context";

interface ConsultFormProps {
  onClose: () => void;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ConsultForm({ onClose }: ConsultFormProps) {
  const { m } = useI18n();
  const f = m.consultForm;

  const submissionIdRef = useRef(
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `sub-${Date.now()}-${Math.random().toString(36).slice(2)}`
  );
  const submittingRef = useRef(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submittingRef.current || status === "submitting" || status === "success") {
      return;
    }

    submittingRef.current = true;
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
          submissionId: submissionIdRef.current,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || f.submitError);
      }

      setStatus("success");
    } catch (error) {
      submittingRef.current = false;
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : f.unexpectedError
      );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center overflow-y-auto bg-[#1a1a18]/55 backdrop-blur-sm p-4 sm:p-6">
      <div
        className="relative w-full max-w-[640px] my-4 sm:my-8 bg-white border border-black/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.18)] rounded-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consult-form-title"
      >
        <div className="flex items-start justify-between gap-4 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-black/[0.06]">
          <div className="space-y-2 min-w-0">
            <span className="font-mono text-[9px] text-[#4a8499] uppercase tracking-[0.2em] block font-light">
              {f.tag}
            </span>
            <h2
              id="consult-form-title"
              className="font-sans text-xl sm:text-2xl text-[#1a1a18] font-light uppercase tracking-[0.08em]"
            >
              {f.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5954] font-light leading-relaxed">
              {f.description}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 p-2 border border-black/[0.08] text-[#5c5954] hover:text-[#1a1a18] hover:border-[#4a8499]/30 transition-all cursor-pointer"
            aria-label={f.closeForm}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6 sm:py-8">
          {status === "success" ? (
            <div className="text-center space-y-4 py-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <div className="space-y-2">
                <h3 className="text-lg text-[#1a1a18] font-light uppercase tracking-wider">
                  {f.successTitle}
                </h3>
                <p className="text-sm text-[#5c5954] font-light max-w-md mx-auto leading-relaxed">
                  {f.successMessage}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-3 bg-[#4a8499]/10 border border-[#4a8499]/30 text-[#4a8499] text-[11px] uppercase tracking-[0.16em] hover:bg-[#4a8499]/18 transition-all cursor-pointer"
              >
                {f.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#5c5954] font-light flex items-center gap-1.5">
                    <User className="w-3 h-3 text-[#4a8499]/75" /> {f.name}
                  </span>
                  <input
                    type="text"
                    required
                    minLength={2}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={f.namePlaceholder}
                    className="w-full bg-[#f7f6f3] border border-black/[0.08] px-4 py-3 text-sm text-[#1a1a18] placeholder-[#8a8680] focus:outline-none focus:border-[#4a8499]/50 transition"
                  />
                </label>

                <label className="block space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#5c5954] font-light flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#4a8499]/75" /> {f.email}
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={f.emailPlaceholder}
                    className="w-full bg-[#f7f6f3] border border-black/[0.08] px-4 py-3 text-sm text-[#1a1a18] placeholder-[#8a8680] focus:outline-none focus:border-[#4a8499]/50 transition"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#5c5954] font-light flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-[#4a8499]/75" /> {f.phone}
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={f.phonePlaceholder}
                    className="w-full bg-[#f7f6f3] border border-black/[0.08] px-4 py-3 text-sm text-[#1a1a18] placeholder-[#8a8680] focus:outline-none focus:border-[#4a8499]/50 transition"
                  />
                </label>

                <label className="block space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#5c5954] font-light">
                    {f.subject}
                  </span>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#f7f6f3] border border-black/[0.08] px-4 py-3 text-sm text-[#1a1a18] focus:outline-none focus:border-[#4a8499]/50 transition"
                  >
                    {f.subjects.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#5c5954] font-light">
                  {f.message}
                </span>
                <textarea
                  required
                  minLength={10}
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={f.messagePlaceholder}
                  className="w-full bg-[#f7f6f3] border border-black/[0.08] px-4 py-3 text-sm text-[#1a1a18] placeholder-[#8a8680] focus:outline-none focus:border-[#4a8499]/50 transition resize-y min-h-[120px]"
                />
              </label>

              {status === "error" && (
                <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-light">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4a8499]/10 border border-[#4a8499]/30 text-[#4a8499] text-[11px] uppercase tracking-[0.16em] hover:bg-[#4a8499]/18 hover:border-[#4a8499]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {status === "submitting" ? f.sending : f.submit}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-black/[0.08] text-[#5c5954] text-[11px] uppercase tracking-[0.16em] hover:text-[#1a1a18] hover:border-black/15 transition-all cursor-pointer"
                >
                  {f.cancel}
                </button>
              </div>

              <p className="text-[10px] text-[#8a8680] font-light leading-relaxed border-t border-black/[0.06] pt-4">
                {f.disclaimer}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
