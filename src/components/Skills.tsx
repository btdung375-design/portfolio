import { useState } from "react";
import {
  FileText,
  Database,
  Code2,
  TrendingUp,
  Wrench,
  CheckCircle2,
  Award,
  BookOpen
} from "lucide-react";
import { motion } from "motion/react";

interface SkillItem {
  name: string;
  level: "Tốt" | "Đọc hiểu & Giao tiếp" | "Khá" | "Cơ bản / Đang học";
  description: string;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("ba");

  const categories = [
    { id: "ba", name: "Phân tích & Đặc tả", icon: FileText, color: "text-[#2563EB] bg-[#2563EB]/5 border-[#2563EB]/15" },
    { id: "system", name: "Thiết kế Hệ thống", icon: Database, color: "text-[#10B981] bg-[#10B981]/5 border-[#10B981]/15" },
    { id: "tech", name: "Kỹ thuật & Code", icon: Code2, color: "text-[#8B5CF6] bg-[#8B5CF6]/5 border-[#8B5CF6]/15" },
    { id: "biz", name: "Khung Kinh doanh", icon: TrendingUp, color: "text-[#F59E0B] bg-[#F59E0B]/5 border-[#F59E0B]/15" },
    { id: "tools", name: "Công cụ", icon: Wrench, color: "text-[#EC4899] bg-[#EC4899]/5 border-[#EC4899]/15" },
  ];

