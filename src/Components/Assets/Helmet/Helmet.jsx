import { useTranslation } from "react-i18next";

const HelmetComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- SEO Meta-Tags --> */}
      <meta name="description" content={t("head.meta.description")} />
      <meta name="keywords" content={t("head.meta.keywords")} />
      <meta name="author" content="Ahmed Lemssiah" />

      {/* <!-- Open Graph (OG) Tags für Social Media --> */}
      <meta property="og:title" content={t("head.meta.ogtitle")} />
      <meta property="og:description" content={t("head.meta.ogdescription")} />
      {/* <!-- Twitter Card für bessere Darstellung auf Twitter --> */}
      <meta name="twitter:title" content={t("head.meta.ogtitle")} />
      <meta name="twitter:description" content={t("head.meta.ogdescription")} />
      <title>{t("head.title")}</title>
    </>
  );
};

export default HelmetComponent;
