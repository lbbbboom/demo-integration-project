import "./App.css";

function App() {
  const url =
    "https://nvc-lighting.com.sg/content-hub/nvc-lighting-global-expansion";

  return (
    <>
      <h2>
        展示社交媒体{" "}
        <a
          href="https://www.yuque.com/coderlinbb/front-end/eumzdotcsn9g3tie"
          target="_blank"
        >
          《社媒分享链接代码》
        </a>
      </h2>

      <div>
        <strong>展示分享的链接:</strong>
        <a href={url} target="_blank">
          {url}
        </a>
      </div>
      <div>
        <strong>twitter: </strong>
        <a href={`https://twitter.com/share?url=${url}`} target="_blank">
          {`https://twitter.com/share?url=${url}`}
        </a>
      </div>
      <div>
        <strong>facebook: </strong>
        <a
          href={`https://www.facebook.com/sharer.php?u=${url}`}
          target="_blank"
        >
          {`https://www.facebook.com/sharer.php?u=${url}`}
        </a>
      </div>
      <div>
        <strong>pinterest: </strong>
        <a
          href={`https://pinterest.com/pin/create/button/?url=${url}&description=xxxx`}
          target="_blank"
          title="pinterest"
        >
          {`https://pinterest.com/pin/create/button/?url=${url}&description=xxxx`}
        </a>
      </div>
      <div>
        <strong>linkedin: </strong>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}`}
          target="_blank"
          title="Linkedin"
        >
          {`https://www.linkedin.com/shareArticle?mini=true&amp;url=${url}`}
        </a>
      </div>
      <div>
        <strong>whatsapp: </strong>
        <a
          href={`https://api.whatsapp.com/send?text=xxxxxxxxxx&url=${url}`}
          target="_blank"
          title="whatsapp"
        >
          {`https://api.whatsapp.com/send?text=xxxxxxxxxx&url=${url}`}
        </a>
      </div>
      <div>
        <strong>instagram: </strong>
        <a
          href={`https://www.instagram.com/share?url=${url}=&caption=xxxxxxxxxx`}
          target="_blank"
          title="instagram"
        >
          {`https://www.instagram.com/share?url=${url}=&caption=xxxxxxxxxx`}
        </a>
      </div>
      <div>
        <strong>reddit: </strong>
        <a
          href={`https://www.reddit.com/submit?url=${url}&title=xxxxx`}
          target="_blank"
        >
          {`https://www.reddit.com/submit?url=${url}&title=xxxxx`}
        </a>
      </div>
      <div>
        <strong>email: </strong>
        <a
          href={`mailto:?subject=How Long Can a Dual Fuel Generator Run on Propane?&amp;body=${url}`}
          target="_blank"
        >
          {`mailto:?subject=How Long Can a Dual Fuel Generator Run on Propane?&amp;body=${url}`}
        </a>
      </div>
      <div>
        <strong>Tumblr: </strong>
        <a
          href={`https://www.tumblr.com/share/link?url=${url}&amp;name=How Long Can a Dual Fuel Generator Run on Propane?`}
          target="_blank"
          title="Tumblr"
        >
          {`https://www.tumblr.com/share/link?url=${url}&amp;name=How Long Can a Dual Fuel Generator Run on Propane?`}
        </a>
      </div>
      <div>
        <strong>Telegram: </strong>
        <a
          href={`https://t.me/share/url?url=${url}&amp;text=How Long Can a Dual Fuel Generator Run on Propane?`}
          target="_blank"
          title="Telegram"
        >
          {`https://t.me/share/url?url=${url}&amp;text=How Long Can a Dual Fuel Generator Run on Propane?`}
        </a>
      </div>
    </>
  );
}

export default App;
