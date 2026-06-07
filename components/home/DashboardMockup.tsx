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
  {
    num: "#۱۰۰۴۷",
    date: "۱۴۰۴/۰۳/۱۵",
    customer: "فروشگاه رفاه — تهران",
    item: "کیسه فریز ۳۰×۴۰",
    qty: "۵۰۰ عدد",
    amount: "۶۲٬۵۰۰٬۰۰۰",
    payment: "اعتباری",
    delivery: "۱۴۰۴/۰۳/۲۰",
    status: "پردازش",
    statusClass: "text-blue-600 bg-blue-50",
  },
  {
    num: "#۱۰۰۴۶",
    date: "۱۴۰۴/۰۳/۱۰",
    customer: "هایپرمارکت شهر — کرج",
    item: "کیسه زباله + سفره",
    qty: "۳۲۰ عدد",
    amount: "۳۸٬۴۰۰٬۰۰۰",
    payment: "نقدی",
    delivery: "۱۴۰۴/۰۳/۱۴",
    status: "تحویل شد",
    statusClass: "text-green-600 bg-green-50",
  },
  {
    num: "#۱۰۰۴۵",
    date: "۱۴۰۴/۰۳/۰۵",
    customer: "رستوران سنتی باغ — اصفهان",
    item: "سفره یکبارمصرف",
    qty: "۳۰۰ عدد",
    amount: "۱۳٬۵۰۰٬۰۰۰",
    payment: "اعتباری",
    delivery: "۱۴۰۴/۰۳/۰۸",
    status: "تحویل شد",
    statusClass: "text-green-600 bg-green-50",
  },
  {
    num: "#۱۰۰۴۴",
    date: "۱۴۰۴/۰۲/۲۸",
    customer: "پخش مواد غذایی آریا — مشهد",
    item: "کیسه فریز ۳۰×۴۰",
    qty: "۱٬۰۰۰ عدد",
    amount: "۱۲۵٬۰۰۰٬۰۰۰",
    payment: "چکی",
    delivery: "۱۴۰۴/۰۳/۰۲",
    status: "تحویل شد",
    statusClass: "text-green-600 bg-green-50",
  },
];

const orderColumns = [
  { key: "num", label: "شماره", className: "whitespace-nowrap text-slate-500" },
  { key: "date", label: "تاریخ", className: "whitespace-nowrap text-slate-400" },
  { key: "customer", label: "مشتری", className: "min-w-[72px] text-slate-700" },
  { key: "item", label: "اقلام", className: "min-w-[64px] text-slate-700" },
  { key: "qty", label: "تعداد", className: "whitespace-nowrap text-slate-600" },
  { key: "amount", label: "مبلغ", className: "whitespace-nowrap font-semibold text-slate-800" },
  { key: "payment", label: "پرداخت", className: "whitespace-nowrap text-slate-500" },
  { key: "delivery", label: "تحویل", className: "whitespace-nowrap text-slate-400" },
  { key: "status", label: "وضعیت", className: "whitespace-nowrap" },
] as const;

const clubBenefits = [
  { label: "امتیاز فعلی", value: "۲٬۴۵۰", sub: "تا سطح طلایی: ۵۵۰" },
  { label: "سطح عضویت", value: "نقره‌ای", sub: "مزایای ویژه فعال" },
  { label: "پاداش این ماه", value: "۳", sub: "قابل دریافت" },
];

const clubRewards = [
  { title: "تخفیف ۵٪ سفارش بعدی", points: "۵۰۰ امتیاز", status: "فعال" },
  { title: "ارسال رایگان", points: "۸۰۰ امتیاز", status: "قابل دریافت" },
  { title: "بسته نمونه محصولات", points: "۱٬۲۰۰ امتیاز", status: "قفل" },
];

