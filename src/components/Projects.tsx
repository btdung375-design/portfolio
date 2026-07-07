import { useState } from "react";
import { FolderGit2, BookOpen, ExternalLink, Calendar, UserCheck, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CaseStudyModal from "./CaseStudyModal";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<"library" | "criminal" | "mixue">("library");

  const projects = [
    {
      id: "library" as const,
      num: "01",
      title: "Library Management & Business Process Design App",
      period: "06/2026 - 07/2026",
      role: "Nghiên cứu · Thiết kế · Phân tích yêu cầu",
      intro: "Phân tích quy trình số hóa cho thư viện trường học thông qua khảo sát thực tế và phân tích mẫu thẻ ghi chép thủ công để tìm giải pháp số hóa tối ưu. Từ đó lập hồ sơ tài liệu yêu cầu chuẩn hóa (BRD/FRD) chi tiết, vẽ sơ đồ BPMN phân luồng quy chuẩn trên Draw.io, viết tài liệu User Stories chuẩn nghiệm thu (Acceptance Criteria) và tổ chức kế hoạch kiểm thử chấp nhận người dùng (UAT) toàn diện.",
      hasCaseStudy: true,
      demoUrl: undefined,
      tags: ["Tài liệu BRD", "Sơ đồ BPMN", "User Story", "Kiểm thử UAT", "Mô hình ERD"]
    },
    {
      id: "criminal" as const,
      num: "02",
      title: "Criminal Detection System (Hệ thống Phát hiện Hành vi Nguy hiểm)",
      period: "09/2025 - 01/2026",
      role: "Nghiên cứu giải pháp · Thiết kế luồng dữ liệu · Phối hợp kỹ thuật",
      intro: "Nghiên cứu giải pháp giám sát an ninh tự động tích hợp mô hình Machine Learning (YOLOv8 & DeepFace) để phát hiện vũ khí và nhận dạng nghi phạm truy nã qua camera thời gian thực. Đóng vai trò phân tích yêu cầu nghiệp vụ, định nghĩa cấp độ đe dọa (Threat Assessment), phác họa sơ đồ luồng dữ liệu (DFD) và viết mã mô-đun Python xử lý thiết bị tính toán (CUDA/DirectML), lập báo cáo cảnh báo tự động gửi tới Telegram/Discord.",
      hasCaseStudy: true,
      demoUrl: "https://github.com/butterkingminh2-sketch/Criminal-Detection",
      tags: ["Phân tích An ninh", "YOLOv8 & DeepFace", "Gửi cảnh báo Webhook", "Xử lý ảnh Python"]
    },
    {
      id: "mixue" as const,
      num: "03",
      title: "Mixue GO — Hệ thống Đo lường Mật độ Khách (Traffic) Real-time & Tích điểm",
      period: "05/2026 - 06/2026",
      role: "Nghiên cứu · Thiết kế · Lập trình sản phẩm",
      intro: "Nghiên cứu giải pháp lưu lượng cho chuỗi trà sữa Mixue (hơn 1000 chi nhánh), phân tích hành vi xếp hàng thực tế tại các cơ sở Hà Nội để tìm phương án tối ưu trải nghiệm khách hàng. Từ đó thiết kế và trực tiếp lập trình ứng dụng web Mixue GO đo lường mật độ khách thời gian thực, kết hợp hệ thống tích điểm đổi quà tự động. Tính năng: biểu đồ mật độ LIVE, bản đồ định vị cửa hàng lân cận, chỉ đường thông minh và kho quà tặng trực tuyến tích hợp QR code.",
      hasCaseStudy: false,
      demoUrl: "https://mixue-go.vercel.app",
      tags: ["Traffic Real-time", "Tích điểm Đổi quà", "Bản đồ Định vị", "Wireframe"]
    }
  ];

  const handleOpenCase = (projId: "library" | "criminal" | "mixue") => {
    setSelectedProjectId(projId);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-16 bg-[#FAF9F6] border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold tracking-widest text-[#1D4ED8] uppercase">
            04 · Sản phẩm tiêu biểu
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mt-2">
            Sản Phẩm &amp; Tài Liệu
          </h2>
          <p className="text-sm text-[#64748B] mt-3">
            Những dự án thực hành phân tích sâu sắc, kết xuất các tài liệu chuẩn hóa và giải pháp phần mềm tối ưu.
          </p>
        </div>

        {/* Projects List Container */}
        <div className="space-y-16" id="projects-list">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-sm transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative top strip */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1E3A8A]"></div>

              <div className="space-y-3">
                {/* Visual Number */}
                <div className="text-xs md:text-sm font-bold text-[#1D4ED8] tracking-wider uppercase">
                  {proj.num}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] tracking-tight">
                  {proj.title}
                </h3>

                {/* Role */}
                <p className="text-xs md:text-sm font-semibold text-[#64748B]">
                  Vai trò: <span className="text-[#1D4ED8] font-bold">{proj.role}</span>
                </p>

                {/* Intro paragraph */}
                <p className="text-sm text-[#475569] leading-relaxed text-justify pt-1">
                  {proj.intro}
                </p>

                {/* Button container styled exactly like the reference image */}
                {(proj.hasCaseStudy || proj.demoUrl) && (
                  <div className="pt-4 flex flex-wrap gap-3">
                    {proj.hasCaseStudy && (
                      <button
                        onClick={() => handleOpenCase(proj.id)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E3A8A] hover:bg-[#152A66] text-white text-xs md:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5"
                      >
                        Xem Case chi tiết <span className="text-xs">↗</span>
                      </button>
                    )}
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E3A8A] hover:bg-[#152A66] text-white text-xs md:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5"
                      >
                        {proj.id === "criminal" ? "Xem mã nguồn GitHub" : "Xem sản phẩm trực tiếp"} <span className="text-xs">↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide-over Full-screen Case Study Document */}
      <AnimatePresence>
        {modalOpen && (
          <CaseStudyModal
            isOpen={modalOpen}
            projectId={selectedProjectId}
            onClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
