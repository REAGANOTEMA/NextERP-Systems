"use client";

import React from 'react';
import { 
  FileText, 
  Download, 
  Upload, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Search,
  Filter,
  FileCheck,
  GraduationCap,
  Globe,
  Calculator
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

const Documents = () => {
  const docs = [
    { title: 'Official Transcript', category: 'Academic', date: 'Sep 20, 2024', status: 'Verified', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Ecclesiastical Endorsement', category: 'Compliance', date: 'Aug 15, 2024', status: 'Active', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Credit Transfer Report', category: 'Academic', date: 'Jul 10, 2024', status: 'Processed', icon: FileCheck, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: '1098-T Tax Form', category: 'Financial', date: 'Jan 30, 2024', status: 'Available', icon: Calculator, color: 'text-orange-600', bg: 'bg-orange-50' },
    { title: 'English Proficiency Result', category: 'Assessment', date: 'Mar 12, 2024', status: 'Verified', icon: Globe, color: 'text-indigo-600', bg: 'bg-indigo-50' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Document Center</h1>
          <p className="text-slate-500">Access your transcripts, endorsements, and official certifications.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <Upload className="mr-2" size={18} /> Upload Document
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            Request Official Copy
          </Button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input placeholder="Search documents by name or category..." className="pl-10 rounded-xl border-slate-200" />
        </div>
        <Button variant="outline" className="rounded-xl"><Filter className="mr-2" size={16} /> Filter</Button>
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all group rounded-3xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className={cn("p-4 rounded-2xl", doc.bg, doc.color)}>
                  <doc.icon size={28} />
                </div>
                <Badge className="bg-slate-50 text-slate-500 border-none text-[10px] uppercase tracking-wider">
                  {doc.category}
                </Badge>
              </div>
              
              <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">{doc.title}</h3>
              <p className="text-xs text-slate-400 mb-6">Last updated: {doc.date}</p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500" size={14} />
                  <span className="text-xs font-bold text-slate-600">{doc.status}</span>
                </div>
                <Button variant="ghost" size="icon" className="rounded-xl text-blue-600 hover:bg-blue-50">
                  <Download size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Request Section */}
      <Card className="border-none shadow-sm rounded-3xl bg-slate-900 text-white overflow-hidden">
        <CardContent className="p-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold">Need an Official Transcript?</h2>
              <p className="text-slate-400 leading-relaxed">
                Official transcripts can be sent directly to other institutions or employers. Standard processing time is 3-5 business days.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8 h-12 font-bold">
                  Start Request
                </Button>
                <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 rounded-xl px-8 h-12 font-bold">
                  Track Request
                </Button>
              </div>
            </div>
            <div className="shrink-0 hidden lg:block">
              <div className="w-48 h-48 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <FileText size={80} className="text-blue-500 opacity-50" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;