#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// All credit for this idea goes to: https://github.com/bnb/bitandbang

import chalk from "chalk";
import boxen from "boxen";

// Boxen options
const options = {
   padding: 1,
   margin: 1,
   borderStyle: "singleDouble",
   borderColor: "white",
};

// Text + chalk definitions
const data = {
   personal: chalk.cyan.bold("http://benlammers.dev"),
   email: chalk.white.bold("21benlammers@gmail.com"),
   github: chalk.gray.bold("https://github.com/") + chalk.green.bold("benlammers"),
   linkedin: chalk.gray.bold("https://www.linkedin.com/in/") + chalk.blue.bold("ben-lammers-3bb8bb168"),
   card: chalk.white.bold("https://github.com/benlammers/npx-benlammers"),

   subheading: chalk.white("Full Stack Developer"),

   labelPersonal: chalk.white.underline.bold("Ben Lammers"),
   labelEmail: chalk.cyan.bold("      Email:"),
   labelGitHub: chalk.cyan.bold("     GitHub:"),
   labelLinkedIn: chalk.cyan.bold("   LinkedIn:"),
   labelCard: chalk.cyan.bold("       Card:"),
};

// Actual strings we're going to output
const heading = `              ${data.labelPersonal}  ${data.personal}`;
const subheading = `                   ${data.subheading}`;

const email = `${data.labelEmail}  ${data.email}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`;
const card = `${data.labelCard}  ${data.card}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + "\n\n" + subheading + "\n\n\n" + email + "\n" + github + "\n" + linkedin + "\n\n" + card;

console.log(chalk.green(boxen(output, options)));
