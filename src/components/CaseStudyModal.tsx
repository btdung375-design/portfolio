import { useState, useEffect } from "react";
import {
  X,
  BookOpen,
  Users,
  Target,
  FileSpreadsheet,
  Layers,
  Settings,
  Database,
  CheckCircle,
  Clock,
  AlertTriangle,
  Play,
  ArrowRight,
  User,
  Computer,
  UserCheck,
  Search,
  BookMarked,
  ZoomIn,
  MapPin,
  Award,
  Zap,
  Code,
  Smile,
  Compass,
  Shield
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MixueCaseContent } from "./MixueCaseContent";
import { MixueSimulator } from "./MixueSimulator";
import { CriminalCaseContent } from "./CriminalCaseContent";
const bpmnImage = "/images/activity-headphones.jpg.png";

interface CaseStudyModalProps {
  isOpen: boolean;
  projectId: "library" | "criminal" | "mixue";
  onClose: () => void;
}

export default function CaseStudyModal({ isOpen, projectId, onClose }: CaseStudyModalProps) {
  const [activeChapter, setActiveChapter] = useState<string>("context");
  const [bpmnFlow, setBpmnFlow] = useState<"success" | "out-of-stock" | "overdue">("success");
  const [bpmnStep, setBpmnStep] = useState<number>(0);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [mixueViewTab, setMixueViewTab] = useState<"doc" | "demo">("doc");

  useEffect(() => {
    setActiveChapter(
      projectId === "library"
        ? "context"
        : projectId === "criminal"
        ? "criminal_context"
        : "mixue_context"
    );
  }, [projectId]);

  if (!isOpen) return null;

  const chapters = projectId === "library"
    ? [
        { id: "context", title: "1. Bối cảnh & Mục tiêu", icon: Target },
        { id: "scope", title: "2. Phạm vi & Stakeholders", icon: Users },
        { id: "brd", title: "3. Tài liệu BRD & FR", icon: FileSpreadsheet },
        { id: "bpmn", title: "4. Quy trình BPMN", icon: Layers },
        { id: "backlog", title: "5. User Story Backlog", icon: BookOpen },
        { id: "erd", title: "6. Mô hình ERD & Kết luận", icon: Database },
      ]
    : projectId === "criminal"
    ? [
        { id: "criminal_context", title: "1. Bối cảnh & Yêu cầu", icon: Target },
        { id: "criminal_tech", title: "2. Công nghệ & Kiến trúc", icon: Layers },
        { id: "criminal_ai", title: "3. YOLOv8 & DeepFace", icon: Database },
        { id: "criminal_alert", title: "4. Cảnh báo & Vị trí", icon: AlertTriangle },
        { id: "criminal_gui", title: "5. Giao diện Terminal", icon: Computer },
        { id: "criminal_conclusion", title: "6. Bài học & Kết luận", icon: Shield },
      ]
    : [
        { id: "mixue_context", title: "1. Bối cảnh & Pain-points", icon: Target },
        { id: "mixue_traffic", title: "2. Mật độ & Biểu đồ LIVE", icon: Zap },
        { id: "mixue_map", title: "3. Định vị & Dẫn đường", icon: MapPin },
        { id: "mixue_loyalty", title: "4. Tích điểm & Đổi quà", icon: Award },
        { id: "mixue_community", title: "5. Cộng đồng & Thử thách (Bỏ ngỏ)", icon: Smile },
        { id: "mixue_code", title: "6. Nhật ký Vibe Code & Kết luận", icon: Code },
      ];

  // BPMN Interactive Simulator Steps
  const bpmnFlows = {
    success: [
      { lane: "Sinh viên", action: "Tìm & chọn sách trên hệ thống", desc: "Sinh viên tra cứu sách theo tên/tác giả trên OPAC và xác định sách có sẵn." },
      { lane: "Hệ thống", action: "Kiểm tra: Sách còn không? -> Còn", desc: "Hệ thống xác định số lượng tồn kho > 0 và còn ở trên kệ." },
      { lane: "Sinh viên", action: "Đến quầy, đưa thẻ SV + sách cho thủ thư", desc: "Sinh viên mang sách cần mượn đến quầy thủ thư trực tiếp." },
      { lane: "Thủ thư", action: "Quét mã SV + mã sách", desc: "Thủ thư sử dụng đầu đọc quét mã thẻ sinh viên và mã vạch dán trên sách." },
      { lane: "Hệ thống", action: "Kiểm tra: Có sách quá hạn / Đủ 3 cuốn? -> Không", desc: "Hệ thống kiểm tra thẻ sinh viên hợp lệ, chưa mượn đủ 3 cuốn và không có sách quá hạn chưa trả." },
      { lane: "Hệ thống", action: "Tạo phiếu mượn (Hạn trả +14 ngày)", desc: "Hệ thống tự động ghi nhận phiếu mượn mới, gán ngày hết hạn sau 14 ngày." },
      { lane: "Hệ thống", action: "Gửi email xác nhận cho SV", desc: "Hệ thống gửi email thông báo chi tiết mượn sách thành công kèm ngày hẹn trả." },
    ],
    "out-of-stock": [
      { lane: "Sinh viên", action: "Tìm & chọn sách trên hệ thống", desc: "Sinh viên tra cứu sách cần tìm trên ứng dụng thư viện." },
      { lane: "Hệ thống", action: "Kiểm tra: Sách còn không? -> Không", desc: "Hệ thống phát hiện số lượng tồn kho = 0 (tất cả các bản sao đã được mượn)." },
      { lane: "Hệ thống", action: "Thông báo hết sách", desc: "Hệ thống hiển thị trạng thái 'Đã hết sách' và hướng dẫn sinh viên đặt trước hoặc chọn sách khác." },
    ],
    overdue: [
      { lane: "Sinh viên", action: "Tìm & chọn sách trên hệ thống", desc: "Sinh viên tra cứu sách trên hệ thống và thấy sách còn." },
      { lane: "Hệ thống", action: "Kiểm tra: Sách còn không? -> Còn", desc: "Hệ thống xác định sách còn tồn kho." },
      { lane: "Sinh viên", action: "Đến quầy, đưa thẻ SV + sách cho thủ thư", desc: "Sinh viên đến quầy dịch vụ." },
      { lane: "Thủ thư", action: "Quét mã SV + mã sách", desc: "Thủ thư quét mã thẻ và mã sách." },
      { lane: "Hệ thống", action: "Kiểm tra: Có sách quá hạn / Đủ 3 cuốn? -> Có", desc: "Hệ thống phát hiện sinh viên đang có sách trễ hạn chưa hoàn trả hoặc đã mượn đủ tối đa 3 cuốn." },
      { lane: "Thủ thư", action: "Từ chối mượn, yêu cầu trả sách quá hạn", desc: "Hệ thống khóa chức năng mượn mới. Thủ thư thông báo lỗi và yêu cầu sinh viên hoàn tất sách cũ hoặc nộp phạt." },
    ]
  };

  const currentSteps = bpmnFlows[bpmnFlow];

  const handleFlowChange = (flow: "success" | "out-of-stock" | "overdue") => {
    setBpmnFlow(flow);
    setBpmnStep(0);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-0 md:p-6 bg-[#0F172A]/70 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className={`w-full h-full ${projectId === "mixue" || projectId === "criminal" ? "md:max-w-6xl" : "md:max-w-5xl"} md:h-[90vh] bg-white md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#E2E8F0]`}
      >
        {/* Header bar */}
        <div className="bg-[#FAF9F6] border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              projectId === "library"
                ? "bg-[#2563EB]/10 text-[#2563EB]"
                : projectId === "criminal"
                ? "bg-red-50 text-[#991B1B] border border-red-100"
                : "bg-red-50 text-[#BB0013] border border-red-100"
            }`}>
              {projectId === "library" ? (
                <BookMarked className="w-5 h-5" />
              ) : projectId === "criminal" ? (
                <Shield className="w-5 h-5" />
              ) : (
                <Compass className="w-5 h-5" />
              )}
            </div>
            <div>
              <span className={`text-[10px] font-bold tracking-widest uppercase block ${
                projectId === "library"
                  ? "text-[#2563EB]"
                  : projectId === "criminal"
                  ? "text-[#991B1B]"
                  : "text-[#BB0013]"
              }`}>
                {projectId === "library"
                  ? "Case Study Document"
                  : projectId === "criminal"
                  ? "Product & System Specification Document (Python/AI)"
                  : "Product & System Specification Document"}
              </span>
              <h2 className="font-serif text-base md:text-lg font-bold text-[#0F172A] leading-tight">
                {projectId === "library"
                  ? "Hệ Thống Quản Lý Mượn/Trả Sách Thư Viện Trường"
                  : projectId === "criminal"
                  ? "Criminal Detection System (Hệ thống Phát hiện Hành vi Nguy hiểm)"
                  : "Mixue GO — Hệ thống Đo lường Mật độ Khách Real-time & Tích điểm"}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200/50 text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body layout */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 bg-[#FAF9F6] border-b md:border-b-0 md:border-r border-[#E2E8F0] overflow-x-auto md:overflow-y-auto shrink-0 flex md:flex-col p-3 gap-1 scrollbar-thin scrollbar-thumb-slate-200">
            {chapters.map((ch) => {
              const Icon = ch.icon;
              const isActive = activeChapter === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapter(ch.id)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-left text-xs font-semibold shrink-0 cursor-pointer transition-all ${
                    isActive
                      ? projectId === "library"
                        ? "bg-white text-[#2563EB] border border-[#2563EB]/15 shadow-2xs font-bold"
                        : projectId === "criminal"
                        ? "bg-white text-[#991B1B] border border-[#991B1B]/15 shadow-2xs font-bold"
                        : "bg-white text-[#BB0013] border border-[#BB0013]/15 shadow-2xs font-bold"
                      : "text-[#475569] hover:text-[#0F172A] hover:bg-white/50"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${
                    isActive
                      ? projectId === "library"
                        ? "text-[#2563EB]"
                        : projectId === "criminal"
                        ? "text-[#991B1B]"
                        : "text-[#BB0013]"
                      : "text-[#64748B]"
                  }`} />
                  <span className="hidden md:inline">{ch.title}</span>
                </button>
              );
            })}
          </div>

          {/* Main Chapter Text Area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-white scrollbar-thin">
            {projectId === "criminal" && (
              <CriminalCaseContent activeChapter={activeChapter} />
            )}

            {projectId === "library" && (
              <>
                {activeChapter === "context" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-1">Chapter 1</div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
                    Giới Thiệu &amp; Bối Cảnh Thực Tế
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-[#475569] leading-relaxed text-justify">
                  <p>
                    Thư viện trường hiện đang quản lý việc mượn và trả sách hoàn toàn thủ công bằng{" "}
                    <span className="text-[#0F172A] font-semibold">sổ ghi chép giấy</span>. Quy trình lỗi thời này đang phát sinh 3 vấn đề nhức nhối cản trở công tác quản trị:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex flex-col gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">1</span>
                      <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Xử lý chậm chạp</h4>
                      <p className="text-[11px] text-[#64748B] leading-normal">Mỗi lượt tìm kiếm, đối soát, ghi nhận thủ thư tốn trung bình 5 phút/sinh viên.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex flex-col gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">2</span>
                      <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Mất kiểm soát số lượng</h4>
                      <p className="text-[11px] text-[#64748B] leading-normal">Thư viện không thể kiểm tra sinh viên đang mượn bao nhiêu cuốn, dẫn đến giữ sách quá hạn lâu ngày.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex flex-col gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">3</span>
                      <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Thiếu báo cáo thống kê</h4>
                      <p className="text-[11px] text-[#64748B] leading-normal">Khó khăn trong tổng hợp số liệu để phòng đào tạo theo dõi định hướng nhu cầu sách học tập.</p>
                    </div>
                  </div>
                  <p>
                    Do đó, dự án được triển khai nhằm <strong className="text-[#0F172A]">số hóa toàn bộ quy trình</strong> để nâng cao chất lượng dịch vụ của thư viện nhà trường.
                  </p>
                </div>

                <div className="border-t border-[#F1F5F9] pt-6">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest mb-3">Mục tiêu dự án (KPIs)</h4>
                  <ul className="space-y-3">
                    {[
                      { text: "Rút ngắn thời gian xử lý mượn/trả từ ~5 phút xuống dưới 1 phút/lượt.", highlight: "Dưới 1 phút" },
                      { text: "Giảm tối thiểu tỷ lệ thất thoát sách nhờ kiểm soát chặt chẽ giới hạn mượn.", highlight: "Giảm thất thoát" },
                      { text: "Sinh viên có thể chủ động tra cứu trạng thái sách thời gian thực trực tuyến.", highlight: "Tra cứu online" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#0F172A] font-semibold">{item.highlight}</strong> — {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {activeChapter === "scope" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-1">Chapter 2</div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
                    Phạm Vi Dự Án &amp; Stakeholder Analysis
                  </h3>
                </div>

                {/* Scope Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-[#F8FAF6] border border-[#E2E8F0] shadow-2xs">
                    <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Trong phạm vi (In-Scope)
                    </h4>
                    <ul className="space-y-2 text-xs text-[#475569]">
                      <li>• Tra cứu sách theo tên, tác giả, thể loại.</li>
                      <li>• Tạo phiếu mượn, trả và gia hạn hạn mượn.</li>
                      <li>• Tự động chặn mượn khi đạt giới hạn 3 cuốn/thẻ.</li>
                      <li>• Tự động tính phí phạt 5.000đ/ngày khi trả trễ hạn.</li>
                      <li>• Gửi email thông báo tự động trước hạn 2 ngày.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-red-50/50 border border-red-100 shadow-2xs">
                    <h4 className="text-xs font-bold text-red-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400"></span>
                      Ngoài phạm vi (Out-of-Scope)
                    </h4>
                    <ul className="space-y-2 text-xs text-[#475569]">
                      <li>• Không hỗ trợ thanh toán phí phạt trực tuyến (Giai đoạn 1).</li>
                      <li>• Chưa tích hợp chung với hệ thống điểm danh tổng của trường.</li>
                    </ul>
                  </div>
                </div>

                {/* Stakeholder Table */}
                <div className="border-t border-[#F1F5F9] pt-6">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest mb-4">Phân tích Stakeholder</h4>
                  <div className="overflow-x-auto border border-[#E2E8F0] rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#FAF9F6] border-b border-[#E2E8F0]">
                          <th className="p-3 font-bold text-[#0F172A]">Stakeholder</th>
                          <th className="p-3 font-bold text-[#0F172A]">Vai trò</th>
                          <th className="p-3 font-bold text-[#2563EB]">Quyền lực</th>
                          <th className="p-3 font-bold text-[#10B981]">Mức quan tâm</th>
                          <th className="p-3 font-bold text-[#0F172A]">Chiến lược</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E2E8F0]">
                        {[
                          { s: "Thủ thư trưởng", role: "Vận hành, người đưa yêu cầu chính", p: "Cao", i: "Cao", str: "Họp trực tiếp, manage closely" },
                          { s: "Sinh viên", role: "Người dùng cuối tra cứu/mượn sách", p: "Thấp", i: "Cao", str: "Lấy feedback định kỳ" },
                          { s: "Phòng đào tạo", role: "Giám sát, nhận thống kê báo cáo", p: "Cao", i: "Thấp", str: "Báo cáo tóm tắt định kỳ" },
                          { s: "Đội IT trường", role: "Hỗ trợ triển khai & bảo trì", p: "Trung bình", i: "Trung bình", str: "Cập nhật tiến độ kỹ thuật" },
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50">
                            <td className="p-3 font-bold text-[#0F172A]">{row.s}</td>
                            <td className="p-3 text-[#64748B]">{row.role}</td>
                            <td className="p-3 font-semibold text-[#2563EB]">{row.p}</td>
                            <td className="p-3 font-semibold text-[#10B981]">{row.i}</td>
                            <td className="p-3 text-[#475569]">{row.str}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeChapter === "brd" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-1">Chapter 3</div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
                    Tài Liệu Yêu Cầu Nghiệp Vụ (BRD &amp; FR)
                  </h3>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest">Business Requirements (BR)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "BR-01", text: "Sinh viên phải tự tra cứu được tình trạng còn/hết của sách thời gian thực." },
                      { id: "BR-02", text: "Thủ thư ghi nhận mượn/trả nhanh chóng trong vòng dưới 1 phút/lượt." },
                      { id: "BR-03", text: "Tự động nhắc nhở trả sách qua Email trước hạn 2 ngày để hạn chế phạt." },
                      { id: "BR-04", text: "Chặn mượn sách nếu sinh viên đã mượn đủ giới hạn 3 cuốn chưa trả." },
                      { id: "BR-05", text: "Tự động tính phí phạt trả chậm: 5.000đ / ngày / cuốn." },
                      { id: "BR-06", text: "Đánh dấu sách hiếm (chỉ có 1 bản duy nhất) là không thể gia hạn thêm ngày mượn." },
                    ].map((br) => (
                      <div key={br.id} className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E2E8F0] shadow-2xs flex gap-3">
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-[#2563EB] text-[10px] font-bold h-fit shrink-0">
                          {br.id}
                        </span>
                        <p className="text-xs text-[#475569] leading-relaxed text-justify">{br.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#F1F5F9] pt-6 space-y-4">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest">Functional Requirements (FR)</h4>
                  <div className="overflow-x-auto border border-[#E2E8F0] rounded-xl text-xs">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#FAF9F6] border-b border-[#E2E8F0]">
                          <th className="p-3 font-bold text-[#0F172A] w-24">Mã FR</th>
                          <th className="p-3 font-bold text-[#0F172A]">Đặc tả chức năng chi tiết cho Dev &amp; QA</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E2E8F0] text-[#475569]">
                        {[
                          { code: "FR-001", text: "Hệ thống hiển thị thanh tìm kiếm sách theo tên, tác giả và thể loại." },
                          { code: "FR-002", text: "Hiển thị số lượng tồn kho còn lại của sách và mã vị trí kệ sách thực tế." },
                          { code: "FR-003", text: "Thủ thư quét mã thẻ sinh viên và mã sách để tạo phiếu mượn tự động." },
                          { code: "FR-004", text: "Hệ thống tự động thiết lập Ngày hạn trả = Ngày mượn + 14 ngày." },
                          { code: "FR-005", text: "Hệ thống kiểm tra tổng số sách đang mượn của MaSV; từ chối nếu số lượng đạt 3 cuốn." },
                          { code: "FR-006", text: "Chặn không cho mượn nếu thẻ sinh viên hiển thị trạng thái đã hết hạn." },
                          { code: "FR-007", text: "Khi trả sách, hệ thống so sánh Ngày trả thực tế và Ngày hạn trả; tự động tính phí phạt 5.000đ/ngày quá hạn." },
                          { code: "FR-008", text: "Gắn cờ sách hiếm; nếu LaSachHiem = True thì khóa nút 'Gia hạn' trên màn hình." },
                        ].map((fr) => (
                          <tr key={fr.code} className="hover:bg-slate-50/30">
                            <td className="p-3 font-bold text-[#2563EB]">{fr.code}</td>
                            <td className="p-3 leading-relaxed text-justify">{fr.text}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeChapter === "bpmn" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-1">Chapter 4</div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
                    Sơ Đồ Quy Trình BPMN
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-[#2563EB]/5 border border-[#2563EB]/10 text-xs text-[#475569] leading-relaxed">
                  <span className="font-bold text-[#2563EB] uppercase mr-1">Interactive Simulator:</span>
                  Nhà tuyển dụng có thể trực tiếp tương tác với quy trình dưới đây. Hãy chọn một luồng xử lý để xem sơ đồ di chuyển tự động qua các Lane và các bước kiểm tra logic hệ thống.
                </div>

                {/* Workflow Selector Tabs */}
                <div className="flex gap-2 border-b border-[#E2E8F0] pb-4">
                  {[
                    { id: "success", label: "Luồng mượn thành công", color: "border-emerald-500 text-emerald-700 bg-emerald-50" },
                    { id: "out-of-stock", label: "Luồng rẽ nhánh: Hết sách", color: "border-amber-500 text-amber-700 bg-amber-50" },
                    { id: "overdue", label: "Luồng ngoại lệ: Quá hạn / Đủ giới hạn", color: "border-red-500 text-red-700 bg-red-50" },
                  ].map((flow) => (
                    <button
                      key={flow.id}
                      onClick={() => handleFlowChange(flow.id as any)}
                      className={`px-3 py-2 rounded-lg text-[11px] font-bold cursor-pointer border transition-all ${
                        bpmnFlow === flow.id
                          ? flow.color
                          : "bg-[#FAF9F6] text-[#475569] border-[#E2E8F0] hover:bg-white"
                      }`}
                    >
                      {flow.label}
                    </button>
                  ))}
                </div>

                {/* Simulated Diagram Container */}
                <div className="p-6 rounded-2xl bg-[#0F172A] text-slate-100 flex flex-col md:flex-row gap-6 relative min-h-[300px]">
                  {/* Left Column: Visual step list with Lanes */}
                  <div className="flex-1 space-y-3 relative z-10">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                      <span className="text-[10px] font-bold text-blue-400 tracking-wider uppercase">
                        Lane Active &amp; Steps
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">
                        Bước {bpmnStep + 1} / {currentSteps.length}
                      </span>
                    </div>

                    <div className="space-y-2 max-h-[220px] overflow-y-auto scrollbar-thin pr-1">
                      {currentSteps.map((step, idx) => {
                        const isPast = idx < bpmnStep;
                        const isCurrent = idx === bpmnStep;
                        const isLaneSV = step.lane === "Sinh viên";
                        const isLaneTT = step.lane === "Thủ thư";

                        return (
                          <div
                            key={idx}
                            onClick={() => setBpmnStep(idx)}
                            className={`p-3 rounded-lg border transition-all cursor-pointer flex gap-3 items-center ${
                              isCurrent
                                ? "bg-slate-800 border-blue-500 text-white shadow-md scale-102"
                                : isPast
                                ? "bg-slate-900/50 border-slate-800/40 text-slate-400"
                                : "bg-slate-900/30 border-transparent text-slate-500"
                            }`}
                          >
                            <span
                              className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 ${
                                isCurrent
                                  ? "bg-[#2563EB] text-white"
                                  : isPast
                                  ? "bg-emerald-500/25 text-emerald-400"
                                  : "bg-slate-800 text-slate-500"
                              }`}
                            >
                              {idx + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span
                                  className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded ${
                                    isLaneSV
                                      ? "bg-blue-500/10 text-blue-300"
                                      : isLaneTT
                                      ? "bg-amber-500/10 text-amber-300"
                                      : "bg-emerald-500/10 text-emerald-300"
                                  }`}
                                >
                                  {step.lane}
                                </span>
                              </div>
                              <h4 className="text-xs font-bold mt-1 truncate">{step.action}</h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Rule detail explain */}
                  <div className="w-full md:w-64 bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between shrink-0 relative z-10">
                    <div>
                      <span className="text-[9px] font-bold tracking-wider text-blue-400 uppercase">
                        Giải thích phân tích
                      </span>
                      <h4 className="font-serif text-sm font-bold text-white mt-1 border-b border-slate-800 pb-2">
                        {currentSteps[bpmnStep].action}
                      </h4>
                      <p className="text-xs text-slate-300 mt-3 leading-relaxed text-justify">
                        {currentSteps[bpmnStep].desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-800 flex justify-between items-center">
                      <button
                        onClick={() => setBpmnStep(Math.max(0, bpmnStep - 1))}
                        disabled={bpmnStep === 0}
                        className="px-2.5 py-1.5 rounded bg-slate-800 text-[10px] font-bold text-slate-300 hover:bg-slate-700 disabled:opacity-30 cursor-pointer"
                      >
                        Trước
                      </button>
                      <button
                        onClick={() => setBpmnStep(Math.min(currentSteps.length - 1, bpmnStep + 1))}
                        disabled={bpmnStep === currentSteps.length - 1}
                        className="px-2.5 py-1.5 rounded bg-[#2563EB] text-[10px] font-bold text-white hover:bg-blue-600 disabled:opacity-30 cursor-pointer flex items-center gap-1"
                      >
                        Tiếp
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Photo references fallback */}
                <div className="pt-4 border-t border-[#F1F5F9]">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest mb-3">Tài liệu đính kèm hệ thống</h4>
                  <p className="text-xs text-[#64748B] mb-4">
                    Sơ đồ quy trình BPMN nguyên bản được xây dựng hoàn chỉnh trên công cụ draw.io hỗ trợ lưu giữ và cập nhật. Nhấp vào sơ đồ bên dưới để phóng to xem chi tiết các bước.
                  </p>
                  <div 
                    onClick={() => setIsImageZoomed(true)}
                    className="aspect-video w-full max-w-lg rounded-xl overflow-hidden border border-[#E2E8F0] relative group bg-slate-950 flex items-center justify-center cursor-zoom-in shadow-xs hover:shadow-md transition-all"
                  >
                    <img
                      src={bpmnImage}
                      alt="BPMN draw.io diagram visual"
                      className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-500 p-2"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-xs">
                      <ZoomIn className="w-4 h-4 text-white" />
                      Phóng to sơ đồ
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeChapter === "backlog" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-1">Chapter 5</div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
                    User Story Backlog
                  </h3>
                </div>

                {/* Moscow Cards */}
                <div className="space-y-4">
                  {[
                    {
                      id: "US-01",
                      title: "Tra cứu tình trạng sách theo tên",
                      role: "Sinh viên",
                      benefit: "biết sách còn hay đã hết trước khi tới thư viện.",
                      ac: "Given nhập tên sách hợp lệ / When nhấn 'Tìm kiếm' / Then hệ thống hiển thị số lượng còn lại và vị trí kệ trong vòng 2 giây."
                    },
                    {
                      id: "US-02",
                      title: "Ghi nhận mượn sách bằng quét mã",
                      role: "Thủ thư",
                      benefit: "xử lý mượn sách nhanh mà không cần nhập tay thủ công.",
                      ac: "AC-1: Given thẻ hợp lệ và sách còn / When quét mã / Then tạo phiếu mượn, hạn trả = hôm nay + 14 ngày. \nAC-2: Given thẻ đã hết hạn / When quét mã / Then hiển thị cảnh báo 'Thẻ hết hạn' và khóa mượn."
                    },
                    {
                      id: "US-05",
                      title: "Chặn mượn khi mượn đủ giới hạn 3 cuốn",
                      role: "Hệ thống",
                      benefit: "thư viện đảm bảo công bằng cho các sinh viên khác mượn sách.",
                      ac: "Given sinh viên đang mượn 3 cuốn chưa trả / When quét mã sách thứ 4 / Then hiển thị cảnh báo 'Đã mượn đủ giới hạn 3 cuốn' và chặn giao dịch."
                    },
                    {
                      id: "US-03",
                      title: "Nhận Email nhắc nhở trả sách trước hạn",
                      role: "Sinh viên",
                      benefit: "không bị nộp phạt trễ hạn vì quên ngày trả sách.",
                      ac: "Given sách còn 2 ngày đến hạn trả / When hệ thống chạy job kiểm tra hàng ngày / Then sinh viên tự động nhận được email nhắc nhở kèm tên sách."
                    },
                    {
                      id: "US-04",
                      title: "Xem báo cáo thống kê mượn sách theo thể loại",
                      role: "Thủ thư",
                      benefit: "biết rõ thể loại nào được mượn nhiều để định hướng bổ sung sách mới.",
                      ac: "Given có giao dịch mượn phát sinh / When mở màn hình báo cáo / Then hiển thị bảng thống kê phân loại trực quan."
                    }
                  ].map((story) => (
                    <div key={story.id} className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3 hover:border-slate-300 transition-all">
                      <div className="flex items-center justify-between gap-4">
                        <span className="px-2 py-0.5 rounded bg-[#2563EB]/5 text-[#2563EB] text-[10px] font-bold border border-[#2563EB]/10 shrink-0">
                          {story.id}
                        </span>
                        <h4 className="text-xs font-bold text-[#0F172A] flex-1">{story.title}</h4>
                      </div>

                      <div className="text-xs text-[#475569] space-y-1">
                        <p>
                          <strong className="text-[#0F172A]">Với vai trò là:</strong> {story.role}
                        </p>
                        <p>
                          <strong className="text-[#0F172A]">Tôi muốn:</strong> {story.title}
                        </p>
                        <p>
                          <strong className="text-[#0F172A]">Để:</strong> {story.benefit}
                        </p>
                      </div>

                      <div className="bg-[#FAF9F6] border border-[#E2E8F0] rounded-xl p-3 text-[11px] text-[#475569] leading-relaxed whitespace-pre-line">
                        <strong className="text-emerald-700 block mb-1">Acceptance Criteria (AC):</strong>
                        {story.ac}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeChapter === "erd" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-1">Chapter 6</div>
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
                    Mô hình Dữ liệu ERD &amp; Kết luận
                  </h3>
                </div>

                {/* DB entities mock */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest">Thực thể &amp; Thuộc tính (ERD Schema)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {[
                      { name: "SINH_VIEN (Thông tin Sinh viên)", attrs: ["MaSV (Primary Key)", "HoTen", "Email", "HanTheSV (Trạng thái thẻ)"] },
                      { name: "SACH (Danh mục sách)", attrs: ["MaSach (Primary Key)", "TenSach", "TacGia", "MaTheLoai (Foreign Key)", "SoLuongTon", "LaSachHiem (Boolean)"] },
                      { name: "PHIEU_MUON (Quản lý mượn/trả)", attrs: ["MaPhieu (Primary Key)", "MaSV (Foreign Key)", "MaSach (Foreign Key)", "NgayMuon", "HanTra", "NgayTraThucTe", "TrangThai"] },
                      { name: "PHIEU_PHAT (Sách quá hạn)", attrs: ["MaPhat (Primary Key)", "MaPhieu (Foreign Key)", "SoNgayTre", "SoTienPhat", "TrangThaiThanhToan"] },
                    ].map((entity, i) => (
                      <div key={i} className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E2E8F0]">
                        <h5 className="font-bold text-[#0F172A] border-b border-[#E2E8F0] pb-1.5 mb-2 flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5 text-[#2563EB]" />
                          {entity.name}
                        </h5>
                        <ul className="space-y-1 text-[#64748B]">
                          {entity.attrs.map((attr, j) => (
                            <li key={j}>• {attr}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-[#E2E8F0] text-xs text-[#475569] leading-relaxed">
                  <strong className="text-[#0F172A] block mb-1">Quan hệ dữ liệu:</strong>
                  1 SINH_VIEN mượn nhiều PHIEU_MUON (1-n) | 1 THE_LOAI chứa nhiều SACH (1-n) | 1 SACH liên kết nhiều PHIEU_MUON (1-n) | 1 PHIEU_MUON liên kết tối đa 1 PHIEU_PHAT (1-0..1) nếu trả trễ hạn.
                </div>

                {/* Learnings / Conclusions */}
                <div className="border-t border-[#F1F5F9] pt-6 space-y-4">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest">Kết luận &amp; Bài học rút ra</h4>
                  <div className="p-5 rounded-2xl bg-[#F8FAF6] border border-[#E2E8F0] space-y-3 text-xs text-[#475569] leading-relaxed text-justify">
                    <p>
                      <strong>1. Chu trình phân tích thực tế</strong> — Áp dụng trọn vẹn quy trình Requirements Lifecycle: Lấy yêu cầu (Elicit) qua trao đổi trực tiếp với Thủ thư trưởng → Phân tích sâu (Analyze) để bổ sung luật chặn mượn/phạt trễ → Viết tài liệu đặc tả (Document) → Kiểm thử UAT (Validate).
                    </p>
                    <p>
                      <strong>2. Sự biến động của yêu cầu</strong> — Nhận ra tài liệu không phải viết một lần là xong. Bản v1.0 sơ bộ thiếu nhiều luật thực tế quan trọng, chỉ được phát hiện sau khi đặt các câu hỏi mở đào sâu với các bên liên quan.
                    </p>
                    <p>
                      <strong>3. Làm chủ kỹ năng cốt lõi</strong> — Thực hành tổng hòa các công cụ để giải quyết một bài toán: Soạn thảo văn bản đặc tả BRD/User Story, thiết kế sơ đồ quy trình BPMN và phác thảo mô hình cơ sở dữ liệu quan hệ ERD.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
              </>
            )}
            {projectId === "mixue" && (
              <div className="flex flex-col lg:flex-row gap-8 items-start h-full">
                {/* Mobile View Switcher */}
                <div className="w-full lg:hidden flex justify-center mb-4">
                  <div className="bg-slate-100 p-1 rounded-full flex gap-1 border border-slate-200">
                    <button
                      onClick={() => setMixueViewTab("doc")}
                      className={`px-4 py-1.5 rounded-full text-[11px] font-extrabold transition-all cursor-pointer ${
                        mixueViewTab === "doc"
                          ? "bg-[#BB0013] text-white shadow-3xs"
                          : "text-[#475569] hover:text-[#0F172A]"
                      }`}
                    >
                      Bản đặc tả (Specs)
                    </button>
                    <button
                      onClick={() => setMixueViewTab("demo")}
                      className={`px-4 py-1.5 rounded-full text-[11px] font-extrabold transition-all cursor-pointer ${
                        mixueViewTab === "demo"
                          ? "bg-[#BB0013] text-white shadow-3xs"
                          : "text-[#475569] hover:text-[#0F172A]"
                      }`}
                    >
                      Bản mô phỏng (Demo)
                    </button>
                  </div>
                </div>

                {/* Left Column: Specs text (Always visible on lg, conditionally on mobile) */}
                <div className={`w-full lg:w-[58%] space-y-6 ${mixueViewTab === "doc" ? "block" : "hidden lg:block"}`}>
                  <MixueCaseContent activeChapter={activeChapter} />
                </div>

                {/* Right Column: Smartphone interactive simulator (Always visible on lg, conditionally on mobile) */}
                <div className={`w-full lg:w-[42%] flex justify-center lg:sticky lg:top-4 ${mixueViewTab === "demo" ? "block" : "hidden lg:block"}`}>
                  <MixueSimulator activeChapter={activeChapter} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-[#FAF9F6] border-t border-[#E2E8F0] px-6 py-4 flex justify-between items-center shrink-0">
          <span className="text-[10px] text-[#64748B] font-semibold">
            Bản quyền tài liệu thuộc về Bùi Tiến Dũng © 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0F172A] text-white rounded-lg text-xs font-bold hover:bg-[#2563EB] transition-colors cursor-pointer"
          >
            Đóng tài liệu
          </button>
        </div>
      </motion.div>

      {/* Zoomed Image Lightbox Overlay */}
      <AnimatePresence>
        {isImageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageZoomed(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md cursor-zoom-out animate-none"
          >
            <button
              onClick={() => setIsImageZoomed(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-7xl max-h-[90vh] flex items-center justify-center"
            >
              <img
                src={bpmnImage}
                alt="Zoomed BPMN diagram"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
