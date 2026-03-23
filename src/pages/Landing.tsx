"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Menu, 
  X, 
  Users, 
  Globe, 
  DollarSign, 
  Church,
  GraduationCap,
  BookOpen,
  Star,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import LogoImg from "@/assets/logo.jpg";

const Landing = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>NextERP Systems</span>
            <span className="text-slate-400">|</span>
            <span>East Africa's Premier Education Platform</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-800">
              <Search size={16} className="mr-2" />
              Search
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-800">
              Get Involved
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-800">
              Quick Links
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-800">
              Help
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg bg-yellow-400 flex items-center justify-center">
                <GraduationCap className="text-yellow-900" size={24} />
              </div>
              <div>
                <span className="font-bold text-xl text-slate-900">NextERP</span>
                <span className="text-xs text-slate-600 ml-1">Systems</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                <button className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                  Certificates & Degrees
                </button>
                <button className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                  Admissions
                </button>
                <button className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                  Tuition & Discounts
                </button>
                <button className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                  About Us
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" onClick={() => navigate('/login')} className="border-slate-300">
                  Sign In
                </Button>
                <Button variant="outline" onClick={() => navigate('/register')}>
                  Request Info
                </Button>
                <Button onClick={() => navigate('/apply')} className="bg-blue-600 hover:bg-blue-700">
                  Apply for Free
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 py-4">
            <div className="max-w-7xl mx-auto px-4 space-y-3">
              <button className="block w-full text-left py-2 text-slate-700 hover:text-blue-600 font-medium">
                Certificates & Degrees
              </button>
              <button className="block w-full text-left py-2 text-slate-700 hover:text-blue-600 font-medium">
                Admissions
              </button>
              <button className="block w-full text-left py-2 text-slate-700 hover:text-blue-600 font-medium">
                Tuition & Discounts
              </button>
              <button className="block w-full text-left py-2 text-slate-700 hover:text-blue-600 font-medium">
                About Us
              </button>
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <Button variant="outline" onClick={() => navigate('/login')} className="w-full">
                  Sign In
                </Button>
                <Button variant="outline" onClick={() => navigate('/register')} className="w-full">
                  Request Info
                </Button>
                <Button onClick={() => navigate('/apply')} className="w-full bg-blue-600 hover:bg-blue-700">
                  Apply for Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Start Small.
                <br />
                <span className="text-blue-600">Change Everything.</span>
              </h1>
              <p className="text-xl text-slate-600">
                Apply to NextERP Systems and qualify for 50% off tuition!
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                NextERP Systems provides access to spiritually based degrees completely online at an affordable price. 
                We bring quality education to East Africa with values that matter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/apply')} 
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/register')}
                  className="border-slate-300 px-8 py-4 text-lg font-semibold"
                >
                  Request Info
                </Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                alt="Students studying together" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-sm">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-blue-600" size={24} />
                <span className="font-bold text-slate-900">Join Our Community</span>
              </div>
              <p className="text-slate-600 text-sm">
                Connect with thousands of students across East Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose NextERP Systems?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide quality education that's affordable, accessible, and spiritually grounded
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Low Cost</h3>
                <p className="text-slate-600">
                  Tuition costs significantly less than other schools, making quality education accessible
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Online</h3>
                <p className="text-slate-600">
                  Degrees are online, from anywhere in the world. Study at your own pace.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Church className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Spiritual</h3>
                <p className="text-slate-600">
                  NextERP builds hope and spiritual confidence through value-based education
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Partnership for Excellence
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                NextERP Systems works in association with leading educational institutions to provide 
                world-class education. Degrees are awarded by our partners, while NextERP provides 
                the resources to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3">
                  Learn More
                </Button>
                <Button variant="outline" className="border-slate-300 px-6 py-3">
                  Request Info
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "NextERP Systems brings an innovative approach to education — one unique to East Africa and to the world."
              </blockquote>
              <cite className="text-slate-600 font-semibold">
                Reagan Otema, Founder
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              GET A BETTER JOB, WAY BEFORE GRADUATING
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Wish you could get a better job before finishing a degree? Select three certificates to build a degree. 
              Certificates can be completed in one year or less and lead to immediate job improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">INCREASE FAITH</h3>
                  <p className="text-slate-600">
                    All courses incorporate teachings from scriptures and modern prophets, 
                    helping students increase faith and spiritual confidence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">PRACTICAL SKILLS</h3>
                  <p className="text-slate-600">
                    Our curriculum is designed with industry partners to ensure you learn 
                    skills that are immediately applicable in the workplace.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">View Programs</h3>
              <p className="mb-6">
                Explore our certificate programs and degree options to find the path that's right for you.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3">
                View All Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">15,000+</div>
              <div className="text-slate-300">Annual Enrollment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">97%</div>
              <div className="text-slate-300">Career Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">25</div>
              <div className="text-slate-300">African Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-slate-300">Certificate Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who are already building better careers through NextERP Systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/apply')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              Need Help?
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center">
                  <GraduationCap className="text-yellow-900" size={20} />
                </div>
                <span className="font-bold text-xl text-white">NextERP Systems</span>
              </div>
              <p className="text-slate-400 mb-4">
                East Africa's Premier Education Platform - Quality education that's affordable and accessible.
              </p>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/apply')} className="hover:text-white">Apply</button></li>
                <li><button onClick={() => navigate('/register')} className="hover:text-white">Request Info</button></li>
                <li><button onClick={() => navigate('/careers')} className="hover:text-white">Careers</button></li>
                <li><button onClick={() => navigate('/about')} className="hover:text-white">About Us</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><button className="hover:text-white">Certificates & Degrees</button></li>
                <li><button className="hover:text-white">PathwayConnect</button></li>
                <li><button className="hover:text-white">EnglishConnect</button></li>
                <li><button className="hover:text-white">Student Support</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p> 2024 NextERP Systems. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <button className="hover:text-white">Privacy Policy</button>
              <span>|</span>
              <button className="hover:text-white">Terms of Service</button>
              <span>|</span>
              <button className="hover:text-white">Cookie Preferences</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-full w-14 h-14 shadow-lg">
          <MessageCircle size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Landing;