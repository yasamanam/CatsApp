/**
 * Base url has been set in setupProxy.js file
 */
const API_PREFIX = process.env.NODE_ENV === "production" ? "/v1" : "/v1";

// *************************************************************
// CATS
// *************************************************************

// GET_CATEGORIES:
export const GET_CATEGORIES_URL: string = `${API_PREFIX}/categories`;

// GET_A_CATEGORY:
export const GET_A_CATEGORY_URL: string = `${API_PREFIX}/images/search`;
