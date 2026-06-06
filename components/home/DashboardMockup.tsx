"use client";

import { LayoutList, Wallet, Star, FileText, ShoppingBag } from "lucide-react";

const navItems = [
  { icon: LayoutList, label: "سفارشات", badge: "۳", active: true },
  { icon: Wallet, label: "مالی", badge: null, active: false },
  { icon: Star, label: "باشگاه مشتریان", badge: null, active: false },
  { icon: FileText, label: "فاکتورها", badge: null, active: false },
  { icon: ShoppingBag, label: "محصولات", badge: null, active: false },
];

const stats = [
  { label: "کل سفارشات", value: "۱۴۷", sub: "↑ ۱۲٪", up: true },
  { label: "در پردازش", value: "۳", sub: "منتظر تأیید", up: false },
  { label: "تحویل‌شده", value: "۲۱", sub: "این ماه", up: false },
  { label: "نرخ تحویل", value: "۹۶٪", sub: "به موقع", up: true },
];

const rows = [
  { num: "#۱۰۰۴۷", date: "۱۴۰۴/۰۳/۱۵", item: "کیسه فریز × ۵۰۰", status: "پردازش", statusClass: "text-blue-600 bg-blue-50" },
  { num: "#۱۰۰۴۶", date: "۱۴۰۴/۰۳/۱۰", item: "کیسه زباله + سفره", status: "تحویل شد", statusClass: "text-green-600 bg-green-50" },
  { num: "#۱۰۰۴۵", date: "۱۴۰۴/۰۳/۰۵", item: "سفره × ۳۰۰", status: "تحویل شد", statusClass: "text-green-600 bg-green-50" },
  { num: "#۱۰۰۴۴", date: "۱۴۰۴/۰۲/۲۸", item: "کیسه فریز × ۱٬۰۰۰", status: "تحویل شد", statusClass: "text-green-600 bg-green-50" },
];

export function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-xl backdrop-blur-sm">
      {/* Browser chrome */}
      <div className="h-9 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-white rounded border border-slate-200 h-5 w-48 mx-auto flex items-center px-2">
            <span className="text-[9px] text-slate-400">portal.bornaplastic.ir</span>
          </div>
        </div>
      </div>

      {/* App layout */}
      <div className="flex h-[420px] sm:h-[480px] lg:h-[540px]" dir="rtl">
        {/* Sidebar — white, neutral */}
        <aside className="w-44 border-l border-slate-100 bg-white flex flex-col shrink-0">
          <div className="p-3 border-b border-slate-100">
            <div className="text-[11px] font-bold text-slate-800">برنا پلاستیک</div>
            <div className="text-[9px] text-slate-400">پورتال بنکداران</div>
          </div>
          <nav className="p-2 flex-1">
            <div className="text-[8px] font-semibold text-slate-400 uppercase tracking-wide px-2 mb-1.5">فضای کار</div>
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md mb-0.5 ${
                  item.active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-500"
                }`}
              >
                <item.icon className="h-3 w-3 shrink-0" />
                <span className="text-[10px] font-medium flex-1">{item.label}</span>
                {item.badge && (
                  <span className="text-[8px] font-bold bg-blue-600 text-white rounded-full px-1.5 py-0.5">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </nav>
          <div className="p-2 border-t border-slate-100">
            <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-700 shrink-0">م</div>
              <div>
                <div className="text-[9px] font-semibold text-slate-700">محمد رضایی</div>
                <div className="text-[8px] text-slate-400">بنکدار — تهران</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 bg-slate-50 overflow-hidden">
          <div className="h-9 bg-white border-b border-slate-100 flex items-center px-4 justify-between">
            <span className="text-[10px] font-semibold text-slate-700">سفارشات</span>
            <div className="flex items-center gap-1.5">
              <div className="h-5 px-2 rounded text-[9px] font-medium border border-slate-200 bg-white text-slate-500 flex items-center">فیلتر</div>
              <div className="h-5 px-2 rounded text-[9px] font-medium bg-blue-700 text-white flex items-center">+ سفارش جدید</div>
            </div>
          </div>
          <div className="p-4">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-2.5 mb-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-lg border border-slate-100 p-2.5">
                  <div className="text-[8px] text-slate-400 mb-1.5">{s.label}</div>
                  <div className="text-[15px] font-bold text-slate-800 leading-none">{s.value}</div>
                  <div className={`text-[8px] mt-1 ${s.up ? "text-green-600" : "text-slate-400"}`}>{s.sub}</div>
                </div>
              ))}
            </div>
            {/* Table */}
            <div className="bg-white rounded-lg border border-slate-100 overflow-hidden">
              <div className="px-3 py-2 border-b border-slate-50 flex items-center justify-between">
                <span className="text-[9px] font-semibold text-slate-700">سفارشات اخیر</span>
                <span className="text-[8px] text-blue-600">مشاهده همه →</span>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    {["شماره", "تاریخ", "اقلام", "وضعیت"].map((h) => (
                      <th key={h} className="text-right px-3 py-1.5 text-[8px] font-semibold text-slate-400">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.num} className="border-t border-slate-50">
                      <td className="px-3 py-2 text-[8px] font-mono text-slate-500">{row.num}</td>
                      <td className="px-3 py-2 text-[8px] text-slate-400">{row.date}</td>
                      <td className="px-3 py-2 text-[8px] text-slate-700">{row.item}</td>
                      <td className="px-3 py-2">
                        <span className={`text-[8px] font-medium px-1.5 py-0.5 rounded ${row.statusClass}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
