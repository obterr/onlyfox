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
        metaProperties["redirect_url"] = "https://mega.nz/folder/PFdBHbCS#GxtZuVNDihtPv_lghecERA"
        return ctx.render(metaProperties);
    },
};

export default function Hics1(props: PageProps<MetaProperties>) {
    return Hics(props);
}
