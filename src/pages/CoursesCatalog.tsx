"use client";

import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, Clock3, BadgeCheck, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LogoImg from "@/assets/logo.jpg";

const OFFICIAL_COURSES = [
  {
    id: "microsoft-office",
    title: "Microsoft Office",
    category: "Digital Productivity",
    price: "UGX 700,000",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&q=80&w=800",
    description: "Master Word, Excel, PowerPoint and practical office workflows for real jobs.",
    certification: "Office Productivity Certificate",
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    category: "Creative Media",
    price: "UGX 2,500,000",
    duration: "12 Weeks",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    description: "Design branding assets, posters, social media content, and modern visual systems.",
    certification: "Graphics Design Professional Certificate",
  },
  {
    id: "programming",
    title: "Programming",
    category: "Software Engineering",
    price: "UGX 6,000,000",
    duration: "24 Weeks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    description: "Comprehensive full-stack programming from fundamentals to production projects.",
    certification: "Professional Programming Diploma Track",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    category: "Creative Media",
    price: "UGX 2,500,000",
    duration: "12 Weeks",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    description: "Learn editing workflows, color grading, effects, storytelling, and publishing.",
    certification: "Video Editing & Post-Production Certificate",
  },
  {
    id: "radio-production",
    title: "Radio Production and Presentation",
    category: "Broadcast & Media",
    price: "UGX 3,000,000",
    duration: "14 Weeks",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
    description: "Build skills in voice training, show planning, production, and radio presentation.",
    certification: "Radio Production & Presentation Certificate",
  },
  {
    id: "computer-repair",
    title: "Computer Repair",
    category: "Technical Support",
    price: "UGX 2,500,000",
    duration: "12 Weeks",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    description: "Diagnose, maintain, and repair computer hardware/software for field and office work.",
    certification: "Computer Repair Technician Certificate",
  },
];

const CoursesCatalog = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const admissionFee = "UGX 50,000";

  const courses = useMemo(
    () =>
      OFFICIAL_COURSES.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50 p-6 md:p-10 space-y-8 section-enter">
      <div className="bg-white/80 backdrop-blur border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm animate-fade-in">
        <div className="flex items-center gap-4">
          <img src={LogoImg} alt="NextERP Logo" className="brand-logo brand-logo-lg logo-spotlight ring-2 ring-blue-100" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Official Course Catalog</h1>
            <p className="text-slate-500">All current programs with exact tuition pricing.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate("/school-site")}>School Site</Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => navigate("/register/student")}>Create Student Account</Button>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="font-semibold">Admission Fee: <span className="font-bold">{admissionFee}</span></p>
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" onClick={() => navigate('/apply')}>
          Apply Now <ArrowRight size={14} className="ml-1" />
        </Button>
      </div>

      <div className="relative max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <Input value={query} onChange={(e) => setQuery(e.target.value)} className="pl-9" placeholder="Search by course or category..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="card-animate border-none shadow-md hover:shadow-xl transition-all rounded-2xl overflow-hidden bg-white/95">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <Badge className="bg-blue-50 text-blue-600 border-none">{course.category}</Badge>
                <span className="text-lg font-bold text-emerald-600">{course.price}</span>
              </div>
              <h3 className="font-bold text-slate-900 line-clamp-2">{course.title}</h3>
              <p className="text-sm text-slate-500 line-clamp-2">{course.description}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Clock3 size={13} /> {course.duration}</span>
                <span className="flex items-center gap-1"><BookOpen size={13} /> Practical + Theory</span>
                <span className="flex items-center gap-1"><BadgeCheck size={13} className="text-blue-600" /> {course.certification}</span>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={() => navigate('/apply')}>
                  Apply Now
                </Button>
                <Button size="sm" variant="outline" onClick={() => navigate('/register/student')}>
                  Start Admission
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 animate-fade-in">
        <h2 className="text-2xl font-bold">Need help choosing a course?</h2>
        <p className="text-slate-300 mt-1">Create an account and our team will guide your best path based on your goals.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => navigate('/register/student')}>Start Student Registration</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" onClick={() => navigate('/company-site')}>For Company Training</Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCatalog;