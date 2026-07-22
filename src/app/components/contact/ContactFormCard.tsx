"use client";

const budgets = ["500$", "1000$ - 2000$", "2000$ - 5000$", "5000$ - 10000$", "10000$+"];
const services = [
  "UI/UX Design",
  "Web Development",
  "Mobile App",
  "Branding",
  "SaaS Design",
  "Dashboard",
  "Illustration",
  "Consulting",
];

const inputClass =
  "w-full rounded-2xl border border-transparent bg-[#f7f4fc] px-5 py-4 text-sm text-ink shadow-sm outline-none transition placeholder:text-grey-700/60 focus:border-primary focus:bg-white";

export default function ContactFormCard() {
  return (
    <div className="w-full max-w-3xl rounded-[40px] border border-brand-100 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(80,40,140,0.35)] md:p-10 lg:p-12">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-10 md:space-y-12">
        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block px-1 text-sm font-bold text-ink">
              Full Name<span className="text-primary">*</span>
            </label>
            <input id="fullName" type="text" placeholder="Full Name" className={inputClass} />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block px-1 text-sm font-bold text-ink">
              Email<span className="text-primary">*</span>
            </label>
            <input id="email" type="email" placeholder="Ex: company.com" className={inputClass} />
          </div>
        </div>

        {/* Budget */}
        <div className="space-y-5">
          <h3 className="px-1 text-lg font-bold text-ink">Select your Budget</h3>
          <div className="flex flex-wrap gap-3">
            {budgets.map((b, i) => (
              <button
                key={b}
                type="button"
                className={`rounded-full border px-6 py-3 text-sm font-medium shadow-sm transition-all active:scale-95 ${
                  i < 2
                    ? "border-primary bg-purple-1 text-primary"
                    : "border-brand-100 bg-white text-grey-700 hover:border-purple-3 hover:text-primary"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Service */}
        <div className="space-y-5">
          <h3 className="px-1 text-lg font-bold text-ink">Service required</h3>
          <div className="flex flex-wrap gap-3">
            {services.map((s) => (
              <button
                key={s}
                type="button"
                className="rounded-full border border-brand-100 bg-white px-6 py-3 text-sm font-medium text-grey-700 shadow-sm transition-all hover:border-purple-3 hover:text-primary active:scale-95"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Project details */}
        <div className="space-y-2">
          <label htmlFor="projectDetails" className="block px-1 text-sm font-bold text-ink">
            Project Details<span className="text-primary">*</span>
          </label>
          <textarea
            id="projectDetails"
            rows={5}
            placeholder="Tell us more about your idea"
            className={`resize-none ${inputClass}`}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl bg-primary py-5 text-base font-bold text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.55)] transition-all hover:bg-[#7a32e0] active:scale-[0.98]"
        >
          Let&apos;s Design Your Idea
        </button>

        <p className="text-center text-base text-grey-700">
          Prefer to skip the form?{" "}
          <a href="#" className="font-bold text-primary hover:underline">
            Schedule a call instead.
          </a>
        </p>
      </form>
    </div>
  );
}
