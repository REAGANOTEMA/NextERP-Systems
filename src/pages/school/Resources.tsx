"use client";

import React from 'react';
import { 
  Laptop, 
  Briefcase, 
  Calculator, 
  Download, 
  ExternalLink, 
  BookOpen, 
  Code, 
  Shield, 
  Zap,
  ArrowUpRight,
  Star
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

const Resources = () => {
  const software = [
    { name: 'Microsoft Office 365', desc: 'Full suite for students including Word, Excel, and Teams.', icon: Shield, color: 'text-blue-600' },
    { name: 'Adobe Creative Cloud', desc: 'Design tools for graphics and UI/UX students.', icon: Star, color: 'text-red-600' },
    { name: 'JetBrains IDE Pack', desc: 'Professional development tools for coding.', icon: Code, color: 'text-purple-600' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Student Resources</h1>
        <p className="text-slate-500">Tools, software, and career guidance to support your academic journey.</p>
      </div>

      {/* Software Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Laptop className="text-blue-600" /> Student Software
          </h2>
          <Button variant="ghost" className="text-blue-600 font-bold">View All Software</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {software.map((item, i) => (
            <Card key={i} className="border-none shadow-sm rounded-3xl hover:shadow-md transition-all">
              <CardContent className="p-8">
                <div className={cn("w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6", item.color)}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{item.desc}</p>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl">
                  <Download size={16} className="mr-2" /> Get License
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Careers & Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Careers */}
        <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="bg-emerald-600 text-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Career Center</CardTitle>
                <CardDescription className="text-emerald-100">Prepare for your professional future.</CardDescription>
              </div>
              <Briefcase size={40} className="opacity-20" />
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-4">
            {[
              'Resume & CV Builder',
              'Interview Preparation Guide',
              'Internship Opportunities',
              'Alumni Mentorship Program'
            ].map((item) => (
              <button key={item} className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors group">
                <span className="font-bold text-slate-700 group-hover:text-emerald-700">{item}</span>
                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-emerald-600" />
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Academic Tools */}
        <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="bg-purple-600 text-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Academic Tools</CardTitle>
                <CardDescription className="text-purple-100">Utilities to help you study smarter.</CardDescription>
              </div>
              <Calculator size={40} className="opacity-20" />
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-4">
            {[
              'GPA Calculator',
              'Citation Generator',
              'Plagiarism Checker',
              'Virtual Library Access'
            ].map((item) => (
              <button key={item} className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-purple-50 transition-colors group">
                <span className="font-bold text-slate-700 group-hover:text-purple-700">{item}</span>
                <ArrowUpRight size={18} className="text-slate-400 group-hover:text-purple-600" />
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resources;