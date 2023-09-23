import MetaUrlPreview, {MetaProperties, DatabaseProps} from "../../islands/database.tsx";
import { type PageProps, type Handlers } from "https://deno.land/x/fresh@1.4.3/src/server/types.ts";
import Mega from "./index.tsx";

export const handler: Handlers<MetaProperties> = {
    async GET(_req, ctx) {
        const args: DatabaseProps = {
            column: "url",
            table: "mega",
            identification: "mega"
        }
        const metaProperties = await MetaUrlPreview(args);
        metaProperties["redirect_url"] = "https://mega.nz/folder/1SFg0JwT#Zzxa6MrVddtpYTkDiiii_g"
        return ctx.render(metaProperties);
    },
};

export default function Mega1(props: PageProps<MetaProperties>) {
    return Mega(props);
}
