export const githubApi = () => {
  const username = 'SENTO-3340';
  const repo = 'THE-JAVASCRIPT';
  const filePath = {
    html: 'index.html',
    css: 'style.css',
    js: 'modules/modules.js'
  };

  async function fetchAndDisplayFile(Path) {
    try {
      const url = `https://api.github.com/repos/${username}/${repo}/contents/${Path}`;

      const response = await fetch(url);
      // ↑トークンを使用する場合は以下に切り替える
      // const response = await fetch(url, {
      //   headers: {
      //     Authorization: `token ${token}`, // 認証ヘッダーを追加
      //   },
      // });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      if (response.ok) {
        console.log('OK');
      }

      const data = await response.json();

      const decodedData = atob(data.content);

      const textDecoder = new TextDecoder('utf-8');
      const fileContent = textDecoder.decode(
        new Uint8Array([...decodedData].map((char) => char.charCodeAt(0)))
      );

      const lines = fileContent.split('\n');

      function displayApiViewer(startNum, endNum, elementID) {
        const StartLine = startNum;
        const EndLine = endNum;

        const SelectedLines = lines.slice(StartLine - 1, EndLine).join('\n');

        const CodeBlock = document.querySelector(`#${elementID}`);

        CodeBlock.textContent = SelectedLines;

        Prism.highlightElement(CodeBlock);
      }

      if (Path === filePath.html) {
        displayApiViewer(18, 34, 'hum-html')
        displayApiViewer(56, 67, 'icon-html')
        displayApiViewer(77, 98, 'scroll-html')
        displayApiViewer(108, 156, 'carousel-html')
        displayApiViewer(170, 190, 'githubApi-html')
        displayApiViewer(1, 198, 'total-html')
      }
      if (Path === filePath.css) {
        displayApiViewer(5, 87, 'hum-css')
        displayApiViewer(103, 144, 'icon-css')
        displayApiViewer(145, 267, 'scroll-css')
        displayApiViewer(268, 326, 'carousel-css')
        displayApiViewer(340, 390, 'githubApi-css')
        displayApiViewer(1, 399, 'total-css')
      }
      if (Path === filePath.js) {
        displayApiViewer(1, 31, 'hum-js')
        displayApiViewer(33, 108, 'icon-js')
        displayApiViewer(110, 142, 'scroll-js')
        displayApiViewer(144, 206, 'carousel-js')
        displayApiViewer(208, 298, 'githubApi-js')
        displayApiViewer(1, 298, 'total-js')
      }

    } catch (error) {
      console.error('Error fetching file:', error);
    }
  }

  function updateAllFiles() {
    fetchAndDisplayFile(filePath.html);
    fetchAndDisplayFile(filePath.css);
    fetchAndDisplayFile(filePath.js);
  }

  updateAllFiles();
};