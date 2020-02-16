import { Machine } from "xstate";

const lifeCycleMachine = Machine({
  id: "lifeCycle",
  initial: "inactive",
  states: {
    active: {
      on: { TOGGLE: "inactive" },
    },
    inactive: {
      on: { TOGGLE: "active" },
    },
  },
});

export const lifeCycle = () => ({
  onTransitionStart: () => {
    console.log("ssssssssss");
  },
  onTransitionSuccess: () => {
    console.log("eeeeeeeee");
  },
});
