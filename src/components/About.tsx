import { Check, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#FAF9F6] border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Elegant Stacked Frame inspired by user screenshot */}
            <div className="relative w-full max-w-xs aspect-[4/5] group">
              {/* Decorative background layers (cyan/blue soft shapes rotated behind) */}
              <div className="absolute inset-0 bg-[#10B981]/8 rounded-3xl rotate-2 scale-102 transition-transform duration-500 group-hover:rotate-3"></div>
              <div className="absolute inset-0 bg-[#2563EB]/6 rounded-3xl -rotate-2 scale-102 transition-transform duration-500 group-hover:-rotate-4"></div>
              
              {/* Main Navy/Dark Charcoal Frame with Inner White Padding */}
              <div className="relative h-full w-full bg-white border-2 border-[#0F172A] rounded-3xl p-3.5 shadow-md transition-all duration-500 group-hover:shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0F172A]/5 relative">
                  <img
                    src="/images/about-portrait.jpg"
                    alt="Chân dung Bùi Tiến Dũng"
                    onError={(e) => {
                      // Fallback to hero-avatar if about-portrait fails
                      e.currentTarget.src = "/images/hero-avatar.jpg";
                      e.currentTarget.onerror = (err) => {
                        // Final fallback to beautiful avatar graphic
                        err.currentTarget.style.display = 'none';
                        const fallbackEl = document.getElementById('about-portrait-fallback');
                        if (fallbackEl) fallbackEl.style.display = 'flex';
                      };
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Styled Fallback Graphic if both images do not exist */}
                  <div
                    id="about-portrait-fallback"
                    className="hidden absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] flex-col items-center justify-center p-6 text-center text-[#FAF9F6]"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#FAF9F6]/10 flex items-center justify-center border border-[#FAF9F6]/20 mb-3 shadow-lg backdrop-blur-xs">
                      <span className="font-serif text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                        BTD
                      </span>
                    </div>
                    <h4 className="text-sm font-bold tracking-wide font-serif">BÙI TIẾN DŨNG</h4>
                    <p className="text-[10px] text-[#94A3B8] tracking-widest mt-0.5 uppercase">
                      Business Analyst Intern
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          {/* Text narrative */}
          <div className="lg:col-span-7 flex flex-col items-start" id="about-content">
            <span className="text-[11px] font-bold tracking-widest text-[#2563EB] uppercase mb-2">
              01 · Giới thiệu
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight mb-6">
              Tư duy Phân tích &amp; Năng lực Kỹ thuật
            </h2>
 
            <div className="space-y-5 text-sm leading-relaxed text-[#475569] text-justify md:text-left">
              <p>
                Tôi là sinh viên năm cuối chuyên ngành{" "}
                <strong className="text-[#0F172A] font-semibold">Quản trị Kinh doanh và Công nghệ</strong> tại{" "}
                <strong className="text-[#0F172A] font-semibold">Trường Quản trị và Kinh doanh (HSB) – ĐHQGHN</strong>.
                Chương trình học trang bị cho tôi lăng kính kép từ hai hướng song song: quản trị doanh nghiệp (marketing,
                tài chính, nghiên cứu thị trường, chiến lược) và công nghệ thông tin (cơ sở dữ liệu, thiết kế hệ thống,
                lập trình, phân tích dữ liệu) — với trọng tâm là ứng dụng công nghệ để giải quyết bài toán thực tế của
                doanh nghiệp.
              </p>
              <p>
                Tôi định hướng trở thành Business Analyst để đứng ở điểm giao thoa đó — làm cầu nối giữa khách hàng, bộ phận kinh doanh và
                đội ngũ lập trình viên. Tôi mong muốn chuyển những gì doanh nghiệp cần thành yêu cầu rõ ràng để đội kỹ thuật
                có thể triển khai đúng và đủ. Với tinh thần trách nhiệm và ham học hỏi, tôi muốn đảm bảo không một thông tin nào bị
                hiểu sai trong quá trình chuyển đổi đó.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full">
              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#2563EB]/30 hover:shadow-sm transition-all duration-300">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Tư duy Logic</h4>
                  <p className="text-[11px] text-[#64748B] mt-1 leading-relaxed">Phân tích vấn đề mạch lạc, hệ thống và tối ưu hóa giải pháp</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#10B981]/30 hover:shadow-sm transition-all duration-300">
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-[#10B981] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Tính cách cốt lõi</h4>
                  <p className="text-[11px] text-[#64748B] mt-1 leading-relaxed">Luôn cầu tiến, tinh thần trách nhiệm và chủ động học hỏi</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#8B5CF6]/30 hover:shadow-sm transition-all duration-300">
                <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center text-[#8B5CF6] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Chủ động &amp; Thích nghi</h4>
                  <p className="text-[11px] text-[#64748B] mt-1 leading-relaxed">Sẵn sàng đón nhận thử thách mới, thích nghi nhanh chóng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
