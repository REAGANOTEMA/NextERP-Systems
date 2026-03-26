"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Award, 
  Calendar, 
  BarChart3, 
  Target,
  Download,
  Search,
  BookOpen,
  Star,
  FileText,
  Mail,
  Grid,
  List
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';

const Grades = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [viewMode, setViewMode] = useState('grid');

  const gradesData = {
    overview: {
      currentGPA: 3.8,
      cumulativeGPA: 3.75,
      totalCredits: 144,
      earnedCredits: 72,
      academicStanding: 'Excellent',
      classRank: 15,
      totalStudents: 156
    },
    courses: [
      { id: 1, code: 'PRG201', name: 'Programming (Web Programming)', credits: 4, grade: 'A-', percentage: 92, instructor: 'Dr. Reagan Otema' },
      { id: 2, code: 'PRG202', name: 'Programming (Computer Programming)', credits: 4, grade: 'B+', percentage: 87, instructor: 'Prof. Binsobedde Najiib' },
      { id: 3, code: 'DPO101', name: 'Microsoft Office', credits: 3, grade: 'A', percentage: 95, instructor: 'Faculty Team' },
      { id: 4, code: 'CMD220', name: 'Graphics Design', credits: 3, grade: 'B', percentage: 83, instructor: 'Creative Media Faculty' }
    ]
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-emerald-600 bg-emerald-50';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-50';
    return 'text-slate-600 bg-slate-50';
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Academic Grades</h1>
          <p className="text-slate-500">Track your performance and GPA across all semesters.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <Download className="mr-2" size={18} /> Download Transcript
          </Button>
          <Button onClick={() => showSuccess("Grades emailed!")} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <Mail className="mr-2" size={18} /> Email Grades
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{gradesData.overview.currentGPA}</h3>
            <p className="text-sm text-slate-600">Current GPA</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{gradesData.overview.cumulativeGPA}</h3>
            <p className="text-sm text-slate-600">Cumulative GPA</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{gradesData.overview.earnedCredits}/{gradesData.overview.totalCredits}</h3>
            <p className="text-sm text-slate-600">Credits Earned</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">#{gradesData.overview.classRank}</h3>
            <p className="text-sm text-slate-600">Class Rank</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
        <CardHeader className="border-b border-slate-50">
          <div className="flex items-center justify-between">
            <CardTitle>Current Semester Results</CardTitle>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'bg-slate-100' : ''}><Grid size={18}/></Button>
              <Button variant="ghost" size="icon" onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'bg-slate-100' : ''}><List size={18}/></Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
            {gradesData.courses.map((course) => (
              <div key={course.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-blue-200 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600 font-bold">
                    {course.code.slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{course.name}</h4>
                    <p className="text-xs text-slate-500">{course.code} • {course.credits} Credits</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={getGradeColor(course.grade)}>{course.grade}</Badge>
                  <p className="text-[10px] font-bold text-slate-400 mt-1">{course.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Grades;