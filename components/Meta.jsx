import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
        integrity='sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
        rel='stylesheet'
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Booklist',
  keywords: 'Book List Litterature Culture ',
  description: 'This web application was created with Next.js',
};

export default Meta;
