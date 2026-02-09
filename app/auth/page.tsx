"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

function AuthForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    const error = searchParams.get("error");

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formError, setFormError] = useState<string | null>(error);

    // Form state
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [signupName, setSignupName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

    const handleCredentialsLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setFormError(null);

        try {
            const result = await signIn("credentials", {
                email: loginEmail,
                password: loginPassword,
                isSignup: "false",
                redirect: false,
            });

            if (result?.error) {
                setFormError(result.error);
            } else {
                router.push(callbackUrl);
                router.refresh();
            }
        } catch {
            setFormError("An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCredentialsSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setFormError(null);

        if (signupPassword !== signupConfirmPassword) {
            setFormError("Passwords do not match");
            setIsLoading(false);
            return;
        }

        if (signupPassword.length < 6) {
            setFormError("Password must be at least 6 characters");
            setIsLoading(false);
            return;
        }

        try {
            const result = await signIn("credentials", {
                email: signupEmail,
                password: signupPassword,
                name: signupName,
                isSignup: "true",
                redirect: false,
            });

            if (result?.error) {
                setFormError(result.error);
            } else {
                router.push(callbackUrl);
                router.refresh();
            }
        } catch {
            setFormError("An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        await signIn("google", { callbackUrl });
    };

    return (
        <Card className="border-border/50 shadow-lg">
            <Tabs defaultValue="login" className="w-full">
                <CardHeader className="pb-4">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login" className="touch-target">Sign In</TabsTrigger>
                        <TabsTrigger value="signup" className="touch-target">Sign Up</TabsTrigger>
                    </TabsList>
                </CardHeader>

                <CardContent className="space-y-6">
                    {/* Error Message */}
                    {formError && (
                        <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                            {formError}
                        </div>
                    )}

                    {/* Login Tab */}
                    <TabsContent value="login" className="mt-0 space-y-4">
                        <form onSubmit={handleCredentialsLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="login-email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="login-email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        className="pl-10 h-12 touch-target"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="login-password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="login-password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        className="pl-10 pr-10 h-12 touch-target"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 bg-[--color-forest] hover:bg-[--color-forest-light] text-white touch-target"
                                disabled={isLoading}
                            >
                                {isLoading ? "Signing in..." : "Sign In"}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </TabsContent>

                    {/* Signup Tab */}
                    <TabsContent value="signup" className="mt-0 space-y-4">
                        <form onSubmit={handleCredentialsSignup} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="signup-name">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="signup-name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={signupName}
                                        onChange={(e) => setSignupName(e.target.value)}
                                        className="pl-10 h-12 touch-target"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="signup-email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="signup-email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={signupEmail}
                                        onChange={(e) => setSignupEmail(e.target.value)}
                                        className="pl-10 h-12 touch-target"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="signup-password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="signup-password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={signupPassword}
                                        onChange={(e) => setSignupPassword(e.target.value)}
                                        className="pl-10 pr-10 h-12 touch-target"
                                        required
                                        minLength={6}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="signup-confirm">Confirm Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <Input
                                        id="signup-confirm"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={signupConfirmPassword}
                                        onChange={(e) => setSignupConfirmPassword(e.target.value)}
                                        className="pl-10 h-12 touch-target"
                                        required
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 bg-[--color-forest] hover:bg-[--color-forest-light] text-white touch-target"
                                disabled={isLoading}
                            >
                                {isLoading ? "Creating account..." : "Create Account"}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </TabsContent>

                    {/* OR Divider */}
                    <div className="relative">
                        <Separator />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-sm text-muted-foreground">
                            OR
                        </span>
                    </div>

                    {/* Google Sign In */}
                    <Button
                        variant="outline"
                        className="w-full h-12 touch-target"
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Continue with Google
                    </Button>

                    {/* Terms */}
                    <p className="text-xs text-center text-muted-foreground">
                        By continuing, you agree to our{" "}
                        <Link href="#" className="underline hover:text-foreground">Terms of Service</Link>
                        {" "}and{" "}
                        <Link href="#" className="underline hover:text-foreground">Privacy Policy</Link>
                    </p>
                </CardContent>
            </Tabs>
        </Card>
    );
}

export default function AuthPage() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2">
                        <div className="w-12 h-12 rounded-xl bg-[--color-forest] flex items-center justify-center">
                            <Home className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-heading text-2xl font-bold text-[--color-forest]">
                            Nairobi Homes
                        </span>
                    </Link>
                    <p className="text-muted-foreground mt-3">
                        Find your perfect home with verified water reliability
                    </p>
                </div>

                <Suspense fallback={
                    <Card className="border-border/50 shadow-lg p-8">
                        <div className="animate-pulse space-y-4">
                            <div className="h-10 bg-muted rounded" />
                            <div className="h-12 bg-muted rounded" />
                            <div className="h-12 bg-muted rounded" />
                            <div className="h-12 bg-muted rounded" />
                        </div>
                    </Card>
                }>
                    <AuthForm />
                </Suspense>
            </div>
        </div>
    );
}
