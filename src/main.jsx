import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";
import React from 'react';

Sentry.init({
  dsn: "https://be66aa107d9ee6198239535ae1739f57@o4508953958416384.ingest.us.sentry.io/4508953963921408",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
        useEffect: React.useEffect
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  tracePropagationTargets: ["localhost", "https://localhost:5173/api/" ]
});

createRoot(document.getElementById('root')).render(<App />)
