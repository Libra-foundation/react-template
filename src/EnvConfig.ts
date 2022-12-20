function GetEnv(name: string, default_value: string): string {
  return process.env[name] ?? default_value;
}

interface EnvType {
  readonly REACT_APP_ENVIRONMENT: string;
}

const ENVCONFIG: EnvType = {
  REACT_APP_ENVIRONMENT: GetEnv("REACT_APP_ENVIRONMENT", "ENVIRONMENT"),
};

export default ENVCONFIG;