const products = [
  {
    name: "کیسه فریز ۳۰×۴۰",
    category: "بسته‌بندی",
    price: "۱۲۵٬۰۰۰",
    unit: "کارتن ۵۰۰ عددی",
    minOrder: "حداقل سفارش: ۱۰ کارتن (۵٬۰۰۰ عدد)",
    stock: "موجود",
    stockClass: "text-green-600 bg-green-50",
    imageClass: "from-sky-100 to-blue-50",
    accent: "text-sky-600",
    popular: true,
  },
  {
    name: "کیسه زباله ۵۵ لیتری",
    category: "بهداشتی",
    price: "۸۹٬۰۰۰",
    unit: "بسته ۲۰ عددی",
    minOrder: "حداقل سفارش: ۵ بسته (۱۰۰ عدد)",
    stock: "موجود",
    stockClass: "text-green-600 bg-green-50",
    imageClass: "from-emerald-100 to-green-50",
    accent: "text-emerald-600",
    popular: true,
  },
  {
    name: "سفره یکبارمصرف",
    category: "مصرفی",
    price: "۴۵٬۰۰۰",
    unit: "بسته ۱۰۰ عددی",
    minOrder: "حداقل سفارش: ۲۰ بسته (۲٬۰۰۰ عدد)",
    stock: "محدود",
    stockClass: "text-amber-600 bg-amber-50",
    imageClass: "from-amber-100 to-orange-50",
    accent: "text-amber-600",
    popular: false,
  },
  {
    name: "نایلون بسته‌بندی",
    category: "صنعتی",
    price: "۲۱۰٬۰۰۰",
    unit: "رول ۵ کیلویی",
    minOrder: "حداقل سفارش: ۳ رول (۱۵ کیلو)",
    stock: "موجود",
    stockClass: "text-green-600 bg-green-50",
    imageClass: "from-violet-100 to-purple-50",
    accent: "text-violet-600",
    popular: false,
  },
  {
    name: "دستکش یکبارمصرف",
    category: "بهداشتی",
    price: "۳۲٬۰۰۰",
    unit: "جعبه ۱۰۰ عددی",
    minOrder: "حداقل سفارش: ۱۰ جعبه (۱٬۰۰۰ عدد)",
    stock: "ناموجود",
    stockClass: "text-slate-500 bg-slate-100",
    imageClass: "from-slate-100 to-slate-50",
    accent: "text-slate-500",
    popular: false,
  },
  {
    name: "سلفون بسته‌بندی",
    category: "صنعتی",
    price: "۱۷۵٬۰۰۰",
    unit: "رول ۳۰۰ متری",
    minOrder: "حداقل سفارش: ۴ رول (۱٬۲۰۰ متر)",
    stock: "موجود",
    stockClass: "text-green-600 bg-green-50",
    imageClass: "from-cyan-100 to-teal-50",
    accent: "text-cyan-600",
    popular: false,
  },
  {
    name: "کیسه خرید",
    category: "بسته‌بندی",
    price: "۵۵٬۰۰۰",
    unit: "بسته ۵۰۰ عددی",
    minOrder: "حداقل سفارش: ۸ بسته (۴٬۰۰۰ عدد)",
    stock: "موجود",
    stockClass: "text-green-600 bg-green-50",
    imageClass: "from-indigo-100 to-blue-50",
    accent: "text-indigo-600",
    popular: false,
  },
  {
    name: "ظرف یکبارمصرف",
    category: "مصرفی",
    price: "۷۸٬۰۰۰",
    unit: "کارتن ۲۰۰ عددی",
    minOrder: "حداقل سفارش: ۶ کارتن (۱٬۲۰۰ عدد)",
    stock: "محدود",
    stockClass: "text-amber-600 bg-amber-50",
    imageClass: "from-rose-100 to-pink-50",
    accent: "text-rose-600",
    popular: false,
  },
  {
    name: "لیوان پلاستیکی",
    category: "مصرفی",
    price: "۴۱٬۰۰۰",
    unit: "بسته ۱۰۰ عددی",
    minOrder: "حداقل سفارش: ۱۵ بسته (۱٬۵۰۰ عدد)",
    stock: "موجود",
    stockClass: "text-green-600 bg-green-50",
    imageClass: "from-lime-100 to-green-50",
    accent: "text-lime-600",
    popular: false,
  },
  {
    name: "پیش‌بند یکبارمصرف",
    category: "بهداشتی",
    price: "۲۸٬۰۰۰",
    unit: "بسته ۵۰ عددی",
    minOrder: "حداقل سفارش: ۱۲ بسته (۶۰۰ عدد)",
    stock: "موجود",
    stockClass: "text-green-600 bg-green-50",
    imageClass: "from-fuchsia-100 to-purple-50",
    accent: "text-fuchsia-600",
    popular: false,
  },
  {
    name: "نایلکس شیرینگ",
    category: "صنعتی",
    price: "۱۹۵٬۰۰۰",
    unit: "رول ۱۰ کیلویی",
    minOrder: "حداقل سفارش: ۲ رول (۲۰ کیلو)",
    stock: "موجود",
    stockClass: "text-green-600 bg-green-50",
    imageClass: "from-orange-100 to-amber-50",
    accent: "text-orange-600",
    popular: false,
  },
  {
    name: "نایلون حبابدار",
    category: "بسته‌بندی",
    price: "۱۴۸٬۰۰۰",
    unit: "رول ۱۰۰ متری",
    minOrder: "حداقل سفارش: ۵ رول (۵۰۰ متر)",
    stock: "محدود",
    stockClass: "text-amber-600 bg-amber-50",
    imageClass: "from-yellow-100 to-amber-50",
    accent: "text-yellow-600",
    popular: false,
  },
];

