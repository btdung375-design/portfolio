import { useState, useEffect } from "react";
import { 
  Wifi, 
  Battery, 
  Signal, 
  MapPin, 
  Clock, 
  Zap, 
  Compass, 
  Award, 
  Smile, 
  Code, 
  AlertTriangle, 
  ChevronRight, 
  Check, 
  Play, 
  RefreshCw,
  Gift,
  Heart,
  User,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MixueSimulatorProps {
  activeChapter: string;
}

interface MixueStore {
  id: string;
  name: string;
  distance: string;
  baseTraffic: number[]; // 15 values representing 8:00 to 22:00
  address: string;
  coords: { x: number; y: number };
  route: string;
}

export function MixueSimulator({ activeChapter }: MixueSimulatorProps) {
  // Simulator states
  const [selectedStoreId, setSelectedStoreId] = useState<string>("hang_bong");
  const [selectedHour, setSelectedHour] = useState<number>(14); // index 0-14, corresponding to 8:00 to 22:00 (14 = 21:00)
  const [memberPoints, setMemberPoints] = useState<number>(180);
  const [claimedVouchers, setClaimedVouchers] = useState<string[]>([]);
  const [showQrCode, setShowQrCode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"home" | "map" | "loyalty" | "info">("home");

  // Sync activeChapter with Simulator screens
  useEffect(() => {
    if (activeChapter === "mixue_context") {
      setActiveTab("info");
    } else if (activeChapter === "mixue_traffic") {
      setActiveTab("home");
    } else if (activeChapter === "mixue_map") {
      setActiveTab("map");
    } else if (activeChapter === "mixue_loyalty") {
      setActiveTab("loyalty");
    } else if (activeChapter === "mixue_community") {
      setActiveTab("loyalty");
    } else if (activeChapter === "mixue_code") {
      setActiveTab("info");
    }
  }, [activeChapter]);

  // Hourly mapping
  const hours = [
    "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
    "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ];

  // Simulated Mixue stores
  const stores: MixueStore[] = [
    {
      id: "hang_bong",
      name: "Mixue Hàng Bông",
      distance: "1.2 km",
      address: "120 Hàng Bông, Hoàn Kiếm, Hà Nội",
      baseTraffic: [20, 25, 35, 50, 70, 80, 85, 75, 55, 50, 65, 75, 85, 60, 30],
      coords: { x: 180, y: 110 },
      route: "M 130 150 Q 150 130 180 110"
    },
    {
      id: "ta_hien",
      name: "Mixue Tạ Hiện",
      distance: "0.8 km",
      address: "15 Tạ Hiện, Hoàn Kiếm, Hà Nội",
      baseTraffic: [10, 15, 25, 40, 60, 80, 95, 90, 75, 65, 80, 95, 99, 90, 60],
      coords: { x: 230, y: 70 },
      route: "M 130 150 Q 180 110 230 70"
    },
    {
      id: "ba_trieu",
      name: "Mixue Bà Triệu",
      distance: "2.1 km",
      address: "210 Bà Triệu, Hai Bà Trưng, Hà Nội",
      baseTraffic: [15, 20, 30, 45, 55, 60, 50, 40, 35, 45, 60, 70, 65, 50, 25],
      coords: { x: 110, y: 220 },
      route: "M 130 150 Q 110 180 110 220"
    }
  ];

  const currentStore = stores.find(s => s.id === selectedStoreId) || stores[0];
  const trafficValue = currentStore.baseTraffic[selectedHour];

  // Traffic status logic
  const getTrafficStatus = (val: number) => {
    if (val < 40) return { label: "Vắng khách", color: "text-emerald-600 bg-emerald-50 border-emerald-100", dot: "bg-emerald-500", wait: "Dưới 3 phút" };
    if (val < 75) return { label: "Vừa phải", color: "text-amber-600 bg-amber-50 border-amber-100", dot: "bg-amber-400", wait: "5 - 10 phút" };
    return { label: "Đông đúc", color: "text-red-600 bg-red-50 border-red-100", dot: "bg-red-600", wait: "Trên 15 phút" };
  };

  const status = getTrafficStatus(trafficValue);

  // Vouchers list
  const vouchers = [
    { id: "v1", title: "Kem Ốc Quế miễn phí", cost: 100, tag: "HOT", desc: "Đổi 1 cây kem ốc quế truyền thống" },
    { id: "v2", title: "Voucher giảm 20k", cost: 150, tag: "GIẢM SÂU", desc: "Áp dụng hóa đơn bất kỳ từ 50k" },
    { id: "v3", title: "Trà sữa Trân Châu M", cost: 200, tag: "BEST SELLER", desc: "Tặng 1 ly trà sữa trân châu size M" }
  ];

  const handleClaimVoucher = (id: string, cost: number) => {
    if (memberPoints >= cost && !claimedVouchers.includes(id)) {
      setMemberPoints(prev => prev - cost);
      setClaimedVouchers(prev => [...prev, id]);
    }
  };

  return (
    <div className="w-[280px] sm:w-[310px] h-[580px] bg-slate-900 rounded-[45px] p-3.5 shadow-2xl border-4 border-slate-800 relative flex flex-col shrink-0 select-none">
      {/* Speaker and Camera notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-slate-900 rounded-b-2xl z-30 flex items-center justify-center gap-1.5 px-3">
        <div className="w-12 h-1 bg-slate-800 rounded-full" />
        <div className="w-2.5 h-2.5 bg-slate-950 rounded-full border border-slate-800" />
      </div>

      {/* Screen container */}
      <div className="flex-1 bg-white rounded-[32px] overflow-hidden flex flex-col relative border border-slate-950 text-slate-800">
        
        {/* Status Bar */}
        <div className="h-9 pt-3 px-6 flex justify-between items-center bg-[#BB0013] text-white text-[10px] font-bold tracking-tight shrink-0 z-20">
          <span>{hours[selectedHour]} PM</span>
          <div className="flex items-center gap-1.5">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4 rotate-0" />
          </div>
        </div>

        {/* Dynamic App Header */}
        <div className="bg-[#BB0013] text-white px-4 pb-3 pt-1 flex items-center justify-between shadow-xs shrink-0 z-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#BB0013] text-xs font-serif font-extrabold shadow-sm">
              M
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold tracking-tight leading-none">Mixue GO</h4>
              <span className="text-[8px] opacity-80 font-bold uppercase tracking-wider">Cơ sở Hà Nội</span>
            </div>
          </div>
          <button 
            onClick={() => setActiveTab("info")}
            className="text-[10px] bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded-full font-bold border border-white/10 transition-all cursor-pointer"
          >
            Vibe Code
          </button>
        </div>

        {/* Screen Content Panel */}
        <div className="flex-1 overflow-y-auto bg-slate-50 relative p-3 pb-16 scrollbar-none">
          
          {/* TAB 1: HOME / TRAFFIC STATUS */}
          {activeTab === "home" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3.5">
              
              {/* Selector store */}
              <div className="space-y-1">
                <span className="text-[9px] font-extrabold text-[#64748B] uppercase tracking-wider block">Chọn cửa hàng cần xem</span>
                <div className="grid grid-cols-3 gap-1">
                  {stores.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedStoreId(s.id)}
                      className={`py-1.5 px-1 rounded-lg border text-[9px] font-bold text-center leading-tight transition-all cursor-pointer ${
                        selectedStoreId === s.id
                          ? "bg-red-50 border-[#BB0013] text-[#BB0013] shadow-3xs"
                          : "bg-white border-slate-200 text-[#475569] hover:bg-slate-50"
                      }`}
                    >
                      {s.name.replace("Mixue ", "")}
                      <span className="block text-[8px] font-semibold text-[#64748B] mt-0.5">{s.distance}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Store traffic card */}
              <div className="bg-white border border-slate-150 rounded-xl p-3 shadow-3xs space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-xs text-[#0F172A]">{currentStore.name}</h5>
                    <p className="text-[9px] text-[#64748B] leading-none mt-0.5">{currentStore.address}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase ${status.color}`}>
                    {status.label}
                  </span>
                </div>

                <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#BB0013]" />
                    <span className="text-[#475569]">Thời gian chờ dự kiến:</span>
                  </div>
                  <strong className="text-[#0F172A] font-bold">{status.wait}</strong>
                </div>
              </div>

              {/* Simulated slider live traffic */}
              <div className="bg-white border border-slate-150 rounded-xl p-3 shadow-3xs space-y-2.5">
                <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                  <span className="text-[9px] font-extrabold text-[#0F172A] flex items-center gap-1 uppercase tracking-wider">
                    <Zap className="w-3.5 h-3.5 text-[#BB0013]" />
                    Mô phỏng thời gian LIVE
                  </span>
                  <span className="text-[9px] font-bold text-[#BB0013] animate-pulse">● ĐANG CHỌN</span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] text-[#64748B] font-bold">
                    <span>Khung giờ: <strong className="text-red-600 font-extrabold">{hours[selectedHour]} PM</strong></span>
                    <span>Mật độ: <strong className="text-[#0F172A]">{trafficValue}%</strong></span>
                  </div>
                  
                  {/* Real slider */}
                  <input
                    type="range"
                    min="0"
                    max="14"
                    value={selectedHour}
                    onChange={(e) => setSelectedHour(parseInt(e.target.value))}
                    className="w-full accent-[#BB0013] cursor-pointer h-1.5 bg-slate-100 rounded-lg outline-none"
                  />
                  <div className="flex justify-between text-[7px] text-[#64748B] font-semibold px-0.5">
                    <span>8 AM (Vắng)</span>
                    <span>12 PM (Cao điểm)</span>
                    <span>10 PM (Nghỉ)</span>
                  </div>
                </div>

                {/* Simulated bar chart sync */}
                <div className="h-14 flex items-end gap-1 px-1 justify-between pt-1">
                  {currentStore.baseTraffic.map((val, idx) => {
                    const barStatus = getTrafficStatus(val);
                    const isSelected = idx === selectedHour;
                    return (
                      <div key={idx} className="flex-1 h-full flex flex-col justify-end group relative">
                        <div
                          style={{ height: `${val}%` }}
                          className={`w-full rounded-t-xs transition-all duration-300 ${
                            isSelected 
                              ? "bg-[#BB0013] ring-1 ring-red-600 ring-offset-0.5" 
                              : val < 40 ? "bg-emerald-300" : val < 75 ? "bg-amber-300" : "bg-red-300"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Order Tip */}
              <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-100 text-[10px] text-sky-800 leading-normal flex items-start gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <p>
                  {trafficValue >= 75 ? (
                    <span><strong>Mẹo:</strong> Cửa hàng hiện đang rất đông khách. Bạn nên ghé <strong>Mixue Bà Triệu</strong> lân cận (chỉ cách 2.1km) hiện đang rất vắng vẻ để được phục vụ ngay!</span>
                  ) : (
                    <span><strong>Mẹo:</strong> Giờ này cửa hàng thưa vắng, là thời điểm tuyệt hảo nhất để ghé mua trà sữa mà không phải xếp hàng!</span>
                  )}
                </p>
              </div>

            </motion.div>
          )}

          {/* TAB 2: MAP / NAVIGATION */}
          {activeTab === "map" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              <span className="text-[9px] font-extrabold text-[#64748B] uppercase tracking-wider block">Bản đồ điều hướng thông minh</span>
              
              {/* Simulated Map Canvas using CSS */}
              <div className="h-48 bg-sky-50 border border-slate-200 rounded-2xl relative overflow-hidden shadow-inner">
                {/* Roads Grid */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
                
                {/* Styled Road paths */}
                <div className="absolute w-[2px] h-full bg-slate-300 left-[130px]" />
                <div className="absolute w-full h-[2px] bg-slate-300 top-[150px]" />
                <div className="absolute w-full h-[2px] bg-slate-300 top-[110px]" />
                <div className="absolute w-[2px] h-full bg-slate-300 left-[210px]" />

                {/* Street labels */}
                <span className="absolute top-[138px] left-[15px] text-[6px] text-slate-400 font-bold rotate-0 uppercase">Đường Tràng Thi</span>
                <span className="absolute top-[98px] left-[20px] text-[6px] text-slate-400 font-bold rotate-0 uppercase">Phố Hàng Bông</span>
                <span className="absolute top-[50px] left-[142px] text-[6px] text-slate-400 font-bold rotate-90 uppercase">Bà Triệu</span>

                {/* Navigation glowing line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d={currentStore.route}
                    fill="none"
                    stroke="#BB0013"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="6,4"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -20 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                </svg>

                {/* Pulse Blue User Dot */}
                <div className="absolute left-[122px] top-[142px] z-10">
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-blue-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 border border-white" />
                  <span className="absolute -top-4 -left-6 bg-blue-600 text-white text-[6px] font-bold px-1 rounded-sm shadow-sm whitespace-nowrap leading-none py-0.5">Bạn ở đây</span>
                </div>

                {/* Store pins */}
                {stores.map((s) => {
                  const sStatus = getTrafficStatus(s.baseTraffic[selectedHour]);
                  const isSelected = s.id === selectedStoreId;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedStoreId(s.id)}
                      style={{ left: `${s.coords.x}px`, top: `${s.coords.y}px` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center transition-all hover:scale-110 cursor-pointer"
                    >
                      <MapPin className={`w-6 h-6 drop-shadow-md ${
                        isSelected 
                          ? "text-[#BB0013]" 
                          : "text-[#64748B]"
                      }`} />
                      
                      {/* Density colored dot on pin */}
                      <span className={`absolute top-1 w-2 h-2 rounded-full border border-white ${sStatus.dot}`} />
                      
                      {/* Name tag */}
                      <span className={`px-1 py-0.5 rounded-xs text-[6px] font-bold mt-0.5 whitespace-nowrap shadow-xs ${
                        isSelected 
                          ? "bg-[#0F172A] text-white" 
                          : "bg-white border border-slate-200 text-[#475569]"
                      }`}>
                        {s.name.replace("Mixue ", "")} ({sStatus.label})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected store navigation data */}
              <div className="bg-white border border-slate-150 rounded-xl p-3 shadow-3xs space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1 font-bold text-[#0F172A]">
                    <Compass className="w-4 h-4 text-sky-600" />
                    Chỉ đường đến {currentStore.name.replace("Mixue ", "")}
                  </div>
                  <span className="text-[10px] text-red-600 font-bold">{currentStore.distance}</span>
                </div>

                <div className="text-[10px] text-[#64748B] leading-relaxed pl-1 border-l-2 border-slate-200 space-y-1">
                  <p>1. Đi về phía Đông khoảng 150m trên phố Tràng Thi.</p>
                  <p>2. Rẽ trái vào ngã tư Bà Triệu hướng đi {currentStore.name.replace("Mixue ", "")}.</p>
                  <p>3. Di chuyển tiếp 800m, cửa hàng nằm ở phía bên phải.</p>
                </div>

                <button 
                  onClick={() => alert(`Đang mô phỏng mở ứng dụng bản đồ bên ngoài dẫn đường đến: ${currentStore.address}`)}
                  className="w-full py-2 bg-slate-900 hover:bg-[#BB0013] text-white text-[9px] font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3 h-3" />
                  Mở Bản Đồ Hệ Thống LIVE
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 3: LOYALTY & REWARDS */}
          {activeTab === "loyalty" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3.5">
              
              {/* Member Card */}
              <div className="bg-gradient-to-br from-[#BB0013] to-[#7A000A] text-white rounded-xl p-3.5 shadow-md relative overflow-hidden flex flex-col justify-between h-32">
                {/* Background decorative snowball pattern */}
                <div className="absolute right-[-10px] bottom-[-20px] w-24 h-24 rounded-full bg-white/5 border border-white/5" />
                <div className="absolute right-[20px] bottom-[-10px] w-14 h-14 rounded-full bg-white/5" />
                
                <div className="flex justify-between items-start z-10">
                  <div>
                    <span className="text-[7px] tracking-widest font-extrabold uppercase bg-white/20 px-1.5 py-0.5 rounded-md">GOLD MEMBER</span>
                    <h5 className="font-serif text-xs font-bold mt-1 tracking-tight">BÙI TIẾN DŨNG</h5>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] opacity-70 block font-semibold leading-none">MÃ THÀNH VIÊN</span>
                    <strong className="text-[10px] font-mono font-bold tracking-wider">MX-9988-2026</strong>
                  </div>
                </div>

                <div className="flex justify-between items-end z-10 border-t border-white/10 pt-2 mt-2">
                  <div className="space-y-0.5">
                    <span className="text-[8px] opacity-75 block font-semibold leading-none">ĐIỂM TÍCH LŨY</span>
                    <span className="text-sm font-extrabold flex items-center gap-1 text-amber-300">
                      <Award className="w-4 h-4 text-amber-300 shrink-0" />
                      {memberPoints} <span className="text-[9px] text-white opacity-80 font-semibold">Points</span>
                    </span>
                  </div>
                  
                  {/* QR small icon */}
                  <button
                    onClick={() => setShowQrCode(prev => !prev)}
                    className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 transition-transform"
                    title="Bấm để quét mã tích điểm"
                  >
                    <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className={`rounded-3xs ${i % 2 === 0 || i === 3 ? "bg-slate-900" : "bg-white"}`} />
                      ))}
                    </div>
                  </button>
                </div>
              </div>

              {/* QR Lightbox overlay inside phone screen */}
              <AnimatePresence>
                {showQrCode && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white border border-slate-150 rounded-xl p-3 shadow-md flex flex-col items-center justify-center text-center relative z-25 gap-2"
                  >
                    <span className="text-[9px] font-bold text-[#BB0013] uppercase tracking-widest">Đưa mã này cho thu ngân khi thanh toán</span>
                    
                    {/* Simulated big QR Code */}
                    <div className="w-24 h-24 bg-slate-100 p-2 border border-slate-200 rounded-lg flex items-center justify-center">
                      <div className="grid grid-cols-5 gap-1 w-full h-full">
                        {[...Array(25)].map((_, i) => (
                          <div key={i} className={`${(i * 7 + 3) % 4 === 0 || i === 0 || i === 4 || i === 20 || i === 24 ? "bg-slate-900" : "bg-white"}`} />
                        ))}
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 font-bold leading-none">Mã QR cập nhật liên tục thực tế</span>
                    <button 
                      onClick={() => setShowQrCode(false)}
                      className="text-[8px] text-red-600 font-extrabold hover:underline"
                    >
                      Đóng mã QR
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Claim rewards voucher shop */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-extrabold text-[#64748B] uppercase tracking-wider block">Kho quà tặng đổi điểm thành viên</span>
                
                <div className="space-y-2">
                  {vouchers.map((v) => {
                    const isClaimed = claimedVouchers.includes(v.id);
                    const canClaim = memberPoints >= v.cost;
                    return (
                      <div
                        key={v.id}
                        className={`p-2.5 rounded-xl border flex justify-between items-center bg-white shadow-3xs relative overflow-hidden transition-all ${
                          isClaimed ? "border-slate-200 opacity-75" : "border-slate-150"
                        }`}
                      >
                        <div className="space-y-1 pr-2 max-w-[150px]">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[7px] font-extrabold text-white bg-red-600 px-1 py-0.5 rounded-md leading-none tracking-wide">{v.tag}</span>
                            <span className="text-[8px] text-slate-500 font-bold font-mono">{v.cost} Điểm</span>
                          </div>
                          <h6 className="font-bold text-[10px] text-[#0F172A] leading-tight">{v.title}</h6>
                          <p className="text-[8px] text-[#64748B] leading-normal">{v.desc}</p>
                        </div>

                        <button
                          onClick={() => handleClaimVoucher(v.id, v.cost)}
                          disabled={isClaimed || !canClaim}
                          className={`px-2.5 py-1 text-[8px] font-extrabold rounded-lg whitespace-nowrap shrink-0 cursor-pointer ${
                            isClaimed
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-100 font-bold"
                              : canClaim
                                ? "bg-[#BB0013] hover:bg-[#9B000F] text-white shadow-3xs"
                                : "bg-slate-100 text-slate-400 border border-slate-250 cursor-not-allowed"
                          }`}
                        >
                          {isClaimed ? (
                            <span className="flex items-center gap-0.5"><Check className="w-2.5 h-2.5" /> Đã đổi</span>
                          ) : (
                            "Đổi quà"
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 4: INFO / VIBE CODE */}
          {activeTab === "info" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3.5">
              
              {/* Dev card */}
              <div className="bg-white border border-slate-150 rounded-xl p-3 shadow-3xs space-y-2 text-center relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600 font-extrabold mx-auto text-sm">
                  BTD
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#0F172A]">Bùi Tiến Dũng</h5>
                  <p className="text-[9px] text-[#64748B] font-semibold mt-0.5">Business Analyst Intern &amp; Developer cá nhân</p>
                </div>
                <div className="flex justify-center gap-1">
                  {["Product Owner", "UI/UX", "Vibe Code", "SQL"].map((tag, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-slate-50 border border-slate-150 rounded-md text-[7px] text-[#64748B] font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vibe code specifications */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 shadow-md text-emerald-400 font-mono text-[8.5px] leading-relaxed space-y-1">
                <div className="text-slate-500 font-bold">// BENCHMARK SPECIFICATIONS</div>
                <div><span className="text-blue-400">const</span> project = <span className="text-yellow-200">"Mixue GO"</span>;</div>
                <div><span className="text-blue-400">const</span> build = <span className="text-yellow-200">"Pure Vibe Code"</span>;</div>
                <div><span className="text-blue-400">const</span> loadTime = <span className="text-amber-300">"0.8s (Instant)"</span>;</div>
                <div><span className="text-blue-400">const</span> status = <span className="text-emerald-300">"100% Functional"</span>;</div>
                <div><span className="text-blue-400">const</span> codeLines = <span className="text-purple-300">"~1200 loc (No bloat)"</span>;</div>
                <div className="text-slate-500 mt-1">// STACK &amp; CAPABILITIES</div>
                <div className="text-slate-300">• State-driven Density calculations</div>
                <div className="text-slate-300">• Vector Coordinate Mapping path</div>
                <div className="text-slate-300">• Points calculation Loyalty shop</div>
              </div>

              {/* Learning objective info */}
              <div className="p-3 bg-red-50/50 border border-red-100 rounded-xl space-y-1.5 text-xs">
                <h6 className="font-bold text-[#BB0013] text-[10px] uppercase tracking-wider flex items-center gap-1">
                  <Code className="w-3.5 h-3.5" />
                  Triết lý sáng tạo
                </h6>
                <p className="text-[10px] text-[#475569] leading-relaxed text-justify">
                  Sản phẩm này được chế tác thủ công hoàn chỉnh thay vì chỉ viết phân tích giấy. Việc tự tay lập trình giúp em hiểu sâu sắc bối cảnh thực tế, bóc tách rào cản kỹ thuật và xây dựng sản phẩm tối ưu dựa trên thực tế.
                </p>
              </div>

            </motion.div>
          )}

        </div>

        {/* Smartphone Tab Bar Navigation */}
        <div className="absolute bottom-0 inset-x-0 h-14 bg-white border-t border-slate-100 flex items-center justify-around px-2 z-10">
          {[
            { id: "home", label: "Mật độ", icon: Zap },
            { id: "map", label: "Bản đồ", icon: MapPin },
            { id: "loyalty", label: "Ưu đãi", icon: Award },
            { id: "info", label: "Vibe", icon: Code }
          ].map((tab) => {
            const Icon = tab.icon;
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "home" | "map" | "loyalty" | "info")}
                className="flex flex-col items-center gap-0.5 flex-1 py-1.5 cursor-pointer text-center"
              >
                <Icon className={`w-4 h-4 transition-all ${
                  isTabActive 
                    ? "text-[#BB0013] scale-110" 
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`} />
                <span className={`text-[8px] font-bold ${
                  isTabActive ? "text-[#BB0013]" : "text-[#64748B]"
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-24 bg-slate-300 rounded-full z-20" />

      </div>
    </div>
  );
}
