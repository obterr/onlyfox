import { Head } from "$fresh/runtime.ts";
import { MetaTags } from "../components/MetaTags.tsx";
import { BanCountdown, redirectTimer } from "../components/BanCountdown.tsx";
import MetaUrlPreview, {MetaProperties, DatabaseProps} from "../islands/database.tsx";
import { type PageProps, type Handlers } from "$fresh/src/server/types.ts";

export const handler: Handlers<MetaProperties> = {
    async GET(_req, ctx) {
        const args: DatabaseProps = {
            column: "url",
            table: "images",
            identification: "stream"
        }
        const metaProperties = await MetaUrlPreview(args);
        metaProperties["redirect_url"] = "https://www.twitch.tv/anny"
        return ctx.render(metaProperties);
    },
};

export default function Home(props: PageProps<MetaProperties>) {
    return (
        <div>
            <Head>
                <meta http-equiv="refresh" content={redirectTimer() + "; url=" + props.data.redirect_url}/>
                <MetaTags title={props.data.title} description={props.data.description} image={props.data.image} url={props.url.href}/>
            </Head>
            <div className="bg">
                <h2>This page will redirect you to <a href={props.data.redirect_url} rel="noopener">{props.data.redirect_url}</a></h2>
                <BanCountdown></BanCountdown>
            </div>
        </div>
    );
}
