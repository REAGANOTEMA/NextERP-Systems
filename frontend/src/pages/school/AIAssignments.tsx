"use client";

import React, { useState } from 'react';
import { Brain, Sparkles, Zap, Target, Clock, CheckCircle, ArrowRight, Rocket, Trophy, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { showSuccess } from '@/utils/toast';
import { cn } from '@/lib/utils';

const AIAssignments = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const aiChallenges = [
    { id: 1, title: "Algorithm Optimization", difficulty: "Hard", time: "45 mins", points: 500, desc: "Optimize a recursive Fibonacci function to O(n) time complexity.", category: "Algorithms", status: "available" },
    { id: 2, title: "SQL Query Debugger", difficulty: "Medium", time: "20 mins", points: 250, desc: "Identify and fix the performance bottleneck in a complex JOIN query.", category: "Databases", status: "in-progress" },
    { id: 3, title: "React State Quiz", difficulty: "Easy", time: "15 mins", points: 150, desc: "Interactive quiz on Context API vs Redux for enterprise apps.", category: "Web Dev", status: "completed", score: "100%" }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      showSuccess("New AI challenge generated based on your progress!");
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="relative bg-slate-900 rounded-3xl p-8 overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">AI-Powered Learning</span>
            </div>
            <h1 className="text-4xl font-bold text-white">Personalized AI Challenges</h1>
            <p className="text-slate-400 text-lg">Our AI analyzes your progress and generates custom assignments to strengthen your weak areas.</p>
            <Button onClick={handleGenerate} disabled={isGenerating} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-12 font-bold shadow-lg">
              {isGenerating ? "Analyzing..." : "Generate New Challenge"} <Zap size={18} className="ml-2" />
            </Button>
          </div>
          <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
            <Brain size={80} className="text-white" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiChallenges.map(challenge => (
          <Card key={challenge.id} className="border-none shadow-sm rounded-3xl overflow-hidden group hover:shadow-md transition-all">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none">{challenge.category}</Badge>
                <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase"><Clock size={12} />{challenge.time}</div>
              </div>
              <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{challenge.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600 line-clamp-3">{challenge.desc}</p>
              <div className="flex items-center justify-between pt-2">
                <Badge className={cn("border-none", challenge.difficulty === 'Hard' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600')}>{challenge.difficulty}</Badge>
                <span className="text-xs font-bold text-slate-400">+{challenge.points} XP</span>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50/50 border-t border-slate-100 p-4">
              <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white rounded-xl">
                {challenge.status === 'completed' ? 'Review Solution' : 'Start Challenge'} <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AIAssignments;