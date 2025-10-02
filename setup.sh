GITHUB_SETUP_ROOT="$(git rev-parse --show-toplevel)"
GITHUB_SETUP_SSH_FOLDER="${GITHUB_SETUP_ROOT}/.ssh"
GITHUB_SETUP_SSH_KEY='id_ed25519'
read -p "Your GitHub email: " GITHUB_SETUP_EMAIL > /dev/tty
read -p "Your GitHub pseudo: " GITHUB_SETUP_USER > /dev/tty

rm -rf "${GITHUB_SETUP_SSH_FOLDER}" > /dev/null
mkdir -p "${GITHUB_SETUP_SSH_FOLDER}" > /dev/null
ssh-keygen -t ed25519 -a 100 -C "${GITHUB_SETUP_EMAIL}" -f "${GITHUB_SETUP_SSH_FOLDER}/${GITHUB_SETUP_SSH_KEY}_auth" -N "" > /dev/null
ssh-keygen -t ed25519 -a 100 -C "${GITHUB_SETUP_EMAIL}" -f "${GITHUB_SETUP_SSH_FOLDER}/${GITHUB_SETUP_SSH_KEY}_sign" -N "" > /dev/null
chmod -R 0600 "${GITHUB_SETUP_SSH_FOLDER}" > /dev/null

git config user.name "${GITHUB_SETUP_USER}"
git config user.email "${GITHUB_SETUP_EMAIL}"
git config commit.gpgsign true
git config gpg.format ssh
git config pull.rebase false
git config push.default simple
git config core.editor "code --wait"
git config merge.tool vimdiff
git config mergetool.prompt false
git config core.autocrlf input
git config core.safecrlf true
git config color.ui auto
git config color.branch auto
git config color.diff auto
git config color.status auto
git config commit.cleanup strip
git config log.abbrevCommit true
git config log.showSignature true

git config user.signingkey "${GITHUB_SETUP_SSH_FOLDER}/${GITHUB_SETUP_SSH_KEY}_sign"
git config core.sshCommand "ssh -i ${GITHUB_SETUP_SSH_FOLDER}/${GITHUB_SETUP_SSH_KEY}_auth -F /dev/null"

echo 'Please add this AUTHENTICATION key on your github user' > /dev/tty
echo 'Even if you already add one, please add this one, it is a new one' > /dev/tty
echo '##### START #####' > /dev/tty
cat "${GITHUB_SETUP_SSH_FOLDER}/${GITHUB_SETUP_SSH_KEY}_auth.pub" > /dev/tty
echo '###### END ######' > /dev/tty

echo 'Please add this SIGNING key on your github user' > /dev/tty
echo 'Even if you already add one, please add this one, it is a new one' > /dev/tty
echo '##### START #####' > /dev/tty
cat "${GITHUB_SETUP_SSH_FOLDER}/${GITHUB_SETUP_SSH_KEY}_sign.pub" > /dev/tty
echo '###### END ######' > /dev/tty
