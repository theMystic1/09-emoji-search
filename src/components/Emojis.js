import { useEmojis } from "../contexts/EmojisContext";
import EmojiItems from "./EmojiItems";

function Emojis() {
  const { emojis } = useEmojis();
  return (
    <ul className="px-4 flex  items-center justify-center flex-wrap py-8 gap-2">
      {emojis?.map((emoji) => (
        <EmojiItems emoji={emoji} key={emoji.htmlCode} />
      ))}
    </ul>
  );
}

export default Emojis;
