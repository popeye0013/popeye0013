#!/usr/bin/env node

"use strict";
import boxen from "boxen"; // Creates a box in terminal
import chalk from "chalk"; // Using Colors in terminal
import inquirer from "inquirer"; // common interactive cli interface
import open from "open"; // open url,files and executables from cli
import nyanProgress from "nyan-progress";
console.clear();

const start = inquirer.createPromptModule();

const pt = {
  green: "78FECF",
  red: "F25F5C",
  yellow: "FFE066",
  blue: "00A7E1",
  pink: "FF8FFF",
  gray: "6E6E6E",
  white: "FFFFFF",
};

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:popeye0013@duck.com");
          console.log("\nSent, will get back to you soon 😉\n");
        },
      },
      {
        name: "Pussie Cat! 🐱",
        value: () => {
          const progress = nyanProgress(); // initialize
          progress.start({ total: 100 }); // start the progress

          const timer = setInterval(() => {
            progress.tick();

            if (progress.isComplete) {
              clearInterval(timer);
            }
          }, 100);
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Exiting 👋\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.hex(pt.yellow).bold("                  Akash s lal"),
  work: chalk.hex(pt.red).bold("Android Developer"),
  github:
    chalk.hex(pt.green)("popeye0013\n"),
  linkedin:
    chalk.hex(pt.green)("popeye0013\n"),
  web: chalk.blue("http://popeye0013.github.io/xkx.exe"),
  labelWork: chalk.bold("    Work:"),
  labelGitHub: chalk.bold("  Instagram:"),
  labelLinkedIn: chalk.bold("LinkedIn:"),
  labelWeb: chalk.bold("     Web:"),
  labelCard: chalk.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}\n`,
    `${data.labelWork}  ${data.work}\n`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}\n`,
    `${data.labelCard}  ${data.npx}\n`,
    `${chalk.italic("I am currently looking for new opportunities,")}`,
    `${chalk.italic("Feel free to email me and checkout my profile")}`,

    `${chalk.italic("also this project is open source.")}`,
    `${chalk.blue.bold("cmd/ctrl + click")} on the links above to open`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  },
);

console.log(me);

start(questions).then((answer) => answer.action());
