"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Briefcase, Shield, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CompanySite = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 space-y-10">
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">NextERP Company Portal</h1>
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
          <Card key={item.title} className="border-none shadow-sm rounded-2xl">
            <CardContent className="p-6 space-y-3">
              {item.icon}
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Need a project quote?</h2>
          <p className="text-slate-500">Create a company account and submit your requirements in minutes.</p>
        </div>
        <Button onClick={() => navigate("/register/company")} className="bg-blue-600 hover:bg-blue-700">
          Start Request <ArrowRight size={16} className="ml-2" />
        </Button>
      </section>
    </div>
  );
};

export default CompanySite;