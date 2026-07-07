import { ArrowDown, Code2, Users, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-24">
      {/* Absolute decorative background elements for visual rhythm */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-[#2563EB]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-[#10B981]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 flex flex-col items-start"
            id="hero-content"
          >
            {/* Tagline */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2563EB]/8 border border-[#2563EB]/15 text-[11px] font-bold tracking-widest text-[#2563EB] uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse"></span>
                BUSINESS ANALYST
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#10B981]/8 border border-[#10B981]/15 text-[11px] font-bold tracking-widest text-[#10B981] uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                PRODUCT OWNER
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#8B5CF6]/8 border border-[#8B5CF6]/15 text-[11px] font-bold tracking-widest text-[#8B5CF6] uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                BUSINESS INTELLIGENCE
              </div>
            </div>

            {/* Main Name */}
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#0F172A] tracking-tight leading-[1.05] mb-2">
              Bùi Tiến Dũng
            </h1>

            {/* University & Degree */}
            <div className="text-base md:text-lg font-semibold text-[#1E293B] mb-5">
              Sinh viên năm 4 · Quản trị Kinh doanh &amp; Công nghệ · ĐHQGHN
            </div>

            {/* Core Capabilities - under the name */}
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex flex-wrap gap-2.5">
                {["Thiết kế hệ thống", "Phân tích dữ liệu", "Mô hình hóa quy trình", "Coding"].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1 rounded-md bg-[#FAF9F6] border border-[#E2E8F0] text-xs font-semibold text-[#475569] shadow-sm flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Intro text */}
            <p className="text-[#475569] text-base leading-relaxed mb-8 max-w-xl">
              Sinh viên năm cuối ngành Quản trị Kinh doanh và Công nghệ tại ĐHQGHN, hỗ trợ làm rõ và chuyển hóa ý tưởng của khách hàng thành các tài liệu yêu cầu và sơ đồ quy trình chuẩn xác, giúp đội ngũ kỹ thuật phát triển đúng sản phẩm.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] text-white text-sm font-bold shadow-md hover:bg-[#1D4ED8] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Xem dự án
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
              <a
                href="#contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#CBD5E1] bg-white text-[#1E293B] text-sm font-semibold hover:bg-[#F8FAF6] transition-all hover:border-[#94A3B8]"
              >
                Kết nối ngay
              </a>
            </div>
          </motion.div>

          {/* Portrait Graphic representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 flex justify-center"
            id="hero-portrait-container"
          >
            <div className="relative w-72 sm:w-80 aspect-square">
              {/* Outer glowing design framing the avatar */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#2563EB]/10 to-[#10B981]/10 -rotate-3 transition-transform hover:rotate-0 duration-500 shadow-lg"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-[#0F172A] rotate-2 transition-transform hover:rotate-0 duration-500"></div>

              {/* Main portrait wrapper */}
              <div className="absolute inset-2 rounded-xl bg-[#0F172A]/5 overflow-hidden border border-[#E2E8F0] shadow-inner flex items-center justify-center">
                {/* Fallback stylized graphics if image doesn't exist */}
                <img
                  src="/images/hero-avatar.jpg"
                  alt="Bùi Tiến Dũng"
                  onError={(e) => {
                    // Replace with a beautiful system designer graphic placeholder if empty
                    e.currentTarget.style.display = 'none';
                    const fallbackEl = document.getElementById('hero-avatar-fallback');
                    if (fallbackEl) fallbackEl.style.display = 'flex';
                  }}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  referrerPolicy="no-referrer"
                />
                <div
                  id="hero-avatar-fallback"
                  className="hidden absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] flex-col items-center justify-center p-6 text-center text-[#FAF9F6]"
                >
                  <div className="w-20 h-20 rounded-full bg-[#FAF9F6]/10 flex items-center justify-center border border-[#FAF9F6]/20 mb-4">
                    <span className="font-serif text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                      BTD
                    </span>
                  </div>
                  <h4 className="text-sm font-bold tracking-wide">BÙI TIẾN DŨNG</h4>
                  <p className="text-[10px] text-[#94A3B8] tracking-widest mt-1 uppercase">
                    Business Analyst / Product Owner / Business Intelligence
                  </p>
                  <div className="flex gap-2.5 mt-4">
                    <div className="p-1.5 rounded-md bg-[#2563EB]/25 text-blue-400 border border-blue-500/20">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div className="p-1.5 rounded-md bg-[#10B981]/25 text-emerald-400 border border-emerald-500/20">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
