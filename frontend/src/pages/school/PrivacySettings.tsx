"use client";

import React, { useState } from 'react';
import { Shield, Lock, Eye, Bell, Key, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { showSuccess } from '@/utils/toast';

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    showEmail: true,
    showGrades: false,
    twoFactor: false,
    loginAlerts: true,
    marketing: false
  });

  const handleToggle = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof settings] }));
    showSuccess("Setting updated!");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Privacy & Security</h1>
        <p className="text-slate-500">Control your data visibility and account protection.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-none shadow-sm rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Eye className="text-blue-600" size={20}/> Profile Visibility</CardTitle>
            <CardDescription>Manage what information is visible to other students.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Show Email Address</p>
                <p className="text-xs text-slate-500">Allow peers to see your contact email.</p>
              </div>
              <Switch checked={settings.showEmail} onCheckedChange={() => handleToggle('showEmail')} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Public Academic Record</p>
                <p className="text-xs text-slate-500">Show your grades on the leaderboard.</p>
              </div>
              <Switch checked={settings.showGrades} onCheckedChange={() => handleToggle('showGrades')} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Shield className="text-emerald-600" size={20}/> Account Security</CardTitle>
            <CardDescription>Enhance your account protection.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Two-Factor Authentication</p>
                <p className="text-xs text-slate-500">Secure your login with a mobile code.</p>
              </div>
              <Switch checked={settings.twoFactor} onCheckedChange={() => handleToggle('twoFactor')} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">Login Alerts</p>
                <p className="text-xs text-slate-500">Get notified of new login attempts.</p>
              </div>
              <Switch checked={settings.loginAlerts} onCheckedChange={() => handleToggle('loginAlerts')} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm rounded-3xl bg-slate-900 text-white">
        <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/10 rounded-2xl"><Key size={32} className="text-blue-400" /></div>
            <div>
              <h3 className="text-xl font-bold">Change Password</h3>
              <p className="text-slate-400 text-sm">Last changed 3 months ago.</p>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8 h-12 font-bold">Update Password</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacySettings;