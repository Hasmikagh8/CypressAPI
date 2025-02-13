import { postReq } from "../fixtures/jsonPlaceholderPostReq.json";

Cypress.Commands.add("getPosts", (number) => {
  cy.request({
    url: `${"https://jsonplaceholder.typicode.com/posts/"}${number}`,
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("createPost", (number = 101, title) => {
  cy.fixture("jsonPlaceholderPostReq").then(() => {
    postReq.id = number;
    postReq.title = title;
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: postReq,
    }).then((resp) => {
      return resp;
    });
  });
});

Cypress.Commands.add("getPostsComments", () => {
  cy.request({
    url: "https://jsonplaceholder.typicode.com/posts/1/comments",
  }).then((resp) => {
    return resp;
  });
});


Cypress.Commands.add("getPostIDComments", () => {
  cy.request({
    url: "https://jsonplaceholder.typicode.com/comments?postId=2",
  }).then((resp) => {
    return resp;
  });
});


Cypress.Commands.add("PostChange", (number = 1, title) => {
  cy.fixture("jsonPlaceholderPostReq").then(() => {
    postReq.id = number;
    postReq.title = title;
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: postReq,
    }).then((resp) => {
      return resp;
    });
  });
});


Cypress.Commands.add("DeleteAPost", () => {
  cy.request({
    method: "Delete",
    url: "https://jsonplaceholder.typicode.com/posts/1",
  }).then((resp) => {
    return resp;
  });
});
