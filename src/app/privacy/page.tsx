import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy | Nandarang Restaurant & Bar",
  description: "Privacy policy for Nandarang Restaurant & Bar in Koreatown Los Angeles.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://nandarangla.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="section" style={{ paddingTop: "160px" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          <span className="btn-outline" style={{ pointerEvents: "none", border: "none", padding: 0, color: "var(--primary)", letterSpacing: "0.2em" }}>
            Nandarang
          </span>
          <h1 className="section-title" style={{ textAlign: "left", marginTop: "8px" }}>
            Privacy Policy
          </h1>
          <div style={{ display: "grid", gap: "24px", color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.7 }}>
            <p>
              Nandarang Restaurant & Bar uses basic contact information only when guests choose to call, email, make inquiries, or interact with our public social and review profiles.
            </p>
            <p>
              We do not sell personal information. Third-party platforms such as Google Maps, Yelp, Facebook, Instagram, TikTok, delivery services, or reservation services may process information according to their own privacy policies.
            </p>
            <p>
              For privacy questions or requests, contact us at <a href="mailto:nandarang@gmail.com" style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>nandarang@gmail.com</a> or call <a href="tel:2133888513" style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>(213) 388-8513</a>.
            </p>
            <p>Last updated: June 5, 2026.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
