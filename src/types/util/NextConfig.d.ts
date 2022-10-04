declare module "next/config" {
  import getConfig from "./dist/shared/lib/runtime-config";
  export * from "./dist/shared/lib/runtime-config";

  /**
   * Retrieves runtime configuration.
   */
  type GetConfig<TConfig> = () => {
    /**
     * Retrieves configuration that will be available on both the server and client side.
     */
    publicRuntimeConfig: TConfig;
    /**
     * Retrieves configuration that will only be available on the server side.
     */
    serverRuntimeConfig: TConfig;
  };
  export default getConfig as GetConfig<GlobalConfiguration.AppConfig>;
}
