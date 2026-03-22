"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  UserPlus,
  FileText,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { storage } from '@/lib/data-service';
import { showSuccess, showError } from '@/utils/toast';
import { cn } from '@/lib/utils';

const Recruitment = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    const saved = storage.get('company_applications', [
      { id: 1, name: "John Ssekandi", email: "john@example.com", type: "staff", position: "Senior Developer", status: "interviewing", date: "2024-03-20", location: "Kampala" },
      { id: 2, name: "Sarah Nakato", email: "sarah@example.com", type: "student", position: "Web Dev Academy", status: "pending", date: "2024-03-21", location: "Iganga" },
      { id: 3, name: "David Mwanga", email: "david@example.com", type: "intern", position: "UI/UX Intern", status: "pending", date: "2024-03-22", location: "Jinja" }
    ]);
    setApplications(saved);
  }, []);

  const handleUpdateStatus = (id: number, newStatus: string) => {
    const updated = applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    );
    setApplications(updated);
    storage.set('company_applications', updated);
    showSuccess(`Application status updated to ${newStatus}`);
  };

  const filteredApps = applications.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || app.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'pending': return <Badge className="bg-orange-50 text-orange-600 border-none">Pending Review</Badge>;
      case 'interviewing': return <Badge className="bg-blue-50 text-blue-600 border-none">Interviewing</Badge>;
      case 'accepted': return <Badge className="bg-emerald-50 text-emerald-600 border-none">Accepted</Badge>;
      case 'rejected': return <Badge className="bg-red-50 text-red-600 border-none">Rejected</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Recruitment & Talent</h1>
          <p className="text-slate-500">Manage incoming applications for the Academy and Staff positions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <FileText className="mr-2" size={18} /> Export List
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Users size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Total Applicants</p>
              <h3 className="text-2xl font-bold text-slate-900">{applications.length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><Clock size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Pending Review</p>
              <h3 className="text-2xl font-bold text-slate-900">{applications.filter(a => a.status === 'pending').length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><GraduationCap size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Academy Interest</p>
              <h3 className="text-2xl font-bold text-slate-900">{applications.filter(a => a.type === 'student').length}</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm rounded-2xl">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><UserPlus size={24} /></div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Hired/Accepted</p>
              <h3 className="text-2xl font-bold text-slate-900">{applications.filter(a => a.status === 'accepted').length}</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input 
            placeholder="Search by name or email..." 
            className="pl-10 rounded-xl border-slate-200" 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button 
            variant={filterType === 'all' ? 'default' : 'ghost'} 
            onClick={() => setFilterType('all')}
            className="rounded-xl"
          >
            All
          </Button>
          <Button 
            variant={filterType === 'staff' ? 'default' : 'ghost'} 
            onClick={() => setFilterType('staff')}
            className="rounded-xl"
          >
            Staff
          </Button>
          <Button 
            variant={filterType === 'student' ? 'default' : 'ghost'} 
            onClick={() => setFilterType('student')}
            className="rounded-xl"
          >
            Students
          </Button>
          <Button 
            variant={filterType === 'intern' ? 'default' : 'ghost'} 
            onClick={() => setFilterType('intern')}
            className="rounded-xl"
          >
            Interns
          </Button>
        </div>
      </div>

      {/* Applications List */}
      <div className="grid gap-4">
        {filteredApps.map(app => (
          <Card key={app.id} className="border-none shadow-sm rounded-3xl overflow-hidden hover:shadow-md transition-all group">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 rounded-2xl border-2 border-slate-100 shadow-sm">
                    <AvatarFallback className="bg-blue-50 text-blue-600 font-bold text-lg">
                      {app.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-lg">{app.name}</h3>
                      <Badge variant="secondary" className="text-[10px] uppercase tracking-wider px-2 py-0">
                        {app.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-500 font-medium">{app.position || 'General Application'}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><Mail size={12} /> {app.email}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {app.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(app.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {getStatusBadge(app.status)}
                  <div className="h-8 w-[1px] bg-slate-100 hidden md:block"></div>
                  <div className="flex gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-xl">
                          <MoreVertical size={18} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 rounded-xl">
                        <DropdownMenuItem onClick={() => handleUpdateStatus(app.id, 'interviewing')}>
                          <Clock className="mr-2 h-4 w-4" /> Mark Interviewing
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleUpdateStatus(app.id, 'accepted')} className="text-emerald-600">
                          <CheckCircle2 className="mr-2 h-4 w-4" /> Accept/Hire
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleUpdateStatus(app.id, 'rejected')} className="text-red-600">
                          <XCircle className="mr-2 h-4 w-4" /> Reject
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6">
                      View Profile <ArrowUpRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredApps.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <Users className="mx-auto text-slate-300 mb-4" size={48} />
            <h3 className="text-lg font-bold text-slate-900">No applications found</h3>
            <p className="text-slate-500">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recruitment;