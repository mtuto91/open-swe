export function hasApiKeySet(config: Record<string, any>) {
  const modelNameKeys = Object.keys(config).filter((key) =>
    key.endsWith("ModelName"),
  );
  const enabledProviders = modelNameKeys
    .map((key) => config[key])
    .map((p) => p.split(":")[0]);

  const apiKeys = config.apiKeys || {};

  if (
    (enabledProviders.includes("openai") && !apiKeys.openaiApiKey) ||
    (enabledProviders.includes("google-genai") && !apiKeys.googleApiKey)
  ) {
    return false;
  }

  return true;
}
