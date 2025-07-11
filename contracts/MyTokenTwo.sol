// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Address.sol";
// lib/openzeppelin-contracts/contracts/
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract MyTokenTwo is ERC20Permit {
    using Address for address;

    address owner;

    constructor() ERC20("Kitty", "KTY") ERC20Permit("Kitty") {
        _mint(msg.sender, 100000000 * 10 ** 18);
        owner = msg.sender;
    }


    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }

    function getBlockNumber() virtual internal view returns (uint) {
        return block.number;
    }

}
