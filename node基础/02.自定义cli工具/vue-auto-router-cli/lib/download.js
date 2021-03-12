const {promisify} = require('util');

// download-git-repo: 从node下载并提取一个git仓库(GitHub, GitLab, Bitbucket)。
/**
 * 克隆项目
 * @param {*} repo 下载地址
 * @param {*} desc 将存储库下载到的文件路径
 */
module.exports.clone = async function(repo, desc) {
    const download = promisify(require('download-git-repo'));
    const ora = require('ora');
    const process = ora(`下载.....${repo}`);
    // 开启进度条
    process.start();
    await download(repo,desc);
    process.succeed()
}