  const skillData: Record<string, SkillItem[]> = {
    ba: [
      {
        name: "Lấy & Phân tích yêu cầu",
        level: "Tốt",
        description: "Phỏng vấn các bên liên quan, thu thập thông tin và đặc tả chi tiết yêu cầu (Elicitation & Requirements Analysis)."
      },
      {
        name: "Viết tài liệu BRD / User Story",
        level: "Tốt",
        description: "Soạn thảo tài liệu yêu cầu BRD rõ ràng và viết User Story kèm tiêu chí nghiệm thu Acceptance Criteria (Given/When/Then) chuẩn Agile."
      },
      {
        name: "Vẽ sơ đồ quy trình BPMN",
        level: "Tốt",
        description: "Thiết kế sơ đồ quy trình BPMN trên Draw.io, xử lý logic rẽ nhánh phức tạp (Gateways) và các luồng ngoại lệ (Exceptions)."
      },
      {
        name: "Quản lý vòng đời Requirement",
        level: "Tốt",
        description: "Quản lý vòng lặp yêu cầu xuyên suốt từ Khảo sát (Elicit) → Phân tích (Analyze) → Tài liệu hóa (Document) → Kiểm thử nghiệm thu (Validate)."
      }
    ],
    system: [
      {
        name: "Thiết kế mô hình ERD",
        level: "Khá",
        description: "Mô hình hóa dữ liệu quan hệ, xác định thực thể, khóa chính (PK), khóa ngoại (FK) và chuẩn hóa cơ sở dữ liệu."
      },
      {
        name: "Quy trình phát triển SDLC",
        level: "Khá",
        description: "Thấu hiểu vòng đời phát triển phần mềm, nắm chắc mô hình Agile/Scrum để phối hợp hiệu quả trong nhóm phát triển."
      },
      {
        name: "Phân tích Use Case & Sơ đồ UML",
        level: "Khá",
        description: "Phác thảo sơ đồ Use Case, Sequence Diagram để mô tả luồng tương tác giữa người dùng và hệ thống."
      }
    ],
    tech: [
      {
        name: "Truy vấn SQL",
        level: "Khá",
        description: "Sử dụng các câu lệnh SELECT, JOIN, GROUP BY, WHERE để truy vấn cơ sở dữ liệu, phân tích số liệu và phục vụ kiểm thử (UAT)."
      },
      {
        name: "Lập trình Python",
        level: "Tốt",
        description: "Đọc hiểu mã nguồn Python (Flask, OpenCV) tốt để trực tiếp thảo luận thuật toán, logic xử lý dữ liệu và mô hình ML với đội ngũ Dev."
      },
      {
        name: "Lập trình Kotlin",
        level: "Đọc hiểu & Giao tiếp",
        description: "Đọc hiểu luồng xử lý và cấu trúc ứng dụng di động Kotlin để hỗ trợ viết đặc tả kỹ thuật chi tiết."
      }
    ],
    biz: [
      {
        name: "Mô hình SWOT & PESTEL",
        level: "Khá",
        description: "Dùng để đánh giá bối cảnh vĩ mô, vị thế doanh nghiệp trước khi quyết định xây dựng một giải pháp phần mềm, giúp tính năng phát triển đi đúng hướng chiến lược."
      },
      {
        name: "Khung RACE & Nghiên cứu thị trường",
        level: "Khá",
        description: "Phân tích hành trình khách hàng (Reach - Act - Convert - Engage) để hỗ trợ thiết kế các tính năng hướng người dùng và phân tích đối thủ cạnh tranh."
      }
    ],
    tools: [
      {
        name: "VS Code",
        level: "Tốt",
        description: "Môi trường lập trình chính để quản lý mã nguồn, gỡ lỗi và làm việc trực tiếp với các cấu trúc dữ liệu, tài liệu đặc tả dự án."
      },
      {
        name: "PyCharm",
        level: "Khá",
        description: "Sử dụng để chạy thử nghiệm các đoạn mã Python, phân tích luồng xử lý và kết hợp chặt chẽ với đội ngũ lập trình Machine Learning."
      },
      {
        name: "Draw.io / Diagrams.net",
        level: "Tốt",
        description: "Công cụ chính để phác thảo các sơ đồ quy trình (BPMN), sơ đồ luồng dữ liệu (DFD) và sơ đồ thực thể (ERD)."
      },
      {
        name: "Figma (Wireframing)",
        level: "Khá",
        description: "Phác thảo nhanh các giao diện mẫu (low-fidelity wireframe) để làm rõ yêu cầu về luồng trải nghiệm người dùng với khách hàng."
      },
      {
        name: "Power BI & Excel",
        level: "Khá",
        description: "Sử dụng báo cáo, phân tích số liệu thô và xây dựng các biểu đồ trực quan hóa dữ liệu phục vụ báo cáo quản trị."
      },
      {
        name: "Canva & Word",
        level: "Tốt",
        description: "Soạn thảo tài liệu BRD/SRS chuẩn chỉnh và thiết kế slide báo cáo, thuyết trình chuyên nghiệp."
      },
      {
        name: "Jira / Trello",
        level: "Cơ bản / Đang học",
        description: "Đang chủ động tìm hiểu quy trình quản lý task, tạo backlog và theo dõi sprint trên Jira để sẵn sàng làm việc thực tế."
      }
    ]
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Tốt":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/50";
      case "Khá":
        return "bg-blue-50 text-blue-700 border-blue-200/50";
      case "Đọc hiểu & Giao tiếp":
        return "bg-purple-50 text-purple-700 border-purple-200/50";
      default:
        return "bg-amber-50 text-amber-700 border-amber-200/50";
    }
  };

  return (
    <section id="skills" className="py-16 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-widest text-[#2563EB] uppercase">
            03 · Bản đồ năng lực
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight mt-2">
            Kỹ Năng Chuyên Môn
          </h2>
          <p className="text-sm text-[#64748B] mt-3">
            Sự kết hợp tối ưu giữa kỹ năng phân tích đặc tả, nền tảng kỹ thuật và khả năng giao tiếp kỹ thuật thông qua đọc hiểu mã nguồn.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-[#E2E8F0] pb-6" id="skills-tabs">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  isActive
                    ? `${cat.color} shadow-xs font-bold scale-102`
                    : "bg-[#FAF9F6] text-[#475569] border-[#E2E8F0] hover:bg-white hover:text-[#0F172A] hover:border-[#CBD5E1]"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="skills-grid">
          {skillData[activeTab].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2E8F0] shadow-2xs hover:shadow-sm hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-base font-bold text-[#0F172A]">
                    {skill.name}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase border shrink-0 ${getLevelColor(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed text-justify">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
