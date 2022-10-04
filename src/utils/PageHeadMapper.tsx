import Head from "next/head";
import { getAppConfig } from "./CommonContent";

export function mapPageHead(
  title: Indefinable<string>,
  extra?: React.ReactNode
): React.ReactNode {
  const { name } = getAppConfig();

  return (
    <Head>
      <title>
        {title} &nbsp;| {name}
      </title>
      {extra}
    </Head>
  );
}
