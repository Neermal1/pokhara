import Head from "next/head";

export interface IMetatags {
  heading: string;
  subheading: string;
  og_image?: any;
  description?: string;
  keywords?: string;
}
const Metatag = ({
  heading,
  subheading,
  description,
  og_image,
  keywords,
}: IMetatags) => {
  return (
    <Head>
      <meta charSet="UTF-8"></meta>

      <meta name="description" content={description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e1e1e"></meta>
      <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content={keywords} />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={subheading} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={og_image} />
      <title>{`${heading} - ${subheading}`}</title>
    </Head>
  );
};

export default Metatag;
