import { Link } from "react-router";
import { Calendar, Clock, MapPin } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

function Schedule() {
  return (
    <main className="container py-8 space-y-12">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter">Schedule</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Important dates and workshop program
        </p>
      </section>

      {/* Important Dates Timeline */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Important Dates</h2>
          <p className="text-muted-foreground">
            Key deadlines for your calendar
          </p>
        </div>
        <div className="relative border-l border-border pl-6 space-y-8">
          <div className="relative">
            <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
            <div className="space-y-1">
              <h3 className="font-semibold">Paper Submission Deadline</h3>
              <p className="text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                July 15, 2025
              </p>
              <p className="text-sm">
                All submissions must be received by 11:59 PM Pacific Time (UTC-7)
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
            <div className="space-y-1">
              <h3 className="font-semibold">Author Notification</h3>
              <p className="text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                August 15, 2025
              </p>
              <p className="text-sm">
                Authors will be notified of acceptance decisions
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
            <div className="space-y-1">
              <h3 className="font-semibold">Camera-Ready Deadline</h3>
              <p className="text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                September 1, 2025
              </p>
              <p className="text-sm">
                Final versions of accepted papers must be submitted
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-[25px] h-4 w-4 rounded-full bg-primary"></div>
            <div className="space-y-1">
              <h3 className="font-semibold">Workshop Date</h3>
              <p className="text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                October 15-16, 2025
              </p>
              <p className="text-sm">
                Workshop sessions at ICCV 2025 in Singapore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Program - Day 1 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Workshop Program - Day 1</h2>
          <p className="text-muted-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4" /> October 15, 2025
            <MapPin className="h-4 w-4 ml-4" /> Room A3, Convention Center
          </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Time</TableHead>
              <TableHead>Session</TableHead>
              <TableHead className="hidden md:table-cell">Presenter</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">9:00 - 9:15</TableCell>
              <TableCell>Opening Remarks</TableCell>
              <TableCell className="hidden md:table-cell">Workshop Chairs</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">9:15 - 10:15</TableCell>
              <TableCell>Keynote: Advances in Machine Learning for Computer Vision</TableCell>
              <TableCell className="hidden md:table-cell">Prof. Jane Smith</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">10:15 - 10:30</TableCell>
              <TableCell>Coffee Break</TableCell>
              <TableCell className="hidden md:table-cell"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">10:30 - 12:00</TableCell>
              <TableCell>Oral Session 1: Deep Learning Architectures</TableCell>
              <TableCell className="hidden md:table-cell">Various Presenters</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">12:00 - 13:30</TableCell>
              <TableCell>Lunch Break</TableCell>
              <TableCell className="hidden md:table-cell"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">13:30 - 15:00</TableCell>
              <TableCell>Oral Session 2: Generative Models</TableCell>
              <TableCell className="hidden md:table-cell">Various Presenters</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">15:00 - 15:30</TableCell>
              <TableCell>Coffee Break</TableCell>
              <TableCell className="hidden md:table-cell"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">15:30 - 17:00</TableCell>
              <TableCell>Poster Session</TableCell>
              <TableCell className="hidden md:table-cell">All Poster Presenters</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* Workshop Program - Day 2 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Workshop Program - Day 2</h2>
          <p className="text-muted-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4" /> October 16, 2025
            <MapPin className="h-4 w-4 ml-4" /> Room A3, Convention Center
          </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Time</TableHead>
              <TableHead>Session</TableHead>
              <TableHead className="hidden md:table-cell">Presenter</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">9:00 - 10:00</TableCell>
              <TableCell>Keynote: Future Directions in ML Research</TableCell>
              <TableCell className="hidden md:table-cell">Dr. John Doe</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">10:00 - 10:15</TableCell>
              <TableCell>Coffee Break</TableCell>
              <TableCell className="hidden md:table-cell"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">10:15 - 11:45</TableCell>
              <TableCell>Oral Session 3: Applications in Computer Vision</TableCell>
              <TableCell className="hidden md:table-cell">Various Presenters</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">11:45 - 13:15</TableCell>
              <TableCell>Lunch Break</TableCell>
              <TableCell className="hidden md:table-cell"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">13:15 - 14:45</TableCell>
              <TableCell>Panel Discussion: Challenges and Opportunities in ML</TableCell>
              <TableCell className="hidden md:table-cell">Industry and Academic Experts</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">14:45 - 15:15</TableCell>
              <TableCell>Coffee Break</TableCell>
              <TableCell className="hidden md:table-cell"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">15:15 - 16:45</TableCell>
              <TableCell>Oral Session 4: Emerging Techniques</TableCell>
              <TableCell className="hidden md:table-cell">Various Presenters</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">16:45 - 17:00</TableCell>
              <TableCell>Best Paper Awards and Closing Remarks</TableCell>
              <TableCell className="hidden md:table-cell">Workshop Chairs</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* Presenter Guidelines */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Presenter Guidelines</h2>
          <p className="text-muted-foreground">
            Information for oral and poster presenters
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Oral Presentation Guidelines</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>Each oral presentation will be allocated 15 minutes, followed by 5 minutes for questions and answers.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Prepare slides in 16:9 format</li>
                  <li>Upload your presentation at least 30 minutes before your session</li>
                  <li>Include your paper title, authors, and affiliations on the first slide</li>
                  <li>A timer will be visible to help you manage your time</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Poster Presentation Guidelines</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>Posters will be displayed during the dedicated poster session. At least one author must be present during this time.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Maximum poster size: 36" x 48" (91cm x 122cm)</li>
                  <li>Portrait orientation is recommended</li>
                  <li>Set up your poster 30 minutes before the session starts</li>
                  <li>Prepare a 2-minute elevator pitch for your work</li>
                  <li>Consider bringing handouts or QR codes linking to your paper/code</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Technical Requirements</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>The following equipment will be provided for oral presentations:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Projector with HDMI connection</li>
                  <li>Presenter remote</li>
                  <li>Microphone</li>
                  <li>Laser pointer</li>
                </ul>
                <p>Please bring your own laptop or a USB drive with your presentation.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default Schedule;
