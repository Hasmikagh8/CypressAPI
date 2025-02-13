let getTitle;
describe("JsonPlaceholder", () => {
  it("Get post", () => {
    cy.getPosts(3).then((resp) => {
      expect(resp.status).to.eq(200);
      cy.log(resp);
      expect(resp.body.userId).to.eq(1);
      expect(resp.body.id).to.eq(3);
      getTitle = resp.body.title;
    });
  });

  it("Create new Post", () => {
    cy.createPost(152, getTitle).then((resp) => {
      expect(resp.status).to.eq(201);
      cy.log(resp.body); // Log the response body or any other data you need
    });
  });

  it("Get post Comments", () => {
    cy.getPostsComments().then((resp) => {
      expect(resp.status).to.eq(200);
      cy.log(resp);
      const responseLength = resp.body.length;
      expect(resp.body).to.be.an("array");
      expect(resp.body.every((item) => item.postId === 1)).to.be.true;
      expect(resp.body).to.have.lengthOf(5);
      for (let i = 0; i < responseLength; i++) {
        expect(resp.body[i].id).to.eq(i + 1);
      }
    });
  });

  it("Get postID Comments", () => {
    cy.getPostIDComments().then((resp) => {
      expect(resp.status).to.eq(200);
      cy.log(resp);
      const responseLength = resp.body.length;
      expect(resp.body).to.be.an("array");
      expect(resp.body.every((item) => item.postId === 2)).to.be.true;
      expect(resp.body).to.have.lengthOf(5);
      for (let i = 0; i < responseLength; i++) {
        expect(resp.body[i].id).to.eq(i + 6);
      }
    });
  });

  it("Put new Post", () => {
    cy.PostChange(1, "Test").then((resp) => {
      expect(resp.status).to.eq(200);
      cy.log(resp.body); // Log the response body or any other data you need
    });
  });
  
  it("Delete a Post", () => {
    cy.DeleteAPost().then((resp) => {
      expect(resp.status).to.eq(200);
      cy.log(resp.body); // Log the response body or any other data you need
    });
  });

  it("Get post 1", () => {
    cy.getPosts(1).then((resp) => {
      expect(resp.status).to.eq(200);
      cy.log(resp);
      expect(resp.body.userId).to.eq(1);
      expect(resp.body.id).to.eq(1);
      getTitle = resp.body.title;
    });
  });

});

