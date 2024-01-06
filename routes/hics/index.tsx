import { Head } from "$fresh/runtime.ts";
import { MetaTags } from "../../components/MetaTags.tsx";
import MetaUrlPreview, {MetaProperties, DatabaseProps} from "../../islands/database.tsx";
import { type PageProps, type Handlers } from "$fresh/src/server/types.ts";

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

export default function Hics(props: PageProps<MetaProperties>) {
    return (
        <div>
            <Head>
                <meta http-equiv="refresh" content={"0; url=" + props.data.redirect_url}/>
                <MetaTags title={props.data.title} description={props.data.description} image={props.data.image} url={props.url.href}/>
            </Head>
            <h2>This page will redirect you to <a href={props.data.redirect_url} rel="noopener">{props.data.redirect_url}</a></h2>
            <div class="bg"></div>
        </div>
    );
}
