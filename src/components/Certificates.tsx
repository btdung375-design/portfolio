import { Award, BookOpen, Users, Video, GraduationCap, Check } from "lucide-react";
import { motion } from "motion/react";

export default function Certificates() {
  const certifications = [
    {
      name: "Chứng chỉ Tiếng Anh B2 Vstep",
      provider: "Đại học Quốc gia Hà Nội",
      year: "2025",
      desc: "Năng lực đọc hiểu tài liệu đặc tả kỹ thuật tiếng Anh chính xác và giao tiếp lưu loát."
    },
    {
      name: "Chứng chỉ Lập trình Python",
      provider: "Codelearn",
      year: "2023",
      desc: "Nền tảng tư duy cấu trúc dữ liệu, giải thuật và phát triển logic phần mềm."
    },
    {
      name: "Chứng chỉ Communication & Computer Networks",
      provider: "Codelearn",
      year: "2025",
      desc: "Trang bị hiểu biết về kiến trúc mạng, giao tiếp hệ thống mạng và giao thức truyền dữ liệu."
    }
  ];

  return (
    <section id="certificates" className="py-16 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Certifications */}
          <div className="lg:col-span-6 space-y-6" id="certs-column">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-[#2563EB] uppercase">
                05 · Chứng chỉ chuyên môn
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight mt-1">
                Học Tập &amp; Bằng Cấp
              </h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E2E8F0] shadow-2xs hover:shadow-xs hover:border-[#CBD5E1] transition-all flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/8 flex items-center justify-center text-[#2563EB] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#0F172A] leading-tight">
                        {cert.name}
                      </h4>
                      <span className="px-2 py-0.5 rounded bg-[#2563EB]/5 text-[#2563EB] text-[9px] font-extrabold tracking-wider border border-[#2563EB]/10 shrink-0">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#64748B] font-bold tracking-wide uppercase">
                      Cấp bởi: {cert.provider}
                    </p>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Activities & Education */}
          <div className="lg:col-span-6 space-y-6" id="activities-column">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-[#10B981] uppercase">
                06 · Hoạt động ngoại khóa
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight mt-1">
                Kỹ Năng Mềm Thực Chiến
              </h2>
            </div>

            <div className="space-y-6">
              {/* Academic background summary */}
              <div className="p-5 rounded-2xl border border-dashed border-[#CBD5E1] flex gap-4 items-center bg-[#FAF9F6]/50">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#475569] shrink-0">
                  <GraduationCap className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-widest">Học vấn &amp; Điểm số</h4>
                  <p className="text-sm text-[#475569] mt-0.5 font-semibold">
                    Đại học Quốc gia Hà Nội — GPA tích lũy: <span className="text-[#2563EB] font-bold">3.0 / 4.0</span>
                  </p>
                </div>
              </div>

              {/* VOS Media Club achievements */}
              <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-4">
                <div className="flex items-center gap-3.5 border-b border-[#F1F5F9] pb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/8 flex items-center justify-center text-emerald-600 shrink-0">
                    <Users className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-emerald-600 tracking-widest uppercase block">
                      Extracurricular Leadership
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#0F172A]">
                      Thành viên CLB Truyền thông VOS
                    </h3>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs leading-relaxed text-[#475569]">
                  <p className="text-justify font-medium">
                    Đảm nhiệm vai trò sản xuất nội dung số chính từ 08/2023 - 07/2025. Phối hợp với đội ngũ sáng tạo chạy các chiến dịch truyền thông của CLB và nhà trường.
                  </p>

                  <div className="grid grid-cols-2 gap-3 py-1">
                    <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-center gap-3">
                      <Video className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div>
                        <span className="text-xs font-black text-emerald-800 block">100k - 300k</span>
                        <span className="text-[9px] text-[#64748B] font-bold uppercase tracking-wider">Views / Video</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-[#2563EB] shrink-0" />
                      <div>
                        <span className="text-xs font-black text-[#2563EB] block">2 Năm</span>
                        <span className="text-[9px] text-[#64748B] font-bold uppercase tracking-wider">Hoạt Động</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#F1F5F9]">
                    <span className="text-[10px] font-extrabold text-[#0F172A] tracking-wider uppercase block">
                      Ý nghĩa bổ trợ:
                    </span>
                    <ul className="space-y-1.5 text-[11px]">
                      {[
                        "Rèn luyện kỹ năng phỏng vấn, khảo sát thị hiếu (Requirements Elicitation) để điều chỉnh nội dung video đáp ứng đúng nhu cầu người xem.",
                        "Giao tiếp chủ động, đàm phán ý tưởng và truyền đạt thông tin gãy gọn giữa các ban nội dung và thiết kế kỹ thuật."
                      ].map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#475569]">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 stroke-[3]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
