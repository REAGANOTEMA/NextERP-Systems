"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SchoolSite = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 space-y-10">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">NextERP School Portal</h1>
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

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <BookOpen className="text-blue-600" size={24} />, title: "Structured Programs", text: "Follow clear paths with progress tracking and milestones." },
          { icon: <Sparkles className="text-purple-600" size={24} />, title: "AI Learning Support", text: "Get assignment guidance and recommendations while you study." },
          { icon: <Users className="text-emerald-600" size={24} />, title: "Community & Support", text: "Connect with mentors, classmates, and your support team." },
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

      <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
        <div className="flex items-center gap-3 mb-3">
          <GraduationCap className="text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-900">Ready to start?</h2>
        </div>
        <p className="text-slate-500 mb-5">Create your student account with your program details, then access your dashboard and classes.</p>
        <Button onClick={() => navigate("/register/student")} className="bg-blue-600 hover:bg-blue-700">Start Student Registration</Button>
      </section>
    </div>
  );
};

export default SchoolSite;