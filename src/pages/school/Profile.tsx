"use client";

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  User, 
  Shield, 
  Mail, 
  DollarSign, 
  FileText,
  Settings
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyInformation from './MyInformation';
import PrivacySettings from './PrivacySettings';

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'information';

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Student Profile</h1>
        <p className="text-slate-500">Manage your personal details, privacy, and financial records.</p>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-slate-100 w-full justify-start overflow-x-auto">
          <TabsTrigger value="information" className="rounded-lg px-6 flex items-center gap-2">
            <User size={16} /> My Information
          </TabsTrigger>
          <TabsTrigger value="privacy" className="rounded-lg px-6 flex items-center gap-2">
            <Shield size={16} /> Privacy Settings
          </TabsTrigger>
          <TabsTrigger value="username" className="rounded-lg px-6 flex items-center gap-2">
            <Mail size={16} /> Username & Email
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
            <MyInformation />
          </TabsContent>
          <TabsContent value="privacy" className="m-0">
            <PrivacySettings />
          </TabsContent>
          <TabsContent value="username" className="m-0">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Account Credentials</h3>
              <p className="text-slate-600">Manage your login email and system username here.</p>
            </div>
          </TabsContent>
          <TabsContent value="finances" className="m-0">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Financial Records</h3>
              <p className="text-slate-600">View your tuition balance, payment history, and invoices.</p>
            </div>
          </TabsContent>
          <TabsContent value="documents" className="m-0">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Document Center</h3>
              <p className="text-slate-600">Access your transcripts, certificates, and admission letters.</p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Profile;