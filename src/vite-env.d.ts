/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_WEATHER_API_KEY: string
	readonly VITE_WEATHER_BASE_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare module '*.module.css' {
	export const classes: { [key: string]: string }
}
