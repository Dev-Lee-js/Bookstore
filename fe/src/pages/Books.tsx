import { useEffect, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/books/BooksFilter";
import BooksViewSwicher from "../components/books/BooksViewSwicher";
import BooksList from "../components/books/BooksList";
import BooksEmpty from "../components/books/BooksEmpty";
import Loading from "../components/common/Loading";
import { useBooksInfinite } from "@/hooks/useBooksInfinite";
import Button from "@/components/common/Button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Books = () => {
  const {
    books,
    pagination,
    isEmpty,
    isBooksLoading,
    fetchNextPage,
    hasNextPage,
  } = useBooksInfinite();

  const scrollPositionRef = useRef(0);
  const moreRef = useIntersectionObserver(([entry]) => {
    if (entry.isIntersecting && hasNextPage) {
      handleFetchNextPage();
    }
  });

  const handleFetchNextPage = () => {
    if (!hasNextPage) return;
    scrollPositionRef.current = window.scrollY;
    fetchNextPage();
  };

  useLayoutEffect(() => {
    window.scrollTo(0, scrollPositionRef.current);
  }, [books]);

  if (isEmpty) {
    return <BooksEmpty />;
  }

  if (isBooksLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwicher />
        </div>
        <BooksList books={books} />
        <div className="more" ref={moreRef}>
          {hasNextPage ? (
            <Button
              size="medium"
              scheme="normal"
              onClick={handleFetchNextPage}
              disabled={!hasNextPage}
            >
              더보기
            </Button>
          ) : (
            ""
          )}
        </div>
      </BooksStyle>
    </div>
  );
};

const BooksStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;

export default Books;
