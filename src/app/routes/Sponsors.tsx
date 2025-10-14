import type { MetaFunction } from "react-router";
import { ExternalLink } from "lucide-react";

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import sponsorsData from "../../data/sponsors.json";

import { createMeta } from "@/lib/metadata";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Sponsors",
    description: "TODO",
    path: "/sponsors",
  });

function Sponsors() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
          {sponsorsData.title}
        </h1>
        {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {sponsorsData.subtitle}
        </p> */}
      </section>

      {/* Sponsors */}
      <section className="space-y-6">
        {/* <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Sponsors
          </h2>
          <p className="text-muted-foreground">
            Workshop organization and coordination
          </p>
        </div> */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sponsorsData.sponsors.map((spnsor, index) => (
            <Card key={index}>
              {/* <CardHeader>
                <CardTitle>{spnsor.name}</CardTitle>
                <CardDescription>{spnsor.affiliation}</CardDescription>
              </CardHeader> */}
              <CardContent>
                <div className="space-y-4">
                  {/* <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    <img
                      src={spnsor.photo}
                      alt={`Photo of ${spnsor.name}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div> */}
                  <div className="bg-white dark:bg-white aspect-square rounded-md flex items-center justify-center p-4">
                    <img
                      src={spnsor.photo}
                      alt={`Photo of ${spnsor.name}`}
                      className="max-h-40 sm:max-h-64 md:max-h-40 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  {/* <p className="text-sm text-muted-foreground">{chair.bio}</p> */}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {/* <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  asChild
                >
                  <a href={`mailto:${chair.email}`}>
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </Button> */}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  asChild
                >
                  <a href={spnsor.website} target="_blank" rel="noreferrer">
                    Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Sponsors;
