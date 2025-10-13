import White from "./content/White";
import Black from "./content/Black";
import { getUserLayer } from "@/utils/ContentFilter";

export default async function Page() {
  // Recupera a camada do usuário no servidor
  const userLayer = await getUserLayer();
  const whiteContent = userLayer === 1;

  // WHITE CONTENT
  if (whiteContent) {
    return <White />;
  }

  // BLACK CONTENT
  return <Black />;
}