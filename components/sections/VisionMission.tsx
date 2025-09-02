import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Vision, Mission and Core Values
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Guiding Verse</h3>
            <blockquote className="text-lg italic text-gray-900 px-8">
              &ldquo;Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock. The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall, because it had its foundation on the rock.&rdquo;
              <cite className="block mt-3 text-base not-italic">— Matthew 7:24–25</cite>
            </blockquote>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Vision</h3>
            <p className="text-gray-900 leading-relaxed mb-4">
              At Great Rock Renovations, our vision is to glorify God through excellence in construction and renovation — creating beautiful and lasting spaces that enhance homes and bring value to families across Houston. We strive to be known not only for the quality of our craftsmanship but also for the faith and integrity that guide it. As Jesus taught, the wise build on the rock, and we are committed to building on that eternal foundation.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mission</h3>
            <p className="text-gray-900 leading-relaxed mb-4">
              Our mission is to do all of our work as unto the Lord, giving our very best in every project we take on. We pursue excellence in all that we do — in the structures we build, the spaces we renovate, in the way we treat our crews, in how we serve our customers, and in how we bless our community.
            </p>
            <p className="text-gray-900 leading-relaxed mb-4">
              We view every day as an opportunity to not only be a light to our customers, but also to every person who is involved in our business. Every project is more than construction; it is a chance to live out biblical principles — to love our neighbors as ourselves (Matthew 22:39), to serve with humility (Philippians 2:3–4), and to walk in integrity (Proverbs 11:3).
            </p>
            <p className="text-gray-900 leading-relaxed">
              As an extension of our mission, with every project we deliver, a donation is made to one of our ministry partners. This ensures that the work of our hands not only improves homes, but also advances God&apos;s Kingdom and serves those in need.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Core Values</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Integrity
                </h4>
                <p className="text-gray-900 leading-relaxed">
                  &ldquo;The integrity of the upright guides them&rdquo; (Proverbs 11:3). We are committed to honesty, transparency, and doing the right thing in every decision.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Excellence
                </h4>
                <p className="text-gray-900 leading-relaxed">
                  &ldquo;Whatever you do, work at it with all your heart, as working for the Lord&rdquo; (Colossians 3:23). We approach each project as an act of worship, giving our very best.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Respect
                </h4>
                <p className="text-gray-900 leading-relaxed">
                  &ldquo;Do to others what you would have them do to you&rdquo; (Matthew 7:12). We treat every client, subcontractor, and employee with fairness and dignity.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Communication
                </h4>
                <p className="text-gray-900 leading-relaxed">
                  &ldquo;Let your &apos;Yes&apos; be yes, and your &apos;No,&apos; no&rdquo; (Matthew 5:37). We build trust through clarity, honesty, and consistency.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Gratitude
                </h4>
                <p className="text-gray-900 leading-relaxed">
                  &ldquo;Give thanks in all circumstances&rdquo; (1 Thessalonians 5:18). We work with thankful hearts, recognizing every opportunity is from God.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Service
                </h4>
                <p className="text-gray-900 leading-relaxed">
                  &ldquo;The greatest among you will be your servant&rdquo; (Matthew 23:11). We serve others with humility, always seeking to exceed expectations.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Stewardship
                </h4>
                <p className="text-gray-900 leading-relaxed">
                  &ldquo;It is required that those who have been given a trust must prove faithful&rdquo; (1 Corinthians 4:2). We manage time, resources, and relationships wisely to build lasting results.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Generosity
                </h4>
                <p className="text-gray-900 leading-relaxed">
                  &ldquo;It is more blessed to give than to receive&rdquo; (Acts 20:35). Every project fuels our ability to give back to ministries, advancing the Kingdom through our work.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Build Your Project on a Solid Foundation
            </h3>
            <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
              Partner with a company that shares your values and delivers excellence in every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500 "
              >
                Get Your Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-bold text-lg border-2 border-blue-200 hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500 "
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;