// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.1;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Storage {

    uint256 public number;
    string public text;

    /**
     * @dev Store value in variable
     * @param _number value to store
     */
    function storeNum(uint256 _number) public {
        number = _number;
    }


    /**
     * @dev Store value in variable
     * @param _text value to store
     */
    function storeText(string memory _text) public {
        text = _text;
    }

    /**
     * @dev Return value
     * @return value of 'number'
     */
    function retrieveNum() public view returns (uint256){
        return number;
    }

    /**
     * @dev Return value
     * @return value of 'text'
     */
    function retrieveText() public view returns (string memory){
        return text;
    }


}
