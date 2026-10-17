
import * as React from "react";

interface Props {
    name: string;
}

export default function ReferralConfirmation({ name }: Props) {
    const firstName = name.trim().split(/\s+/)[0] || "Friend";

    return (
        <html lang="en">
            <body style={{ margin: 0, padding: "35px 12px", backgroundColor: "#f5f5ef", fontFamily: "Arial, Helvetica, sans-serif" }}>
                <table role="presentation" cellPadding="0" cellSpacing="0" style={{ width: "100%", maxWidth: 620, margin: "0 auto", backgroundColor: "#ffffff", borderRadius: 16 }}>
                    <tbody>
                        <tr>
                            <td style={{ padding: "48px 30px", backgroundColor: "#103d29", textAlign: "center" }}>
                                <p style={{ color: "#dfc584", fontSize: 12, fontWeight: 700, letterSpacing: 3 }}>
                                    EBEN-EZER HOUSE OF HOPE
                                </p>
                                <h1 style={{ margin: "20px 0", color: "#ffffff", fontSize: 33, fontFamily: "Georgia, serif" }}>
                                    Thank You for Reaching Out
                                </h1>
                                <p style={{ color: "#e2e9df", fontSize: 15 }}>
                                    Every journey begins with hope.
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{ padding: "42px 32px", color: "#46584a", lineHeight: 1.9, fontSize: 15 }}>
                                <h2 style={{ color: "#103d29", fontFamily: "Georgia, serif", fontSize: 25 }}>
                                    Hello {firstName},
                                </h2>

                                <p>
                                    Thank you for connecting with Eben-Ezer House of Hope.
                                    We have received your inquiry and appreciate you taking
                                    the time to reach out.
                                </p>

                                <p>
                                    Our team will review your submission and follow up
                                    as appropriate.
                                </p>

                                <div style={{ margin: "30px 0", padding: 24, backgroundColor: "#f4f6ef", borderLeft: "4px solid #dfc584" }}>
                                    <strong style={{ color: "#103d29" }}>A Message of Hope</strong>
                                    <p style={{ marginBottom: 0, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                                        Hope is the beginning of a new chapter, and every
                                        step forward matters.
                                    </p>
                                </div>

                                <p>
                                    With warmth and gratitude,
                                    <br />
                                    <strong style={{ color: "#103d29" }}>
                                        The Eben-Ezer House of Hope Team
                                    </strong>
                                </p>

                                <p style={{ marginTop: 30, fontSize: 12, color: "#758075" }}>
                                    This message confirms receipt of an inquiry only.
                                    It does not guarantee admission, placement, or housing availability.
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{ padding: 25, backgroundColor: "#103d29", textAlign: "center", color: "#e2e9df", fontSize: 12 }}>
                                Eben-Ezer House of Hope
                                <br />
                                Rooted in Hope. Growing in Purpose.
                                <br />
                                ebenezerhouseofhope.com
                            </td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>
    );
}
