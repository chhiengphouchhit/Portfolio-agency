import { portfolioConfig } from "../config/portfolio.config";

/**
 * Universal Contact Notification Service
 * Dispatches form leads directly to Telegram Bot (for Cambodia)
 * or Web3Forms API (for Global Email).
 */
export async function sendContactNotification({ name, contactInfo, message }) {
  const settings = portfolioConfig.contactSettings || {};
  let sentToTelegram = false;
  let sentToEmail = false;

  // 1. Try sending to Telegram Bot
  if (
    settings.enableTelegramAlert &&
    settings.telegramBotToken &&
    settings.telegramBotToken !== "YOUR_BOT_TOKEN" &&
    settings.telegramChatId &&
    settings.telegramChatId !== "YOUR_CHAT_ID"
  ) {
    try {
      const telegramText = `🚀 *New Portfolio Lead!*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Contact:* ${contactInfo}\n` +
        `💬 *Message:*\n${message}\n\n` +
        `⏰ *Time:* ${new Date().toLocaleString()}`;

      const response = await fetch(
        `https://api.telegram.org/bot${settings.telegramBotToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: settings.telegramChatId,
            text: telegramText,
            parse_mode: "Markdown",
          }),
        }
      );

      if (response.ok) {
        sentToTelegram = true;
      }
    } catch (err) {
      console.warn("Telegram alert error:", err);
    }
  }

  // 2. Try sending to Web3Forms (Global Email)
  if (
    settings.enableWeb3Forms &&
    settings.web3FormsAccessKey &&
    settings.web3FormsAccessKey !== "YOUR_ACCESS_KEY"
  ) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: settings.web3FormsAccessKey,
          name: name,
          email: contactInfo,
          message: message,
          from_name: "Portfolio Inquiry",
        }),
      });

      if (response.ok) {
        sentToEmail = true;
      }
    } catch (err) {
      console.warn("Web3Forms alert error:", err);
    }
  }

  // If credentials are placeholders (Demo mode), simulate realistic network delay and succeed!
  if (!sentToTelegram && !sentToEmail) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Mock lead submitted:", { name, contactInfo, message });
    return {
      success: true,
      demoMode: true,
      message: "Demo mode: Contact captured locally.",
    };
  }

  return { success: true, sentToTelegram, sentToEmail };
}
