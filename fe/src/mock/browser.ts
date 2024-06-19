import { setupWorker } from "msw/browser";
import { addReview, reivewForMain, reviewsById } from "./review";
import { bestBooks } from "./books";
import { banners } from "./banner";

const handlers = [reviewsById, addReview, reivewForMain, bestBooks, banners];

export const worker = setupWorker(...handlers);
