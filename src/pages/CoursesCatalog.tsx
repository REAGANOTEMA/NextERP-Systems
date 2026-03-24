"use client";

import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, Star, Users } from "lucide-react";
import { DEFAULT_COURSES } from "@/data/courses";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CoursesCatalog = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const courses = useMemo(
    () =>
      DEFAULT_COURSES.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Course Catalog</h1>
          <p className="text-slate-500">Browse all school and professional programs.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate("/school-site")}>School Site</Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => navigate("/register/student")}>Create Student Account</Button>
        </div>
      </div>

      <div className="relative max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <Input value={query} onChange={(e) => setQuery(e.target.value)} className="pl-9" placeholder="Search by course or category..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="border-none shadow-sm rounded-2xl overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-36 object-cover" />
            <CardContent className="p-5 space-y-3">
              <Badge className="bg-blue-50 text-blue-600 border-none">{course.category}</Badge>
              <h3 className="font-bold text-slate-900 line-clamp-2">{course.title}</h3>
              <p className="text-sm text-slate-500 line-clamp-2">{course.description}</p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1"><BookOpen size={13} /> {course.duration}</span>
                <span className="flex items-center gap-1"><Users size={13} /> {course.students}</span>
                <span className="flex items-center gap-1"><Star size={13} className="text-amber-500" /> {course.rating}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesCatalog;