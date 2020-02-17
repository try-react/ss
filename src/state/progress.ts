/**
 * 遷移中の progress
 */
import { createMachine, interpret } from "xstate";

type Context = { Transitioning: "transitioning" } | { Done: "done" };

type Event = { type: "Transitioning" } | { type: "Done" };

type State =
  | {
      value: "done";
      context: Context;
    }
  | {
      value: "transitioning";
      context: Context;
    };

const progressMachine = createMachine<Context, Event, State>({
  id: "progress",
  initial: "done",
  states: {
    done: {
      on: { Transitioning: "transitioning" },
    },
    transitioning: {
      on: { Done: "done" },
    },
  },
});

export const progressService = interpret(progressMachine);
