import { NavigationContainer } from "@react-navigation/native";
import CustomTheme from "./theme";
import { MainNavigator } from "./MainNavigator";
import { useEffect, useState } from "react";
import { getCurrentScreen, setCurrentScreen } from "api/user";
// import { removeItem } from "util/secureStore";
// import { setItem } from "util/secureStore";

const Routes = () => {
  const [initialNavigationState, setInitialNavigationState] = useState<any>();
  const [fetchError, setFetchError] = useState<string>();

  const saveNavigationState = async (state: any) => {
    try {
      await setCurrentScreen({ onboardingStatus: JSON.stringify(state) });
    } catch (e) {
      console.error("Error saving navigation state:", e);
    }
  };

  useEffect(() => {
    const loadNavigationState = async () => {
      try {
        // await setItem("accessToken", "");
        // await setItem("refreshToken", "");
        // await setItem("userId", "");
        // await removeItem("isLanguageSelected");
        const response = await getCurrentScreen();
        if (response.data.currentScreen) {
          if (response.data.isOnboarding) {
            const state = response.data.currentScreen
              ? JSON.parse(response.data.currentScreen)
              : undefined;
            setInitialNavigationState(state);
          } else {
            setInitialNavigationState("onboarded");
          }
        }
      } catch (e) {
        // console.log(JSON.stringify(e));
        setFetchError("Error");
      }
    };
    loadNavigationState();
  }, []);

  if (initialNavigationState === "onboarded") {
    return (
      <NavigationContainer theme={CustomTheme}>
        <MainNavigator />
      </NavigationContainer>
    );
  }

  if (initialNavigationState === undefined) {
    // Loading state, you might want to render a loading indicator here
    if (fetchError) {
      return (
        <NavigationContainer theme={CustomTheme}>
          <MainNavigator />
        </NavigationContainer>
      );
    }
    return null;
  }

  return (
    <NavigationContainer
      theme={CustomTheme}
      initialState={initialNavigationState}
      onStateChange={(state) => saveNavigationState(state)}
    >
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Routes;
