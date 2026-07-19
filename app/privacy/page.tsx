import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

export const metadata = { title: "Privacy Policy | Club500" };

const S: React.CSSProperties = {
  margin: "0 0 8px",
  font: '600 17px/1.4 var(--font-inter-tight), sans-serif',
};
const P: React.CSSProperties = {
  margin: "0 0 22px",
  maxWidth: 760,
  font: '400 15px/1.7 var(--font-inter-tight), sans-serif',
  color: "rgba(var(--tx),0.7)",
};

export default function PrivacyPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Last updated: July 2026">
        Privacy <span className="gold">Policy</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 style={S}>Who we are</h2>
        <p style={P}>
          Club500 (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the Club500 platform for community
          football clubs across Kenya. This policy explains what personal data we collect, why we
          collect it, and the choices you have. We process personal data in line with the Kenya
          Data Protection Act, 2019.
        </p>
        <h2 style={S}>What we collect</h2>
        <p style={P}>
          When you use our forms we collect only what you give us: your name, email address, phone
          number and county when you register a club, offer to volunteer, apply for journalist
          accreditation, or subscribe to the newsletter. We do not collect ID numbers, financial
          details or location data through this website.
        </p>
        <h2 style={S}>How we use it</h2>
        <p style={P}>
          To respond to your application, match volunteers to clubs, accredit journalists, send the
          newsletter you asked for, and pay referral earnings to the phone number you provide. We
          do not sell personal data, and we do not share it with third parties except the payment
          providers needed to process payouts (for example M-Pesa).
        </p>
        <h2 style={S}>Cookies</h2>
        <p style={P}>
          We use a small number of cookies and similar storage to keep you signed in, remember your
          club, your language and display preferences, and understand how the platform is used so
          we can improve it. You can accept or decline cookies from the notice shown when you
          visit, and clear them at any time in your browser settings.
        </p>
        <h2 style={S}>Your rights</h2>
        <p style={P}>
          Under the Data Protection Act you may ask us for a copy of the data we hold about you,
          ask us to correct or delete it, or object to how it is used. Write to
          privacy@club500.africa and we will respond within 30 days.
        </p>
        <h2 style={S}>Retention and security</h2>
        <p style={P}>
          We keep personal data only as long as needed for the purpose you gave it to us, and we
          protect it with access controls and encryption in transit. If our practices change, we
          will update this page and show the new date above.
        </p>
      </div>
    </>
  );
}
