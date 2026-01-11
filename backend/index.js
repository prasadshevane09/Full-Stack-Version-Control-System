const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pullRepo } = require("./controllers/pull");
const { pushRepo } = require("./controllers/push");
const { revertRepo } = require("./controllers/revert");

yargs(hideBin(process.argv))
  .command(
    "init",
    "Initialize a new repository",
    {},
    initRepo
  )
  .command(
    "add <file>",
    "Add a file to the repository",
    (yargs) => {
      return yargs.positional("file", {
        describe: "The file to add",
        type: "string",
      });
    },
    (argv) => {
      addRepo(argv.file);
    }
  )
  .command(
    "commit <message>",
    "Commit changes to the repository",
    (yargs) => {
        yargs.positional("message", {
        describe: "commit message",
        type: "string",
      });
    },
    (argv) => {
      commitRepo(argv.message);
    }
    
  )
  .command("push", "Push changes to the remote repository", {}, pushRepo)
  .command("pull", "Pull changes from the remote repository", {}, pullRepo)
  .command(
    "revert <commitID>",
    "Revert to a specific commit",
    (yargs) => {
        yargs.positional("commitID", {
        describe: "The commit to revert to",
        type: "string",
      });
    },
    (argv) => {
      revertRepo(argv.commitID);
    }
    
  )
  .demandCommand(1, "YOU MUST PROVIDE A COMMAND")
  .help()
  .argv;