"use client";

import React, { useState } from "react";

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

export default function ContactFormCard() {
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Handles Multi-Select logic for Services
  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Reusable Tailwind classes for the new style
  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50/30 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#7538eb] focus:bg-white focus:ring-1 focus:ring-[#7538eb]";
  
  const labelClass = "block text-sm font-bold text-gray-900 mb-3";

  return (
    <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-12 rounded-[2.5rem] bg-white p-8 shadow-[0_8px_40px_rgb(0,0,0,0.06)] lg:flex-row lg:p-12">
      
      {/* --- LEFT COLUMN: Info & Image --- */}
      <div className="flex w-full flex-col lg:w-5/12">
        <h1 className="mb-8 text-4xl font-bold leading-[1.2] text-gray-900 lg:text-[42px]">
          Tell Us Your <br /> Amazing <br />
          <span className="font-serif italic text-gray-900">Project Here</span>
        </h1>

        <ul className="mb-10 flex flex-col gap-5 text-sm font-medium text-gray-600">
          <li className="flex items-start gap-3">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#7538eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Expect a response from us within 24 hours
          </li>
          <li className="flex items-start gap-3">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#7538eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            We&apos;re happy to sign an NDA upon request.
          </li>
          <li className="flex items-start gap-3">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#7538eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Get access to a team of dedicated product specialists.
          </li>
        </ul>

        {/* Removed mt-auto so it places normally after the list, and updated image src */}
        <div className="relative h-56 w-full overflow-hidden rounded-[2rem] bg-gray-100">
          <img
            src="/cs3-3.png"
            alt="Team member representation"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* --- RIGHT COLUMN: Form --- */}
      <div className="w-full lg:w-7/12">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
          
          {/* Full Name & Email Row */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name
              </label>
              <input id="fullName" type="text" placeholder="John Doe" className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Your Email
              </label>
              <input id="email" type="email" placeholder="yourmail@gmail.com" className={inputClass} />
            </div>
          </div>

          {/* Budget - Single Select (Radio Style) */}
          <div>
            <label className={labelClass}>Project Budget</label>
            <div className="flex flex-wrap gap-3">
              {budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setSelectedBudget(b)}
                  className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-all ${
                    selectedBudget === b
                      ? "border-[#7538eb] bg-[#f8f5ff] text-[#7538eb]"
                      : "border-gray-200 bg-white text-gray-500 hover:border-[#b895f5] hover:text-[#7538eb]"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Services - Multi Select */}
          <div>
            <label className={labelClass}>Service Required</label>
            <div className="flex flex-wrap gap-3">
              {services.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleService(s)}
                  className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-all ${
                    selectedServices.includes(s)
                      ? "border-[#7538eb] bg-[#f8f5ff] text-[#7538eb]"
                      : "border-gray-200 bg-white text-gray-500 hover:border-[#b895f5] hover:text-[#7538eb]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details Textarea */}
          <div>
            <label htmlFor="projectDetails" className={labelClass}>
              Project Details
            </label>
            <textarea
              id="projectDetails"
              rows={4}
              placeholder="I want to redesign my website.."
              className={`resize-none ${inputClass}`}
            />
          </div>

          {/* Submit Button matched to Screenshot 2026-07-24 103340.png */}
          <div>
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#7335e4] to-[#8847f5] px-8 py-3.5 text-sm font-bold text-white shadow-[0px_4px_20px_rgba(117,56,235,0.4)] transition-all hover:opacity-90 active:scale-95"
            >
              Let&apos;s Connect
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}