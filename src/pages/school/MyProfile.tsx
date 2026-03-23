import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award, 
  Bell, 
  Shield, 
  Globe, 
  CreditCard, 
  FileText, 
  Settings, 
  Download,
  Upload,
  Edit,
  Save,
  X,
  Check,
  AlertCircle,
  Camera,
  GraduationCap,
  Briefcase,
  Users,
  Heart,
  Star,
  TrendingUp,
  Clock,
  Target,
  Lightbulb,
  Compass,
  Flag,
  MessageSquare,
  Trophy,
  Key,
  Smartphone
} from 'lucide-react';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    personalInfo: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@nexterp.edu',
      phone: '+1 (555) 123-4567',
      dateOfBirth: '1995-06-15',
      gender: 'Male',
      nationality: 'United States',
      address: '123 Main St, Apt 4B',
      city: 'Boston',
      state: 'MA',
      zipCode: '02101',
      country: 'United States'
    },
    academicInfo: {
      studentId: 'STU2024001',
      program: 'Bachelor of Science in Computer Science',
      department: 'Computer Science',
      year: '3rd Year',
      gpa: '3.8',
      enrollmentStatus: 'Full-time',
      admissionDate: '2022-09-01',
      expectedGraduation: '2026-05-15',
      advisor: 'Dr. Sarah Johnson',
      concentration: 'Artificial Intelligence'
    },
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Mother',
      phone: '+1 (555) 987-6543',
      email: 'jane.doe@email.com',
      address: '456 Oak Ave, Boston, MA 02102'
    },
    preferences: {
      language: 'English',
      timezone: 'Eastern Time (ET)',
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      theme: 'Light',
      accessibility: false
    }
  });

  const handleInputChange = (category: string, field: string, value: string | boolean) => {
    setProfileData(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const academicProgress = [
    { semester: 'Fall 2022', gpa: 3.7, credits: 15, status: 'completed' },
    { semester: 'Spring 2023', gpa: 3.9, credits: 18, status: 'completed' },
    { semester: 'Fall 2023', gpa: 3.8, credits: 16, status: 'completed' },
    { semester: 'Spring 2024', gpa: 3.8, credits: 15, status: 'in-progress' }
  ];

  const achievements = [
    { title: 'Dean\'s List', description: 'Fall 2022, Spring 2023', date: '2023-06-15', icon: Award },
    { title: 'Hackathon Winner', description: 'AI Innovation Challenge', date: '2023-11-20', icon: Trophy },
    { title: 'Research Publication', description: 'Machine Learning in Healthcare', date: '2024-01-10', icon: FileText },
    { title: 'Student Leadership', description: 'CS Club Vice President', date: '2023-09-01', icon: Users }
  ];

  const notifications = [
    { id: 1, title: 'Grade Posted', message: 'Your grade for CS301 is now available', time: '2 hours ago', read: false },
    { id: 2, title: 'Registration Open', message: 'Fall 2024 registration is now open', time: '1 day ago', read: false },
    { id: 3, title: 'Payment Due', message: 'Tuition payment due in 7 days', time: '3 days ago', read: true },
    { id: 4, title: 'Event Reminder', message: 'Career Fair tomorrow at 10 AM', time: '5 days ago', read: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
              <Badge variant="secondary">{profileData.academicInfo.studentId}</Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant={isEditing ? "default" : "outline"}
                onClick={isEditing ? handleSave : () => setIsEditing(true)}
              >
                {isEditing ? <><Save className="w-4 h-4 mr-2" /> Save</> : <><Edit className="w-4 h-4 mr-2" /> Edit</>}
              </Button>
              {isEditing && (
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  <X className="w-4 h-4 mr-2" /> Cancel
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Personal Information Tab */}
          <TabsContent value="personal" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Card */}
              <Card className="lg:col-span-1">
                <CardHeader className="text-center">
                  <div className="relative inline-block">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src="" alt={profileData.personalInfo.firstName} />
                      <AvatarFallback className="text-2xl">
                        {profileData.personalInfo.firstName[0]}{profileData.personalInfo.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                        <Camera className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <CardTitle className="mt-4">
                    {profileData.personalInfo.firstName} {profileData.personalInfo.lastName}
                  </CardTitle>
                  <CardDescription>{profileData.academicInfo.program}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="w-4 h-4" />
                    <span>{profileData.personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="w-4 h-4" />
                    <span>{profileData.personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="w-4 h-4" />
                    <span>{profileData.personalInfo.city}, {profileData.personalInfo.state}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar className="w-4 h-4" />
                    <span>Member since 2022</span>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Details Form */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={profileData.personalInfo.firstName}
                        onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={profileData.personalInfo.lastName}
                        onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.personalInfo.email}
                        onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={profileData.personalInfo.phone}
                        onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={profileData.personalInfo.dateOfBirth}
                        onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select
                        value={profileData.personalInfo.gender}
                        onValueChange={(value) => handleInputChange('personalInfo', 'gender', value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                          <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Address Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          value={profileData.personalInfo.address}
                          onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={profileData.personalInfo.city}
                          onChange={(e) => handleInputChange('personalInfo', 'city', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={profileData.personalInfo.state}
                          onChange={(e) => handleInputChange('personalInfo', 'state', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={profileData.personalInfo.zipCode}
                          onChange={(e) => handleInputChange('personalInfo', 'zipCode', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          value={profileData.personalInfo.country}
                          onChange={(e) => handleInputChange('personalInfo', 'country', e.target.value)}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Academic Information Tab */}
          <TabsContent value="academic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Academic Details
                  </CardTitle>
                  <CardDescription>Your academic program and enrollment information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-slate-600">Student ID</Label>
                      <p className="font-semibold">{profileData.academicInfo.studentId}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-slate-600">Program</Label>
                      <p className="font-semibold">{profileData.academicInfo.program}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-slate-600">Department</Label>
                      <p className="font-semibold">{profileData.academicInfo.department}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-slate-600">Year</Label>
                      <p className="font-semibold">{profileData.academicInfo.year}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-slate-600">GPA</Label>
                      <p className="font-semibold text-green-600">{profileData.academicInfo.gpa}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-slate-600">Status</Label>
                      <Badge variant="default">{profileData.academicInfo.enrollmentStatus}</Badge>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-slate-600">Advisor</Label>
                      <p className="font-semibold">{profileData.academicInfo.advisor}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-slate-600">Concentration</Label>
                      <p className="font-semibold">{profileData.academicInfo.concentration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Emergency Contact
                  </CardTitle>
                  <CardDescription>Emergency contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-slate-600">Name</Label>
                      <p className="font-semibold">{profileData.emergencyContact.name}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-slate-600">Relationship</Label>
                      <p className="font-semibold">{profileData.emergencyContact.relationship}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-slate-600">Phone</Label>
                      <p className="font-semibold">{profileData.emergencyContact.phone}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-slate-600">Email</Label>
                      <p className="font-semibold">{profileData.emergencyContact.email}</p>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Address</Label>
                    <p className="font-semibold">{profileData.emergencyContact.address}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Academic Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Academic Progress
                </CardTitle>
                <CardDescription>Your semester-by-semester academic performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {academicProgress.map((semester, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{semester.semester}</h3>
                          <Badge variant={semester.status === 'completed' ? 'default' : 'secondary'}>
                            {semester.status === 'completed' ? 'Completed' : 'In Progress'}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-600">GPA: <span className="font-semibold">{semester.gpa}</span></p>
                          <p className="text-sm text-slate-600">Credits: <span className="font-semibold">{semester.credits}</span></p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{semester.status === 'completed' ? '100%' : '75%'}</span>
                        </div>
                        <Progress value={semester.status === 'completed' ? 100 : 75} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Overall Statistics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">3.8</p>
                      <p className="text-sm text-slate-600">Cumulative GPA</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">64</p>
                      <p className="text-sm text-slate-600">Credits Earned</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">56</p>
                      <p className="text-sm text-slate-600">Credits Remaining</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">2</p>
                      <p className="text-sm text-slate-600">Years Remaining</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Achievements & Awards
                </CardTitle>
                <CardDescription>Your academic and extracurricular accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{achievement.title}</h3>
                            <p className="text-sm text-slate-600 mt-1">{achievement.description}</p>
                            <p className="text-xs text-slate-500 mt-2">{achievement.date}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notifications
                </CardTitle>
                <CardDescription>Recent notifications and announcements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border ${
                        notification.read ? 'bg-white' : 'bg-blue-50 border-blue-200'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold">{notification.title}</h3>
                          <p className="text-sm text-slate-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-slate-500 mt-2">{notification.time}</p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Preferences
                  </CardTitle>
                  <CardDescription>Customize your experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-slate-600">Receive updates via email</p>
                      </div>
                      <Switch
                        checked={profileData.preferences.emailNotifications}
                        onCheckedChange={(checked) => handleInputChange('preferences', 'emailNotifications', checked)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>SMS Notifications</Label>
                        <p className="text-sm text-slate-600">Receive text message alerts</p>
                      </div>
                      <Switch
                        checked={profileData.preferences.smsNotifications}
                        onCheckedChange={(checked) => handleInputChange('preferences', 'smsNotifications', checked)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Push Notifications</Label>
                        <p className="text-sm text-slate-600">Receive browser notifications</p>
                      </div>
                      <Switch
                        checked={profileData.preferences.pushNotifications}
                        onCheckedChange={(checked) => handleInputChange('preferences', 'pushNotifications', checked)}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Language</Label>
                      <Select
                        value={profileData.preferences.language}
                        onValueChange={(value) => handleInputChange('preferences', 'language', value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Spanish">Spanish</SelectItem>
                          <SelectItem value="French">French</SelectItem>
                          <SelectItem value="German">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Timezone</Label>
                      <Select
                        value={profileData.preferences.timezone}
                        onValueChange={(value) => handleInputChange('preferences', 'timezone', value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Eastern Time (ET)">Eastern Time (ET)</SelectItem>
                          <SelectItem value="Central Time (CT)">Central Time (CT)</SelectItem>
                          <SelectItem value="Mountain Time (MT)">Mountain Time (MT)</SelectItem>
                          <SelectItem value="Pacific Time (PT)">Pacific Time (PT)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security
                  </CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Key className="w-4 h-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Privacy Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Download My Data
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
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

export default MyProfile;
