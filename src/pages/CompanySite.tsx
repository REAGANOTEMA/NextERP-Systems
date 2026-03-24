"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Shield, Code, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LogoImg from "@/assets/logo.jpg";

const CompanySite = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50 p-6 md:p-10 space-y-10 section-enter">
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden animate-fade-in">
        <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="flex items-center gap-4 mb-5">
          <img src={LogoImg} alt="NextERP Logo" className="brand-logo brand-logo-lg logo-spotlight ring-2 ring-white/40" />
          <div>
            <p className="text-xs uppercase tracking-wide text-blue-200">Official Portal</p>
            <h1 className="text-4xl md:text-5xl font-bold">NextERP Company Portal</h1>
          </div>
        </div>
        <p className="mt-3 text-slate-200 max-w-2xl">
          Professional services for organizations: software delivery, IT consulting,
          cybersecurity, and team training.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => navigate("/register/company")} className="bg-blue-600 hover:bg-blue-700">
            Create Company Account
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" onClick={() => navigate("/login")}>
            Sign In
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10" onClick={() => navigate("/courses")}>View Courses</Button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Code className="text-blue-600" size={24} />,
            title: "Custom Software",
            text: "Enterprise web apps and APIs tailored to your workflow.",
          },
          {
            icon: <Shield className="text-emerald-600" size={24} />,
            title: "Cybersecurity",
            text: "Assessments, controls, and practical security hardening.",
          },
          {
            icon: <Briefcase className="text-purple-600" size={24} />,
            title: "Corporate Training",
            text: "Upskill teams in software, data, and digital operations.",
          },
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

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4 animate-scale-in">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Need a project quote?</h2>
          <p className="text-slate-500">Create a company account and submit your requirements in minutes.</p>
        </div>
        <Button onClick={() => navigate("/register/company")} className="bg-blue-600 hover:bg-blue-700">
          Start Request <ArrowRight size={16} className="ml-2" />
        </Button>
      </section>

      <section className="bg-slate-900 text-white rounded-3xl p-8 animate-fade-in">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={18} className="text-blue-300" />
          <h3 className="text-xl font-bold">Corporate Upskilling Available</h3>
        </div>
        <p className="text-slate-300 max-w-3xl">Train your teams in Microsoft Office, Graphics Design, Programming, Video Editing, Radio Production, and Computer Repair with customized schedules.</p>
        <Button variant="outline" className="mt-4 border-white text-white hover:bg-white hover:text-slate-900" onClick={() => navigate('/courses')}>
          View Official Course Pricing
        </Button>
      </section>
    </div>
  );
};

export default CompanySite;