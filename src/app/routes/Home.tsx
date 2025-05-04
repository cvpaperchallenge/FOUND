import { Link } from "react-router";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

import { Button } from "../../components/ui/button";

function Home() {
  return (
    <main className="container py-8 space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-6 py-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Machine Learning Workshop 2025
          </h1>
          <p className="text-xl text-muted-foreground">
            Advancing the Future of Machine Learning Research
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>October 15-16, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Singapore (ICCV 2025)</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link to="/iccv2025/call-for-papers">Submit Paper</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/iccv2025/schedule">Join Workshop</Link>
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Overview</h2>
          <p className="text-muted-foreground">
            About our workshop and its objectives
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p>
              This workshop aims to bring together researchers and practitioners
              in the field of machine learning to discuss the latest advances
              and challenges in computer vision applications. We focus on
              innovative approaches, emerging techniques, and real-world
              implementations.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Topics</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Deep learning architectures for computer vision</li>
              <li>Generative models and diffusion techniques</li>
              <li>Self-supervised and unsupervised learning</li>
              <li>Efficient and scalable ML systems</li>
              <li>
                Applications in healthcare, robotics, and autonomous systems
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">
            Important Dates
          </h2>
          <p className="text-muted-foreground">
            Key deadlines for your calendar
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Paper Submission</h3>
            <p className="text-muted-foreground">July 15, 2025</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Notification</h3>
            <p className="text-muted-foreground">August 15, 2025</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Camera Ready</h3>
            <p className="text-muted-foreground">September 1, 2025</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold">Workshop Date</h3>
            <p className="text-muted-foreground">October 15-16, 2025</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link to="/iccv2025/schedule" className="flex items-center gap-2">
              View Full Schedule <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Latest News</h2>
          <p className="text-muted-foreground">Updates and announcements</p>
        </div>
        <div className="space-y-4">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-semibold">Call for Papers Now Open</h3>
                <p className="text-sm text-muted-foreground">June 1, 2025</p>
              </div>
            </div>
            <p className="mt-2">
              We are excited to announce that the call for papers for our
              workshop is now open. We invite submissions on a wide range of
              topics related to machine learning and computer vision.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-semibold">Keynote Speakers Announced</h3>
                <p className="text-sm text-muted-foreground">May 15, 2025</p>
              </div>
            </div>
            <p className="mt-2">
              We are pleased to announce our keynote speakers for the workshop.
              Join us to hear from leading experts in the field of machine
              learning and computer vision.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
