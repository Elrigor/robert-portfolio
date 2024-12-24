import { FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import {
  SiPostgresql,
  SiPhp,
  SiDjango,
  SiWagtail,
  SiFlutter,
  SiKotlin,
  SiSupabase,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbCSharp } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { BsPatchCheckFill } from "react-icons/bs";

const Backend = () => {
  const { t } = useTranslation();
  return (
    <div className="skill__backend">
      <h3>{t("backdev")}</h3>
      <div className="skill__content">
        <article className="skill__details">
          <FaPython className="skill__details-icon" />
          <div>
            <h4>Python</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <SiDjango className="skill__details-icon" />
          <div>
            <h4>Django</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <SiWagtail className="skill__details-icon" />
          <div>
            <h4>Wagtail</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <TbCSharp className="skill__details-icon" />
          <div>
            <h4>C#</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <FaJava className="skill__details-icon" />
          <div>
            <h4>Java</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <FaNodeJs className="skill__details-icon" />
          <div>
            <h4>Node JS</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <SiPostgresql className="skill__details-icon" />
          <div>
            <h4>PostgreSQL</h4>
            <small className="text-light">
              {t("ad")} <BsPatchCheckFill className="skill__check-icon" />
            </small>
          </div>
        </article>
        <article className="skill__details">
          <GrMysql className="skill__details-icon" />
          <div>
            <h4>MySQL</h4>
            <small className="text-light">{t("in")} </small>
          </div>
        </article>
        <article className="skill__details">
          <SiKotlin className="skill__details-icon" />
          <div>
            <h4>Kotlin</h4>
            <small className="text-light">{t("in")} </small>
          </div>
        </article>
        <article className="skill__details">
          <SiPhp className="skill__details-icon" />
          <div>
            <h4>PHP</h4>
            <small className="text-light">{t("ba")} </small>
          </div>
        </article>
        <article className="skill__details">
          <SiFlutter className="skill__details-icon" />
          <div>
            <h4>Flutter</h4>
            <small className="text-light">{t("ba")} </small>
          </div>
        </article>
        <article className="skill__details">
          <SiSupabase className="skill__details-icon" />
          <div>
            <h4>Supabase</h4>
            <small className="text-light">{t("in")} </small>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Backend;
