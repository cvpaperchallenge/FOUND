import { Link } from "react-router";
import { Calendar, MapPin } from "lucide-react";

import { Button } from "../../components/ui/button";
import homeData from "../../data/home.json";
import scheduleData from "../../data/schedule.json";

function Home() {
  return (
    <main className="container px-6 py-8 space-y-16 xl:w-6xl">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-6 py-12">
        <div className="space-y-2">
          <h1 className="text-4xl tracking-tighter sm:text-5xl md:text-6xl">
            {homeData.title}
          </h1>
          <p className="text-xl text-muted-foreground">{homeData.subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>{homeData.eventInfo.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{homeData.eventInfo.location}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link to="/iccv2025/call-for-papers">Submit Paper</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/iccv2025/program">Check Program</Link>
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">
            About FOUND Workshop
          </h2>
          <p>
            Recently, Transformer-based foundation models have achieved
            outstanding performance across a broad spectrum of benchmarks
            spanning recognition and generation tasks, and their versatility has
            fueled rapid advances in both AI research and industrial deployment.
            To seamlessly adapt these models to downstream tasks in diverse
            real-world domains-including medicine, manufacturing, robotics, and
            the creative industries-and thereby deliver tangible impact on human
            life, it is indispensable to develop Tech Transfer technologies that
            encompass domain-specific fine-tuning and robust MLOps pipelines,
            where the decisive factor is the breadth and quality of data
            available for those tasks. At the same time, model evaluation is
            approaching saturation on conventional IID benchmarks, prompting
            growing calls to redesign evaluation metrics and tasks that dispense
            with the IID assumption and explicitly capture out-of-distribution
            (OOD) and long-tail phenomena. Advancing both (i) Tech Transfer to
            heterogeneous downstream tasks and (ii) the definition of
            next-generation evaluation criteria therefore hinges on curating and
            exploiting broader and deeper data resources-Foundation Data, as we
            term them. Against this backdrop, the ICCV 2025 workshop “FOUND:
            Foundation Data for Industrial Tech Transfer” will convene
            researchers from industry and academia to share techniques for
            realizing Foundation Data and to engage in comprehensive discussions
            on model adaptation and the design of novel evaluation tasks
            grounded in such data, with the ultimate aim of opening new horizons
            for AI research and application.
          </p>
        </div>
        {/* <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p>{homeData.overview.mission}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Topics</h3>
            <ul className="list-disc pl-5 space-y-2">
              {homeData.overview.keyTopics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div> */}
      </section>

      {/* Important Dates Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Important Dates
          </h2>
          {/* <p className="text-muted-foreground">
            Key deadlines for your calendar
          </p> */}
        </div>
        <div className="relative border-l border-border pl-6 space-y-8">
          {scheduleData.importantDates.map((date, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[32px] mt-1 h-4 w-4 rounded-full bg-primary"></div>
              <div className="space-y-1">
                <h3 className="font-semibold">{date.title}</h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {date.date}
                </p>
                <p className="text-sm">{date.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Latest News</h2>
          {/* <p className="text-muted-foreground">Updates and announcements</p> */}
        </div>
        <div className="space-y-4">
          {homeData.latestNews.map((news, index) => (
            <div key={index} className="rounded-lg border bg-card p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-semibold">{news.title}</h3>
                  <p className="text-sm text-muted-foreground">{news.date}</p>
                </div>
              </div>
              <p className="mt-2">{news.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
