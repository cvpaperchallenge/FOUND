import type { MetaFunction } from "react-router";
import { Link } from "react-router";

import { Button } from "../../components/ui/button";
import { createMeta } from "@/lib/metadata";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Sponsorship Opportunities",
    description:
      "Explore sponsorship opportunities for the FOUND and LIMIT workshops at ICCV 2025, including benefits, visibility, and contact information.",
    path: "/sponsorship",
  });

function Sponsorship() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      <section className="space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
            Sponsorship Opportunities
          </h1>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Support FOUND Workshop
          </h2>
          <div className="space-y-4 text-left">
            <p>
              The ICCV 2025 Workshop on <strong>Foundation Data (FOUND)</strong>
              is now welcoming sponsors. We invite industry partners who wish to
              engage with the international computer vision research community
              and support the workshop&#39;s activities. Sponsors will be
              acknowledged on the FOUND workshop website and during the event.
            </p>
            <p>
              As the FOUND and{" "}
              <strong>
                <a
                  href="https://iccv2025-limit-workshop.limitlab.xyz/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  Learning with Very Limited Resources (LIMIT)
                </a>
              </strong>{" "}
              workshops will jointly host the social event, sponsorship is
              shared across both workshops. This means that the{" "}
              <strong>Benefits for Sponsors</strong> listed below will apply to
              both the FOUND and LIMIT workshops.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Benefits for Sponsors
          </h2>
          <div className="space-y-6">
            <ul className="space-y-6">
              <li className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Short Introduction at Social Event
                </h3>
                <p>
                  Each sponsor will have a few minutes to introduce their
                  organization during the social event following the workshop.
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Booth Space for Novelties
                </h3>
                <p>
                  A small table or space will be available for distributing
                  company novelties or informational materials.
                </p>
              </li>
              <li className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Visibility on Website and Program
                </h3>
                <p>
                  Sponsor logos will be displayed on the workshop website and in
                  the program materials.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Why Sponsor?
          </h2>
          <div className="space-y-4">
            <p>Supporting the workshop provides a unique opportunity to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Connect with leading researchers and students in computer
                vision.
              </li>
              <li>
                Increase visibility within the academic and industrial
                community.
              </li>
              <li>
                Promote your organization&#39;s vision, products, and career
                opportunities.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Contact
          </h2>
          <div className="space-y-4">
            <p>
              If your organization is interested in becoming a sponsor, please
              contact us:
            </p>
            <div>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sponsorship;
