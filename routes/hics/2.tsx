import MetaUrlPreview, {MetaProperties, DatabaseProps} from "../../islands/database.tsx";
import { type PageProps, type Handlers } from "https://deno.land/x/fresh@1.4.3/src/server/types.ts";
import Hics from "./index.tsx";

export const handler: Handlers<MetaProperties> = {
    async GET(_req, ctx) {
        const args: DatabaseProps = {
            column: "url",
            table: "mega",
            identification: "hic"
        }
        const metaProperties = await MetaUrlPreview(args);
        metaProperties["redirect_url"] = "https://drive.google.com/drive/folders/1sboWH6SefkoR5GatiDYXUseS7CLLeiB7?usp=sharing"
        return ctx.render(metaProperties);
    },
};

export default function Hics2(props: PageProps<MetaProperties>) {
    return Hics(props);
}
