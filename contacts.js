const fs = require("fs").promises;
const path = require("path");
const readline = require("readline");

require("colors");
const { program } = require("commander");

console.log(global.red);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
