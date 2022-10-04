declare namespace GlobalConfiguration {
  type File = {
    file: string;
  };

  type Language = {
    id: number;
    name: string;
    short_code: string;
    is_active: boolean;
    is_main: boolean;
  };

  type Country = {
    alpha_2_code: string;
    alpha_3_code: string;
    numeric_code: string;
    name: string;
  };

  type ProjectConfig = {
    id: number;
    name: string;
    url: string;
    is_active: boolean;
    languages: Language[];
    logo: File;
    hero_image: File;
    country: Country;
  };

  type AppConfig = {
    readonly appConfig: ReadOnlyObject<ProjectConfig>;
    readonly env: { readonly [key: string]: string };
  };
}
