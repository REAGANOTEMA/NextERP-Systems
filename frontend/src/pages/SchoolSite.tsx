"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LogoImg from "@/assets/logo.jpg";

const SchoolSite = () => {
  const navigate = useNavigate();
  const admissionFee = "UGX 50,000";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50 p-6 md:p-10 space-y-10 section-enter">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden animate-fade-in">
        <div className="absolute -left-12 -bottom-12 w-44 h-44 bg-white/10 rounded-full blur-2xl" />
        <div className="flex items-center gap-4 mb-5">
          <img src={LogoImg} alt="NextERP Logo" className="brand-logo brand-logo-lg logo-spotlight ring-2 ring-white/40" />
          <div>
            <p className="text-xs uppercase tracking-wide text-blue-100">Student Experience</p>
            <h1 className="text-4xl md:text-5xl font-bold">NextERP School Portal</h1>
          </div>
        </div>
        <p className="mt-3 text-blue-100 max-w-2xl">
          Learn job-ready skills through guided programs, smart assignments, and
          a student-friendly digital campus.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button className="bg-white text-blue-700 hover:bg-blue-50" onClick={() => navigate("/register/student")}>
            Create Student Account
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700" onClick={() => navigate("/login")}>
            Student Sign In
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10" onClick={() => navigate("/courses")}>
            Browse Courses
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
        {[
          { course: "Microsoft Office", fee: "UGX 700,000" },
          { course: "Graphics Design", fee: "UGX 2,500,000" },
          { course: "Programming", fee: "UGX 6,000,000" },
        ].map((item) => (
          <div key={item.course} className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
            <p className="font-semibold text-slate-900">{item.course}</p>
            <Badge className="mt-2 bg-emerald-50 text-emerald-700 border-none">{item.fee}</Badge>
          </div>
        ))}
      </section>

      <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 animate-fade-in">
        <div>
          <p className="text-emerald-800 font-semibold">Admission Fee: <span className="font-bold">{admissionFee}</span></p>
          <p className="text-sm text-emerald-700">Pay once during application to reserve your intake slot.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => navigate('/apply')}>
          Apply Now
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <BookOpen className="text-blue-600" size={24} />, title: "Structured Programs", text: "Follow clear paths with progress tracking and milestones." },
          { icon: <Sparkles className="text-purple-600" size={24} />, title: "AI Learning Support", text: "Get assignment guidance and recommendations while you study." },
          { icon: <Users className="text-emerald-600" size={24} />, title: "Community & Support", text: "Connect with mentors, classmates, and your support team." },
        ].map((item) => (
          <Card key={item.title} className="card-animate border-none shadow-sm rounded-2xl">
            <CardContent className="p-6 space-y-3">
              {item.icon}
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 animate-scale-in">
        <div className="flex items-center gap-3 mb-3">
          <GraduationCap className="text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-900">Ready to start?</h2>
        </div>
        <p className="text-slate-500 mb-5">Create your student account with your program details, then access your dashboard and classes.</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => navigate('/apply')}>Apply Now</Button>
          <Button onClick={() => navigate("/register/student")} className="bg-blue-600 hover:bg-blue-700">Start Student Registration</Button>
          <Button variant="outline" onClick={() => navigate('/courses')}>See Full Pricing & Courses</Button>
        </div>
      </section>
    </div>
  );
};

export default SchoolSite;