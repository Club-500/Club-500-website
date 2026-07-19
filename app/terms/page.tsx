import PageHead from "@/components/PageHead";
import RevealInit from "@/components/RevealInit";

export const metadata = { title: "Terms of Use | Club500" };

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

export default function TermsPage() {
  return (
    <>
      <RevealInit />
      <PageHead eyebrow="Last updated: July 2026">
        Terms of <span className="gold">Use</span>
      </PageHead>
      <div style={{ padding: "0 clamp(20px, 4vw, 32px) 72px", maxWidth: 1280, margin: "0 auto" }}>
        <h2 style={S}>Using Club500</h2>
        <p style={P}>
          By using this website you agree to these terms. Club500 connects community football
          clubs, fans, volunteers and partners across Kenya. You agree to provide accurate
          information in any application or form, and not to misuse the platform, impersonate
          others, or attempt to interfere with its operation.
        </p>
        <h2 style={S}>Fan points and predictions</h2>
        <p style={P}>
          Predictions, votes and leaderboards on this platform award fan points. Fan points are
          not money, have no cash value, and cannot be bought or sold. The predictions game is a
          free fan engagement feature, not betting or gambling.
        </p>
        <h2 style={S}>Referral earnings</h2>
        <p style={P}>
          Referral payouts are a fixed amount paid when someone joins a club through your personal
          link, as described on the Fan Zone page. There are no tiers and no recruitment
          requirements. Club500 may adjust rates or withhold payouts in cases of fraud or abuse.
        </p>
        <h2 style={S}>Content and conduct</h2>
        <p style={P}>
          Content you submit (reports, photos, fan uploads) remains yours; you grant Club500 a
          licence to publish it on the platform and club microsites with credit. We may remove
          content that is unlawful, hateful or misleading, and suspend accounts that break these
          terms.
        </p>
        <h2 style={S}>Liability</h2>
        <p style={P}>
          The platform is provided as-is while the programme grows. To the extent permitted by
          Kenyan law, Club500 is not liable for indirect losses arising from use of the site.
          These terms are governed by the laws of Kenya.
        </p>
        <h2 style={S}>Contact</h2>
        <p style={P}>Questions about these terms: hello@club500.africa.</p>
      </div>
    </>
  );
}
