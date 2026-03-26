"use client";

import React from 'react';
import { FileText, Rocket, Trophy, CheckCircle, Clock, Star, Download, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const IconicAssignments = () => {
  const assignments = [
    { id: 1, title: "Enterprise ERP Module", course: "Software Engineering", progress: 85, due: "Oct 24", points: 1000, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" },
    { id: 2, title: "Security Audit Report", course: "Cybersecurity", progress: 40, due: "Nov 02", points: 800, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
    { id: 3, title: "AI Chatbot Integration", course: "AI & ML", progress: 10, due: "Nov 15", points: 1200, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Iconic Assignments</h1>
          <p className="text-slate-500">High-impact projects that define your professional portfolio.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl h-12 px-8 font-bold">
          <Rocket className="mr-2" size={18} /> Submit Final Project
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {assignments.map((item) => (
          <Card key={item.id} className="border-none shadow-sm rounded-3xl overflow-hidden group hover:shadow-xl transition-all">
            <div className="h-48 relative overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm border-none">+{item.points} XP</Badge>
              </div>
            </div>
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{item.title}</CardTitle>
              <CardDescription>{item.course}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-2 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-500 uppercase">Progress</span>
                  <span className="text-blue-600">{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-2 bg-slate-100" />
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500">
                <div className="flex items-center gap-1"><Clock size={14}/> Due {item.due}</div>
                <div className="flex items-center gap-1"><Trophy size={14} className="text-yellow-500"/> Portfolio Grade</div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="outline" className="w-full rounded-xl border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                Continue Working <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IconicAssignments;