export function DashboardMockup() {
  return (
    <div
      dir="rtl"
      className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 font-sans shadow-xl backdrop-blur-sm"
    >
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
      <div className="flex h-[420px] sm:h-[480px] lg:h-[540px]">
        {/* Sidebar — white, neutral */}
        <aside className="flex w-44 shrink-0 flex-col border-s border-slate-100 bg-white">
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
        <main className="flex min-h-0 flex-1 flex-col bg-slate-50 overflow-hidden">
          <div className="flex h-9 shrink-0 items-center justify-between border-b border-slate-100 bg-white px-4">
            <span className="text-[10px] font-semibold text-slate-700">داشبورد</span>
            <div className="flex items-center gap-1.5">
              <div className="flex h-5 items-center rounded border border-slate-200 bg-white px-2 text-[9px] font-medium text-slate-500">فیلتر</div>
              <div className="flex h-5 items-center rounded bg-blue-700 px-2 text-[9px] font-medium text-white">+ سفارش جدید</div>
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300/80">
            {/* Stats */}
            <div className="mb-4 grid grid-cols-4 gap-2.5">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-slate-100 bg-white p-2.5">
                  <div className="mb-1.5 text-[8px] text-slate-400">{s.label}</div>
                  <div className="text-[15px] font-bold leading-none text-slate-800">{s.value}</div>
                  <div className={`mt-1 text-[8px] ${s.up ? "text-green-600" : "text-slate-400"}`}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Orders table */}
            <div className="mb-4 overflow-hidden rounded-lg border border-slate-100 bg-white">
              <div className="flex items-center justify-between border-b border-slate-50 px-3 py-2">
                <span className="text-[9px] font-semibold text-slate-700">سفارشات اخیر</span>
                <span className="text-[8px] text-blue-600">مشاهده همه ←</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-right">
                  <thead>
                    <tr className="bg-slate-50">
                      {orderColumns.map((column) => (
                        <th
                          key={column.key}
                          className="px-2 py-1.5 text-[7px] font-semibold text-slate-400"
                        >
                          {column.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.num} className="border-t border-slate-50">
                        {orderColumns.map((column) => (
                          <td
                            key={column.key}
                            className={`px-2 py-2 text-[7px] ${column.className}`}
                          >
                            {column.key === "status" ? (
                              <span
                                className={`inline-block rounded px-1.5 py-0.5 text-[7px] font-medium ${row.statusClass}`}
                              >
                                {row.status}
                              </span>
                            ) : column.key === "amount" ? (
                              <span>
                                {row.amount}
                                <span className="mr-0.5 text-[6px] font-normal text-slate-400">تومان</span>
                              </span>
                            ) : (
                              row[column.key]
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Customer club */}
            <div className="mb-4 overflow-hidden rounded-lg border border-slate-100 bg-white">
              <div className="flex items-center justify-between border-b border-slate-50 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <Star className="h-3 w-3 text-amber-500" />
                  <span className="text-[9px] font-semibold text-slate-700">باشگاه مشتریان</span>
                </div>
                <span className="text-[8px] text-blue-600">جزئیات باشگاه ←</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-slate-50 p-3">
                {clubBenefits.map((item) => (
                  <div key={item.label} className="rounded-md bg-slate-50 p-2">
                    <div className="mb-1 text-[8px] text-slate-400">{item.label}</div>
                    <div className="text-[11px] font-bold text-slate-800">{item.value}</div>
                    <div className="mt-0.5 text-[7px] text-slate-400">{item.sub}</div>
                  </div>
                ))}
              </div>
              <div className="divide-y divide-slate-50">
                {clubRewards.map((reward) => (
                  <div key={reward.title} className="flex items-center justify-between px-3 py-2">
                    <div>
                      <div className="text-[8px] font-medium text-slate-700">{reward.title}</div>
                      <div className="text-[7px] text-slate-400">{reward.points}</div>
                    </div>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[7px] font-medium ${
                        reward.status === "فعال"
                          ? "bg-green-50 text-green-600"
                          : reward.status === "قابل دریافت"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {reward.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="overflow-hidden rounded-lg border border-slate-100 bg-white">
              <div className="flex items-center justify-between border-b border-slate-50 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <ShoppingBag className="h-3 w-3 text-brand-primary" />
                  <span className="text-[9px] font-semibold text-slate-700">محصولات</span>
                </div>
                <span className="text-[8px] text-blue-600">کاتالوگ کامل ←</span>
              </div>
              <div className="grid grid-cols-4 gap-2 p-3">
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="group overflow-hidden rounded-lg border border-slate-100 bg-white text-right transition-shadow hover:shadow-sm"
                  >
                    <div
                      className={`relative flex h-16 items-center justify-center bg-gradient-to-br ${product.imageClass}`}
                    >
                      <ShoppingBag className={`h-5 w-5 ${product.accent} opacity-70`} />
                      <span
                        className={`absolute start-1.5 top-1.5 rounded px-1 py-0.5 text-[6px] font-medium ${product.stockClass}`}
                      >
                        {product.stock}
                      </span>
                      {product.popular && (
                        <span className="absolute end-1.5 top-1.5 rounded bg-amber-50 px-1 py-0.5 text-[6px] font-medium text-amber-600">
                          محصول محبوب شما
                        </span>
                      )}
                    </div>
                    <div className="p-2">
                      <span className="mb-1 inline-block rounded bg-slate-100 px-1 py-0.5 text-[6px] text-slate-500">
                        {product.category}
                      </span>
                      <div className="mb-1 truncate text-[8px] font-semibold leading-tight text-slate-800">
                        {product.name}
                      </div>
                      <div className="mb-1 truncate text-[6px] text-slate-400">{product.unit}</div>
                      <div className="mb-2 truncate text-[6px] text-slate-500">{product.minOrder}</div>
                      <div className="flex items-end justify-between gap-1">
                        <div className="min-w-0">
                          <div className="truncate text-[9px] font-bold text-slate-900">{product.price}</div>
                          <div className="text-[6px] text-slate-400">تومان</div>
                        </div>
                        <button
                          type="button"
                          disabled={product.stock === "ناموجود"}
                          className={`shrink-0 rounded px-1.5 py-1 text-[6px] font-semibold transition-colors ${
                            product.stock === "ناموجود"
                              ? "cursor-not-allowed bg-slate-100 text-slate-400"
                              : "bg-brand-primary text-white hover:bg-brand-light"
                          }`}
                        >
                          {product.stock === "ناموجود" ? "ناموجود" : "+ افزودن"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
