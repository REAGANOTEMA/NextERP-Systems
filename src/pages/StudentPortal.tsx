"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap,
  User,
  DollarSign,
  FileText,
  Settings,
  MessageCircle,
  Bell,
  ChevronDown,
  BookOpen,
  Calendar,
  Users,
  Globe,
  AlertCircle,
  CheckCircle,
  Clock,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Download,
  Upload,
  FileCheck,
  Award,
  Languages,
  Receipt,
  CreditCard,
  TrendingUp,
  Shield,
  Wallet,
  Laptop,
  Briefcase,
  ScrollText as AcademicIcon,
  Heart,
  Phone,
  Mail,
  ExternalLink,
  UserRoundCheck,
  Book,
  Church,
  Search,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';

const StudentPortal = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Skip to Main Content */}
      <div className="sr-only">
        <a href="#main-content">Skip to Main Content</a>
      </div>

      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center">
                <GraduationCap className="text-yellow-900" size={20} />
              </div>
              <div>
                <span className="font-bold text-lg text-slate-900">NextERP</span>
                <span className="text-xs text-slate-600 ml-1">Systems</span>
              </div>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <span className="text-sm text-slate-600">Hello {user?.name || 'Reagan'}</span>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-slate-400" />
                  <select className="text-sm border-0 bg-transparent text-slate-600">
                    <option>English (United States)</option>
                  </select>
                </div>
                <Button variant="ghost" size="sm" className="text-slate-600">
                  <LogOut size={16} className="mr-1" />
                  Logout
                </Button>
              </div>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Alert Bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <AlertCircle size={16} />
            <span>0 Holds 0 Alerts</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700">
              <MessageCircle size={16} className="mr-1" />
              Chat with us!
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <main id="main-content" className="space-y-6">
          {/* Programs of Study */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Programs of Study</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-blue-800">
                  You currently have 2 active enrollments. You can view all of your enrollments on the Degree Progress Audit.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                        PC
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">PathwayConnect</h3>
                        <p className="text-sm text-slate-600">Foundation Program</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-slate-600">GPA</p>
                      <p className="font-bold text-lg">0.00</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Credits</p>
                      <p className="font-bold text-lg">12 / 30</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Financial Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Financials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Current Balance</span>
                    <DollarSign size={16} className="text-slate-400" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">$14.92</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Account Summary
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-sm font-medium">Holds & Alerts</span>
                    </div>
                    <span className="text-sm text-slate-600">You have 0 holds.</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-blue-600" />
                      <span className="text-sm font-medium">Document Center</span>
                    </div>
                    <span className="text-sm text-slate-600">No documents due.</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Tabs */}
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="academics" className="space-y-6">
                <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full justify-start overflow-x-auto">
                  <TabsTrigger value="academics" className="rounded-lg px-6 flex items-center gap-2">
                    <BookOpen size={16} /> Academics
                  </TabsTrigger>
                  <TabsTrigger value="profile" className="rounded-lg px-6 flex items-center gap-2">
                    <User size={16} /> My Profile
                  </TabsTrigger>
                  <TabsTrigger value="finances" className="rounded-lg px-6 flex items-center gap-2">
                    <DollarSign size={16} /> Finances
                  </TabsTrigger>
                  <TabsTrigger value="documents" className="rounded-lg px-6 flex items-center gap-2">
                    <FileText size={16} /> Documents
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="rounded-lg px-6 flex items-center gap-2">
                    <Settings size={16} /> Resources
                  </TabsTrigger>
                  <TabsTrigger value="support" className="rounded-lg px-6 flex items-center gap-2">
                    <HelpCircle size={16} /> Support
                  </TabsTrigger>
                </TabsList>

                <div className="mt-6">
                  {/* Academics Tab */}
                  <TabsContent value="academics" className="m-0 space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-bold text-blue-900 mb-2">Academic Portal</h3>
                      <p className="text-sm text-blue-700">Manage your courses, track progress, and attend classes.</p>
                    </div>
                    
                    <Tabs defaultValue="program" className="space-y-6">
                      <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full justify-start overflow-x-auto">
                        <TabsTrigger value="program" className="rounded-lg px-6 flex items-center gap-2">
                          <GraduationCap size={16} /> My Program
                        </TabsTrigger>
                        <TabsTrigger value="progress" className="rounded-lg px-6 flex items-center gap-2">
                          <TrendingUp size={16} /> Degree Progress Audit
                        </TabsTrigger>
                        <TabsTrigger value="schedule" className="rounded-lg px-6 flex items-center gap-2">
                          <Calendar size={16} /> Class Schedule
                        </TabsTrigger>
                        <TabsTrigger value="class" className="rounded-lg px-6 flex items-center gap-2">
                          <BookOpen size={16} /> Go to Class
                        </TabsTrigger>
                      </TabsList>

                      <div className="mt-6">
                        <TabsContent value="program" className="m-0">
                          <Card className="border border-slate-200">
                            <CardHeader>
                              <CardTitle>My Program</CardTitle>
                              <CardDescription>Your current academic program and progress</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <h4 className="font-bold text-slate-900">Current Courses</h4>
                                  <div className="space-y-3">
                                    <div className="p-4 bg-slate-50 rounded-lg">
                                      <p className="font-medium text-slate-900">PC101 - Life Skills</p>
                                      <p className="text-sm text-slate-600">3 Credits • In Progress</p>
                                      <div className="mt-2">
                                        <div className="flex justify-between text-sm mb-1">
                                          <span>Progress</span>
                                          <span>75%</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                          <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg">
                                      <p className="font-medium text-slate-900">REL250A - Jesus Christ and His Everlasting Gospel A</p>
                                      <p className="text-sm text-slate-600">2 Credits • Completed</p>
                                      <Badge className="bg-green-100 text-green-800 border-none">A</Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <h4 className="font-bold text-slate-900">Academic Standing</h4>
                                  <div className="space-y-3">
                                    <div className="p-4 bg-slate-50 rounded-lg">
                                      <p className="text-sm text-slate-600">Current GPA</p>
                                      <p className="text-2xl font-bold text-slate-900">3.85</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg">
                                      <p className="text-sm text-slate-600">Total Credits</p>
                                      <p className="text-2xl font-bold text-slate-900">12 / 30</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="progress" className="m-0">
                          <Card className="border border-slate-200">
                            <CardHeader>
                              <CardTitle>Degree Progress Audit</CardTitle>
                              <CardDescription>Track your progress toward degree completion</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="space-y-4">
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                  <h4 className="font-bold text-blue-900 mb-2">PathwayConnect Certificate</h4>
                                  <p className="text-sm text-blue-700 mb-4">Foundation Program • 30 Credits Required</p>
                                  <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                      <span>Completed Credits</span>
                                      <span>12 / 30</span>
                                    </div>
                                    <div className="w-full bg-blue-200 rounded-full h-3">
                                      <div className="bg-blue-600 h-3 rounded-full" style={{width: '40%'}}></div>
                                    </div>
                                    <p className="text-xs text-blue-600 mt-1">40% Complete</p>
                                  </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="p-4 bg-slate-50 rounded-lg">
                                    <h5 className="font-medium text-slate-900 mb-2">Required Courses</h5>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span>Foundation Courses</span>
                                        <span>8 / 10</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Religion Courses</span>
                                        <span>2 / 4</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span>Elective Courses</span>
                                        <span>2 / 16</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="p-4 bg-slate-50 rounded-lg">
                                    <h5 className="font-medium text-slate-900 mb-2">Estimated Completion</h5>
                                    <p className="text-2xl font-bold text-slate-900">2 Semesters</p>
                                    <p className="text-sm text-slate-600">Based on current progress</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="schedule" className="m-0">
                          <Card className="border border-slate-200">
                            <CardHeader>
                              <CardTitle>Class Schedule</CardTitle>
                              <CardDescription>Your weekly class schedule and important dates</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                                  <div key={day} className="text-center">
                                    <div className="p-2 bg-slate-100 rounded font-medium text-sm">{day}</div>
                                    <div className="mt-2 space-y-1">
                                      {day === 'Tue' && (
                                        <div className="p-2 bg-blue-100 rounded text-xs">
                                          <p className="font-medium">PC101</p>
                                          <p className="text-blue-600">7:00 PM</p>
                                        </div>
                                      )}
                                      {day === 'Thu' && (
                                        <div className="p-2 bg-green-100 rounded text-xs">
                                          <p className="font-medium">REL250A</p>
                                          <p className="text-green-600">6:00 PM</p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              <div className="space-y-4">
                                <h4 className="font-bold text-slate-900">Important Dates</h4>
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                                    <div>
                                      <p className="font-medium text-slate-900">Midterm Exams</p>
                                      <p className="text-sm text-slate-600">Week of October 15</p>
                                    </div>
                                    <Badge className="bg-orange-100 text-orange-800 border-none">Upcoming</Badge>
                                  </div>
                                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                    <div>
                                      <p className="font-medium text-slate-900">Final Exams</p>
                                      <p className="text-sm text-slate-600">Week of December 10</p>
                                    </div>
                                    <Badge className="bg-slate-100 text-slate-800 border-none">Scheduled</Badge>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="class" className="m-0">
                          <Card className="border border-slate-200">
                            <CardHeader>
                              <CardTitle>Go to Class</CardTitle>
                              <CardDescription>Access your virtual classrooms and course materials</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                                  <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-bold text-blue-900">PC101 - Life Skills</h4>
                                    <Badge className="bg-blue-100 text-blue-800 border-none">Active</Badge>
                                  </div>
                                  <p className="text-sm text-blue-700 mb-4">Next class: Tuesday, 7:00 PM</p>
                                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                    Enter Classroom
                                  </Button>
                                </div>
                                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                                  <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-bold text-green-900">REL250A - Gospel A</h4>
                                    <Badge className="bg-green-100 text-green-800 border-none">Completed</Badge>
                                  </div>
                                  <p className="text-sm text-green-700 mb-4">Grade: A • 2 Credits</p>
                                  <Button variant="outline" className="w-full">
                                    View Materials
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                <h4 className="font-bold text-slate-900">Recent Activity</h4>
                                <div className="space-y-2">
                                  <div className="p-3 bg-slate-50 rounded-lg">
                                    <p className="text-sm text-slate-600">Submitted: Week 3 Assignment - PC101</p>
                                    <p className="text-xs text-slate-500">2 hours ago</p>
                                  </div>
                                  <div className="p-3 bg-slate-50 rounded-lg">
                                    <p className="text-sm text-slate-600">Graded: Midterm Exam - REL250A</p>
                                    <p className="text-xs text-slate-500">Yesterday</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </TabsContent>

                  {/* My Profile Tab */}
                  <TabsContent value="profile" className="m-0 space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-bold text-green-900 mb-2">Student Profile</h3>
                      <p className="text-sm text-green-700">Manage your personal details, privacy, and financial records.</p>
                    </div>
                    
                    <Tabs defaultValue="information" className="space-y-6">
                      <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full justify-start overflow-x-auto">
                        <TabsTrigger value="information" className="rounded-lg px-6 flex items-center gap-2">
                          <User size={16} /> My Information
                        </TabsTrigger>
                        <TabsTrigger value="privacy" className="rounded-lg px-6 flex items-center gap-2">
                          <Shield size={16} /> Privacy Settings
                        </TabsTrigger>
                        <TabsTrigger value="username" className="rounded-lg px-6 flex items-center gap-2">
                          <Mail size={16} /> Username & Emails
                        </TabsTrigger>
                        <TabsTrigger value="finances" className="rounded-lg px-6 flex items-center gap-2">
                          <DollarSign size={16} /> Finances
                        </TabsTrigger>
                        <TabsTrigger value="documents" className="rounded-lg px-6 flex items-center gap-2">
                          <FileText size={16} /> Documents
                        </TabsTrigger>
                      </TabsList>

                      <div className="mt-6">
                        <TabsContent value="information" className="m-0">
                          <Card className="border border-slate-200">
                            <CardHeader>
                              <CardTitle>Personal Information</CardTitle>
                              <CardDescription>Update your personal details and contact information</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <div>
                                    <label className="text-sm font-medium text-slate-700">First Name</label>
                                    <Input defaultValue="Reagan" className="mt-1" />
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                                    <Input defaultValue="Otema" className="mt-1" />
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-slate-700">Date of Birth</label>
                                    <Input type="date" defaultValue="1995-06-15" className="mt-1" />
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div>
                                    <label className="text-sm font-medium text-slate-700">Email</label>
                                    <Input defaultValue="reagan@nexterp.com" className="mt-1" />
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-slate-700">Phone</label>
                                    <Input defaultValue="+256 123 456 789" className="mt-1" />
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-slate-700">Address</label>
                                    <Input defaultValue="Kampala, Uganda" className="mt-1" />
                                  </div>
                                </div>
                              </div>
                              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                Save Changes
                              </Button>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="privacy" className="m-0">
                          <Card className="border border-slate-200">
                            <CardHeader>
                              <CardTitle>Privacy Settings</CardTitle>
                              <CardDescription>Manage your privacy and communication preferences</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                                  <div>
                                    <h4 className="font-medium text-slate-900">Profile Visibility</h4>
                                    <p className="text-sm text-slate-600">Control who can see your profile</p>
                                  </div>
                                  <select className="text-sm border border-slate-200 rounded px-3 py-1">
                                    <option>Everyone</option>
                                    <option>Students Only</option>
                                    <option>Private</option>
                                  </select>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                                  <div>
                                    <h4 className="font-medium text-slate-900">Email Notifications</h4>
                                    <p className="text-sm text-slate-600">Receive updates about your courses</p>
                                  </div>
                                  <Button variant="outline" size="sm">Configure</Button>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                                  <div>
                                    <h4 className="font-medium text-slate-900">Data Sharing</h4>
                                    <p className="text-sm text-slate-600">Control how your data is used</p>
                                  </div>
                                  <Button variant="outline" size="sm">Manage</Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="username" className="m-0">
                          <Card className="border border-slate-200">
                            <CardHeader>
                              <CardTitle>Account Credentials</CardTitle>
                              <CardDescription>Manage your login email and system username</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                                  <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase">Primary Email</p>
                                    <p className="font-bold text-slate-900">reagan@nexterp.com</p>
                                  </div>
                                  <Button variant="outline" size="sm" className="rounded-xl">Change</Button>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                                  <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase">System Username</p>
                                    <p className="font-bold text-slate-900">STU-2024-001</p>
                                  </div>
                                  <Badge className="bg-blue-50 text-blue-600 border-none">Permanent</Badge>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                  <div className="flex items-center justify-between mb-4">
                                    <div>
                                      <p className="text-xs font-bold text-slate-400 uppercase">Password</p>
                                      <p className="font-bold text-slate-900">•••••••••</p>
                                    </div>
                                    <Button variant="outline" size="sm" className="rounded-xl">Change</Button>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="finances" className="m-0">
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <Card className="border-none shadow-sm rounded-2xl bg-blue-600 text-white">
                                <CardContent className="p-6">
                                  <p className="text-blue-100 text-sm font-medium">Total Balance Due</p>
                                  <h3 className="text-2xl font-bold mt-1">UGX 1,250,000</h3>
                                  <Button className="w-full mt-4 bg-white text-blue-600 hover:bg-blue-50 border-none rounded-xl">Pay Now</Button>
                                </CardContent>
                              </Card>
                              <Card className="border-none shadow-sm rounded-2xl">
                                <CardContent className="p-6">
                                  <p className="text-slate-500 text-sm font-medium">Last Payment</p>
                                  <h3 className="text-2xl font-bold text-slate-900 mt-1">UGX 800,000</h3>
                                  <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1"><CheckCircle size={12} /> Confirmed</p>
                                </CardContent>
                              </Card>
                              <Card className="border-none shadow-sm rounded-2xl">
                                <CardContent className="p-6">
                                  <p className="text-slate-500 text-sm font-medium">Next Deadline</p>
                                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Oct 15, 2024</h3>
                                  <p className="text-xs text-orange-600 mt-1 flex items-center gap-1"><Clock size={12} /> 12 days left</p>
                                </CardContent>
                              </Card>
                            </div>

                            <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
                              <CardHeader>
                                <CardTitle>Payment History</CardTitle>
                              </CardHeader>
                              <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                  <table className="w-full text-left border-collapse">
                                    <thead>
                                      <tr className="bg-slate-50/50 border-b border-slate-100">
                                        <th className="p-4 pl-8 text-xs font-bold text-slate-500 uppercase">Invoice ID</th>
                                        <th className="p-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                                        <th className="p-4 text-xs font-bold text-slate-500 uppercase">Amount</th>
                                        <th className="p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                                        <th className="p-4 pr-8 text-xs font-bold text-slate-500 uppercase text-right">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                      {[
                                        { id: 'INV-001', date: 'Sep 15, 2024', amount: 'UGX 800,000', status: 'Paid' },
                                        { id: 'INV-002', date: 'Aug 10, 2024', amount: 'UGX 1,500,000', status: 'Paid' }
                                      ].map((inv) => (
                                        <tr key={inv.id} className="hover:bg-slate-50/30 transition-colors">
                                          <td className="p-4 pl-8 font-bold text-slate-900">{inv.id}</td>
                                          <td className="p-4 text-sm text-slate-500">{inv.date}</td>
                                          <td className="p-4 font-bold text-slate-900">{inv.amount}</td>
                                          <td className="p-4"><Badge className="bg-emerald-50 text-emerald-600 border-none">{inv.status}</Badge></td>
                                          <td className="p-4 pr-8 text-right"><Button variant="ghost" size="sm" className="text-blue-600"><Download size={16} /></Button></td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="documents" className="m-0">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                              { title: 'Admission Letter', date: 'Jan 12, 2024', type: 'Official' },
                              { title: 'Term 1 Transcript', date: 'May 20, 2024', type: 'Academic' },
                              { title: 'Tuition Receipt #001', date: 'Sep 15, 2024', type: 'Financial' },
                              { title: 'Student ID Card Copy', date: 'Jan 15, 2024', type: 'Identity' }
                            ].map((doc) => (
                              <Card key={doc.title} className="border-none shadow-sm rounded-2xl hover:border-blue-200 border border-transparent transition-all group">
                                <CardContent className="p-6 flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <div className="p-3 bg-slate-100 text-slate-600 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                      <FileText size={24} />
                                    </div>
                                    <div>
                                      <h4 className="font-bold text-slate-900">{doc.title}</h4>
                                      <p className="text-xs text-slate-500">{doc.type} • {doc.date}</p>
                                    </div>
                                  </div>
                                  <Button variant="ghost" size="icon" className="rounded-xl text-slate-400 hover:text-blue-600">
                                    <Download size={20} />
                                  </Button>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </TabsContent>

                  {/* Finances Tab */}
                  <TabsContent value="finances" className="m-0 space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-bold text-green-900 mb-2">Financial Portal</h3>
                      <p className="text-sm text-green-700">Manage your tuition, payments, and financial aid.</p>
                    </div>
                    
                    <Tabs defaultValue="account" className="space-y-6">
                      <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full justify-start overflow-x-auto">
                        <TabsTrigger value="account" className="rounded-lg px-6 flex items-center gap-2">
                          <CreditCard size={16} /> Account Information
                        </TabsTrigger>
                        <TabsTrigger value="discount" className="rounded-lg px-6 flex items-center gap-2">
                          <Shield size={16} /> Tuition Discount
                        </TabsTrigger>
                        <TabsTrigger value="payment" className="rounded-lg px-6 flex items-center gap-2">
                          <DollarSign size={16} /> Pay Tuition
                        </TabsTrigger>
                        <TabsTrigger value="history" className="rounded-lg px-6 flex items-center gap-2">
                          <FileText size={16} /> Billing History
                        </TabsTrigger>
                      </TabsList>

                      <div className="mt-6">
                        <TabsContent value="account" className="m-0">
                          <Card className="border-none shadow-sm rounded-3xl">
                            <CardHeader>
                              <CardTitle>Account Information</CardTitle>
                              <CardDescription>View your account details and billing information</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Student ID</p>
                                    <p className="font-bold text-slate-900">STU-2024-001</p>
                                  </div>
                                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Account Type</p>
                                    <p className="font-bold text-slate-900">PathwayConnect</p>
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Billing Cycle</p>
                                    <p className="font-bold text-slate-900">Semester</p>
                                  </div>
                                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Payment Method</p>
                                    <p className="font-bold text-slate-900">Bank Transfer</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="discount" className="m-0">
                          <Card className="border-none shadow-sm rounded-3xl">
                            <CardHeader>
                              <CardTitle>Tuition Discount</CardTitle>
                              <CardDescription>View your eligible discounts and financial aid</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center">
                                      <Shield size={24} />
                                    </div>
                                    <div>
                                      <h3 className="font-bold text-slate-900">50% Tuition Discount</h3>
                                      <p className="text-sm text-slate-600">Applied to all courses</p>
                                    </div>
                                  </div>
                                  <Badge className="bg-green-100 text-green-800 border-none">Active</Badge>
                                </div>
                                <p className="text-sm text-green-800 mt-4">
                                  You qualify for a 50% tuition discount as part of our scholarship program.
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="payment" className="m-0">
                          <Card className="border-none shadow-sm rounded-3xl">
                            <CardHeader>
                              <CardTitle>Pay Tuition</CardTitle>
                              <CardDescription>Make a payment towards your tuition balance</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <div className="text-center space-y-4">
                                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
                                    <CreditCard size={32} />
                                  </div>
                                  <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Current Balance</h3>
                                    <p className="text-4xl font-bold text-blue-600 mt-2">$14.92</p>
                                  </div>
                                  <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-semibold">
                                    Pay Now
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="history" className="m-0">
                          <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
                            <CardHeader>
                              <CardTitle>Billing History</CardTitle>
                              <CardDescription>View your past payments and download receipts</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                              <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                  <thead>
                                    <tr className="bg-slate-50/50 border-b border-slate-100">
                                      <th className="p-4 pl-8 text-xs font-bold text-slate-500 uppercase">Invoice ID</th>
                                      <th className="p-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                                      <th className="p-4 text-xs font-bold text-slate-500 uppercase">Amount</th>
                                      <th className="p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                                      <th className="p-4 pr-8 text-xs font-bold text-slate-500 uppercase text-right">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-slate-50">
                                    {[
                                      { id: 'INV-001', date: 'Sep 15, 2024', amount: '$800.00', status: 'Paid' },
                                      { id: 'INV-002', date: 'Aug 10, 2024', amount: '$1,500.00', status: 'Paid' },
                                      { id: 'INV-003', date: 'Jul 5, 2024', amount: '$750.00', status: 'Paid' }
                                    ].map((inv) => (
                                      <tr key={inv.id} className="hover:bg-slate-50/30 transition-colors">
                                        <td className="p-4 pl-8 font-bold text-slate-900">{inv.id}</td>
                                        <td className="p-4 text-sm text-slate-500">{inv.date}</td>
                                        <td className="p-4 font-bold text-slate-900">{inv.amount}</td>
                                        <td className="p-4">
                                          <Badge className="bg-emerald-50 text-emerald-600 border-none">
                                            {inv.status}
                                          </Badge>
                                        </td>
                                        <td className="p-4 pr-8 text-right">
                                          <Button variant="ghost" size="sm" className="text-blue-600">
                                            <Download size={16} />
                                          </Button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </TabsContent>

                  {/* Documents Tab */}
                  <TabsContent value="documents" className="m-0 space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-bold text-blue-900 mb-2">Document Center</h3>
                      <p className="text-sm text-blue-700">Manage your academic and administrative documents.</p>
                    </div>
                    
                    <Tabs defaultValue="center" className="space-y-6">
                      <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full justify-start overflow-x-auto">
                        <TabsTrigger value="center" className="rounded-lg px-6 flex items-center gap-2">
                          <FileText size={16} /> Document Center
                        </TabsTrigger>
                        <TabsTrigger value="endorsement" className="rounded-lg px-6 flex items-center gap-2">
                          <FileCheck size={16} /> Ecclesiastical Endorsement
                        </TabsTrigger>
                        <TabsTrigger value="transcripts" className="rounded-lg px-6 flex items-center gap-2">
                          <Award size={16} /> Transcripts
                        </TabsTrigger>
                        <TabsTrigger value="transfer" className="rounded-lg px-6 flex items-center gap-2">
                          <Upload size={16} /> Credit Transfer
                        </TabsTrigger>
                        <TabsTrigger value="tax" className="rounded-lg px-6 flex items-center gap-2">
                          <Receipt size={16} /> Tax Information
                        </TabsTrigger>
                        <TabsTrigger value="assessment" className="rounded-lg px-6 flex items-center gap-2">
                          <Languages size={16} /> English Assessment
                        </TabsTrigger>
                      </TabsList>

                      <div className="mt-6">
                        <TabsContent value="center" className="m-0">
                          <div className="space-y-4">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <p className="text-sm text-blue-800">
                                No documents due. Your document center is up to date.
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {[
                                { title: 'Student ID Card', date: 'Jan 15, 2024', type: 'Identity', status: 'Active' },
                                { title: 'Admission Letter', date: 'Jan 12, 2024', type: 'Official', status: 'Completed' },
                                { title: 'Enrollment Agreement', date: 'Jan 10, 2024', type: 'Legal', status: 'Signed' },
                                { title: 'Immunization Record', date: 'Jan 8, 2024', type: 'Health', status: 'Verified' }
                              ].map((doc) => (
                                <Card key={doc.title} className="border border-slate-200 hover:border-blue-200 transition-colors">
                                  <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                      <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                                          <FileText size={20} />
                                        </div>
                                        <div>
                                          <h4 className="font-bold text-slate-900">{doc.title}</h4>
                                          <p className="text-xs text-slate-500">{doc.type} • {doc.date}</p>
                                        </div>
                                      </div>
                                      <Badge className="bg-green-100 text-green-800 border-none">
                                        {doc.status}
                                      </Badge>
                                    </div>
                                    <div className="flex gap-2">
                                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                                        <Download size={14} /> Download
                                      </Button>
                                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                                        <Upload size={14} /> Upload
                                      </Button>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="endorsement" className="m-0">
                          <Card className="border border-slate-200">
                            <CardHeader>
                              <CardTitle>Ecclesiastical Endorsement</CardTitle>
                              <CardDescription>Required for all students attending faith-based education</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                  <CheckCircle className="text-green-600" size={24} />
                                  <div>
                                    <h4 className="font-bold text-green-800">Endorsement Complete</h4>
                                    <p className="text-sm text-green-700">Your ecclesiastical endorsement has been received and approved.</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-lg">
                                  <p className="text-sm font-bold text-slate-700 mb-2">Endorsement Details</p>
                                  <div className="space-y-2 text-sm text-slate-600">
                                    <p><strong>Submitted:</strong> January 15, 2024</p>
                                    <p><strong>Endorsed by:</strong> Bishop John Smith</p>
                                    <p><strong>Ward:</strong> Kampala 1st Ward</p>
                                    <p><strong>Status:</strong> Approved</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="transcripts" className="m-0">
                          <div className="space-y-6">
                            <Card className="border border-slate-200">
                              <CardHeader>
                                <CardTitle>Academic Transcripts</CardTitle>
                                <CardDescription>View and download your official academic records</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-4">
                                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <h4 className="font-bold text-blue-900">PathwayConnect Transcript</h4>
                                        <p className="text-sm text-blue-700">Current Program • GPA: 0.00</p>
                                      </div>
                                      <Button className="bg-blue-600 text-white hover:bg-blue-700">
                                        <Download size={16} className="mr-2" /> Download
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="transfer" className="m-0">
                          <Card className="border border-slate-200">
                            <CardHeader>
                              <CardTitle>Credit Transfer</CardTitle>
                              <CardDescription>Transfer previous academic credits to your current program</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                  <AlertCircle className="text-orange-600" size={24} />
                                  <div>
                                    <h4 className="font-bold text-orange-800">No Transfer Credits</h4>
                                    <p className="text-sm text-orange-700">You haven't submitted any transfer credits yet.</p>
                                  </div>
                                </div>
                              </div>
                              
                              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                <Upload size={16} className="mr-2" /> Submit Transfer Credits
                              </Button>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="tax" className="m-0">
                          <Card className="border border-slate-200">
                            <CardHeader>
                              <CardTitle>Tax Information</CardTitle>
                              <CardDescription>Manage your tax documents and information for tuition payments</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                  <CheckCircle className="text-green-600" size={24} />
                                  <div>
                                    <h4 className="font-bold text-green-800">Tax Information Complete</h4>
                                    <p className="text-sm text-green-700">Your tax information is up to date.</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        
                        <TabsContent value="assessment" className="m-0">
                          <Card className="border border-slate-200">
                            <CardHeader>
                              <CardTitle>English Assessment</CardTitle>
                              <CardDescription>Complete your English proficiency assessment for program requirements</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                  <CheckCircle className="text-green-600" size={24} />
                                  <div>
                                    <h4 className="font-bold text-green-800">English Assessment Completed</h4>
                                    <p className="text-sm text-green-700">You have met the English proficiency requirements.</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </TabsContent>

                  {/* Resources Tab */}
                  <TabsContent value="resources" className="m-0 space-y-6">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h3 className="font-bold text-purple-900 mb-2">Resources</h3>
                      <p className="text-sm text-purple-700">Access student software, career tools, academic resources, and community support.</p>
                    </div>
                    
                    <Tabs defaultValue="software" className="space-y-6">
                      <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full justify-start overflow-x-auto">
                        <TabsTrigger value="software" className="rounded-lg px-6 flex items-center gap-2">
                          <Laptop size={16} /> Student Software
                        </TabsTrigger>
                        <TabsTrigger value="careers" className="rounded-lg px-6 flex items-center gap-2">
                          <Briefcase size={16} /> Careers
                        </TabsTrigger>
                        <TabsTrigger value="academic" className="rounded-lg px-6 flex items-center gap-2">
                          <AcademicIcon size={16} /> Academic Tools
                        </TabsTrigger>
                        <TabsTrigger value="community" className="rounded-lg px-6 flex items-center gap-2">
                          <Users size={16} /> Community
                        </TabsTrigger>
                        <TabsTrigger value="wellness" className="rounded-lg px-6 flex items-center gap-2">
                          <Heart size={16} /> Student Wellness
                        </TabsTrigger>
                      </TabsList>

                      <div className="mt-6">
                        <TabsContent value="software" className="m-0">
                          <div className="space-y-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <h3 className="font-bold text-blue-900 mb-2">Student Software Resources</h3>
                              <p className="text-sm text-blue-700">Access essential software and tools for your academic success.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {[
                                {
                                  title: 'Microsoft Office 365',
                                  description: 'Free access to Word, Excel, PowerPoint, and more',
                                  status: 'Available'
                                },
                                {
                                  title: 'Adobe Creative Cloud',
                                  description: 'Access to Photoshop, Illustrator, and other creative tools',
                                  status: 'Available'
                                },
                                {
                                  title: 'VPN Service',
                                  description: 'Secure remote access to campus resources',
                                  status: 'Setup Required'
                                },
                                {
                                  title: 'Cloud Storage',
                                  description: '1TB of cloud storage for your files and documents',
                                  status: 'Active'
                                }
                              ].map((resource) => (
                                <Card key={resource.title} className="border border-slate-200 hover:border-blue-200 transition-colors">
                                  <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Laptop size={24} />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 mb-1">{resource.title}</h4>
                                        <p className="text-sm text-slate-600 mb-3">{resource.description}</p>
                                        <div className="flex items-center justify-between">
                                          <Badge className={
                                            resource.status === 'Available' ? 'bg-green-100 text-green-800 border-none' :
                                            resource.status === 'Active' ? 'bg-blue-100 text-blue-800 border-none' :
                                            'bg-orange-100 text-orange-800 border-none'
                                          }>
                                            {resource.status}
                                          </Badge>
                                          <Button variant="outline" size="sm">
                                            {resource.status === 'Available' ? 'Download Now' :
                                             resource.status === 'Active' ? 'Access Storage' : 'Configure'}
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="careers" className="m-0">
                          <div className="space-y-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <h3 className="font-bold text-green-900 mb-2">Career Development Resources</h3>
                              <p className="text-sm text-green-700">Build your professional skills and prepare for your future career.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {[
                                {
                                  title: 'Resume Builder',
                                  description: 'Create professional resumes with templates and guidance',
                                  category: 'Career Tools'
                                },
                                {
                                  title: 'Interview Preparation',
                                  description: 'Practice interviews and get tips for success',
                                  category: 'Career Tools'
                                },
                                {
                                  title: 'Job Board',
                                  description: 'Browse job opportunities from partner companies',
                                  category: 'Opportunities'
                                },
                                {
                                  title: 'Career Counseling',
                                  description: 'One-on-one guidance with career advisors',
                                  category: 'Support'
                                },
                                {
                                  title: 'Skills Assessment',
                                  description: 'Identify your strengths and areas for growth',
                                  category: 'Assessment'
                                },
                                {
                                  title: 'Networking Events',
                                  description: 'Connect with alumni and industry professionals',
                                  category: 'Events'
                                }
                              ].map((resource) => (
                                <Card key={resource.title} className="border border-slate-200 hover:border-green-200 transition-colors">
                                  <CardContent className="p-6">
                                    <div className="text-center space-y-4">
                                      <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                        <Briefcase size={24} />
                                      </div>
                                      <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{resource.title}</h4>
                                        <p className="text-sm text-slate-600 mb-2">{resource.description}</p>
                                        <Badge className="bg-green-100 text-green-800 border-none text-xs">
                                          {resource.category}
                                        </Badge>
                                      </div>
                                      <Button variant="outline" size="sm" className="w-full">
                                        Access Resource
                                      </Button>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="academic" className="m-0">
                          <div className="space-y-6">
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                              <h3 className="font-bold text-purple-900 mb-2">Academic Tools & Resources</h3>
                              <p className="text-sm text-purple-700">Enhance your learning experience with academic support tools.</p>
                            </div>
                            
                            <div className="space-y-4">
                              {[
                                {
                                  title: 'Online Library',
                                  description: 'Access digital books, journals, and research databases',
                                  features: ['24/7 Access', 'Research Database', 'E-books Collection']
                                },
                                {
                                  title: 'Writing Center',
                                  description: 'Get help with writing assignments and research papers',
                                  features: ['Online Tutoring', 'Grammar Check', 'Citation Help']
                                },
                                {
                                  title: 'Math Lab',
                                  description: 'Math tutoring and problem-solving support',
                                  features: ['Live Tutoring', 'Practice Problems', 'Study Groups']
                                },
                                {
                                  title: 'Study Groups',
                                  description: 'Connect with classmates for collaborative learning',
                                  features: ['Virtual Meeting Rooms', 'Study Schedules', 'Peer Support']
                                }
                              ].map((tool) => (
                                <Card key={tool.title} className="border border-slate-200">
                                  <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                      <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <AcademicIcon size={24} />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 mb-1">{tool.title}</h4>
                                        <p className="text-sm text-slate-600 mb-3">{tool.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                          {tool.features.map((feature) => (
                                            <Badge key={feature} className="bg-purple-100 text-purple-800 border-none text-xs">
                                              {feature}
                                            </Badge>
                                          ))}
                                        </div>
                                        <Button variant="outline" size="sm" className="bg-purple-600 text-white hover:bg-purple-700 border-none">
                                          Access Tool
                                        </Button>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="community" className="m-0">
                          <div className="space-y-6">
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                              <h3 className="font-bold text-orange-900 mb-2">Community & Social Resources</h3>
                              <p className="text-sm text-orange-700">Connect with fellow students and participate in community activities.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {[
                                {
                                  title: 'Student Forums',
                                  description: 'Discussion boards for academic and social topics',
                                  members: '1,234 students',
                                  activity: 'Active Now'
                                },
                                {
                                  title: 'Study Groups',
                                  description: 'Join or create study groups for your courses',
                                  members: '89 groups',
                                  activity: '12 Active'
                                },
                                {
                                  title: 'Social Events',
                                  description: 'Virtual and in-person student activities',
                                  members: '456 participants',
                                  activity: 'Next: Friday'
                                },
                                {
                                  title: 'Student Clubs',
                                  description: 'Interest-based clubs and organizations',
                                  members: '23 clubs',
                                  activity: 'Accepting Members'
                                }
                              ].map((community) => (
                                <Card key={community.title} className="border border-slate-200 hover:border-orange-200 transition-colors">
                                  <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                      <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Users size={24} />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 mb-1">{community.title}</h4>
                                        <p className="text-sm text-slate-600 mb-3">{community.description}</p>
                                        <div className="flex items-center justify-between mb-3">
                                          <span className="text-xs text-slate-500">{community.members}</span>
                                          <Badge className="bg-orange-100 text-orange-800 border-none text-xs">
                                            {community.activity}
                                          </Badge>
                                        </div>
                                        <Button variant="outline" size="sm" className="w-full">
                                          Join Community
                                        </Button>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="wellness" className="m-0">
                          <div className="space-y-6">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                              <h3 className="font-bold text-red-900 mb-2">Student Wellness & Support</h3>
                              <p className="text-sm text-red-700">Resources for mental health, physical wellness, and student support.</p>
                            </div>
                            
                            <div className="space-y-4">
                              {[
                                {
                                  title: 'Counseling Services',
                                  description: 'Professional mental health support and counseling',
                                  phone: '1-800-HELP-NOW',
                                  available: '24/7'
                                },
                                {
                                  title: 'Health & Wellness',
                                  description: 'Physical health resources and wellness programs',
                                  phone: '1-800-WELLNESS',
                                  available: 'Mon-Fri 8am-6pm'
                                },
                                {
                                  title: 'Crisis Support',
                                  description: 'Emergency support for students in crisis',
                                  phone: '911',
                                  available: 'Emergency'
                                },
                                {
                                  title: 'Peer Support',
                                  description: 'Student-to-student support and mentoring',
                                  phone: '1-800-PEER-HELP',
                                  available: 'Daily 9am-9pm'
                                }
                              ].map((service) => (
                                <Card key={service.title} className="border border-slate-200">
                                  <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                      <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Heart size={24} />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="font-bold text-slate-900 mb-1">{service.title}</h4>
                                        <p className="text-sm text-slate-600 mb-3">{service.description}</p>
                                        <div className="flex items-center justify-between">
                                          <div>
                                            <p className="text-xs text-slate-500">Contact: {service.phone}</p>
                                            <p className="text-xs text-slate-500">Available: {service.available}</p>
                                          </div>
                                          <Button variant="outline" size="sm" className="bg-red-600 text-white hover:bg-red-700 border-none">
                                            Get Help
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </TabsContent>

                  {/* Support Tab */}
                  <TabsContent value="support" className="m-0 space-y-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h3 className="font-bold text-orange-900 mb-2">Support</h3>
                      <p className="text-sm text-orange-700">Get help from your success team, access help center resources, and find community support.</p>
                    </div>
                    
                    <Tabs defaultValue="team" className="space-y-6">
                      <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full justify-start overflow-x-auto">
                        <TabsTrigger value="team" className="rounded-lg px-6 flex items-center gap-2">
                          <UserRoundCheck size={16} /> My Success Team
                        </TabsTrigger>
                        <TabsTrigger value="helpcenter" className="rounded-lg px-6 flex items-center gap-2">
                          <Book size={16} /> Help Center
                        </TabsTrigger>
                        <TabsTrigger value="companion" className="rounded-lg px-6 flex items-center gap-2">
                          <Heart size={16} /> Companion
                        </TabsTrigger>
                        <TabsTrigger value="community" className="rounded-lg px-6 flex items-center gap-2">
                          <Users size={16} /> Community
                        </TabsTrigger>
                      </TabsList>

                      <div className="mt-6">
                        <TabsContent value="team" className="m-0">
                          <div className="space-y-6">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <h3 className="font-bold text-green-900 mb-2">My Success Team</h3>
                              <p className="text-sm text-green-700">Your dedicated team of professionals here to support your academic journey.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {[
                                {
                                  name: 'Dr. Sarah Johnson',
                                  title: 'Academic Advisor',
                                  email: 'sarah.johnson@nexterp.com',
                                  phone: '+256 123 456 789',
                                  image: 'SJ',
                                  availability: 'Mon-Fri 9am-5pm',
                                  specialties: ['Course Planning', 'Academic Guidance', 'Career Planning']
                                },
                                {
                                  name: 'James Okello',
                                  title: 'Financial Counselor',
                                  email: 'james.okello@nexterp.com',
                                  phone: '+256 123 456 790',
                                  image: 'JO',
                                  availability: 'Mon-Fri 8am-6pm',
                                  specialties: ['Tuition Assistance', 'Scholarships', 'Payment Plans']
                                }
                              ].map((member) => (
                                <Card key={member.name} className="border border-slate-200 hover:border-green-200 transition-colors">
                                  <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                      <Avatar className="w-16 h-16">
                                        <AvatarFallback className="bg-green-100 text-green-600 font-bold">
                                          {member.image}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div className="flex-1">
                                        <h4 className="font-bold text-slate-900">{member.name}</h4>
                                        <p className="text-sm text-slate-600 mb-2">{member.title}</p>
                                        <div className="space-y-1 text-xs text-slate-500 mb-3">
                                          <p className="flex items-center gap-1">
                                            <Mail size={12} /> {member.email}
                                          </p>
                                          <p className="flex items-center gap-1">
                                            <Phone size={12} /> {member.phone}
                                          </p>
                                          <p>Available: {member.availability}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mb-3">
                                          {member.specialties.map((specialty) => (
                                            <Badge key={specialty} className="bg-green-100 text-green-800 border-none text-xs">
                                              {specialty}
                                            </Badge>
                                          ))}
                                        </div>
                                        <div className="flex gap-2">
                                          <Button variant="outline" size="sm" className="flex-1">
                                            <Mail size={14} className="mr-1" /> Email
                                          </Button>
                                          <Button variant="outline" size="sm" className="flex-1">
                                            <Phone size={14} className="mr-1" /> Call
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="helpcenter" className="m-0">
                          <div className="space-y-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <h3 className="font-bold text-blue-900 mb-2">Help Center</h3>
                              <p className="text-sm text-blue-700">Find answers to common questions and access helpful resources.</p>
                            </div>
                            
                            <div className="relative">
                              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                              <Input placeholder="Search for help articles, guides, and FAQs..." className="pl-12 h-14 rounded-2xl bg-white border-slate-200 shadow-sm" />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {['Registration Guide', 'Fee Payment Methods', 'Accessing Course Material', 'Exam Regulations'].map((item) => (
                                <button key={item} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all text-left group">
                                  <span className="font-bold text-slate-700 group-hover:text-blue-600">{item}</span>
                                  <ChevronRight size={18} className="text-slate-400 group-hover:text-blue-600" />
                                </button>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="companion" className="m-0">
                          <div className="space-y-6">
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                              <h3 className="font-bold text-purple-900 mb-2">Companion Program</h3>
                              <p className="text-sm text-purple-700">Peer support and mentoring to help you succeed in your academic journey.</p>
                            </div>
                            
                            <Card className="border-none shadow-sm rounded-3xl bg-slate-900 text-white overflow-hidden">
                              <CardHeader className="bg-blue-600 p-6">
                                <div className="flex items-center gap-3">
                                  <div className="p-2 bg-white/20 rounded-xl"><Sparkles size={24} /></div>
                                  <div>
                                    <CardTitle>NextERP AI Companion</CardTitle>
                                    <CardDescription className="text-blue-100">Ask me anything about your courses, schedule, or campus life.</CardDescription>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="p-6 h-80 flex flex-col justify-end">
                                <div className="space-y-4 mb-6">
                                  <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                                    <p className="text-sm">Hello! I'm your AI academic assistant. How can I help you today?</p>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Input className="bg-slate-800 border-slate-700 text-white rounded-xl h-12" placeholder="Type your question..." />
                                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl h-12 px-6">Send</Button>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="community" className="m-0">
                          <div className="space-y-6">
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                              <h3 className="font-bold text-orange-900 mb-2">Community Support</h3>
                              <p className="text-sm text-orange-700">Connect with fellow students and participate in community activities.</p>
                            </div>
                            
                            {/* Devotionals Section */}
                            <Card className="border border-slate-200">
                              <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                  <Church className="text-orange-600" size={24} />
                                  Devotionals
                                </CardTitle>
                                <CardDescription>
                                  Devotionals encourage faith and discipleship during your education. Watch for announcements about new devotionals in your portal alerts and weekly updates!
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-4">
                                  {[
                                    {
                                      title: 'Weekly Devotional',
                                      date: 'Every Tuesday, 7:00 PM',
                                      speaker: 'Campus Chaplain',
                                      topic: 'Faith in Learning'
                                    },
                                    {
                                      title: 'Student Testimony Meeting',
                                      date: 'First Sunday Monthly',
                                      speaker: 'Student Leaders',
                                      topic: 'Personal Spiritual Experiences'
                                    }
                                  ].map((devotional) => (
                                    <div key={devotional.title} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <h4 className="font-bold text-orange-900">{devotional.title}</h4>
                                          <p className="text-sm text-orange-700">{devotional.date}</p>
                                          <p className="text-sm text-orange-600">Speaker: {devotional.speaker}</p>
                                          <p className="text-sm text-orange-600">Topic: {devotional.topic}</p>
                                        </div>
                                        <Button variant="outline" size="sm" className="bg-orange-600 text-white hover:bg-orange-700 border-none">
                                          Join
                                        </Button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                            
                            {/* Meet with Missionaries */}
                            <Card className="border border-slate-200">
                              <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                  <Users className="text-orange-600" size={24} />
                                  Meet with Missionaries
                                </CardTitle>
                                <CardDescription>
                                  Want to learn more about Jesus Christ and His restored gospel? Meet with missionaries from The Church of Jesus Christ of Latter-day Saints!
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="font-bold text-orange-900 mb-2">Schedule a Meeting</h4>
                                      <p className="text-sm text-orange-700 mb-3">Meet with missionaries to learn about the gospel</p>
                                      <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                                        Schedule Visit
                                      </Button>
                                    </div>
                                    <div>
                                      <h4 className="font-bold text-orange-900 mb-2">Contact Information</h4>
                                      <div className="space-y-1 text-sm text-orange-700">
                                        <p>Phone: +256 123 456 789</p>
                                        <p>Email: missionaries@nexterp.com</p>
                                        <p>Available: Daily 9am-9pm</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                            
                            {/* Social Links */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <Card className="border border-slate-200">
                                <CardContent className="p-6">
                                  <div className="text-center space-y-4">
                                    <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                                      <Church size={24} />
                                    </div>
                                    <div>
                                      <h4 className="font-bold text-slate-900 mb-2">churchofjesuschrist.org</h4>
                                      <p className="text-sm text-slate-600 mb-4">
                                        Find inspirational content and learn more about what members of The Church of Jesus Christ of Latter-day Saints believe.
                                      </p>
                                      <Button variant="outline" size="sm" className="w-full">
                                        <ExternalLink size={14} className="mr-1" /> Visit Website
                                      </Button>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                              
                              <Card className="border border-slate-200">
                                <CardContent className="p-6">
                                  <div className="text-center space-y-4">
                                    <h4 className="font-bold text-slate-900">Connect With Us</h4>
                                    <div className="flex justify-center gap-4">
                                      {[
                                        { name: 'Facebook', icon: 'f' },
                                        { name: 'Instagram', icon: 'i' },
                                        { name: 'LinkedIn', icon: 'in' },
                                        { name: 'X (Twitter)', icon: 'x' }
                                      ].map((social) => (
                                        <Button key={social.name} variant="outline" size="sm" className="w-12 h-12 rounded-full">
                                          {social.icon}
                                        </Button>
                                      ))}
                                    </div>
                                    <p className="text-sm text-slate-600">Follow us for updates and inspiration</p>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-600">
            <div className="flex items-center gap-4">
              <span>Home</span>
              <span>|</span>
              <span>Logout</span>
              <span>|</span>
              <span>Site Index</span>
              <span>|</span>
              <span>Privacy Policy</span>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <span>Version: 26.0.1.10</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentPortal;
