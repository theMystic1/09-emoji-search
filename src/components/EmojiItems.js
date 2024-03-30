function EmojiItems({ emoji }) {
  const { htmlCode } = emoji;
  // console.log(htmlCode);

  return (
    <li
      dangerouslySetInnerHTML={{ __html: htmlCode[0] }}
      className="text-3xl text-center"
    />
  );
}

export default EmojiItems;
