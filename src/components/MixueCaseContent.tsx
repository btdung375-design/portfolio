import { motion } from "motion/react";
import { Clock, MapPin, Zap, Compass, Smile, Users, Code, AlertTriangle, ArrowRight } from "lucide-react";

interface MixueCaseContentProps {
  activeChapter: string;
}

export function MixueCaseContent({ activeChapter }: MixueCaseContentProps) {
  return (
    <div className="space-y-6 text-sm text-[#475569] leading-relaxed">
      {activeChapter === "mixue_context" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#BB0013] tracking-wider uppercase mb-1">Chapter 1</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              Bối Cảnh &amp; Khảo Sát Pain-Points
            </h3>
          </div>

          <div className="space-y-4 text-justify">
            <p>
              Chuỗi cửa hàng kem và trà sữa <span className="text-[#BB0013] font-bold">Mixue</span> cực kỳ nổi tiếng với lưu lượng khách hàng khổng lồ mỗi ngày. Tuy nhiên, sự quá tải nghiêm trọng vào các khung giờ cao điểm đang tạo ra một "nỗi đau" (pain-point) lớn cho cả khách hàng lẫn nhân viên vận hành:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
              <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex flex-col gap-2">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">1</span>
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Hàng chờ quá tải</h4>
                <p className="text-[11px] text-[#64748B] leading-normal">Khách hàng tụ tập đông đúc tại quầy, chờ thanh toán và lấy nước từ 15-30 phút mà không hề được cảnh báo trước.</p>
              </div>
              <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 flex flex-col gap-2">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">2</span>
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Phân bổ lượng khách kém</h4>
                <p className="text-[11px] text-[#64748B] leading-normal">Trong khi cơ sở trung tâm bị nghẽn, các cửa hàng lân cận chỉ cách 1-2km lại trong tình trạng trống trải, vắng vẻ.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F4FAFD] border border-sky-100 space-y-3">
              <h4 className="text-xs font-bold text-sky-800 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                Mục Tiêu Cốt Lõi &amp; Vibe Code Tự Lực
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Dự án <strong>Mixue GO</strong> được xây dựng hoàn toàn dựa trên tinh thần <strong>tự học hỏi và đam mê code thuần (vibe code) từ đầu đến cuối</strong>. Thay vì chỉ phân tích lý thuyết, tôi đã trực tiếp lập trình ứng dụng để hiện thực hóa giải pháp:
              </p>
              <ul className="space-y-1.5 text-[11px] text-[#475569] list-disc list-inside pl-1">
                <li><strong className="text-[#0F172A]">Học tập làm trung tâm:</strong> Thực hành làm chủ tư duy thiết kế sản phẩm (Product Design) và lập trình giao diện bản đồ, đồ thị trực quan.</li>
                <li><strong className="text-[#0F172A]">Giải quyết nỗi đau thực tế:</strong> Tạo dựng công cụ giúp người dùng xem trực quan trạng thái đông đúc để chủ động lựa chọn thời gian ghé cửa hàng.</li>
                <li><strong className="text-[#0F172A]">Tự tay viết mã (A-Z):</strong> Code thuần mọi tương tác, từ giao diện marker bản đồ đến trình bày biểu đồ lượng khách LIVE.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {activeChapter === "mixue_traffic" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#BB0013] tracking-wider uppercase mb-1">Chapter 2</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              Trạng Thái Mật Độ &amp; Biểu Đồ Lượng Khách LIVE
            </h3>
          </div>

          <div className="space-y-4">
            <p>
              Để giải quyết bài toán hàng chờ, hệ thống phân định rõ ràng 3 cấp độ mật độ (Traffic Status) trực quan, đi kèm thời gian chờ dự kiến giúp khách hàng điều hướng kế hoạch:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-1">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 shrink-0" />
                <div>
                  <h5 className="font-bold text-xs text-emerald-800">Vắng khách (Xanh Mint)</h5>
                  <p className="text-[10px] text-[#64748B]">Phục vụ ngay lập tức (&lt; 3 phút)</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shrink-0 animate-pulse" />
                <div>
                  <h5 className="font-bold text-xs text-amber-800">Vừa phải (Vàng Đào)</h5>
                  <p className="text-[10px] text-[#64748B]">Chờ khoảng 5–10 phút</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-[#BB0013] shrink-0" />
                <div>
                  <h5 className="font-bold text-xs text-red-800">Đông đúc (Đỏ Thẫm)</h5>
                  <p className="text-[10px] text-[#64748B]">Cao điểm, chờ lâu (&gt; 15 phút)</p>
                </div>
              </div>
            </div>

            <div className="border border-[#E2E8F0] rounded-2xl p-5 bg-[#FAF9F6] space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#BB0013]" />
                  Mô phỏng Giao diện Mật độ thực tế tại cửa hàng
                </span>
                <span className="text-[9px] font-bold text-white bg-[#BB0013] px-2 py-0.5 rounded-md uppercase animate-pulse">
                  LIVE
                </span>
              </div>

              <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-3xs flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 font-bold font-serif">
                    !
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-amber-600">Vừa phải (Vàng Đào)</h5>
                    <p className="text-xs text-[#64748B]">Thời gian chờ khoảng 5–10 phút.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] text-[#64748B] font-semibold">
                  <span>Lượng khách theo giờ</span>
                  <span className="text-red-600 font-bold">Hiện tại</span>
                </div>

                <div className="h-28 bg-white border border-slate-100 rounded-xl p-3 flex items-end gap-1 md:gap-1.5 justify-between">
                  {[
                    { h: "20%", c: "bg-[#7BF1A8]", time: "8:00" },
                    { h: "25%", c: "bg-[#7BF1A8]" },
                    { h: "35%", c: "bg-[#7BF1A8]" },
                    { h: "50%", c: "bg-[#FFD3B6]" },
                    { h: "70%", c: "bg-[#FFD3B6]" },
                    { h: "80%", c: "bg-[#FFAAA6]" },
                    { h: "85%", c: "bg-[#FFAAA6]" },
                    { h: "75%", c: "bg-[#FFAAA6]" },
                    { h: "55%", c: "bg-[#FFD3B6]" },
                    { h: "50%", c: "bg-[#FFD3B6]" },
                    { h: "65%", c: "bg-[#FFD3B6]" },
                    { h: "75%", c: "bg-[#FFAAA6]" },
                    { h: "85%", c: "bg-[#FFAAA6]" },
                    { h: "60%", c: "bg-[#BB0013]", current: true, time: "21:00" },
                    { h: "30%", c: "bg-[#7BF1A8]", time: "22:00" },
                  ].map((bar, k) => (
                    <div key={k} className="flex-1 flex flex-col items-center gap-1 group relative h-full justify-end">
                      <div
                        style={{ height: bar.h }}
                        className={`w-full rounded-xs transition-all duration-500 hover:brightness-95 ${bar.c} ${bar.current ? "ring-2 ring-red-600 ring-offset-1" : ""}`}
                      />
                      {bar.time && (
                        <span className={`text-[8px] font-semibold ${bar.current ? "text-red-600 font-bold" : "text-[#64748B]"}`}>
                          {bar.time}
                        </span>
                      )}
                      {bar.current && (
                        <div className="absolute -top-6 bg-[#0F172A] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm whitespace-nowrap shadow-sm">
                          Hiện tại
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeChapter === "mixue_map" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#BB0013] tracking-wider uppercase mb-1">Chapter 3</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              Định Vị Bản Đồ &amp; Tính Năng Dẫn Đường
            </h3>
          </div>

          <div className="space-y-4">
            <p>
              Tính năng bản đồ được tối ưu hóa cao độ để người dùng dễ dàng đưa ra quyết định di chuyển thông minh thay vì chen chúc ở một cửa hàng quá tải:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-[#E2E8F0] rounded-xl bg-white space-y-2">
                <MapPin className="w-5 h-5 text-[#BB0013]" />
                <h4 className="text-xs font-bold text-[#0F172A]">Tìm cửa hàng gần nhất</h4>
                <p className="text-[11px] text-[#64748B] leading-normal">
                  Hệ thống tự động định vị vị trí hiện tại của người dùng, quét bán kính xung quanh và gợi ý các cơ sở Mixue lân cận nhất.
                </p>
              </div>
              <div className="p-4 border border-[#E2E8F0] rounded-xl bg-white space-y-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <h4 className="text-xs font-bold text-[#0F172A]">Hiển thị mật độ tức thì</h4>
                <p className="text-[11px] text-[#64748B] leading-normal">
                  Từng ghim (marker) trên bản đồ số được mã hóa màu sắc trực tiếp theo tình trạng traffic (Xanh, Vàng, Đỏ) giúp người dùng nhận biết nhanh.
                </p>
              </div>
              <div className="p-4 border border-[#E2E8F0] rounded-xl bg-white space-y-2">
                <Compass className="w-5 h-5 text-sky-600" />
                <h4 className="text-xs font-bold text-[#0F172A]">Chỉ đường dẫn lối</h4>
                <p className="text-[11px] text-[#64748B] leading-normal">
                  Khi khách hàng chọn một cửa hàng, hệ thống hỗ trợ vẽ luồng di chuyển, ước lượng khoảng cách và chỉ đường chi tiết.
                </p>
              </div>
            </div>

            <div className="border border-[#E2E8F0] rounded-xl p-5 bg-slate-50 text-center space-y-3">
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Mô phỏng Giao diện Bản đồ chỉ đường</h4>
              <div className="relative h-44 bg-sky-50 border border-sky-100 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute w-3/4 h-2 bg-slate-200 rounded-full rotate-12" />
                <div className="absolute w-1/2 h-2 bg-slate-200 rounded-full -rotate-45" />

                <div className="relative z-10 flex flex-col items-center gap-1 bg-white p-2.5 rounded-lg shadow-sm border border-slate-100">
                  <MapPin className="w-6 h-6 text-[#BB0013] animate-bounce" />
                  <span className="text-[9px] font-bold text-[#0F172A]">Mixue Hàng Bông</span>
                  <span className="text-[8px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded-full font-bold">Vừa phải</span>
                </div>

                <div className="absolute bottom-3 left-3 bg-white border border-slate-100 p-2 rounded-md text-[9px] font-semibold text-[#475569]">
                  Khoảng cách: <strong className="text-red-600 font-bold">1.2 km</strong> (Chỉ đường qua Bản đồ)
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeChapter === "mixue_loyalty" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#BB0013] tracking-wider uppercase mb-1">Chapter 4</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              Hệ Thống Tích Điểm &amp; Đổi Quà Trực Tuyến
            </h3>
          </div>

          <div className="space-y-4">
            <p>
              Bên cạnh quản lý mật độ, <strong>Mixue GO</strong> tích hợp hệ thống thành viên thông minh nhằm gia tăng mức độ hài lòng và giữ chân khách hàng (Loyalty Program):
            </p>

            <div className="border border-[#E2E8F0] rounded-2xl p-5 bg-white space-y-4 shadow-3xs">
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-3 bg-red-600 rounded-xs"></span>
                Luồng xử lý tích lũy điểm &amp; Đổi thưởng
              </h4>

              <div className="space-y-3">
                {[
                  { id: "Bước 1", act: "Đăng ký Thành viên", desc: "Người dùng đăng ký nhanh bằng số điện thoại, hệ thống cấp một mã định danh thành viên duy nhất (Member ID)." },
                  { id: "Bước 2", act: "Mua hàng & Quét hóa đơn", desc: "Mỗi khi mua trà sữa hay kem, khách hàng xuất trình mã QR, hệ thống tự động cộng điểm tích lũy dựa trên giá trị hóa đơn." },
                  { id: "Bước 3", act: "Quy đổi Điểm thưởng", desc: "Điểm thưởng (Points) được sử dụng trực tiếp trong Kho quà trực tuyến để quy đổi thành các e-voucher cực kỳ tiện lợi." },
                ].map((step) => (
                  <div key={step.id} className="flex gap-3 text-xs leading-relaxed">
                    <span className="font-mono font-bold text-red-600 shrink-0 bg-red-50 px-2 py-0.5 rounded-md h-fit whitespace-nowrap">{step.id}</span>
                    <p className="text-[#475569]"><strong className="text-[#0F172A]">{step.act}:</strong> {step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">Giao diện Kho Voucher tiêu biểu</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-red-200 rounded-2xl p-4 bg-red-50/30 flex justify-between items-center relative overflow-hidden">
                  <div className="space-y-1">
                    <span className="text-[9px] bg-red-600 text-white px-2 py-0.5 rounded-full font-bold">KEM FREE</span>
                    <h5 className="font-bold text-xs text-[#0F172A]">Voucher Kem Ốc Quế Miễn Phí</h5>
                    <p className="text-[10px] text-[#64748B]">Trị giá: 100 Điểm thành viên</p>
                  </div>
                  <button className="px-3 py-1.5 bg-[#BB0013] text-white text-[10px] font-bold rounded-lg whitespace-nowrap cursor-pointer">
                    Đổi ngay
                  </button>
                </div>

                <div className="border-2 border-dashed border-red-200 rounded-2xl p-4 bg-red-50/30 flex justify-between items-center relative overflow-hidden">
                  <div className="space-y-1">
                    <span className="text-[9px] bg-red-600 text-white px-2 py-0.5 rounded-full font-bold">GIẢM 20%</span>
                    <h5 className="font-bold text-xs text-[#0F172A]">Voucher Giảm 20% Tổng Hóa Đơn</h5>
                    <p className="text-[10px] text-[#64748B]">Trị giá: 250 Điểm thành viên</p>
                  </div>
                  <button className="px-3 py-1.5 bg-[#BB0013] text-white text-[10px] font-bold rounded-lg whitespace-nowrap cursor-pointer">
                    Đổi ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeChapter === "mixue_community" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#BB0013] tracking-wider uppercase mb-1">Chapter 5</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              Cộng Đồng &amp; Thử Thách
            </h3>
          </div>

          <div className="space-y-4 text-justify">
            <p>
              Một ý tưởng đầy triển vọng nhằm nâng cao tính tương tác xã hội cho ứng dụng là việc thiết lập phân hệ <strong>Cộng đồng &amp; Thử thách (Community &amp; Challenges)</strong>:
            </p>

            <div className="p-5 border border-dashed border-[#E2E8F0] rounded-2xl bg-slate-50 space-y-4">
              <div className="flex justify-center">
                <span className="text-xs font-bold bg-amber-50 border border-amber-200 text-amber-700 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Đang trong quá trình nghiên cứu ý tưởng (Bỏ ngỏ)
                </span>
              </div>

              <p className="text-xs text-[#64748B] text-center max-w-lg mx-auto">
                Để tập trung hoàn thiện trải nghiệm cốt lõi là bản đồ mật độ traffic real-time và hệ thống tích điểm, phân hệ cộng đồng hiện tại đang được <strong>bỏ ngỏ ý tưởng</strong>. Tuy nhiên, định hướng phát triển trong tương lai đã được vạch sẵn:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-150 rounded-xl space-y-1.5">
                  <h5 className="font-bold text-[#0F172A] flex items-center gap-1.5">
                    <Smile className="w-4 h-4 text-amber-500" /> Thử thách Check-in nhận quà
                  </h5>
                  <p className="text-[11px] text-[#64748B] leading-normal">
                    Khuyến khích người dùng check-in tại các địa điểm đang có traffic vắng khách để nhận thêm điểm thưởng, hỗ trợ điều hòa lưu lượng cửa hàng.
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-150 rounded-xl space-y-1.5">
                  <h5 className="font-bold text-[#0F172A] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-sky-500" /> Bảng xếp hạng Fan cứng
                  </h5>
                  <p className="text-[11px] text-[#64748B] leading-normal">
                    Nơi gắn kết những người có chung đam mê với kem và trà sữa Mixue, tăng tương tác qua lại và kết giao bạn bè thông qua ứng dụng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeChapter === "mixue_code" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div>
            <div className="text-xs font-bold text-[#BB0013] tracking-wider uppercase mb-1">Chapter 6</div>
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] tracking-tight">
              Nhật Ký Vibe Code &amp; Bài Học Kinh Nghiệm
            </h3>
          </div>

          <div className="space-y-5 text-justify">
            <p>
              Dự án <strong>Mixue GO</strong> là minh chứng tuyệt vời cho phương pháp học đi đôi với hành, tự lực lập trình hoàn toàn (vibe code) để biến những kiến thức lý thuyết trừu tượng thành một sản phẩm thực tế có ích.
            </p>

            <div className="border border-[#E2E8F0] rounded-2xl p-5 bg-white space-y-4">
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                <Code className="w-4 h-4 text-emerald-600" />
                Nhật ký học tập &amp; phát triển thuần (Vibe Code)
              </h4>

              <div className="space-y-3 text-xs">
                <p>
                  <strong>• Code thuần theo tư duy trực giác:</strong> Không bị gò bó bởi các cấu trúc tài liệu hành chính phức tạp, tôi đã thiết kế luồng xử lý và giao diện bằng cảm tính nghệ thuật, liên tục hiệu chỉnh dòng code dựa trên trải nghiệm thực tế của người dùng cuối.
                </p>
                <p>
                  <strong>• Làm chủ trọn vẹn sản phẩm:</strong> Tự tay thiết kế cấu trúc dữ liệu mô phỏng mật độ, xây dựng sơ đồ định vị bản đồ và viết các thuật toán tính toán thời gian chờ dự kiến, từ đó nắm bắt sâu sắc bản chất kỹ thuật của phần mềm.
                </p>
              </div>
            </div>

            <div className="border-t border-[#F1F5F9] pt-6 space-y-4">
              <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest">Bài học rút ra sâu sắc</h4>
              <div className="p-5 rounded-2xl bg-red-50/20 border border-red-100/50 space-y-3 text-xs text-[#475569] leading-relaxed">
                <p>
                  <strong>1. Đam mê khơi nguồn sản phẩm</strong> — Học tập đạt hiệu quả cao nhất khi chúng ta thực sự bắt tay vào chế tác một sản phẩm hoàn chỉnh bằng tinh thần tự lực (vibe code). Sự tò mò và cảm giác tự tay làm chủ dòng code thúc đẩy tiến độ vượt trội.
                </p>
                <p>
                  <strong>2. Công nghệ phục vụ con người</strong> — Trải nghiệm thành công nhất của Mixue GO là giải quyết triệt để một nỗi đau cụ thể của khách hàng (quá tải, xếp hàng dài). Khi sản phẩm hướng tới lợi ích của người dùng, mọi tính năng đều trở nên có hồn và ý nghĩa.
                </p>
                <p>
                  <strong>3. Thử thách của sự bỏ ngỏ</strong> — Biết cách dũng cảm bỏ ngỏ các tính năng phụ (Cộng đồng) để tập trung nguồn lực tối ưu hóa trải nghiệm cốt lõi (Bản đồ mật độ &amp; Đổi quà) là tư duy làm sản phẩm vô cùng thực tế và khôn ngoan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
