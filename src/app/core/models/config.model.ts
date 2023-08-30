export interface AppConfig {
    themes: Theme[];
}

export interface Theme {
    name: string;
    darkMode: {
        defaultSchema: 'dark' | 'light';
        detectMode: 'auto' | 'manual';
    },
    light: Palette;
    dark: Palette;
}

export interface Palette {
    primary: string;
    secondary: string;
    tertiary: string;
    base: string;
    success: string;
    warning: string;
    error: string;
}
