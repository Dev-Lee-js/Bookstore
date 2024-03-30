import { FaList, FaTh } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import Button from "../common/Button";
import styled from "styled-components";
import { QUERYSTRING } from "../../constants/querystring";
import { useEffect } from "react";

const viewOptions = [
  {
    value: "list",
    icon: <FaList />,
  },
  {
    value: "grid",
    icon: <FaTh />,
  },
];

export type ViewMode = "grid" | "list";

const BooksViewSwicher = () => {
  const [searchParams, setSeartchParams] = useSearchParams();

  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.VIEW, value);
    setSeartchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch("grid");
    }
  }, []);

  return (
    <BooksViewSwicherStyle>
      {viewOptions.map((option) => (
        <Button
          key={option.value}
          size="medium"
          scheme={
            searchParams.get(QUERYSTRING.VIEW) === option.value
              ? "primary"
              : "normal"
          }
          onClick={() => handleSwitch(option.value as ViewMode)}
        >
          {option.icon}
        </Button>
      ))}
    </BooksViewSwicherStyle>
  );
};

const BooksViewSwicherStyle = styled.div`
  display: flex;
  gap: 8px;
  svg {
    fill: #fff;
  }
`;
export default BooksViewSwicher;
