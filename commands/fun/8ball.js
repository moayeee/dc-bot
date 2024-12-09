const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('It\'s a magic 8-ball!')
        .addStringOption(option => 
            option.setName('question')
                .setDescription('Ask your question here.')
                .setRequired(true)
        ),
    async execute(interaction) {
        // Retrieve the question from the interaction
        const question = interaction.options.getString('question');
        
        // 8-ball responses
        const eightballResponses = [
            'It is certain.',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy try again.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            'Don\'t count on it.',
            'My reply is no.',
            'My sources say no.',
            'Outlook not so good.',
            'Very doubtful.',
            'No way.',
            'Maybe.',
            'The answer is hiding inside you.',
            'No.',
            'Depends on the mood of the CS god.',
            '||No||',
            '||Yes||',
            'Hang on.',
            'It\'s over.',
            'It\'s just the beginning.',
            'Good Luck.',
        ];

        // Randomly select a response
        const response = eightballResponses[Math.floor(Math.random() * eightballResponses.length)];

        // Reply to the interaction
        await interaction.reply(`🎱 **Magic 8-ball says:** ${response}`);
    },
};