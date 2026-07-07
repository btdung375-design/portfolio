import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Hỏi về cơ hội thực tập Business Analyst",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", subject: "Hỏi về cơ hội thực tập Business Analyst", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-[#0F172A] text-[#FAF9F6] border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-6" id="contact-info">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-blue-400 uppercase">
                07 · Liên hệ &amp; Kết nối
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight mt-1">
                Kết Nối Với Dũng
              </h2>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed text-justify">
                Cảm ơn Quý nhà tuyển dụng và doanh nghiệp đã dành thời gian xem qua hồ sơ năng lực trực tuyến của em. Em rất mong muốn được trao đổi chi tiết hơn qua một buổi phỏng vấn trực tiếp.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {[
                { icon: Phone, text: "0869825383", label: "Điện thoại", href: "tel:0869825383" },
                { icon: Mail, text: "btdung375@gmail.com", label: "Địa chỉ Email", href: "mailto:btdung375@gmail.com" },
                { icon: MapPin, text: "24, Kim Nỗ, Đông Anh, Hà Nội", label: "Địa điểm sinh sống", href: "https://maps.google.com/?q=24,+Kim+Nỗ,+Đông+Anh,+Hà+Nội" },
              ].map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                        {info.label}
                      </p>
                      <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {info.text}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact form or instant CTA message */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-serif text-lg font-bold text-white mb-6">
                Gửi lời nhắn nhanh cho Dũng
              </h3>

              {submitSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Gửi lời nhắn thành công!</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Cảm ơn anh/chị. Em sẽ kiểm tra hòm thư và liên hệ lại sớm nhất có thể qua thông tin được cung cấp.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 underline cursor-pointer"
                  >
                    Gửi lời nhắn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Họ &amp; Tên anh/chị *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Địa chỉ Email liên hệ *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Tiêu đề công việc
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Lời mời phỏng vấn thực tập"
                      className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Nội dung tin nhắn *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Chào Dũng, anh/chị đã xem qua tài liệu case study mượn sách thư viện của em..."
                      className="w-full px-4 py-3 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold transition-all disabled:opacity-50 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? (
                      "Đang gửi thông tin..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Gửi lời nhắn liên hệ
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-slate-800/80 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
          <p>© 2026 Bùi Tiến Dũng. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-blue-400 transition-colors">Giới thiệu</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Kỹ năng</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Dự án</a>
            <a href="CV_DungBuiTien.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors inline-flex items-center gap-0.5">
              Tải CV
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
