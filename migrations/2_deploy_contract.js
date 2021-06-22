var StackBNB = artifacts.require("./contracts/StackBNB.sol");

var account = "0x56406eA5A5C1a5D965beA90E42679Cd4774ee539";

module.exports = function(deployer) {
    deployer.deploy(StackBNB);
}