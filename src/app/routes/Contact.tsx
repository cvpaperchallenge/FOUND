import { Link } from "react-router";
import { Mail, MapPin, Send, Twitter, Slack } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";

function Contact() {
  return (
    <main className="container py-8 space-y-12">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Get in touch with the Machine Learning Workshop team
        </p>
      </section>

      {/* Contact Information */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
          <p className="text-muted-foreground">
            Ways to reach out to us
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" /> Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                For general inquiries, please contact us at:
              </p>
              <p className="font-medium mt-2">
                <a href="mailto:contact@mlworkshop.org" className="hover:text-primary">
                  contact@mlworkshop.org
                </a>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The workshop will be held at:
              </p>
              <p className="font-medium mt-2">
                Singapore Convention Center<br />
                ICCV 2025, October 15-16, 2025
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Slack className="h-5 w-5" /> Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Join our community channels:
              </p>
              <div className="flex gap-4 mt-2">
                <Button variant="outline" size="sm" className="flex gap-2" asChild>
                  <a href="#" target="_blank" rel="noreferrer">
                    <Twitter className="h-4 w-4" /> Twitter
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex gap-2" asChild>
                  <a href="#" target="_blank" rel="noreferrer">
                    <Slack className="h-4 w-4" /> Slack
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Contact Form</h2>
          <p className="text-muted-foreground">
            Send us a message directly
          </p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Message subject" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="flex gap-2">
                Send Message <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Common questions about contacting us
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>How quickly will you respond to my inquiry?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We aim to respond to all inquiries within 2-3 business days. For urgent matters related to paper submissions or registration, please indicate this in your subject line.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Who should I contact for specific questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                For paper submission questions, contact program-chairs@mlworkshop.org. For registration or logistics, contact registration@mlworkshop.org. For general inquiries, use our main contact email.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Can I request a meeting with the organizers?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Yes, you can request a meeting with the workshop organizers by sending an email with your availability and the purpose of the meeting. We'll do our best to accommodate your request.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How can I join the workshop community?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You can join our Slack channel for discussions with other participants and organizers. The invitation link will be sent to registered participants, or you can request access via email.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default Contact;
