// Placeholder schedule overlay utility — shared across SmartScheduler & Dispatch
export function getNextAvailableSlot(schedule: any[], blockedTimes: any[]): string {
  console.log('[scheduleEngine] Evaluating next slot with inputs:', { schedule, blockedTimes });

  const allTimes = ['01:00', '03:00', '05:00', '07:00', '09:00', '11:00'];
  for (const time of allTimes) {
    if (!schedule.includes(time) && !blockedTimes.includes(time)) {
      console.log('[scheduleEngine] Found available slot:', time);
      return time;
    }
  }

  console.log('[scheduleEngine] No available slot found');
  return 'unavailable';
}
