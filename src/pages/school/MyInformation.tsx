"use client";

import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Camera, Save, Globe, Languages, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';

const MyInformation = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+256 700 000 001',
    bio: 'Computer Science student at NextERP Academy. Passionate about building scalable enterprise solutions.',
    location: 'Iganga, Uganda',
    nationality: 'Ugandan',
    skills: ['React', 'TypeScript', 'Node.js', 'SQL']
  });

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
    showSuccess('Profile updated successfully!');
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Information</h1>
          <p className="text-slate-500">Manage your personal details and public profile.</p>
        </div>
        <Button onClick={() => isEditing ? handleSave() : setIsEditing(true)} className="bg-blue-600 hover:bg-blue-700 rounded-xl">
          {isEditing ? <><Save className="mr-2" size={18} /> Save Changes</> : 'Edit Profile'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
          <CardContent className="p-8 text-center">
            <div className="relative inline-block mb-6">
              <img 
                src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=student'} 
                alt="Profile" 
                className="w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-xl"
              />
              {isEditing && (
                <div className="absolute -bottom-2 -right-2 p-2 bg-blue-600 text-white rounded-xl shadow-lg cursor-pointer">
                  <Camera size={16} />
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{formData.name}</h3>
            <p className="text-sm text-slate-500">Student ID: STU-2024-001</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {formData.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="bg-blue-50 text-blue-600 border-none">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input value={formData.name} disabled={!isEditing} onChange={e => setFormData({...formData, name: e.target.value})} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input value={formData.email} disabled={!isEditing} onChange={e => setFormData({...formData, email: e.target.value})} className="rounded-xl" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input value={formData.phone} disabled={!isEditing} onChange={e => setFormData({...formData, phone: e.target.value})} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input value={formData.location} disabled={!isEditing} onChange={e => setFormData({...formData, location: e.target.value})} className="rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Bio</Label>
                <Textarea value={formData.bio} disabled={!isEditing} onChange={e => setFormData({...formData, bio: e.target.value})} className="rounded-xl min-h-[100px]" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyInformation;