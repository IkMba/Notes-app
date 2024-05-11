import { useMediaQuery } from "react-responsive";

export function useMedia() {
  const isXLargeScreen = useMediaQuery({ query: "(min-width:1000px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width:800px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width:500px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width:500px)" });

  return { isXLargeScreen, isLargeScreen, isMediumScreen, isSmallScreen };
}
