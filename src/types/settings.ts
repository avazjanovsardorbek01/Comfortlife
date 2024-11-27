import { supportedLangs } from "./supportedLangs";

export interface Settings {
  lang: supportedLangs;
  direction?: "ltr" | "rtl";
  theme?: string;
}

export interface SettingsContextValue {
  settings: Settings;
  //eslint-disable-next-line
  saveSettings: (update: Settings) => void;
}

export interface SettingsProviderProps {
  children?: React.ReactNode;
}
