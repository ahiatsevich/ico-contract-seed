var MyStandardToken = artifacts.require("./MyStandardToken.sol");

module.exports = function(deployer, network) {
    deployer.deploy(MyStandardToken, 10000, 'My Awesome Token', 1, 'MAT');
};
