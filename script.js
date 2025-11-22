document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('text-area');

    // Conversion buttons
    document.getElementById('upper-case').addEventListener('click', () => {
        textArea.value = textArea.value.toUpperCase();
    });

    document.getElementById('lower-case').addEventListener('click', () => {
        textArea.value = textArea.value.toLowerCase();
    });

    document.getElementById('title-case').addEventListener('click', () => {
        textArea.value = textArea.value.toLowerCase().split(' ').map(word => {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    });

    document.getElementById('sentence-case').addEventListener('click', () => {
        const text = textArea.value.toLowerCase();
        let sentences = text.split(/([.?!])\s+/);
        let result = '';
        for (let i = 0; i < sentences.length; i++) {
            let sentence = sentences[i];
            if (sentence.length > 0) {
                result += sentence.charAt(0).toUpperCase() + sentence.slice(1);
            }
        }
        textArea.value = result;
    });

    document.getElementById('camel-case').addEventListener('click', () => {
        textArea.value = textArea.value.toLowerCase()
            .replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '').trim();
    });

    document.getElementById('snake-case').addEventListener('click', () => {
        textArea.value = textArea.value.toLowerCase()
            .replace(/\s+/g, '_')
            .replace(/[^a-z0-9_]/g, '');
    });

    document.getElementById('kebab-case').addEventListener('click', () => {
        textArea.value = textArea.value.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
    });

    // Control buttons
    document.getElementById('copy-text').addEventListener('click', () => {
        textArea.select();
        document.execCommand('copy');
    });

    document.getElementById('clear-text').addEventListener('click', () => {
        textArea.value = '';
    });
});
