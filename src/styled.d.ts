// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      logoBlue: string;
      logoPurple: string;
      logoYellow: string;
      blueDark: string;
      blueDarkest: string;
      textDark: string;
      textLight: string;
    };
    isSmall: boolean;
    sidebarWidth: number;
    headerHeight: number;
    isSidebarOpen: boolean;
    borderRadius: string;
  }
}
