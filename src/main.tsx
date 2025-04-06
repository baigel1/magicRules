import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@yext/search-ui-react/bundle.css";
import "./index.css";
import {
  provideHeadless,
  SearchHeadlessProvider,
  HeadlessConfig,
} from "@yext/search-headless-react";

const config: HeadlessConfig = {
  apiKey: "c86d435433eaa875de63ea410bf8ccb6",
  experienceKey: "magic-rules",
  locale: "en",
  verticalKey: "rules",
};
const searcher = provideHeadless(config);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <App />
    </SearchHeadlessProvider>
  </StrictMode>
);
