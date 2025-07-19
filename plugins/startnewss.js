// plugins/autonews.js
const axios = require('axios');
const { sleep } = require('../lib/functions');
let lastSentTitle = '';

async function getNews() {
  try {
    const res = await axios.get('https://dizer-adaderana-news-api.vercel.app/news');
    if (!res.data || !res.data.news || res.data.news.length === 0) return null;

    const latest = res.data.news[0]; // Latest news item
    if (latest.title !== lastSentTitle) {
      lastSentTitle = latest.title;
      return `📰 *${latest.title}*\n\n${latest.time}\n\n🔗 ${latest.news_url}`;
    }
  } catch (err) {
    console.error('[AutoNews Error]', err.message);
  }
  return null;
}

module.exports = {
  name: 'autonews',
  cron: '*/2 * * * *', // Run every 2 minutes
  async run(sock, m, store) {
    const news = await getNews();
    if (news) {
      const channelJid = '120363382687971134@newsletter'; // eg: '1203630xxxxxx-xxxxx@g.us' or Channel ID
      await sock.sendMessage(channelJid, { text: news });
    }
  }
};
