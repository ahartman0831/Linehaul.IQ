export default function suggestSchedulePlan({
  availableDrivers,
  routes
}: {
  availableDrivers: any[];
  routes: any[];
}) {
  return {
    context: { availableDrivers, routes },
    instruction: "Match drivers to routes based on HOS, past assignments, PTO, and vehicle compatibility. Return a JSON list of route-driver pairs with reasoning.",
    response_format: "json"
  };
}
