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
  Certificate,
  Languages,
  Receipt
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from '@/context/AuthContext';

const Documents = () => {
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
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-64 bg-white rounded-lg border border-slate-200">
            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-700 hover:bg-slate-100"
                    onClick={() => navigate('/school/academics')}
                  >
                    <BookOpen size={18} className="mr-3" />
                    Academics
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-700 hover:bg-slate-100"
                    onClick={() => navigate('/school/profile')}
                  >
                    <User size={18} className="mr-3" />
                    My Profile
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-700 hover:bg-slate-100"
                    onClick={() => navigate('/school/finances')}
                  >
                    <DollarSign size={18} className="mr-3" />
                    Finances
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-blue-600 bg-blue-50 hover:bg-blue-100"
                  >
                    <FileText size={18} className="mr-3" />
                    Documents
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-700 hover:bg-slate-100"
                    onClick={() => navigate('/school/resources')}
                  >
                    <Settings size={18} className="mr-3" />
                    Resources
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-700 hover:bg-slate-100"
                    onClick={() => navigate('/school/support')}
                  >
                    <HelpCircle size={18} className="mr-3" />
                    Support
                  </Button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main id="main-content" className="flex-1">
            <div className="space-y-6">
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

              {/* Document Center */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Document Center</CardTitle>
                  <CardDescription>Manage your academic and administrative documents.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="center" className="space-y-6">
                    <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full justify-start overflow-x-auto">
                      <TabsTrigger value="center" className="rounded-lg px-6 flex items-center gap-2">
                        <FileText size={16} /> Document Center
                      </TabsTrigger>
                      <TabsTrigger value="endorsement" className="rounded-lg px-6 flex items-center gap-2">
                        <FileCheck size={16} /> Ecclesiastical Endorsement
                      </TabsTrigger>
                      <TabsTrigger value="transcripts" className="rounded-lg px-6 flex items-center gap-2">
                        <Certificate size={16} /> Transcripts
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
                            <CardDescription>Required for all students attending faith-based education.</CardDescription>
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
                              
                              <div className="p-4 bg-slate-50 rounded-lg">
                                <p className="text-sm font-bold text-slate-700 mb-2">Contact Information</p>
                                <div className="space-y-2 text-sm text-slate-600">
                                  <p><strong>Phone:</strong> +256 123 456 789</p>
                                  <p><strong>Email:</strong> bishop.smith@churchofjesuschrist.org</p>
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
                              <CardDescription>View and download your official academic records.</CardDescription>
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
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="p-4 bg-slate-50 rounded-lg">
                                    <p className="text-sm font-bold text-slate-700 mb-2">Current Courses</p>
                                    <div className="space-y-2 text-sm text-slate-600">
                                      <p>• PC101 - Life Skills (In Progress)</p>
                                      <p>• REL250A - Jesus Christ and His Everlasting Gospel A (A)</p>
                                    </div>
                                  </div>
                                  <div className="p-4 bg-slate-50 rounded-lg">
                                    <p className="text-sm font-bold text-slate-700 mb-2">Credits</p>
                                    <div className="space-y-2 text-sm text-slate-600">
                                      <p>• Completed: 2 credits</p>
                                      <p>• In Progress: 3 credits</p>
                                      <p>• Total: 5 credits</p>
                                    </div>
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
                            <CardDescription>Transfer previous academic credits to your current program.</CardDescription>
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
                            
                            <div className="space-y-4">
                              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                <Upload size={16} className="mr-2" /> Submit Transfer Credits
                              </Button>
                              
                              <div className="p-4 bg-slate-50 rounded-lg">
                                <p className="text-sm font-bold text-slate-700 mb-2">Transfer Requirements</p>
                                <ul className="text-sm text-slate-600 space-y-1">
                                  <li>• Official transcripts from accredited institutions</li>
                                  <li>• Minimum grade of C- or equivalent</li>
                                  <li>• Courses must be relevant to program requirements</li>
                                  <li>• Maximum of 30 transfer credits allowed</li>
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      
                      <TabsContent value="tax" className="m-0">
                        <Card className="border border-slate-200">
                          <CardHeader>
                            <CardTitle>Tax Information</CardTitle>
                            <CardDescription>Manage your tax documents and information for tuition payments.</CardDescription>
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
                            
                            <div className="space-y-4">
                              <div className="p-4 bg-slate-50 rounded-lg">
                                <p className="text-sm font-bold text-slate-700 mb-2">Tax Documents Available</p>
                                <div className="space-y-2">
                                  {[
                                    { year: '2024', type: 'Tuition Statement', available: true },
                                    { year: '2023', type: 'Tuition Statement', available: true },
                                    { year: '2024', type: 'Form 1098-T', available: false }
                                  ].map((doc) => (
                                    <div key={doc.year} className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                                      <div>
                                        <p className="font-medium text-slate-900">{doc.year} {doc.type}</p>
                                        <p className="text-xs text-slate-500">
                                          {doc.available ? 'Available for download' : 'Will be available January 2025'}
                                        </p>
                                      </div>
                                      {doc.available && (
                                        <Button variant="outline" size="sm">
                                          <Download size={14} className="mr-1" /> Download
                                        </Button>
                                      )}
                                    </div>
                                  ))}
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
                            <CardDescription>Complete your English proficiency assessment for program requirements.</CardDescription>
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
                            
                            <div className="space-y-4">
                              <div className="p-4 bg-slate-50 rounded-lg">
                                <p className="text-sm font-bold text-slate-700 mb-2">Assessment Results</p>
                                <div className="space-y-2 text-sm text-slate-600">
                                  <p><strong>Date Completed:</strong> January 10, 2024</p>
                                  <p><strong>Score:</strong> 85/100</p>
                                  <p><strong>Status:</strong> Proficient</p>
                                  <p><strong>Requirements Met:</strong> Yes</p>
                                </div>
                              </div>
                              
                              <div className="p-4 bg-slate-50 rounded-lg">
                                <p className="text-sm font-bold text-slate-700 mb-2">Next Steps</p>
                                <p className="text-sm text-slate-600">
                                  No further English assessment is required. You may proceed with your coursework.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
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

export default Documents;
