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
  CreditCard,
  Download,
  TrendingUp,
  Shield,
  Wallet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from '@/context/AuthContext';

const Finances = () => {
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
                    className="w-full justify-start text-blue-600 bg-blue-50 hover:bg-blue-100"
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

              {/* Financial Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-none shadow-sm rounded-2xl bg-blue-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Wallet size={24} />
                      </div>
                      <Badge className="bg-white/20 text-white border-none">Current</Badge>
                    </div>
                    <p className="text-blue-100 text-sm font-medium">Current Balance</p>
                    <h3 className="text-3xl font-bold mt-1">$14.92</h3>
                    <Button className="w-full mt-4 bg-white text-blue-600 hover:bg-blue-50 border-none rounded-xl">
                      View Account Summary
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-sm rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                        <TrendingUp size={24} />
                      </div>
                      <Badge className="bg-green-50 text-green-600 border-none">+12%</Badge>
                    </div>
                    <p className="text-slate-500 text-sm font-medium">Last Payment</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">$800.00</h3>
                    <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
                      <CheckCircle size={12} /> Confirmed
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-sm rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                        <Clock size={24} />
                      </div>
                      <Badge className="bg-orange-50 text-orange-600 border-none">Due Soon</Badge>
                    </div>
                    <p className="text-slate-500 text-sm font-medium">Next Payment Due</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">Oct 15</h3>
                    <p className="text-xs text-orange-600 mt-1">12 days remaining</p>
                  </CardContent>
                </Card>
              </div>

              {/* Financial Tabs */}
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
                        <CardDescription>View your account details and billing information.</CardDescription>
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
                        <CardDescription>View your eligible discounts and financial aid.</CardDescription>
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
                            <Badge className="bg-green-100 text-green-800">Active</Badge>
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
                        <CardDescription>Make a payment towards your tuition balance.</CardDescription>
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
                        <CardDescription>View your past payments and download receipts.</CardDescription>
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

export default Finances;
