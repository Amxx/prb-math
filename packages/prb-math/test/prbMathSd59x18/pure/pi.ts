import type { BigNumber } from "@ethersproject/bignumber";
import { expect } from "chai";
import { PI } from "hardhat-prb-math/dist/constants";

export default function shouldBehaveLikePiGetter(): void {
  it("returns pi", async function () {
    const expected: BigNumber = PI;
    expect(expected).to.equal(await this.contracts.prbMathSd59x18.getPi());
    expect(expected).to.equal(await this.contracts.prbMathSd59x18Typed.getPi());
  });
}