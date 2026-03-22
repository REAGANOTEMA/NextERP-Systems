"use client";

import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  BarChart3,
  Clock,
  Target
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyProgram from './MyProgram';
import DegreeProgressAudit from './DegreeProgressAudit';
import ClassSchedule from './ClassSchedule';
import GoToClass from './GoToClass';

const Academics = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'program';

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Academic Portal</h1>
        <p className="text-slate-500">Manage your courses, track progress, and attend classes.</p>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-100 w-full justify-start overflow-x-auto">
          <TabsTrigger value="program" className="rounded-lg px-6 flex items-center gap-2">
            <GraduationCap size={16} /> My Program
          </TabsTrigger>
          <TabsTrigger value="progress" className="rounded-lg px-6 flex items-center gap-2">
            <BarChart3 size={16} /> Degree Progress
          </TabsTrigger>
          <TabsTrigger value="class" className="rounded-lg px-6 flex items-center gap-2">
            <BookOpen size={16} /> Go to Class
          </TabsTrigger>
          <TabsTrigger value="schedule" className="rounded-lg px-6 flex items-center gap-2">
            <Calendar size={16} /> Class Schedule
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="program" className="m-0">
            <MyProgram />
          </TabsContent>
          <TabsContent value="progress" className="m-0">
            <DegreeProgressAudit />
          </TabsContent>
          <TabsContent value="class" className="m-0">
            <GoToClass />
          </TabsContent>
          <TabsContent value="schedule" className="m-0">
            <ClassSchedule />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Academics;