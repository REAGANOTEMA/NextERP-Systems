"use client";

import React, { useState } from "react";
import { useMemo } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useAuth, Role } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, UserPlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { showError, showSuccess } from "@/utils/toast";

const Register = () => {
  const { type } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>(type === "student" ? "student" : type === "company" ? "client" : "client");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [program, setProgram] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyNeeds, setCompanyNeeds] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const isStudentFlow = role === "student";
  const isCompanyFlow = role === "client";

  const pageCopy = useMemo(() => {
    if (type === "student") {
      return {
        title: "Join NextERP School",
        subtitle: "Create your student account",
        description: "Set up your student profile to access courses and your portal."
      };
    }

    if (type === "company") {
      return {
        title: "Join NextERP Company",
        subtitle: "Create your organization account",
        description: "Tell us about your company needs so we can support you better."
      };
    }

    return {
      title: "Join NextERP Systems",
      subtitle: "Create your enterprise account",
      description: "Enter your details to get started"
    };
  }, [type]);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !email || !role || !password) {
      return showError("All fields are required.");
    }

    if (isStudentFlow && !program) {
      return showError("Please select your intended program.");
    }

    if (isCompanyFlow && !companyName) {
      return showError("Please provide your company name.");
    }

    if (password.length < 6) {
      return showError("Password must be at least 6 characters.");
    }

    try {
      // Register the user using the provided info
      const title = isStudentFlow ? "Student Applicant" : isCompanyFlow ? "Company Applicant" : "Platform Applicant";
      const bio = isStudentFlow
        ? `Applying for ${program}.`
        : isCompanyFlow
          ? `Company: ${companyName}. Needs: ${companyNeeds || "General ERP support"}`
          : "General application";

      register(name, email, role, password, {
        phone,
        location,
        title,
        bio,
      });
      showSuccess("Account created successfully!");
      navigate("/login");
    } catch (err) {
      showError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md px-4 relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-2xl shadow-xl shadow-blue-900/20 mb-4">
            <Building2 className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">{pageCopy.title}</h1>
          <p className="text-slate-400 mt-2">{pageCopy.subtitle}</p>
        </div>

        {/* Register Card */}
        <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-xl text-white">
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription className="text-slate-400">
              {pageCopy.description}
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleRegister}>
            <CardContent className="space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="+256..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="City, Country"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label>Account Type</Label>
                <Select
                  value={role}
                  onValueChange={(value) => setRole(value as Role)}
                >
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>

                  <SelectContent className="bg-slate-900 border-slate-800 text-white">
                    <SelectItem value="client">Client Portal</SelectItem>
                    <SelectItem value="student">Student Academy</SelectItem>
                    <SelectItem value="staff">Staff Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {isStudentFlow && (
                <div className="space-y-2">
                  <Label>Intended Program</Label>
                  <Select value={program} onValueChange={setProgram}>
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                      <SelectValue placeholder="Choose a program" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-800 text-white">
                      <SelectItem value="Web Programming">Web Programming</SelectItem>
                      <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                      <SelectItem value="Graphics Design">Graphics Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {isCompanyFlow && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      placeholder="Your organization"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="bg-slate-800 border-slate-700 text-white focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyNeeds">What do you need help with?</Label>
                    <Textarea
                      id="companyNeeds"
                      placeholder="Software development, training, cybersecurity, etc."
                      value={companyNeeds}
                      onChange={(e) => setCompanyNeeds(e.target.value)}
                      className="bg-slate-800 border-slate-700 text-white focus:ring-blue-500"
                    />
                  </div>
                </>
              )}

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white focus:ring-blue-500"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 flex items-center justify-center"
              >
                Create Account
                <UserPlus className="ml-2" size={18} />
              </Button>
            </CardContent>
          </form>

          {/* Footer */}
          <CardFooter className="flex justify-center border-t border-slate-800 pt-4">
            <p className="text-slate-400 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Sign In
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;