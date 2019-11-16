const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("Verify DNA", () => {
  it("Must return state 200 if there is no mutation", () => {
    chai
      .request(app)
      .post("/mutation")
      .send({
        dna: ["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"]
      })
      .then(res => {
        expect(res.body.message).to.equals("Sin Mutacion");
        expect(res).to.have.status(200);
      })
      .catch(err => {
        throw err;
      });
  });

  it("Must return state 403 if there is a mutation", () => {
    chai
      .request(app)
      .post("/mutation")
      .send({
        dna: ["ATGCGA", "CAGTGC", "TAATGT", "AGAAGG", "CCCCTA", "TCACTG"]
      })
      .then(res => {
        expect(res.body.message).to.equals("Con Mutacion");
        expect(res).to.have.status(403);
      })
      .catch(err => {
        throw err;
      });
  });

  it("Must return 404 status if a character is not valid", () => {
    chai
      .request(app)
      .post("/mutation")
      .send({
        dna: ["ATGCGA", "CAGTGC", "TBATGT", "AGAAGG", "CCCCTA", "TCACTG"]
      })
      .then(res => {
        expect(res.body.message).to.equals("Caracter no valido");
        expect(res).to.have.status(404);
      })
      .catch(err => {
        throw err;
      });
  });
});

describe("Stats", () => {
  it("Must return status 200 and display the stats", () => {
    chai
      .request(app)
      .get("/stats")
      .then(res => {
        expect(res.body.result.count_mutations).to.be.a("number");
        expect(res.body.result.count_no_mutation).to.be.a("number");
        expect(res.body.result.ratio).to.be.a("number");
        expect(res).to.have.status(200);
      })
      .catch(err => {
        throw err;
      });
  });
});
