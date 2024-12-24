import { AiFillLock, AiFillCloud } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { SiNginx, SiApache } from "react-icons/si";
import { MdDns } from "react-icons/md";
import { GiUnicorn } from "react-icons/gi";
import { TfiGithub } from "react-icons/tfi";
import { useTranslation } from "react-i18next";
import { BsPatchCheckFill } from "react-icons/bs";

const Web = () => {
  const { t } = useTranslation();
  return (
    <div className="skill__web">
      <h3>{t("web")}</h3>
      <div className="skill__content">
        <article className="skill__details">
          <MdDns className="skill__details-icon" />
          <div>
            <h4>DNS</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillLock className="skill__details-icon" />
          <div>
            <h4>SSL</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <FaEnvelope className="skill__details-icon" />
          <div>
            <h4>MX</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <IoStatsChartSharp className="skill__details-icon" />
          <div>
            <h4>SEO</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <SiNginx className="skill__details-icon" />
          <div>
            <h4>Nginx</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <SiApache className="skill__details-icon" />
          <div>
            <h4>Apache</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <GiUnicorn className="skill__details-icon" />
          <div>
            <h4>Gunicorn</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <TfiGithub className="skill__details-icon" />
          <div>
            <h4>GH Pages</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>
        <article className="skill__details">
          <AiFillCloud className="skill__details-icon" />
          <div>
            <h4>Cloudflare Pages</h4>
            <small className="text-light">{t("in")}</small>
          </div>
        </article>        
      </div>
    </div>
  );
};

export default Web;
