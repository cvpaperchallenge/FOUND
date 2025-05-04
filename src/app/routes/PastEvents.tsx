import { Link } from "react-router";
import { ExternalLink, FileText, Video, Github } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

function PastEvents() {
  return (
    <main className="container py-8 space-y-12">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter">Past Events</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Previous editions of the Machine Learning Workshop
        </p>
      </section>

      {/* Past Events Overview */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Workshop History</h2>
          <p className="text-muted-foreground">
            Our workshop series through the years
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>ML Workshop 2024</CardTitle>
              <CardDescription>CVPR 2024, Seattle, USA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Event Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  The 2024 edition focused on generative models and their applications in computer vision, featuring keynotes from leading researchers in the field.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Visit 2024 Website <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ML Workshop 2023</CardTitle>
              <CardDescription>ICCV 2023, Paris, France</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Event Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  The 2023 workshop explored self-supervised learning approaches and their impact on computer vision tasks, with a special focus on few-shot learning.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Visit 2023 Website <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>ML Workshop 2022</CardTitle>
              <CardDescription>CVPR 2022, New Orleans, USA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Event Photo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  The inaugural workshop in 2022 brought together researchers to discuss foundational machine learning techniques for computer vision applications.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Visit 2022 Website <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Past Papers */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Past Papers</h2>
          <p className="text-muted-foreground">
            Selected papers from previous workshops
          </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead>Paper Title</TableHead>
              <TableHead className="hidden md:table-cell">Authors</TableHead>
              <TableHead className="w-[100px]">Links</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2024</TableCell>
              <TableCell className="font-medium">Diffusion Models for High-Resolution Image Generation</TableCell>
              <TableCell className="hidden md:table-cell">A. Smith, B. Johnson, C. Williams</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <FileText className="h-4 w-4" />
                      <span className="sr-only">Paper</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <Video className="h-4 w-4" />
                      <span className="sr-only">Video</span>
                    </a>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2024</TableCell>
              <TableCell className="font-medium">Transformer Architectures for Multi-Modal Learning</TableCell>
              <TableCell className="hidden md:table-cell">D. Brown, E. Davis, F. Wilson</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <FileText className="h-4 w-4" />
                      <span className="sr-only">Paper</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <Video className="h-4 w-4" />
                      <span className="sr-only">Video</span>
                    </a>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023</TableCell>
              <TableCell className="font-medium">Self-Supervised Learning for Visual Representation</TableCell>
              <TableCell className="hidden md:table-cell">G. Martinez, H. Lee, I. Kim</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <FileText className="h-4 w-4" />
                      <span className="sr-only">Paper</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <Video className="h-4 w-4" />
                      <span className="sr-only">Video</span>
                    </a>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2023</TableCell>
              <TableCell className="font-medium">Few-Shot Learning with Meta-Learning Approaches</TableCell>
              <TableCell className="hidden md:table-cell">J. Chen, K. Wang, L. Zhang</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <FileText className="h-4 w-4" />
                      <span className="sr-only">Paper</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <Video className="h-4 w-4" />
                      <span className="sr-only">Video</span>
                    </a>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2022</TableCell>
              <TableCell className="font-medium">Efficient Neural Networks for Mobile Devices</TableCell>
              <TableCell className="hidden md:table-cell">M. Patel, N. Singh, O. Thompson</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <FileText className="h-4 w-4" />
                      <span className="sr-only">Paper</span>
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <Video className="h-4 w-4" />
                      <span className="sr-only">Video</span>
                    </a>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* Past Keynotes */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Past Keynotes</h2>
          <p className="text-muted-foreground">
            Keynote presentations from previous workshops
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Advances in Generative Models</CardTitle>
              <CardDescription>Prof. Alice Johnson, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Keynote Video Thumbnail</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  This keynote explored the latest advances in generative models, focusing on diffusion models and their applications in image and video generation.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Watch Keynote <Video className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Self-Supervised Learning Revolution</CardTitle>
              <CardDescription>Dr. Robert Smith, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Keynote Video Thumbnail</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  This keynote discussed how self-supervised learning approaches have revolutionized computer vision tasks, reducing the need for large labeled datasets.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Watch Keynote <Video className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Resources */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Resources</h2>
          <p className="text-muted-foreground">
            Code repositories and datasets from past workshops
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Workshop Datasets</CardTitle>
              <CardDescription>Benchmark datasets for ML research</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A collection of benchmark datasets used in previous workshop challenges, available for download and research purposes.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> Access Datasets
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Code Repositories</CardTitle>
              <CardDescription>Implementation of workshop papers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                GitHub repositories containing code implementations of selected papers from previous workshops.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> View Repositories
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Presentation Slides</CardTitle>
              <CardDescription>Slides from past workshops</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A collection of presentation slides from keynote speakers and selected paper presentations at previous workshops.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  <FileText className="h-4 w-4" /> Download Slides
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default PastEvents;
