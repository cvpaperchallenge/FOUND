import { Link } from "react-router";
import { Download, ExternalLink } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

function CallForPapers() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
          Call for Papers
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Submit your research to the Machine Learning Workshop at ICCV 2025
        </p>
      </section>

      {/* Topics Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Topics of Interest
          </h2>
          <p className="text-muted-foreground">
            We welcome submissions on the following topics (but not limited to):
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Core ML Techniques
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Deep learning architectures</li>
              <li>Generative models</li>
              <li>Self-supervised learning</li>
              <li>Few-shot and zero-shot learning</li>
              <li>Reinforcement learning</li>
              <li>Neural rendering</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold">Applications</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Computer vision</li>
              <li>Medical imaging</li>
              <li>Robotics and autonomous systems</li>
              <li>AR/VR applications</li>
              <li>Video understanding</li>
              <li>3D reconstruction</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Paper Format Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Paper Format
          </h2>
          <p className="text-muted-foreground">
            Guidelines for preparing and submitting your paper
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              Submission Guidelines
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Papers must be submitted in PDF format</li>
              <li>Maximum 8 pages (excluding references and appendices)</li>
              <li>Use the ICCV 2025 template</li>
              <li>Submissions must be anonymous</li>
              <li>Supplementary material is allowed</li>
            </ul>
            <div className="flex gap-4 pt-2">
              <Button variant="outline" className="flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" />
                  Download Template
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Review Process</h3>
            <p>
              All submissions will undergo a double-blind peer review process.
              Each paper will be reviewed by at least three reviewers from our
              program committee. Accepted papers will be presented at the
              workshop and included in the proceedings.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold">Publication</h3>
            <p>
              Accepted papers will be published in the ICCV 2025 Workshop
              Proceedings and will be available on IEEE Xplore and CVF Open
              Access.
            </p>
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            How to Submit
          </h2>
          <p className="text-muted-foreground">
            Submit your paper through our OpenReview portal
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="space-y-4">
            <p>
              All submissions must be made through the OpenReview submission
              system. Please ensure that your submission adheres to the
              formatting guidelines and anonymity requirements.
            </p>
            <div className="flex justify-center">
              <Button className="flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  Submit Paper <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Paper Awards */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Best Paper Awards
          </h2>
          <p className="text-muted-foreground">
            Recognition for outstanding research contributions
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <p>
            We will present Best Paper and Best Student Paper awards to
            recognize outstanding contributions. Award winners will receive
            certificates and will be highlighted during the workshop.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Common questions about the submission process
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Can I submit a paper that is under review elsewhere?
            </AccordionTrigger>
            <AccordionContent>
              No, submissions must be original and not under review at any other
              conference, workshop, or journal during the review period.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Is there a page limit for supplementary material?
            </AccordionTrigger>
            <AccordionContent>
              There is no strict page limit for supplementary material, but we
              recommend keeping it concise and relevant to support your main
              submission.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I submit a previously published paper?
            </AccordionTrigger>
            <AccordionContent>
              No, submissions must contain original work that has not been
              previously published in any peer-reviewed venue.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do I need to attend the workshop if my paper is accepted?
            </AccordionTrigger>
            <AccordionContent>
              Yes, at least one author of each accepted paper must register for
              and attend the workshop to present the work.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Questions?
          </h2>
          <p className="text-muted-foreground">
            If you have any questions about the submission process, please
            contact us
          </p>
        </div>
        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link to="/iccv2025/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

export default CallForPapers;
