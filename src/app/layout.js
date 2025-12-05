import "./globals.css";

export const metadata = {
  title: "LegalSifter - AI-Powered Web3 Security & Smart Contract Auditing",
  description: "Enterprise-grade contract review: compliance, security and legal certainty Powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
