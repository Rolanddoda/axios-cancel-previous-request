const execa = require("execa");
const emoji = require("node-emoji");
const chalk = require("chalk");
const fs = require("fs");

const prodFolderName = fs.existsSync(".github") ? "dist" : "build";
const firstLog = emoji.get("fast_forward") + " " + chalk.yellow("Building...");
const secondLog = emoji.get("fast_forward") + " " + chalk.yellow("Pushing...");
const thirdLog =
  emoji.get("rocket") +
  " " +
  chalk.green("Your app successfully deployed") +
  " " +
  emoji.get("rocket");

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    console.log(firstLog);
    await execa("npm", ["run", "build"]);
    await execa("git", ["--work-tree", prodFolderName, "add", "--all"]);
    await execa("git", [
      "--work-tree",
      prodFolderName,
      "commit",
      "-m",
      "gh-pages"
    ]);
    console.log(secondLog);
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", prodFolderName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log(thirdLog);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
