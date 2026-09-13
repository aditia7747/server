const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('processOrder', () => {
    let window, document, dom;

    beforeEach(() => {
        // mock tailwind so we don't get the error
        const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
        // We will remove the script tags with src to external to prevent jsdom errors
        const modifiedHtml = html.replace(/<script src="https:\/\/cdn.tailwindcss.com"><\/script>/g, '<script>var tailwind = { config: {} };</script>');

        dom = new JSDOM(modifiedHtml, { runScripts: 'dangerously', url: 'http://localhost/' });
        window = dom.window;
        document = window.document;

        // Mock window.open
        window.open = jest.fn();
    });

    test('processOrder opens correct WhatsApp URL when all fields are filled', () => {
        window.openModal('v1');

        // Setup state
        document.getElementById('playerIC').value = 'John_Doe';
        document.getElementById('playerUCP').value = 'JohnD';
        document.getElementById('playerNote').value = 'Please process fast';
        document.getElementById('modalInvoiceId').value = 'INV-123';
        document.getElementById('dynamicNoteLabel').innerText = 'CATATAN (OPSIONAL)';

        const mockEvent = { preventDefault: jest.fn() };

        window.processOrder(mockEvent);

        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(window.open).toHaveBeenCalled();

        const url = window.open.mock.calls[0][0];
        expect(url).toContain('https://wa.me/62895351064092?text=');
        const decodedUrl = decodeURIComponent(url);
        expect(decodedUrl).toContain('INV-123');
        expect(decodedUrl).toContain('John_Doe');
        expect(decodedUrl).toContain('JohnD');
        expect(decodedUrl).toContain('Please process fast');
    });

    test('processOrder opens correct WhatsApp URL when optional note is left empty', () => {
        window.openModal('v2');

        // Setup state
        document.getElementById('playerIC').value = 'Jane_Doe';
        document.getElementById('playerUCP').value = 'JaneD';
        document.getElementById('playerNote').value = '';
        document.getElementById('modalInvoiceId').value = 'INV-456';
        document.getElementById('dynamicNoteLabel').innerText = 'WARNA MOBIL (OPSIONAL)';

        const mockEvent = { preventDefault: jest.fn() };

        window.processOrder(mockEvent);

        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(window.open).toHaveBeenCalled();

        const url = window.open.mock.calls[0][0];
        expect(url).toContain('https://wa.me/62895351064092?text=');
        const decodedUrl = decodeURIComponent(url);
        expect(decodedUrl).toContain('INV-456');
        expect(decodedUrl).toContain('Jane_Doe');
        expect(decodedUrl).toContain('JaneD');
        expect(decodedUrl).toContain('-'); // note fallback
    });
});
