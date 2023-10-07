declare global {
    namespace NodeJS {
        interface ProcessEnv {
            EXAMPLE_PROVIDER_INFO: string;
            NODE_ENV: "development" | "production";
            PORT?: string;
        }
    }
}

export {};
