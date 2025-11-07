import { Facilitator } from "./types";
import MockFacilitator from "../adapters/mock-facilitator";

const registry: Record<string, Facilitator> = {
  mock: MockFacilitator,
  // future: "meridian", "nexus", etc.
};

export function getFacilitator(name?: string): Facilitator {
  const key = (name ?? "mock").toLowerCase();
  const f = registry[key];
  if (!f) throw new Error(`Unknown facilitator: ${name}`);
  return f;
}
