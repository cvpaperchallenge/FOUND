import { Link } from "react-router";
import { Mail, ExternalLink } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

function Organizers() {
  return (
    <main className="container py-8 space-y-12">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter">Organizers</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Meet the team behind the Machine Learning Workshop
        </p>
      </section>

      {/* General Chairs */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">General Chairs</h2>
          <p className="text-muted-foreground">
            Workshop organization and coordination
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Prof. Robert Wilson</CardTitle>
              <CardDescription>Stanford University</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Professor of Computer Science with research focus on machine learning and computer vision.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="mailto:example@stanford.edu">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Website <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dr. Sarah Johnson</CardTitle>
              <CardDescription>Tech Corp</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Chief AI Officer with expertise in applied machine learning and industry applications.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="mailto:example@techcorp.com">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Website <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Program Chairs */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Program Chairs</h2>
          <p className="text-muted-foreground">
            Paper review and program organization
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Prof. Michael Chen</CardTitle>
              <CardDescription>MIT</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Associate Professor specializing in deep learning and neural networks.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="mailto:example@mit.edu">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Website <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dr. Emily Taylor</CardTitle>
              <CardDescription>University of Tokyo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Research scientist focusing on computer vision and generative models.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="mailto:example@u-tokyo.ac.jp">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Website <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Prof. David Lee</CardTitle>
              <CardDescription>ETH Zurich</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Professor of Computer Science with expertise in reinforcement learning and robotics.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="mailto:example@ethz.ch">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Website <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Web Chair */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Web Chair</h2>
          <p className="text-muted-foreground">
            Website development and maintenance
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Alex Martinez</CardTitle>
              <CardDescription>LIMIT Lab</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Web developer and researcher with experience in academic conference websites.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="mailto:example@limitlab.org">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Website <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Program Committee */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Program Committee</h2>
          <p className="text-muted-foreground">
            Paper reviewers and session chairs
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Dr. Amanda Brown</p>
            <p className="text-sm text-muted-foreground">Google Research</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Prof. James Wilson</p>
            <p className="text-sm text-muted-foreground">UC Berkeley</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Dr. Lisa Chen</p>
            <p className="text-sm text-muted-foreground">Microsoft Research</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Prof. Thomas Garcia</p>
            <p className="text-sm text-muted-foreground">University of Cambridge</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Dr. Sophia Kim</p>
            <p className="text-sm text-muted-foreground">Samsung AI</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Prof. Mark Johnson</p>
            <p className="text-sm text-muted-foreground">University of Toronto</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Dr. Rachel Singh</p>
            <p className="text-sm text-muted-foreground">NVIDIA Research</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Prof. Daniel Wang</p>
            <p className="text-sm text-muted-foreground">Tsinghua University</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Dr. Olivia Martinez</p>
            <p className="text-sm text-muted-foreground">Apple AI</p>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Sponsors</h2>
          <p className="text-muted-foreground">
            Organizations supporting the workshop
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="aspect-[3/2] bg-muted rounded-md flex items-center justify-center p-6">
            <span className="text-xl font-bold text-muted-foreground">ICCV 2025</span>
          </div>
          <div className="aspect-[3/2] bg-muted rounded-md flex items-center justify-center p-6">
            <span className="text-xl font-bold text-muted-foreground">LIMIT Lab</span>
          </div>
          <div className="aspect-[3/2] bg-muted rounded-md flex items-center justify-center p-6">
            <span className="text-xl font-bold text-muted-foreground">Tech Corp</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Organizers;
