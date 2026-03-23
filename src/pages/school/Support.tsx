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
  Phone,
  Mail,
  ExternalLink,
  Users as Team,
  Book,
  Heart,
  Church,
  Headphones, 
  MessageSquare, 
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

const Support = () => {
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
                    className="w-full justify-start text-blue-600 bg-blue-50 hover:bg-blue-100"
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

              {/* Support Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Support</CardTitle>
                  <CardDescription>Get help from your success team, access help center resources, and find community support.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="team" className="space-y-6">
                    <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 w-full justify-start overflow-x-auto">
                      <TabsTrigger value="team" className="rounded-lg px-6 flex items-center gap-2">
                        <Team size={16} /> My Success Team
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

export default Support;