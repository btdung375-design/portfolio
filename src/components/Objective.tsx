import { Target, TrendingUp, Calendar, Compass } from "lucide-react";
import { motion } from "motion/react";

export default function Objective() {
  return (
    <section id="objective" className="py-16 bg-[#F8FAF6] border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-widest text-[#2563EB] uppercase">
            02 · Định hướng nghề nghiệp
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mt-2">
            Mục Tiêu Sự Nghiệp
          </h2>
          <p className="text-sm text-[#64748B] mt-3">
            Lộ trình phát triển toàn diện từ một thực tập sinh phân tích chủ động, nhạy bén đến một chuyên viên độc lập dẫn dắt dự án.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Short-term Objective Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:border-[#2563EB]/20 relative overflow-hidden group">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#2563EB]/2 rounded-bl-full pointer-events-none group-hover:bg-[#2563EB]/5 transition-colors duration-300"></div>

            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/8 flex items-center justify-center text-[#2563EB] shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#2563EB] tracking-widest uppercase flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Ngắn hạn (1-12 tháng)
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A] mt-0.5">Thực tập sinh Business Analyst / Product Owner</h3>
                </div>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed text-justify">
                Học hỏi quy trình phát triển phần mềm thực tế (Agile/Scrum) và quan sát cách các chuyên gia phỏng vấn lấy
                yêu cầu từ khách hàng. Đồng thời, chủ động hỗ trợ đội ngũ dự án trong việc xây dựng tài liệu (User Story,
                BPMN), kiểm thử sản phẩm (UAT) bằng cách tận dụng hiểu biết sẵn có về cơ sở dữ liệu và truy vấn SQL.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="text-[11px] text-[#64748B] font-bold uppercase tracking-wider">
                Trọng tâm đóng góp
              </span>
              <span className="text-xs font-semibold text-[#2563EB] bg-[#2563EB]/5 px-2.5 py-1 rounded-md">
                Hỗ trợ dự án &amp; Tự động hóa quy trình
              </span>
            </div>
          </div>

          {/* Long-term Objective Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:border-[#10B981]/20 relative overflow-hidden group">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#10B981]/2 rounded-bl-full pointer-events-none group-hover:bg-[#10B981]/5 transition-colors duration-300"></div>

            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/8 flex items-center justify-center text-[#10B981] shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#10B981] tracking-widest uppercase flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    Dài hạn (2-3 năm tới)
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A] mt-0.5">Senior Product Owner / Business Analyst</h3>
                </div>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed text-justify">
                Tích lũy kinh nghiệm thực chiến và nâng cao năng lực chuyên môn để trở thành một Product Owner hoặc Business Analyst chuyên nghiệp
                trong tương lai. Có khả năng tự dẫn dắt và chịu trách nhiệm độc lập cho các dự án phần mềm
                phức tạp, tạo ra các giải pháp công nghệ tối ưu, mang lại giá trị thiết thực và có hiệu suất cao cho doanh nghiệp.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="text-[11px] text-[#64748B] font-bold uppercase tracking-wider">
                Định hướng phát triển
              </span>
              <span className="text-xs font-semibold text-[#10B981] bg-[#10B981]/5 px-2.5 py-1 rounded-md">
                Quản lý &amp; Làm chủ dự án
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
