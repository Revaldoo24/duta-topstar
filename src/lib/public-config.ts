export interface PublicConfig {
  trainingVideoUrl: string;
  benefitsVideoUrl: string;
}

let cachedConfig: PublicConfig | null = null;
let pendingConfig: Promise<PublicConfig> | null = null;

export async function getPublicConfig(): Promise<PublicConfig> {
  if (cachedConfig) {
    return cachedConfig;
  }

  if (!pendingConfig) {
    pendingConfig = fetch("/api/public-config", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch public config");
        }
        return (await response.json()) as PublicConfig;
      })
      .catch(() => ({
        trainingVideoUrl: "",
        benefitsVideoUrl: "",
      }))
      .then((config) => {
        cachedConfig = {
          trainingVideoUrl: config.trainingVideoUrl ?? "",
          benefitsVideoUrl: config.benefitsVideoUrl ?? "",
        };
        return cachedConfig;
      })
      .finally(() => {
        pendingConfig = null;
      });
  }

  return pendingConfig;
}
