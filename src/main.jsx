import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://457461bcee268e02f0e915c9c0a29ad8@o4508538159824896.ingest.us.sentry.io/4508538161856512",
  integrations: [
    Sentry.browserTracingIntegration(),
    new Sentry.BrowserClient(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
