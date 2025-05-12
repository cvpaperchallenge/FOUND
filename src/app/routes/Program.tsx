import { ExternalLink, FileText, Video } from "lucide-react";

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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

function Program() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">Program</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Accepted papers, keynote speakers, and panel discussions
        </p>
      </section>

      {/* Keynote Speakers */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Keynote Speakers
          </h2>
          <p className="text-muted-foreground">
            Distinguished researchers and industry leaders
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Prof. Jane Smith</CardTitle>
              <CardDescription>Stanford University</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Speaker Photo</span>
                </div>
                <h3 className="font-semibold">
                  Advances in Machine Learning for Computer Vision
                </h3>
                <p className="text-sm text-muted-foreground">
                  This keynote will explore recent breakthroughs in machine
                  learning techniques for computer vision tasks, with a focus on
                  self-supervised learning approaches and their applications in
                  real-world scenarios.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  View Profile <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dr. John Doe</CardTitle>
              <CardDescription>Research Lead, AI Lab</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Speaker Photo</span>
                </div>
                <h3 className="font-semibold">
                  Future Directions in ML Research
                </h3>
                <p className="text-sm text-muted-foreground">
                  This talk will discuss emerging trends and future directions
                  in machine learning research, highlighting key challenges and
                  opportunities for the next generation of ML systems and
                  applications.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  View Profile <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Accepted Papers */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Accepted Papers
          </h2>
          <p className="text-muted-foreground">
            Research papers accepted for presentation at the workshop
          </p>
        </div>
        <div className="flex-col justify-items-center w-full">
          <Tabs defaultValue="oral" className="w-80 sm:w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="oral">Oral Presentations</TabsTrigger>
              <TabsTrigger value="poster">Poster Presentations</TabsTrigger>
            </TabsList>
            <TabsContent value="oral" className="space-y-4 pt-4">
              <ScrollArea className="w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Paper Title</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Authors
                      </TableHead>
                      <TableHead className="w-[100px]">Links</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Efficient Self-Supervised Learning for Computer Vision Tasks
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        A. Johnson, B. Williams, C. Davis
                      </TableCell>
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
                      <TableCell className="font-medium">
                        Neural Rendering for 3D Scene Reconstruction
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        D. Miller, E. Wilson, F. Taylor
                      </TableCell>
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
                      <TableCell className="font-medium">
                        Generative Models for Medical Image Synthesis
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        G. Brown, H. Martinez, I. Lee
                      </TableCell>
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
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
          </TabsContent>
            <TabsContent value="poster" className="space-y-4 pt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Paper Title</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Authors
                    </TableHead>
                    <TableHead className="w-[100px]">Links</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Few-Shot Learning for Object Detection
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      J. Smith, K. Johnson, L. Garcia
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <a href="#" target="_blank" rel="noreferrer">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">Paper</span>
                          </a>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Transformer-Based Architectures for Video Understanding
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      M. Chen, N. Patel, O. Kim
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <a href="#" target="_blank" rel="noreferrer">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">Paper</span>
                          </a>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Efficient Neural Networks for Edge Devices
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      P. Wang, Q. Zhang, R. Singh
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <a href="#" target="_blank" rel="noreferrer">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">Paper</span>
                          </a>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Reinforcement Learning for Robotic Control
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      S. Thompson, T. Anderson, U. Gupta
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <a href="#" target="_blank" rel="noreferrer">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">Paper</span>
                          </a>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Panel Discussion */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Panel Discussion
          </h2>
          <p className="text-muted-foreground">
            Challenges and Opportunities in ML
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>
              Panel: Challenges and Opportunities in Machine Learning
            </CardTitle>
            <CardDescription>October 16, 2025, 13:15 - 14:45</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                This panel brings together experts from academia and industry to
                discuss current challenges and future opportunities in machine
                learning research and applications. Topics will include ethical
                considerations, computational efficiency, and emerging
                application domains.
              </p>
              <h3 className="font-semibold">Panelists</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prof. Jane Smith - Stanford University</li>
                <li>Dr. John Doe - Research Lead, AI Lab</li>
                <li>Dr. Sarah Johnson - Chief AI Officer, Tech Corp</li>
                <li>Prof. Michael Chen - MIT</li>
              </ul>
              <h3 className="font-semibold">Moderator</h3>
              <p>Prof. Robert Wilson - Workshop Chair</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Session Structure */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Session Structure
          </h2>
          <p className="text-muted-foreground">
            Organization of paper presentations by topic
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Session 1: Deep Learning Architectures</CardTitle>
              <CardDescription>October 15, 10:30 - 12:00</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This session focuses on novel deep learning architectures and
                optimization techniques.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Efficient Self-Supervised Learning for Computer Vision Tasks
                </li>
                <li>Transformer-Based Architectures for Video Understanding</li>
                <li>Attention Mechanisms for Multi-Modal Learning</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Session 2: Generative Models</CardTitle>
              <CardDescription>October 15, 13:30 - 15:00</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This session covers recent advances in generative modeling
                techniques.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Neural Rendering for 3D Scene Reconstruction</li>
                <li>Generative Models for Medical Image Synthesis</li>
                <li>Text-to-Image Synthesis with Diffusion Models</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Session 3: Applications in Computer Vision</CardTitle>
              <CardDescription>October 16, 10:15 - 11:45</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This session explores practical applications of ML in computer
                vision.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Few-Shot Learning for Object Detection</li>
                <li>3D Human Pose Estimation from Video</li>
                <li>Visual Question Answering in Complex Scenes</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Session 4: Emerging Techniques</CardTitle>
              <CardDescription>October 16, 15:15 - 16:45</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This session highlights emerging techniques and novel
                applications.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Efficient Neural Networks for Edge Devices</li>
                <li>Reinforcement Learning for Robotic Control</li>
                <li>Federated Learning for Privacy-Preserving ML</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default Program;
