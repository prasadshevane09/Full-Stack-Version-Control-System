const fs = require("fs").promises;
const path = require("path");
const { s3, S3_BUCKET } = require("../config/aws.config");

async function pushRepo() {
  const repoPath = path.resolve(process.cwd(), ".myGit");
  const commitsPath = path.join(repoPath, "commits");

  try {
    const commitDirs = await fs.readdir(commitsPath);

    for (const commitDir of commitDirs) {
      const CommitPath = path.join(commitsPath, commitDir);
      const files = await fs.readdir(CommitPath);

      for (const file of files) {
        const filePath = path.join(CommitPath, file);
        const fileContent = await fs.readFile(filePath);

        const params = {
          Bucket: S3_BUCKET,
          Key: `commits/${commitDir}/${file}`,
          Body: fileContent,
        };

        // ✅ ACTUAL UPLOAD
        await s3.upload(params).promise();

        console.log(`Uploaded: commits/${commitDir}/${file}`);
      }
    }

    console.log("✅ Push completed successfully");
  } catch (err) {
    console.error("Error pushing repository:", err);
    throw new Error("Failed to push repository");
  }
}

module.exports = { pushRepo };
