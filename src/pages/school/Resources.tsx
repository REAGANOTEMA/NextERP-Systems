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
  Laptop,
  Briefcase,
  GraduationCap as Academic,
  Heart,
  Users as Community
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from '@/context/AuthContext';

const Resources = () => {
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
                    className="w-full justify-start text-slate-700 hover:bg-slate-100"
                    onClick={() => navigate('/school/documents')}
                  >
                    <FileText size={18} className="mr-3" />
                    Documents
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-blue-600 bg-blue-50 hover:bg-blue-100"
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

              {/* Resources Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Resources</CardTitle>
                  <CardDescription>Access student software, career tools, academic resources, and community support.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="software" className="space-y-6">
                    <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full justify-start overflow-x-auto">
                      <TabsTrigger value="software" className="rounded-lg px-6 flex items-center gap-2">
                        <Laptop size={16} /> Student Software
                      </TabsTrigger>
                      <TabsTrigger value="careers" className="rounded-lg px-6 flex items-center gap-2">
                        <Briefcase size={16} /> Careers
                      </TabsTrigger>
                      <TabsTrigger value="academic" className="rounded-lg px-6 flex items-center gap-2">
                        <Academic size={16} /> Academic Tools
                      </TabsTrigger>
                      <TabsTrigger value="community" className="rounded-lg px-6 flex items-center gap-2">
                        <Community size={16} /> Community
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
                                icon: <Laptop size={24} />,
                                status: 'Available',
                                action: 'Download Now'
                              },
                              {
                                title: 'Adobe Creative Cloud',
                                description: 'Access to Photoshop, Illustrator, and other creative tools',
                                icon: <Laptop size={24} />,
                                status: 'Available',
                                action: 'Request Access'
                              },
                              {
                                title: 'VPN Service',
                                description: 'Secure remote access to campus resources',
                                icon: <Laptop size={24} />,
                                status: 'Setup Required',
                                action: 'Configure'
                              },
                              {
                                title: 'Cloud Storage',
                                description: '1TB of cloud storage for your files and documents',
                                icon: <Laptop size={24} />,
                                status: 'Active',
                                action: 'Access Storage'
                              }
                            ].map((resource) => (
                              <Card key={resource.title} className="border border-slate-200 hover:border-blue-200 transition-colors">
                                <CardContent className="p-6">
                                  <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                      {resource.icon}
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
                                          {resource.action}
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
                                icon: <Briefcase size={24} />,
                                category: 'Career Tools'
                              },
                              {
                                title: 'Interview Preparation',
                                description: 'Practice interviews and get tips for success',
                                icon: <Briefcase size={24} />,
                                category: 'Career Tools'
                              },
                              {
                                title: 'Job Board',
                                description: 'Browse job opportunities from partner companies',
                                icon: <Briefcase size={24} />,
                                category: 'Opportunities'
                              },
                              {
                                title: 'Career Counseling',
                                description: 'One-on-one guidance with career advisors',
                                icon: <Briefcase size={24} />,
                                category: 'Support'
                              },
                              {
                                title: 'Skills Assessment',
                                description: 'Identify your strengths and areas for growth',
                                icon: <Briefcase size={24} />,
                                category: 'Assessment'
                              },
                              {
                                title: 'Networking Events',
                                description: 'Connect with alumni and industry professionals',
                                icon: <Briefcase size={24} />,
                                category: 'Events'
                              }
                            ].map((resource) => (
                              <Card key={resource.title} className="border border-slate-200 hover:border-green-200 transition-colors">
                                <CardContent className="p-6">
                                  <div className="text-center space-y-4">
                                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                      {resource.icon}
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
                                features: ['24/7 Access', 'Research Database', 'E-books Collection'],
                                available: true
                              },
                              {
                                title: 'Writing Center',
                                description: 'Get help with writing assignments and research papers',
                                features: ['Online Tutoring', 'Grammar Check', 'Citation Help'],
                                available: true
                              },
                              {
                                title: 'Math Lab',
                                description: 'Math tutoring and problem-solving support',
                                features: ['Live Tutoring', 'Practice Problems', 'Study Groups'],
                                available: true
                              },
                              {
                                title: 'Study Groups',
                                description: 'Connect with classmates for collaborative learning',
                                features: ['Virtual Meeting Rooms', 'Study Schedules', 'Peer Support'],
                                available: true
                              }
                            ].map((tool) => (
                              <Card key={tool.title} className="border border-slate-200">
                                <CardContent className="p-6">
                                  <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <Academic size={24} />
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
                                        {tool.available ? 'Access Tool' : 'Coming Soon'}
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
                                      <Community size={24} />
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

export default Resources;
