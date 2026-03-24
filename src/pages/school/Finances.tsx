"use client";

import React from 'react';
import {
  DollarSign,
  CreditCard,
  TrendingDown,
  Clock,
  Download,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from '@/lib/utils';

const Finances = () => {
  const formatUGX = (amount: number) =>
    new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumFractionDigits: 0 }).format(amount);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Financial Portal</h1>
          <p className="text-slate-500">Manage your tuition, view discounts, and make secure payments.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl h-12 px-8 font-bold shadow-lg shadow-blue-200">
          <CreditCard className="mr-2" size={18} /> Pay Tuition Now
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm bg-blue-600 text-white rounded-3xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-2xl"><DollarSign size={24} /></div>
              <Badge className="bg-white/20 text-white border-none">Current Balance</Badge>
            </div>
            <h3 className="text-3xl font-bold">{formatUGX(1250000)}</h3>
            <p className="text-blue-100 text-sm mt-2">Due by Oct 15, 2024</p>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-xs">
                <span>Payment Progress</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-1.5 bg-white/20" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-3xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl"><TrendingDown size={24} /></div>
              <Badge className="bg-emerald-50 text-emerald-600 border-none">Active Discounts</Badge>
            </div>
            <h3 className="text-3xl font-bold text-slate-900">{formatUGX(450000)}</h3>
            <p className="text-slate-500 text-sm mt-2">Merit-based Scholarship Applied</p>
            <Button variant="ghost" className="w-full mt-6 text-blue-600 font-bold hover:bg-blue-50 rounded-xl">
              View Discount Details <ArrowRight size={16} className="ml-2" />
            </Button>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-3xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl"><Clock size={24} /></div>
              <Badge className="bg-orange-50 text-orange-600 border-none">Next Deadline</Badge>
            </div>
            <h3 className="text-3xl font-bold text-slate-900">Oct 15</h3>
            <p className="text-slate-500 text-sm mt-2">12 Days remaining for Term 2</p>
            <div className="mt-6 flex items-center gap-2 text-orange-600 bg-orange-50 p-3 rounded-xl">
              <AlertCircle size={16} />
              <span className="text-xs font-bold">Avoid late registration fees</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="border-b border-slate-50">
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Breakdown of your current charges and credits.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-50">
              {[
                { label: 'Tuition Fees (Term 2)', amount: 1500000, type: 'charge' },
                { label: 'Lab & Technology Fee', amount: 200000, type: 'charge' },
                { label: 'Scholarship Credit', amount: -450000, type: 'credit' },
                { label: 'Previous Payment', amount: -800000, type: 'credit' }
              ].map((item, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                  <span className="text-slate-600 font-medium">{item.label}</span>
                  <span className={cn("font-bold", item.type === 'credit' ? "text-emerald-600" : "text-slate-900")}>
                    {item.amount > 0 ? '+' : ''}{formatUGX(item.amount)}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-6 bg-slate-50 flex items-center justify-between">
              <span className="font-bold text-slate-900">Total Outstanding</span>
              <span className="text-xl font-extrabold text-blue-600">{formatUGX(450000)}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="border-b border-slate-50">
            <CardTitle>Recent Payments</CardTitle>
            <CardDescription>Your verified transaction history.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="p-4 pl-8 text-[10px] font-bold text-slate-400 uppercase">Receipt #</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase">Date</th>
                    <th className="p-4 text-[10px] font-bold text-slate-400 uppercase">Amount</th>
                    <th className="p-4 pr-8 text-[10px] font-bold text-slate-400 uppercase text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { id: 'RCP-9921', date: 'Sep 15, 2024', amount: 800000 },
                    { id: 'RCP-8812', date: 'Aug 10, 2024', amount: 1200000 }
                  ].map((pay) => (
                    <tr key={pay.id} className="hover:bg-slate-50/30 transition-colors">
                      <td className="p-4 pl-8 font-bold text-slate-900">{pay.id}</td>
                      <td className="p-4 text-sm text-slate-500">{pay.date}</td>
                      <td className="p-4 font-bold text-slate-900">{formatUGX(pay.amount)}</td>
                      <td className="p-4 pr-8 text-right">
                        <Button variant="ghost" size="sm" className="text-blue-600 rounded-xl">
                          <Download size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 text-center border-t border-slate-50">
              <Button variant="ghost" className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                View Full History
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-center gap-4 p-6 bg-slate-100 rounded-3xl border border-slate-200">
        <ShieldCheck className="text-emerald-600" size={32} />
        <div>
          <p className="font-bold text-slate-900">Secure Payment Gateway</p>
          <p className="text-xs text-slate-500">All transactions are encrypted and processed via NextERP Secure Pay.</p>
        </div>
      </div>
    </div>
  );
};

export default Finances;