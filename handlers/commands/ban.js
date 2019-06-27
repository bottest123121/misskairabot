const i18n = require('../../utils/i18n');

module.exports = bot => {
    bot.command('ban', async ctx => {
        const mentioned = await ctx.getMentioned();
        const lang = await ctx.lang();
        if (mentioned.user_id) {
            try {
                await ctx.kickChatMember(mentioned.user_id);
            } catch (e) {
                ctx.reply(i18n(lang, 'bot.no_admin_access'));
            }
        } else return ctx.reply(i18n(lang, 'no_mentioned_user'));
    });
};
