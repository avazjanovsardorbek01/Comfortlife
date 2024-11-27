import { FC, createContext, useContext, useEffect, useState } from "react";
import {
  Settings,
  SettingsContextValue,
  SettingsProviderProps,
} from "../types/settings";

const initialSettings: Settings = {
  direction: "ltr",
  lang: "ru",
  theme: "light",
};

function hasObjectValues(obj: Object, ...values: string[]) {
  if (!obj || typeof obj !== "object") return false;
  const objKeys = Object.keys(obj);
  for (const value of values) {
    if (!objKeys.includes(value)) return false;
  }
  return true;
}

export function restoreSettings(): Settings {
  const local = window.localStorage.getItem("settings");
  const localObject = local && JSON.parse(local);
  return hasObjectValues(localObject, ...Object.keys(initialSettings))
    ? localObject
    : initialSettings;
}

export const storeSettings = (settings: Settings): void => {
  window.localStorage.setItem("settings", JSON.stringify(settings));
};

export const SettingsContext = createContext<SettingsContextValue>({
  settings: initialSettings,
  saveSettings: () => {},
});

export const SettingsProvider: FC<SettingsProviderProps> = (props) => {
  const { children } = props;
  const [settings, setSettings] = useState<Settings>(initialSettings);

  useEffect(() => {
    setSettings(restoreSettings());
  }, []);

  const saveSettings = (updatedSettings: Settings): void => {
    setSettings(updatedSettings);
    storeSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
