export default function suggestDriverSwap({
  route,
  backupPool
}: {
  route: any;
  backupPool: any[];
}) {
  return {
    context: { route, backupPool },
    instruction: "Suggest best replacement driver for the given route based on rest history, familiarity, safety record, and PTO status.",
    response_format: "json"
  };
}
