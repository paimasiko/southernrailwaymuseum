import { Heart, Users, GraduationCap, Wrench, Calendar } from "lucide-react";

export function SupportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Support the Southeastern Railway Museum</h1>
          <p className="text-lg opacity-95 max-w-3xl mx-auto">
            Your time and contributions help us preserve railway history, restore historic cars, and educate future generations about the trains that built America.
          </p>
        </div>
      </section>

      {/* Main Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Volunteer Card */}
            <div id="volunteer" className="bg-card border border-border rounded-2xl p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Become a Volunteer</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join our community of dedicated volunteers who help preserve railway history. Whether you have a few hours a week or can commit to regular shifts, we have opportunities that match your interests and schedule.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold">Volunteer Opportunities:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Docents & Tour Guides</p>
                      <p className="text-sm text-muted-foreground">Share railway history with visitors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Restoration Crew</p>
                      <p className="text-sm text-muted-foreground">Help restore and maintain historic railway cars</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Special Events</p>
                      <p className="text-sm text-muted-foreground">Assist with educational programs and community events</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Archive & Research</p>
                      <p className="text-sm text-muted-foreground">Organize historical documents and railway artifacts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Guest Services</p>
                      <p className="text-sm text-muted-foreground">Welcome visitors and assist with ticketing</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                Become a Volunteer
              </button>
            </div>

            {/* Donate Card */}
            <div id="donate" className="bg-card border border-border rounded-2xl p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your financial support directly funds the preservation and restoration of historic railway cars, educational programs, and the maintenance of our museum collections. Every donation helps keep railway history alive.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold">Your Donation Supports:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Railway Car Restoration</p>
                      <p className="text-sm text-muted-foreground">Preserve and restore historic locomotives and cars</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Educational Programs</p>
                      <p className="text-sm text-muted-foreground">School tours, workshops, and community outreach</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Collection Care</p>
                      <p className="text-sm text-muted-foreground">Protect and maintain railway artifacts and documents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                    <div>
                      <p className="font-medium">Facility Improvements</p>
                      <p className="text-sm text-muted-foreground">Enhance exhibits and visitor experiences</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-accent text-accent-foreground py-3 rounded-full font-medium hover:bg-accent/90 transition-colors">
                Donate Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Support Helps Preserve Railway History</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every contribution—whether time or money—makes a real difference in our mission to preserve and share railway heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Restore Historic Railway Cars</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fund critical restoration work on locomotives, passenger cars, and freight equipment to preserve them for future generations.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Expand Educational Exhibitions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Create new exhibits and interactive displays that bring railway history to life for students and families.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Maintain Museum Collections</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ensure proper care and preservation of thousands of railway artifacts, documents, and historical materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Preserving Railway Heritage</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you volunteer your time or make a financial contribution, you become part of our mission to preserve the railways that built America.
          </p>
          <p className="text-sm text-muted-foreground">
            Questions? Contact us at (770) 476-2013 or info@southeasternrailwaymuseum.org
          </p>
        </div>
      </section>
    </div>
  );
}
