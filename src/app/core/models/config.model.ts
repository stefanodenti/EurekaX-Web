export interface AppConfig {
    themes: Theme[];
    layouts: Layout[];
}

export interface Theme {
    name: string;
    darkMode: {
        defaultSchema: 'dark' | 'light';
        detectMode: 'auto' | 'manual';
    },
    light: Palette;
    dark: Palette;
    logo: string;
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

export interface Layout {
    name: string;
    navbar: NavBar;
    sidenav?: Sidenav;
    footer: Footer;
}
export interface Navigation {
    type: 'default' | 'dynamic' | 'selector';
    icon?: string;
    label: string;
    routerLink: string;
    component?: string;
    cssClass?: string;
    childs?: Navigation[];
}

export interface NavBar {
    navigations: Navigation[];
    configs: {
        showThemeSelector: boolean;
        showDarkModeToggle: boolean;
        showLanguageSelector: boolean;
        showLogo: boolean;
    },
    visible: boolean;
}
export interface Sidenav {
    navigations: Navigation[];
    configs: {
        showThemeSelector: boolean;
        showDarkModeToggle: boolean;
        showLanguageSelector: boolean;
        showLogo: boolean;
    },
    visible: boolean;
}

export interface Footer {
    message: string;
    navigations: Navigation[];
}