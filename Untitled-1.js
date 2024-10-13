import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, GraduationCap, Search, User } from "lucide-react"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH55dWAn4TlyLAdQGqIV5zIrY9tJ7EuUQ",
  authDomain: "firstweb-99380.firebaseapp.com",
  projectId: "firstweb-99380",
  storageBucket: "firstweb-99380.appspot.com",
  messagingSenderId: "694036218491",
  appId: "1:694036218491:web:1b26696a28820aced498de",
  measurementId: "G-RTHFPP3C20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-6 w-6" />
          <span className="sr-only">Acme Learning</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Resources
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary-foreground">
                  Welcome to Acme Learning
                </h1>
                <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
                  Empowering learners worldwide with free, world-class education.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-primary-foreground" placeholder="Search courses" type="text" />
                  <Button type="submit" variant="secondary">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Courses</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Introduction to Mathematics</CardTitle>
                  <CardDescription>Master the fundamentals of mathematics</CardDescription>
                </CardHeader>
                <CardContent>
                  <BookOpen className="h-8 w-8 mb-4" />
                  <p className="text-sm">Learn algebra, geometry, and calculus at your own pace.</p>
                </CardContent>
                <CardFooter>
                  <Button>Start Learning</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Computer Science Principles</CardTitle>
                  <CardDescription>Dive into the world of coding</CardDescription>
                </CardHeader>
                <CardContent>
                  <BookOpen className="h-8 w-8 mb-4" />
                  <p className="text-sm">Explore programming concepts, algorithms, and data structures.</p>
                </CardContent>
                <CardFooter>
                  <Button>Start Learning</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>World History</CardTitle>
                  <CardDescription>Journey through time</CardDescription>
                </CardHeader>
                <CardContent>
                  <BookOpen className="h-8 w-8 mb-4" />
                  <p className="text-sm">Discover the events that shaped our world from ancient to modern times.</p>
                </CardContent>
                <CardFooter>
                  <Button>Start Learning</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Acme Learning. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}