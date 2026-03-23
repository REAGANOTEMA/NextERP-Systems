import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CreditCard, 
  DollarSign, 
  Receipt, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Calendar,
  FileText,
  Download,
  Upload,
  Printer,
  Mail,
  Phone,
  HelpCircle,
  Shield,
  Banknote,
  PiggyBank,
  Target,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Building,
  Briefcase,
  Heart,
  Home,
  Car,
  Plane,
  ShoppingCart,
  Coffee,
  Utensils,
  Film,
  Gamepad2,
  Music,
  Camera,
  Palette,
  Code,
  Database,
  Globe,
  Wifi,
  Smartphone,
  Laptop,
  Monitor,
  Headphones,
  Watch,
  Package,
  Truck,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Filter,
  Search,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  RefreshCw,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

const Finances = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('current');
  const [searchTerm, setSearchTerm] = useState('');

  const financialSummary = {
    totalBalance: 15420.50,
    monthlyIncome: 2500.00,
    monthlyExpenses: 1875.30,
    savings: 624.70,
    tuitionBalance: 8500.00,
    nextPaymentDue: '2024-04-15',
    nextPaymentAmount: 2125.00
  };

  const transactions = [
    { id: 1, date: '2024-03-28', description: 'Tuition Payment - Spring 2024', category: 'Education', amount: -2125.00, type: 'expense', status: 'completed' },
    { id: 2, date: '2024-03-25', description: 'Scholarship - Academic Excellence', category: 'Income', amount: 1000.00, type: 'income', status: 'completed' },
    { id: 3, date: '2024-03-20', description: 'Campus Housing - March Rent', category: 'Housing', amount: -800.00, type: 'expense', status: 'completed' },
    { id: 4, date: '2024-03-18', description: 'Work-Study Payment', category: 'Income', amount: 450.00, type: 'income', status: 'completed' },
    { id: 5, date: '2024-03-15', description: 'Meal Plan - Spring Semester', category: 'Food', amount: -300.00, type: 'expense', status: 'completed' },
    { id: 6, date: '2024-03-10', description: 'Textbooks - CS301 & MATH201', category: 'Education', amount: -250.00, type: 'expense', status: 'completed' },
    { id: 7, date: '2024-03-05', description: 'Library Fine', category: 'Fees', amount: -15.00, type: 'expense', status: 'completed' },
    { id: 8, date: '2024-03-01', description: 'Research Assistant Stipend', category: 'Income', amount: 600.00, type: 'income', status: 'completed' }
  ];

  const paymentMethods = [
    { id: 1, type: 'Bank Account', name: 'Chase Checking ****1234', isDefault: true },
    { id: 2, type: 'Credit Card', name: 'Visa ****5678', isDefault: false },
    { id: 3, type: 'Bank Account', name: 'Bank of America ****9012', isDefault: false }
  ];

  const scholarships = [
    { id: 1, name: 'Academic Excellence Scholarship', amount: 2000.00, status: 'active', renewable: true, gpaRequirement: 3.5 },
    { id: 2, name: 'Need-Based Grant', amount: 1500.00, status: 'active', renewable: true, gpaRequirement: 2.5 },
    { id: 3, name: 'Computer Science Department Award', amount: 1000.00, status: 'active', renewable: false, gpaRequirement: 3.8 },
    { id: 4, name: 'Research Assistantship', amount: 3000.00, status: 'active', renewable: true, gpaRequirement: 3.2 }
  ];

  const expensesByCategory = [
    { category: 'Housing', amount: 800.00, percentage: 42.7, icon: Home, color: 'bg-blue-500' },
    { category: 'Food', amount: 300.00, percentage: 16.0, icon: Utensils, color: 'bg-green-500' },
    { category: 'Education', amount: 2375.00, percentage: 12.7, icon: BookOpen, color: 'bg-purple-500' },
    { category: 'Transportation', amount: 150.00, percentage: 8.0, icon: Car, color: 'bg-orange-500' },
    { category: 'Entertainment', amount: 100.00, percentage: 5.3, icon: Film, color: 'bg-pink-500' },
    { category: 'Other', amount: 150.00, percentage: 8.0, icon: ShoppingCart, color: 'bg-gray-500' }
  ];

  const upcomingPayments = [
    { id: 1, name: 'Tuition - Summer 2024', dueDate: '2024-04-15', amount: 2125.00, status: 'upcoming' },
    { id: 2, name: 'Campus Housing - April', dueDate: '2024-04-01', amount: 800.00, status: 'upcoming' },
    { id: 3, name: 'Student Activity Fee', dueDate: '2024-04-10', amount: 50.00, status: 'upcoming' },
    { id: 4, name: 'Technology Fee', dueDate: '2024-04-20', amount: 100.00, status: 'upcoming' }
  ];

  const financialGoals = [
    { id: 1, name: 'Emergency Fund', target: 5000.00, current: 3200.00, deadline: '2024-12-31' },
    { id: 2, name: 'Laptop Upgrade', target: 1500.00, current: 800.00, deadline: '2024-08-31' },
    { id: 3, name: 'Study Abroad Fund', target: 3000.00, current: 1200.00, deadline: '2025-05-31' },
    { id: 4, name: 'Textbook Fund', target: 500.00, current: 450.00, deadline: '2024-09-01' }
  ];

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-slate-900">Financial Center</h1>
              <Badge variant="secondary">Student Account</Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Transaction
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Financial Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${financialSummary.totalBalance.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">
                    +2.5% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">${financialSummary.monthlyIncome.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">
                    From work-study and scholarships
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                  <TrendingDown className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">${financialSummary.monthlyExpenses.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">
                    -5.2% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Savings</CardTitle>
                  <PiggyBank className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">${financialSummary.savings.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">
                    25% of income
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Payments & Recent Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Upcoming Payments
                  </CardTitle>
                  <CardDescription>Payments due in the next 30 days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingPayments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-semibold">{payment.name}</p>
                        <p className="text-sm text-slate-600">Due: {payment.dueDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-red-600">${payment.amount.toFixed(2)}</p>
                        <Badge variant="outline" className="text-xs">Upcoming</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Recent Transactions
                  </CardTitle>
                  <CardDescription>Your latest financial activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {transactions.slice(0, 4).map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          transaction.type === 'income' ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                        <div>
                          <p className="font-medium text-sm">{transaction.description}</p>
                          <p className="text-xs text-slate-600">{transaction.date}</p>
                        </div>
                      </div>
                      <p className={`font-semibold ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'income' ? '+' : ''}${transaction.amount.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Financial Health Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Financial Health Score
                </CardTitle>
                <CardDescription>Your overall financial wellness assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Overall Score</span>
                    <span className="text-2xl font-bold text-green-600">85/100</span>
                  </div>
                  <Progress value={85} className="h-3" />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-sm text-slate-600">Budget Adherence</p>
                      <p className="font-bold text-green-600">92%</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Savings Rate</p>
                      <p className="font-bold text-blue-600">25%</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Debt Management</p>
                      <p className="font-bold text-green-600">88%</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Emergency Fund</p>
                      <p className="font-bold text-yellow-600">64%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>All your financial transactions</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search transactions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8 w-64"
                      />
                    </div>
                    <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">Current Month</SelectItem>
                        <SelectItem value="last">Last Month</SelectItem>
                        <SelectItem value="quarter">Last Quarter</SelectItem>
                        <SelectItem value="year">Last Year</SelectItem>
                        <SelectItem value="all">All Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {filteredTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {transaction.type === 'income' ? 
                            <ArrowUpRight className="w-5 h-5 text-green-600" /> :
                            <ArrowDownRight className="w-5 h-5 text-red-600" />
                          }
                        </div>
                        <div>
                          <p className="font-semibold">{transaction.description}</p>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <span>{transaction.date}</span>
                            <span>•</span>
                            <Badge variant="outline" className="text-xs">{transaction.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold text-lg ${
                          transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'income' ? '+' : ''}${transaction.amount.toFixed(2)}
                        </p>
                        <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Methods
                  </CardTitle>
                  <CardDescription>Manage your payment options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-slate-600" />
                        <div>
                          <p className="font-semibold">{method.name}</p>
                          <p className="text-sm text-slate-600">{method.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {method.isDefault && <Badge variant="default">Default</Badge>}
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Receipt className="w-5 h-5" />
                    Tuition Balance
                  </CardTitle>
                  <CardDescription>Your current tuition payment status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Current Balance</span>
                      <span className="text-2xl font-bold text-red-600">${financialSummary.tuitionBalance.toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <p>Next payment due: {financialSummary.nextPaymentDue}</p>
                      <p>Amount due: ${financialSummary.nextPaymentAmount.toFixed(2)}</p>
                    </div>
                  </div>
                  <Button className="w-full">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Make Payment
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Payment
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    View Payment Plan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Scholarships Tab */}
          <TabsContent value="scholarships" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Active Scholarships & Grants
                </CardTitle>
                <CardDescription>Your current financial aid awards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scholarships.map((scholarship) => (
                    <div key={scholarship.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{scholarship.name}</h3>
                          <p className="text-sm text-slate-600">
                            {scholarship.renewable ? 'Renewable' : 'One-time'} • 
                            GPA Required: {scholarship.gpaRequirement}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-green-600">${scholarship.amount.toFixed(2)}</p>
                          <Badge variant="default" className="text-xs">Active</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Requirements met - Award disbursed</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Scholarship Summary</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600">Total Awarded</p>
                      <p className="text-xl font-bold text-green-600">$7,500.00</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">This Semester</p>
                      <p className="text-xl font-bold text-blue-600">$3,750.00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Budget Tab */}
          <TabsContent value="budget" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Monthly Budget Analysis
                </CardTitle>
                <CardDescription>Track your spending by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {expensesByCategory.map((expense) => {
                    const Icon = expense.icon;
                    return (
                      <div key={expense.category} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-lg ${expense.color} flex items-center justify-center`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold">{expense.category}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-bold">${expense.amount.toFixed(2)}</span>
                            <span className="text-sm text-slate-600 ml-2">{expense.percentage}%</span>
                          </div>
                        </div>
                        <Progress value={expense.percentage} className="h-2" />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total Monthly Expenses</span>
                    <span className="text-xl font-bold">${financialSummary.monthlyExpenses.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value="goals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Financial Goals
                </CardTitle>
                <CardDescription>Track your savings objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {financialGoals.map((goal) => {
                    const progress = (goal.current / goal.target) * 100;
                    return (
                      <div key={goal.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold">{goal.name}</h3>
                            <p className="text-sm text-slate-600">Target: ${goal.target.toFixed(2)} by {goal.deadline}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold">${goal.current.toFixed(2)}</p>
                            <p className="text-sm text-slate-600">{progress.toFixed(1)}% complete</p>
                          </div>
                        </div>
                        <Progress value={progress} className="h-3" />
                        <div className="mt-2 text-sm text-slate-600">
                          ${goal.target.toFixed(2)} - ${goal.current.toFixed(2)} = ${(goal.target - goal.current).toFixed(2)} remaining
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button className="w-full mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Goal
                </Button>
              </CardContent>
            </Card>
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

export default Finances;
