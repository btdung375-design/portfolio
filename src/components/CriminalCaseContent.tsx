import { motion } from "motion/react";
import { Clock, MapPin, Zap, Users, Code, AlertTriangle, Shield, Eye, Bell, Database, CheckCircle } from "lucide-react";

interface CriminalCaseContentProps {
  activeChapter: string;
}

export function CriminalCaseContent({ activeChapter }: CriminalCaseContentProps) {
  return (
    <div className="space-y-6 text-sm text-[#475569] leading-relaxed">
      {activeChapter === "criminal_context" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#991B1B] tracking-wider uppercase mb-1">Chapter 1</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              Bối Cảnh &amp; Yêu Cầu Giám Sát An Ninh
            </h3>
          </div>

          <div className="space-y-4 text-justify">
            <p>
              Hệ thống giám sát an ninh truyền thống thường phụ thuộc hoàn toàn vào sức người để quan sát hàng chục mắt camera cùng lúc. Điều này dẫn đến sự mệt mỏi, bỏ lọt các mối đe dọa nghiêm trọng và không thể phản ứng tức thời khi sự cố xảy ra.
            </p>
            <p>
              Dự án <span className="text-[#991B1B] font-bold">Criminal Detection System</span> ra đời nhằm giải quyết triệt để rào cản đó bằng cách tự động hóa hoàn toàn quy trình nhận diện và đưa ra cảnh báo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
              <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex flex-col gap-2">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">1</span>
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Phát hiện vật thể đe dọa</h4>
                <p className="text-[11px] text-[#64748B] leading-normal">Nhận biết ngay lập tức các loại vũ khí thô sơ như dao (knife), súng (gun), gậy bóng chày (bat) xuất hiện trước ống kính.</p>
              </div>
              <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex flex-col gap-2">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">2</span>
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Nhận diện danh tính đối tượng</h4>
                <p className="text-[11px] text-[#64748B] leading-normal">Trích xuất khuôn mặt, so khớp sinh trắc học với cơ sở dữ liệu các nghi phạm nguy hiểm hoặc người trong danh sách đen.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#991B1B]" />
                Mục Tiêu Phát Triển Toàn Diện
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Là một dự án phát triển giải pháp thực tế, mục tiêu của tôi không chỉ dừng lại ở mặt lý thuyết hay thuật toán cô lập, mà là xây dựng một **hệ thống đầu-cuối (end-to-end)** chạy ổn định trên các thiết bị giám sát đầu cuối (terminal):
              </p>
              <ul className="space-y-1.5 text-[11px] text-[#475569] list-disc list-inside pl-1">
                <li><strong className="text-[#0F172A]">Chạy mượt mà thời gian thực:</strong> Tận dụng tối đa phần cứng sẵn có từ CPU đa nhân đến GPU CUDA hoặc DirectML.</li>
                <li><strong className="text-[#0F172A]">Tính năng đăng ký trực tiếp:</strong> Cho phép quản trị viên chụp ảnh và đăng ký nhanh khuôn mặt nghi phạm bằng Camera ngay tại giao diện.</li>
                <li><strong className="text-[#0F172A]">Cảnh báo đa kênh tức thì:</strong> Tích hợp các cổng kết nối đến Telegram và Discord để gửi ảnh kèm tọa độ ngay khi phát hiện nguy hiểm.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {activeChapter === "criminal_tech" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#991B1B] tracking-wider uppercase mb-1">Chapter 2</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              Công Nghệ &amp; Luồng Kiến Trúc Hệ Thống
            </h3>
          </div>

          <div className="space-y-4">
            <p>
              Để đáp ứng yêu cầu xử lý luồng video thời gian thực liên tục, tôi đã thiết kế một luồng xử lý đồng bộ, tối ưu hóa I/O và tính toán song song:
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-white font-mono text-[11px] space-y-2">
              <div className="text-blue-400 font-bold">// Luồng xử lý camera của terminal (process.py)</div>
              <div>1. [Input]: Đọc luồng video từ Camera/IP stream qua OpenCV (cv2)</div>
              <div>2. [Multi-Thread]: Chia tách frame cho 2 mô-đun phân tích độc lập:</div>
              <div className="pl-4 text-emerald-400">- Mô-đun A: Phát hiện vũ khí bằng YOLOv8 Nano</div>
              <div className="pl-4 text-amber-400">- Mô-đun B: Trích xuất face embeddings bằng DeepFace (Facenet512)</div>
              <div>3. [Logic Matcher]: Ghép nối kết quả phân tích để chấm điểm đe dọa (Threat Score)</div>
              <div>4. [Action]: Ghi log lịch sử ra tệp CSV &amp; Kích hoạt cảnh báo Telegram/Discord nếu nguy cơ cao</div>
            </div>

            <div className="border border-[#E2E8F0] rounded-xl p-4 bg-[#FAF9F6] space-y-3">
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                <Code className="w-4 h-4 text-blue-600" />
                Cấu hình tăng tốc phần cứng (config.py)
              </h4>
              <p className="text-xs text-[#64748B]">
                Hệ thống tự động phát hiện và lựa chọn thiết bị xử lý tốt nhất (Compute Device Selector) để giảm thiểu độ trễ xử lý khung hình xuống mức tối đa:
              </p>
              <ul className="space-y-1 text-xs pl-2">
                <li>• <strong className="text-emerald-700">CUDA GPU:</strong> Ưu tiên hàng đầu nếu phát hiện card đồ họa NVIDIA.</li>
                <li>• <strong className="text-blue-700">DirectML:</strong> Hỗ trợ tăng tốc GPU thông qua DirectX đối với dòng card AMD, Intel.</li>
                <li>• <strong className="text-amber-700">CPU Multi-core:</strong> Tự động bóc tách số lượng Core của máy (OMP/MKL thread pool size) để tối ưu luồng CPU nếu không có GPU rời.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {activeChapter === "criminal_ai" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#991B1B] tracking-wider uppercase mb-1">Chapter 3</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              YOLOv8 &amp; DeepFace Biometric Matching
            </h3>
          </div>

          <div className="space-y-4 text-justify">
            <p>
              Trái tim trí tuệ nhân tạo của hệ thống là sự kết hợp giữa mô hình Object Detection hiện đại và thuật toán so khớp đặc trưng khuôn mặt (Facial Embeddings) độ chính xác cao:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-xs text-[#0F172A] flex items-center gap-1.5 mb-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Mô-đun 1: Nhận dạng vũ khí bằng YOLOv8
                </div>
                <p className="text-xs text-[#475569] mb-2">
                  Mô hình <strong>YOLOv8 nano</strong> được tinh chỉnh và cấu hình với độ tin cậy tối thiểu <strong className="text-slate-900">conf=0.4</strong> để theo dõi các đối tượng đe dọa di động:
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                  {["knife (Dao găm)", "gun (Súng quân dụng)", "bat (Gậy bóng chày)", "weapon (Vũ khí tự chế)"].map((cls, i) => (
                    <span key={i} className="px-2 py-0.5 bg-red-100/60 border border-red-200 rounded text-red-800 font-mono">
                      {cls}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-xs text-[#0F172A] flex items-center gap-1.5 mb-2">
                  <Database className="w-4 h-4 text-blue-500" />
                  Mô-đun 2: Nhận diện khuôn mặt DeepFace &amp; Biometrics
                </div>
                <p className="text-xs text-[#475569]">
                  Thay vì dùng thuật toán so hình ảnh pixel đơn giản dễ sai sót, hệ thống trích xuất đặc trưng sinh học thông qua mô hình mạng nơ-ron sâu <strong>Facenet512</strong>:
                </p>
                <ul className="space-y-1.5 text-xs text-[#64748B] mt-2 list-disc pl-4">
                  <li>Trích xuất véc-tơ đặc trưng khuôn mặt (Embedding) gồm <strong>512 chiều</strong> duy nhất cho mỗi bức ảnh.</li>
                  <li>So khớp véc-tơ mới chụp với kho véc-tơ của cơ sở dữ liệu nghi phạm thông qua phép tính <strong>Cosine Distance</strong>.</li>
                  <li>Sử dụng ngưỡng tin cậy chặt chẽ <strong>Threshold = 0.55</strong>. Nếu khoảng cách Cosine nhỏ hơn ngưỡng này, danh tính được xác nhận ngay lập tức, ngược lại sẽ hiển thị là "Unknown" (Chưa rõ danh tính).</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeChapter === "criminal_alert" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#991B1B] tracking-wider uppercase mb-1">Chapter 4</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              Phân Tích Cấp Độ Threat &amp; Cảnh Báo Tức Thời
            </h3>
          </div>

          <div className="space-y-4 text-justify">
            <p>
              Hệ thống không phát tín hiệu cảnh báo tràn lan gây nhiễu, mà phân tích tương quan bối cảnh (Contextual Threat Assessment) để phân cấp cảnh báo tự động:
            </p>

            {/* Threat level table */}
            <div className="overflow-x-auto border border-[#E2E8F0] rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E2E8F0]">
                    <th className="p-3 font-bold text-[#0F172A]">Điều kiện Phân tích</th>
                    <th className="p-3 font-bold text-center">Threat Level</th>
                    <th className="p-3 font-bold text-[#0F172A]">Hành động của Hệ thống</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  <tr className="hover:bg-red-50/20">
                    <td className="p-3">
                      <div className="font-bold text-[#0F172A]">Nhận diện khuôn mặt là Tội phạm / Nghi phạm</div>
                      <div className="text-[10px] text-[#64748B] mt-0.5">VÀ camera phát hiện đối tượng cầm vũ khí (dao, súng)</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                        HIGH
                      </span>
                    </td>
                    <td className="p-3 text-[#475569] leading-tight">
                      Ghi log đỏ, rú còi báo động tại trạm, lập tức gửi cảnh báo kèm hình ảnh hiện trường, tọa độ và địa chỉ chi tiết đến Telegram/Discord.
                    </td>
                  </tr>
                  <tr className="hover:bg-amber-50/20">
                    <td className="p-3">
                      <div className="font-bold text-[#0F172A]">Chỉ nhận diện ra Tội phạm (không thấy vũ khí)</div>
                      <div className="text-[10px] text-[#64748B] mt-0.5">HOẶC chỉ phát hiện vũ khí đơn thuần (nhân sự bình thường cầm)</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                        MEDIUM
                      </span>
                    </td>
                    <td className="p-3 text-[#475569] leading-tight">
                      Ghi nhận nhật ký giám sát, đánh dấu nghi vấn trên màn hình giám sát, thông báo đẩy tới điện thoại lực lượng phản ứng nhanh.
                    </td>
                  </tr>
                  <tr className="hover:bg-emerald-50/10">
                    <td className="p-3">
                      <div className="font-bold text-[#0F172A]">Không nhận dạng tội phạm</div>
                      <div className="text-[10px] text-[#64748B] mt-0.5">VÀ không phát hiện bất kỳ vũ khí nào trước ống kính</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                        LOW
                      </span>
                    </td>
                    <td className="p-3 text-[#475569] leading-tight">
                      Theo dõi trạng thái bình thường. Ghi nhận dữ liệu ra tập tin nhật ký CSV hàng ngày một cách tự động.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Geolocation IP Lookup */}
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 space-y-2">
              <h4 className="text-xs font-bold text-sky-900 flex items-center gap-1.5 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-sky-600 animate-bounce" />
                Truy vết Vị trí qua IP API (get_location)
              </h4>
              <p className="text-xs text-[#475569]">
                Để bảo đảm lực lượng an ninh nhận biết trạm giám sát nào đang gặp nguy hiểm, hệ thống gọi dịch vụ <strong className="text-slate-900">ipapi.co</strong> để tự động định vị tọa độ địa lý của terminal:
              </p>
              <div className="p-3 bg-white/60 rounded-lg border border-sky-200/50 font-mono text-[11px] text-sky-800 flex flex-col gap-1">
                <div>- Vĩ độ / Kinh độ (Latitude/Longitude): Trích xuất thực tế tự động</div>
                <div>- Địa chỉ trạm (Address): City, Region, Country (Ví dụ: "Hanoi, Hanoi City, Vietnam")</div>
                <div>- Gửi kèm trong báo cáo sự cố gửi tới Telegram/Discord để lực lượng lập tức tiếp cận mục tiêu.</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeChapter === "criminal_gui" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#991B1B] tracking-wider uppercase mb-1">Chapter 5</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              Giao Diện Quản Trị &amp; Terminal (gui.py)
            </h3>
          </div>

          <div className="space-y-4 text-justify">
            <p>
              Hệ thống được gói gọn trong một ứng dụng máy tính trực quan sử dụng thư viện đồ họa của Python (Tkinter/CustomTkinter), giúp việc vận hành của nhân viên an ninh tại cơ sở trở nên cực kỳ thuận tiện:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h5 className="font-bold text-xs text-[#0F172A] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Màn Hình Live Monitor
                </h5>
                <p className="text-[11px] text-[#64748B]">
                  Hiển thị khung hình camera trực tiếp từ OpenCV, vẽ trực quan bounding box quanh khuôn mặt và vũ khí, ghi đè nhãn ID và Threat score thời gian thực.
                </p>
                {/* Evidence screenshot */}
                <div className="mt-2 rounded-lg overflow-hidden border border-slate-300 bg-black relative group cursor-zoom-in">
                  <img
                    src="/images/criminal-live-monitor.jpg"
                    alt="Live monitor - AI phát hiện đối tượng cầm dao với bounding box vàng"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1">
                    <span className="text-[9px] font-mono text-yellow-400 font-bold">Unknown (unknown)</span>
                    <span className="text-[9px] text-slate-300 ml-2">· AI phát hiện vũ khí — Bounding box đang hoạt động</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <h5 className="font-bold text-xs text-[#0F172A] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Đăng ký Khuôn mặt Mới
                </h5>
                <p className="text-[11px] text-[#64748B]">
                  Giao diện cho phép nhập Tên, vai trò (Nghi phạm/Nhân viên) và chụp ảnh nhanh bằng cách nhấn phím <strong className="text-slate-900">SPACE</strong>. Hệ thống tự động cắt và lưu vào thư mục database để huấn luyện tức thì.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h5 className="font-bold text-xs text-[#0F172A] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  Quản lý Cấu hình Kênh
                </h5>
                <p className="text-[11px] text-[#64748B]">
                  Bảng cài đặt cấu hình trực quan để bật/tắt chuông báo động, nhập Telegram Bot Token, Chat ID, Discord Webhook URL dễ dàng, không cần chỉnh sửa mã nguồn.
                </p>
                <div className="mt-2 rounded-lg overflow-hidden border border-slate-200 bg-white relative group cursor-zoom-in shadow-xs">
                  <img
                    src="/images/config.png"
                    alt="Giao diện Alert Configuration - Cấu hình Telegram & Discord"
                    className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-2 py-1">
                    <span className="text-[9px] text-slate-200">Giao diện Configure Alerts — nhập Bot Token, Chat ID, Webhook URL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-dashed border-[#991B1B]/30 bg-red-50/30">
              <div className="text-xs font-bold text-[#991B1B] uppercase mb-3 flex items-center gap-1">
                <Bell className="w-4 h-4 text-[#991B1B] animate-bounce" />
                Mẫu Tin nhắn Cảnh báo Thực Tế Gửi Tới Telegram
              </div>
              {/* Telegram UI mockup */}
              <div className="flex gap-3 items-start">
                {/* Phone mockup */}
                <div className="w-52 shrink-0 bg-[#1a1a2e] rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
                  {/* Telegram header */}
                  <div className="bg-[#2b5278] px-3 py-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-[9px] font-bold">C</div>
                    <div>
                      <div className="text-white text-[10px] font-bold">Crime detected</div>
                      <div className="text-blue-300 text-[8px]">bot</div>
                    </div>
                  </div>
                  {/* Messages */}
                  <div className="p-2 space-y-1.5 bg-[#0d1117]">
                    {/* Message 1 */}
                    <div className="bg-[#1e3a5f] rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[90%]">
                      <div className="text-[10px] text-slate-200">🔫 Registered user with weapon</div>
                      <div className="text-[8px] text-slate-400 text-right mt-0.5">02:34</div>
                    </div>
                    {/* Message 2 - Alert details */}
                    <div className="bg-[#1e3a5f] rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[90%]">
                      <div className="text-[10px] font-bold text-red-400">🚨 ARMED UNKNOWN INDIVIDUAL DETECTED!</div>
                      <div className="text-[9px] text-slate-300 mt-0.5">🔫 Gun</div>
                      <div className="text-[9px] text-slate-300">📍 None, None, None</div>
                      <div className="text-[9px] text-slate-300">🕐 2025-10-22 02:34:42</div>
                      <div className="text-[8px] text-slate-400 text-right mt-0.5">02:34</div>
                    </div>
                    {/* Image message */}
                    <div className="max-w-[90%] rounded-xl overflow-hidden border border-slate-700">
                      <img
                        src="/images/message.png"
                        alt="Ảnh hiện trường đính kèm cảnh báo Telegram"
                        className="w-full object-cover"
                      />
                      <div className="bg-[#1e3a5f] px-2.5 py-1.5">
                        <div className="text-[9px] text-slate-300">🔫 Armed unknown individual</div>
                        <div className="text-[8px] text-slate-400 text-right mt-0.5">02:34</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Explanation */}
                <div className="flex-1 space-y-2 text-xs text-[#475569]">
                  <p className="font-semibold text-[#0F172A] text-[11px]">Hệ thống tự động gửi 3 tin nhắn liên tiếp:</p>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 text-[9px] font-bold flex items-center justify-center shrink-0">1</span>
                      <p className="text-[11px]"><strong className="text-slate-800">Thông báo loại vũ khí</strong> — "Registered user with weapon"</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-4 h-4 rounded-full bg-red-100 text-red-700 text-[9px] font-bold flex items-center justify-center shrink-0">2</span>
                      <p className="text-[11px]"><strong className="text-slate-800">Chi tiết cảnh báo</strong> — Loại vũ khí, tọa độ vị trí, timestamp chính xác</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 text-[9px] font-bold flex items-center justify-center shrink-0">3</span>
                      <p className="text-[11px]"><strong className="text-slate-800">Ảnh hiện trường</strong> — Frame camera thực tế kèm caption nhận dạng đối tượng</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeChapter === "criminal_conclusion" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#991B1B] tracking-wider uppercase mb-1">Chapter 6</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              Bài Học Rút Ra &amp; Kết Luận Thực Nghiệm
            </h3>
          </div>

          <div className="space-y-4 text-justify">
            <p>
              Quá trình trực tiếp nghiên cứu, lập bản thiết kế sơ đồ luồng dữ liệu (DFD) và phối hợp hỗ trợ kỹ thuật để lập trình các mô-đun Python xử lý thực tế đã mang lại cho tôi những bài học sâu sắc về phát triển sản phẩm công nghệ:
            </p>

            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <h6 className="font-bold text-xs text-[#0F172A]">Tư duy thiết kế thực tế vượt qua lý thuyết giấy</h6>
                  <p className="text-xs text-[#64748B] leading-relaxed mt-0.5">
                    Lý thuyết về nhận diện AI rất đẹp, nhưng khi áp dụng thực tế sẽ gặp vô số rào cản: hiện tượng camera bị mờ, góc khuất ánh sáng, sai sót nhận dạng nhầm (false positive). Việc điều chỉnh threshold chính xác (0.55) và conf (0.4) giúp cân bằng hoàn hảo giữa độ nhạy và tính ổn định.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <h6 className="font-bold text-xs text-[#0F172A]">Sức mạnh của giao tiếp và phối hợp liên ngành (Hybrid-Profile)</h6>
                  <p className="text-xs text-[#64748B] leading-relaxed mt-0.5">
                    Là cầu nối thiết kế luồng dữ liệu, việc hiểu sâu kiến trúc AI (YOLOv8, DeepFace) giúp tôi giao tiếp và hỗ trợ kỹ thuật một cách rõ ràng. Tôi có thể trực tiếp viết các mô-đun tiền xử lý dữ liệu và thiết lập các API kết nối bên ngoài như Telegram Bot API, giúp tăng 50% tốc độ tích hợp hệ thống.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <h6 className="font-bold text-xs text-[#0F172A]">Tự hào về sản phẩm thủ công thực chiến</h6>
                  <p className="text-xs text-[#64748B] leading-relaxed mt-0.5">
                    Toàn bộ mã nguồn dự án được xây dựng chỉnh chu, gọn gàng và lưu trữ công khai trên GitHub. Việc tự tay giải quyết các bài toán từ cài đặt OpenCV, kết nối webhook đến tối ưu thiết bị tính toán là minh chứng rõ nét cho năng lực học hỏi nhanh nhạy của tôi.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 mt-4">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <p className="text-xs text-emerald-800 leading-normal">
                <strong>Dự án đã được triển khai hoàn chỉnh!</strong> Quý nhà tuyển dụng có thể trực tiếp kiểm tra cấu trúc mã nguồn Python tinh gọn và cách thức tổ chức các lớp mô hình của tôi trên liên kết GitHub công khai.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
