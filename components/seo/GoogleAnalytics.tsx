import React from "react";

interface GoogleAnalyticsProps {
  gaId?: string;
}

export default function GoogleAnalytics({
  gaId = process.env.NEXT_PUBLIC_GA_ID || "G-SWD7X9K2L1",
}: GoogleAnalyticsProps) {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
