import React, { useState } from "react";
import SectionHeaderBanner from "../SectionHeaderBanner";
import {
  CheckCircle2,
  Search,
  HelpCircle,
  FileText,
  Download,
  Check,
  UploadCloud,
} from "lucide-react";
import { formatMessage, useI18n } from "../../i18n/context";

export default function SpacePortal() {
  const { m } = useI18n();
  const s = m.sections.portal;
  const { patientGuides, insurances } = m.data;

  const [insuranceSearch, setInsuranceSearch] = useState("");
  const [selectedInsurance, setSelectedInsurance] = useState<string | null>(null);

  const [patientChecklist, setPatientChecklist] = useState({
    order: true,
    credential: true,
    autorizacion: false,
    prevStudies: false,
  });

  const [downloadStatus, setDownloadStatus] = useState<Record<number, string>>({});

  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploaderName, setUploaderName] = useState("");
  const [uploaderEmail, setUploaderEmail] = useState("");
  const [uploaderDocType, setUploaderDocType] = useState("credential");

  const handleDownloadResource = (id: number) => {
    setDownloadStatus((prev) => ({ ...prev, [id]: "downloading" }));
    setTimeout(() => {
      setDownloadStatus((prev) => ({ ...prev, [id]: "completed" }));
    }, 1500);
  };

  const fileDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadFile(e.dataTransfer.files[0]);
      setUploadSuccess(false);
    }
  };

  const handleManualUploadSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadFile(e.target.files[0]);
      setUploadSuccess(false);
    }
  };

  const triggerUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) return;

    setUploading(true);
    setUploadProgress(10);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploadSuccess(true);
          return 100;
        }
        return prev + 30;
      });
    }, 250);
  };

  const resetUploadForm = () => {
    setUploadFile(null);
    setUploadProgress(0);
    setUploading(false);
    setUploadSuccess(false);
    setUploaderName("");
    setUploaderEmail("");
  };

  const filteredInsurances =
    insuranceSearch.trim() === ""
      ? []
      : insurances.filter((ins) =>
          ins.name.toLowerCase().includes(insuranceSearch.toLowerCase())
        );

  const checklistKeys = ["order", "credential", "autorizacion", "prevStudies"] as const;

  return (
    <div className="w-full flex flex-col space-y-0 font-sans">
      <SectionHeaderBanner
        image="/images/sedes_recepcion_banner_1779991938852.png"
        tag={s.banner.tag}
        title={s.banner.title}
        subtitle={s.banner.subtitle}
      />

      <section className="py-16 bg-[#f0eeea] px-6">
        <div className="max-w-[1140px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border-t border-x border-black/[0.08] px-5 py-2 text-[8.5px] uppercase tracking-[0.2em] text-[#4a8499] z-10 relative">
            <span className="w-1.5 h-1.5 bg-[#4a8499]/50 rounded-full animate-pulse"></span>
            {s.badge}
          </div>

          <div className="neon-relief-card p-6 sm:p-10 md:p-12 mt-[-1px] bg-white border border-black/[0.06]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="bg-white border border-black/[0.06] p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 pb-3 border-b border-[#4a8499]/20 mb-4 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#4a8499]" />
                      <h3 className="text-[11px] uppercase tracking-[0.16em] text-[#2c2a26] font-normal">
                        {s.preparationTitle}
                      </h3>
                    </div>
                    <p className="font-sans text-[11px] text-[#5c5954] leading-relaxed mb-4 font-light">
                      {s.preparationIntro}
                    </p>

                    <div className="space-y-3 font-sans">
                      {checklistKeys.map((key, idx) => (
                        <label
                          key={key}
                          className="flex items-start gap-2.5 cursor-pointer text-xs text-[#2c2a26] select-none"
                        >
                          <input
                            type="checkbox"
                            checked={patientChecklist[key]}
                            onChange={() =>
                              setPatientChecklist((prev) => ({
                                ...prev,
                                [key]: !prev[key],
                              }))
                            }
                            className="mt-0.5 accent-[#4a8499]"
                          />
                          <span className="font-light">{s.checklist[idx]}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-black/[0.06] flex items-center gap-2 text-[10px] uppercase font-mono tracking-wider font-light">
                    <span>{s.admissionStatus}</span>
                    {Object.values(patientChecklist).filter(Boolean).length === 4 ? (
                      <span className="text-emerald-500 font-semibold">{s.ready}</span>
                    ) : (
                      <span className="text-amber-500">{s.pending}</span>
                    )}
                  </div>
                </div>

                <div className="bg-white border border-black/[0.06] p-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#4a8499]/20 font-sans">
                      <Search className="w-4 h-4 text-[#4a8499]" />
                      <h3 className="text-[11px] uppercase tracking-[0.16em] text-[#2c2a26] font-normal">
                        {s.coverageTitle}
                      </h3>
                    </div>
                    <div className="relative font-sans">
                      <input
                        type="text"
                        value={insuranceSearch}
                        onChange={(e) => {
                          setInsuranceSearch(e.target.value);
                          setSelectedInsurance(null);
                        }}
                        placeholder={s.coveragePlaceholder}
                        className="w-full bg-[#f0eeea] border border-black/[0.06] px-3 py-2 text-xs text-[#2c2a26] focus:outline-none focus:border-[#4a8499]/40 placeholder-[#8a8680]"
                      />
                    </div>

                    {filteredInsurances.length > 0 && (
                      <div className="bg-[#f0eeea] p-2 border border-black/[0.06] max-h-32 overflow-y-auto space-y-1 font-sans text-xs">
                        {filteredInsurances.map((ins) => (
                          <button
                            key={ins.name}
                            type="button"
                            onClick={() => {
                              setSelectedInsurance(ins.name);
                              setInsuranceSearch(ins.name);
                            }}
                            className="w-full text-left p-1.5 hover:bg-black/[0.03] transition-colors text-[#2c2a26] block font-light"
                          >
                            {ins.name}
                          </button>
                        ))}
                      </div>
                    )}

                    {selectedInsurance ? (
                      <div className="bg-[#f0eeea] p-4.5 border-l border-[#4a8499] border-y-[0.5px] border-r-[0.5px] border-black/[0.06] space-y-1.5">
                        <span className="text-[9px] uppercase tracking-wider text-[#4a8499] font-mono block">
                          {s.coverageDirect}
                        </span>
                        <h4 className="text-xs uppercase font-semibold text-[#2c2a26]">
                          {selectedInsurance}
                        </h4>
                        <p className="text-[11px] text-[#5c5954] leading-relaxed font-light">
                          {insurances.find((i) => i.name === selectedInsurance)?.cover}
                        </p>
                      </div>
                    ) : insuranceSearch.trim() !== "" && filteredInsurances.length === 0 ? (
                      <div className="bg-[#f0eeea] p-4 border border-red-500/10 text-red-400 font-sans text-[10.5px] leading-relaxed">
                        {formatMessage(s.coverageNotFoundLong, { name: insuranceSearch })}
                      </div>
                    ) : (
                      <div className="flex gap-2 items-start justify-start p-3 bg-[#f0eeea] text-[10.5px] text-[#5c5954] leading-relaxed font-sans">
                        <HelpCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{s.coverageHelp}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between border border-black/[0.06] bg-white p-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#4a8499]/20 font-sans">
                    <FileText className="w-4 h-4 text-[#4a8499]" />
                    <h3 className="text-[11px] uppercase tracking-[0.16em] text-[#2c2a26] font-normal">
                      {s.guidesTitle}
                    </h3>
                  </div>

                  <div className="space-y-3 font-sans">
                    {patientGuides.map((guide, guideIdx) => (
                      <div
                        key={guideIdx}
                        className="bg-[#f0eeea] p-4.5 border border-black/[0.06] flex flex-col justify-between hover:border-black/[0.08] transition duration-300 gap-3"
                      >
                        <div className="space-y-1">
                          <span className="text-[8px] font-mono tracking-widest text-[#4a8499] uppercase">
                            {s.category} {guide.category || s.procedureFallback}
                          </span>
                          <h4 className="text-xs font-light tracking-wide text-[#1a1a18] uppercase">
                            {guide.title}
                          </h4>
                        </div>

                        <div className="flex justify-between items-center pt-2.5 border-t border-black/[0.06]">
                          <span className="text-[9px] text-[#5c5954] font-light">
                            {s.size} {guide.size || s.sizeFallback}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleDownloadResource(guideIdx)}
                            className="bg-transparent border border-black/[0.08] hover:border-[#4a8499]/40 py-1 px-2.5 text-[8.5px] uppercase tracking-wider text-[#2c2a26] hover:text-[#4a8499] transition cursor-pointer flex items-center gap-1.5 rounded-sm font-light"
                          >
                            {downloadStatus[guideIdx] === "downloading" ? (
                              <span>{s.downloading}</span>
                            ) : downloadStatus[guideIdx] === "completed" ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400 font-semibold">{s.readyPdf}</span>
                              </>
                            ) : (
                              <>
                                <Download className="w-3 h-3" />
                                <span>{s.download}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white border border-black/[0.06] p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 pb-3 border-b border-[#4a8499]/20 mb-4 font-sans">
                    <UploadCloud className="w-4 h-4 text-[#4a8499]" />
                    <h3 className="text-[11px] uppercase tracking-[0.16em] text-[#2c2a26] font-normal">
                      {s.uploadTitle}
                    </h3>
                  </div>

                  {uploadSuccess ? (
                    <div className="bg-[#f0eeea] p-6 text-center space-y-4 border border-emerald-500/10 font-sans">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                        <Check className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs uppercase font-light text-[#1a1a18] tracking-widest">
                          {s.uploadSuccess}
                        </h4>
                        <p className="text-[10.5px] text-[#5c5954] font-light leading-relaxed">
                          {s.uploadSuccessMessage}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={resetUploadForm}
                        className="py-1.5 px-4 bg-transparent border border-black/[0.08] font-sans text-[8px] tracking-widest uppercase text-[#2c2a26] hover:bg-black/[0.03] cursor-pointer rounded-sm"
                      >
                        {s.uploadAnother}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={triggerUploadSubmit} className="space-y-4 font-sans">
                      <div className="space-y-1">
                        <label className="text-[8.5px] text-[#5c5954] uppercase tracking-wider block font-light">
                          {s.docType}
                        </label>
                        <select
                          value={uploaderDocType}
                          onChange={(e) => setUploaderDocType(e.target.value)}
                          className="w-full bg-[#f0eeea] border border-black/[0.06] px-3 py-2 text-xs text-[#2c2a26] focus:outline-none focus:border-[#4a8499]/40 cursor-pointer"
                        >
                          {s.docTypes.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-left">
                        <div className="space-y-1">
                          <label className="text-[8.5px] text-[#5c5954] uppercase tracking-wider block font-light">
                            {s.fullName}:
                          </label>
                          <input
                            type="text"
                            required
                            value={uploaderName}
                            onChange={(e) => setUploaderName(e.target.value)}
                            placeholder={s.namePlaceholder}
                            className="w-full bg-[#f0eeea] border border-black/[0.06] px-3 py-2 text-xs text-[#2c2a26] focus:outline-none focus:border-black/[0.08] placeholder-[#8a8680]"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[8.5px] text-[#5c5954] uppercase tracking-wider block font-light">
                            {s.contactEmail}:
                          </label>
                          <input
                            type="email"
                            required
                            value={uploaderEmail}
                            onChange={(e) => setUploaderEmail(e.target.value)}
                            placeholder={s.emailPlaceholder}
                            className="w-full bg-[#f0eeea] border border-black/[0.06] px-3 py-2 text-xs text-[#2c2a26] focus:outline-none focus:border-black/[0.08] placeholder-[#8a8680]"
                          />
                        </div>
                      </div>

                      <div
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={fileDropHandler}
                        className="border border-dashed border-black/[0.08] hover:border-[#4a8499]/30 transition p-6 text-center space-y-2 cursor-pointer bg-[#f0eeea] relative"
                      >
                        <input
                          type="file"
                          id="file-pick"
                          className="hidden"
                          onChange={handleManualUploadSelect}
                        />
                        <label htmlFor="file-pick" className="block w-full h-full cursor-pointer">
                          <UploadCloud className="w-7 h-7 text-[#5c5954] mx-auto mb-2" />
                          <div className="text-[10px] text-[#2c2a26] font-light">
                            {uploadFile
                              ? `${s.uploaded} ${uploadFile.name}`
                              : s.dropzone}
                          </div>
                          <p className="text-[8.5px] text-[#5c5954] font-light block mt-1">
                            {s.formatHintLong}
                          </p>
                        </label>
                      </div>

                      {uploading ? (
                        <div className="space-y-2 text-center p-2">
                          <div className="w-full bg-[#f0eeea] h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-[#4a8499] h-full transition-all duration-300"
                              style={{ width: `${uploadProgress}%` }}
                            />
                          </div>
                          <span className="text-[9px] text-[#5c5954] block font-light">
                            {formatMessage(s.uploading, { n: uploadProgress })}
                          </span>
                        </div>
                      ) : (
                        <button
                          type="submit"
                          disabled={!uploadFile || !uploaderName || !uploaderEmail}
                          className={`w-full py-2.5 font-sans justify-center text-center font-light tracking-widest text-[9.5px] sm:text-[10px] uppercase transition-all duration-300 ${
                            uploadFile && uploaderName && uploaderEmail
                              ? "bg-transparent border border-[#4a8499] text-[#4a8499] hover:bg-[#4a8499]/5 cursor-pointer hover:border-[#4a8499] hover:text-[#1a1a18]"
                              : "bg-[#f0eeea] border border-black/[0.06] text-[#5c5954] cursor-not-allowed"
                          }`}
                        >
                          {s.uploadButton}
                        </button>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
