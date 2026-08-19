// Fatimah Azzahra & Rakhasatya Mahardhika Pangestu Wedding Helpers

export const WEDDING_DATE = new Date('2026-08-29T08:00:00+07:00');
export const DEFAULT_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxfsACWvqxm8mFw_4_GnDtCC1Y3i8xdkXG-YuNSy9dzA68je6JROWXgA4XKUelGYkDL/exec";

export function getGuestName(searchParams) {
  if (!searchParams) return 'Guest';
  const to = searchParams.get('to');
  if (to) {
    return decodeURIComponent(to);
  }
  return 'Guest';
}

export function calculateTimeLeft(targetDate = WEDDING_DATE) {
  const difference = +targetDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: true,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  }

  return timeLeft;
}

export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    }
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
}

export function generateCalendarEvent() {
  const title = encodeURIComponent("Wedding Lunch of Fatimah Azzahra & Rakhasatya Mahardhika Pangestu");
  const details = encodeURIComponent("Pernikahan Fatimah Azzahra & Rakhasatya Mahardhika Pangestu.");
  const location = encodeURIComponent("Akad & Wedding Lunch Venue");
  const startDate = "20260829T010000Z"; // 08:00 WIB in UTC
  const endDate = "20260829T053000Z";   // 12:30 WIB in UTC

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
}

// Function to send data to Google Apps Script Web App (Spreadsheet: RSVP / Ucapan)
export async function sendToGoogleSheet(actionType, payload) {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || DEFAULT_SCRIPT_URL;

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: actionType, // 'rsvp' or 'ucapan'
        ...payload,
        timestamp: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
      }),
    });
    return { success: true };
  } catch (error) {
    console.error("Error submitting to Google Sheet:", error);
    return { success: false, error };
  }
}
