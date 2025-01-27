export const githubApi = () => {
  const username = 'SENTO-3340';
  const repo = 'THE-JAVASCRIPT';
  const filePath = {
    html: 'index.html',
    css: 'src/style.css',
    hum: 'modules/hum.js',
    icon: 'modules/icon.js',
    scroll: 'modules/scroll.js',
    carousel: 'modules/carousel.js',
    api: 'modules/api.js',
    main: 'main.js',
  };

  async function fetchAndDisplayFile(Path) {
    try {
      const url = `https://api.github.com/repos/${username}/${repo}/contents/${Path}`;

      const response = await fetch(url);
      // ↑トークンを使用する場合は以下に切り替える
      // const response = await fetch(url, {
      //   headers: {
      //     Authorization: `token ${token}`, // 認証ヘッダーを追
      // 加
      //   },
      // });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const decodedData = atob(data.content);

      const textDecoder = new TextDecoder('utf-8');
      const fileContent = textDecoder.decode(
        new Uint8Array([...decodedData].map((char) => char.charCodeAt(0)))
      );

      const lines = fileContent.split('\n');

      function displayApiViewer(elementID, startNum, endNum) {

        const CodeBlock = document.querySelector(`#${elementID}`);


        const SelectedLines = lines.slice(startNum - 1, endNum).join('\n');

        CodeBlock.textContent = SelectedLines;

        Prism.highlightElement(CodeBlock);
      }

      if (Path === filePath.html) {
        displayApiViewer('hum-html', 18, 34)
        displayApiViewer('icon-html', 56, 67)
        displayApiViewer('scroll-html', 77, 98)
        displayApiViewer('carousel-html', 108, 156)
        displayApiViewer('githubApi-html', 170, 190)
        displayApiViewer('total-html', 1, 198)
      }
      if (Path === filePath.css) {
        displayApiViewer('hum-css', 6, 105)
        displayApiViewer('icon-css', 103, 144)
        displayApiViewer('scroll-css', 145, 267)
        displayApiViewer('carousel-css', 268, 326)
        displayApiViewer('githubApi-css', 340, 390)
        displayApiViewer('total-css', 1, 399)
      }
      if (Path === filePath.hum) {
        displayApiViewer('hum-js')
      }
      if (Path === filePath.icon) {
        displayApiViewer('icon-js')
      }
      if (Path === filePath.scroll) {
        displayApiViewer('scroll-js')
      }
      if (Path === filePath.carousel) {
        displayApiViewer('carousel-js')
      }
      if (Path === filePath.api) {
        displayApiViewer('githubApi-js')
      }
      if (Path === filePath.main) {
        displayApiViewer('main-js')
      }

    } catch (error) {
      console.error('Error fetching file:', error);
    }
  }

  function updateAllFiles() {
    fetchAndDisplayFile(filePath.html);
    fetchAndDisplayFile(filePath.css);
    fetchAndDisplayFile(filePath.hum);
    fetchAndDisplayFile(filePath.icon);
    fetchAndDisplayFile(filePath.scroll);
    fetchAndDisplayFile(filePath.carousel);
    fetchAndDisplayFile(filePath.api);
    fetchAndDisplayFile(filePath.main);
  }

  updateAllFiles();
};