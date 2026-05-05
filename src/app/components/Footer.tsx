export function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">
        
        {/* Top Divider */}
        <div className="border-t border-white/10 mb-16"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left justify-items-center">
          
          {/* Visit */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Visit</h3>
            <p className="text-white/80 leading-8">
              3595 Buford Highway<br />
              Duluth, GA 30096<br />
              (770) 476-2013
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Hours</h3>
            <p className="text-white/80 leading-8">
              Thursday – Saturday<br />
              10 a.m. – 5 p.m.<br />
              Sunday<br />
              12 p.m. – 5 p.m.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-3 text-white/80">
              <li>Exhibitions</li>
              <li>Events</li>
              <li>Education Programs</li>
              <li>Memberships</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-white/80">
              <li>Donate</li>
              <li>Volunteer</li>
              <li>Museum Shop</li>
              <li>Contact Us</li>
            </ul>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-20">
          <p className="font-semibold text-lg">
            (c) 2019-2025 Southeastern Railway Museum.
          </p>
          <p className="text-white/70 mt-3">
            Preserving railway heritage for future generations
          </p>
        </div>

      </div>
    </footer>
  );
}