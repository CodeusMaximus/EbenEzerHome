
import * as React from "react";

interface Props {
    name: string;
    organization: string;
    email: string;
    phone: string;
    reason: string;
    message: string;
}

export default function ReferralNotification({
    name,
    organization,
    email,
    phone,
    reason,
    message,
}: Props) {
    const row = (label: string, value: string) => (
        <tr>
            <td
                style={{
                    padding: "13px 8px",
                    width: "36%",
                    color: "#667568",
                    fontSize: 13,
                    verticalAlign: "top",
                    borderBottom: "1px solid #edf0e9",
                }}
            >
                {label}
            </td>

            <td
                style={{
                    padding: "13px 8px",
                    color: "#153d29",
                    fontSize: 14,
                    fontWeight: 600,
                    verticalAlign: "top",
                    borderBottom: "1px solid #edf0e9",
                    overflowWrap: "anywhere",
                }}
            >
                {value || "Not provided"}
            </td>
        </tr>
    );

    return (
        <html lang="en">
            <body
                style={{
                    margin: 0,
                    padding: "32px 12px",
                    backgroundColor: "#f4f5ee",
                    fontFamily: "Arial, Helvetica, sans-serif",
                }}
            >
                <table
                    role="presentation"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{
                        width: "100%",
                        maxWidth: 640,
                        margin: "0 auto",
                        backgroundColor: "#ffffff",
                        borderRadius: 16,
                        overflow: "hidden",
                    }}
                >
                    <tbody>
                        <tr>
                            <td
                                style={{
                                    padding: "46px 30px",
                                    backgroundColor: "#103d29",
                                    textAlign: "center",
                                }}
                            >
                                <p
                                    style={{
                                        margin: 0,
                                        color: "#dfc584",
                                        fontSize: 12,
                                        fontWeight: 700,
                                        letterSpacing: 3,
                                    }}
                                >
                                    EBEN-EZER HOUSE OF HOPE
                                </p>

                                <h1
                                    style={{
                                        margin: "20px 0 10px",
                                        color: "#ffffff",
                                        fontSize: 34,
                                        fontFamily: "Georgia, serif",
                                    }}
                                >
                                    A New Connection
                                </h1>

                                <p
                                    style={{
                                        margin: 0,
                                        color: "#e0eadf",
                                        fontSize: 14,
                                    }}
                                >
                                    Referral & Inquiry Notification
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{ padding: "38px 30px" }}>
                                <h2
                                    style={{
                                        margin: "0 0 12px",
                                        color: "#103d29",
                                        fontFamily: "Georgia, serif",
                                        fontSize: 26,
                                    }}
                                >
                                    New Inquiry Received
                                </h2>

                                <p
                                    style={{
                                        color: "#59665b",
                                        lineHeight: 1.8,
                                        fontSize: 14,
                                    }}
                                >
                                    A visitor has submitted an inquiry through
                                    the Eben-Ezer House of Hope website.
                                    Their information is provided below.
                                </p>

                                <table
                                    role="presentation"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{
                                        width: "100%",
                                        marginTop: 25,
                                        borderCollapse: "collapse",
                                    }}
                                >
                                    <tbody>
                                        {row("Name", name)}
                                        {row("Organization", organization)}
                                        {row("Email", email)}
                                        {row("Phone", phone)}
                                        {row("Reason", reason)}
                                    </tbody>
                                </table>

                                {/* REFERRAL MESSAGE */}
                                <div
                                    style={{
                                        marginTop: 30,
                                        padding: 24,
                                        borderRadius: 12,
                                        backgroundColor: "#f4f6ef",
                                        borderLeft: "4px solid #dfc584",
                                    }}
                                >
                                    <h3
                                        style={{
                                            margin: "0 0 14px",
                                            color: "#103d29",
                                            fontFamily: "Georgia, serif",
                                            fontSize: 21,
                                        }}
                                    >
                                        Referral Message
                                    </h3>

                                    <p
                                        style={{
                                            margin: 0,
                                            color: "#425447",
                                            fontSize: 14,
                                            lineHeight: 1.8,
                                            whiteSpace: "pre-wrap",
                                            overflowWrap: "anywhere",
                                        }}
                                    >
                                        {message || "No message provided."}
                                    </p>
                                </div>

                                <p
                                    style={{
                                        marginTop: 28,
                                        color: "#718074",
                                        fontSize: 12,
                                        lineHeight: 1.7,
                                    }}
                                >
                                    You can reply to this email to contact
                                    the sender directly.
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td
                                style={{
                                    padding: 26,
                                    backgroundColor: "#103d29",
                                    color: "#e0eadf",
                                    textAlign: "center",
                                    fontSize: 12,
                                    lineHeight: 1.8,
                                }}
                            >
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
