import styled from "styled-components";
import { useTranslation } from "react-i18next";

const DropdownWrapper = styled.div`
  background-color: var(--color-bg);
  border: 1px solid var(--color-primary);
  color: var(--color-white);
  border-radius: 4px;
  padding: 6px;
  z-index: 2;
  margin-right: 3em;
  margin-top: 1em;

  width: 100px;
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 40px;
  right: 0;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const Dropdown = ({ handleLanguageChange }) => {
  const { t } = useTranslation();

  return (
    <DropdownWrapper show={true}>
      <DropdownItem
        className="hover-lang"
        onClick={() => handleLanguageChange("en")}
      >
        {t("english")}
      </DropdownItem>
      <DropdownItem
        className="hover-lang"
        onClick={() => handleLanguageChange("es")}
      >
        {t("spanish")}
      </DropdownItem>
    </DropdownWrapper>
  );
};

export default Dropdown;
