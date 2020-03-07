import { Router } from "router5";
import { progressService } from "~/state/progress";

type LifeCycle = Parameters<Router["usePlugin"]>[0];

export const lifeCycle: LifeCycle = () => ({
  onTransitionStart: () => progressService.send("Transitioning"),
  onTransitionSuccess: () => progressService.send("Done"),
});
