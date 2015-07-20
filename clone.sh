#! /bin/sh

# Essentials variables for some highlighting.
COLOR_OFF='\033[0m';
RED='\033[0;31m';
GREEN='\033[0;32m';
YELLOW='\033[0;33m';

# Actual process of cloning & setting up the repo.
function process (){

	# Cloning the repository from `https://github.com/umayr/seed`
	echo "\n\r${YELLOW}Cloning Repository from \`https://github.com/umayr/seed\`.${COLOR_OFF}"
	git clone https://github.com/umayr/seed ${DIRECTORY} || exit 1;

	# Changing directory to the clone repository
	cd ${DIRECTORY};

	# Now removing the remote origin
	echo "\n\r${YELLOW}Done cloning, removing origin & reinitializing repository for you.${COLOR_OFF}"
	git remote remove origin || exit 1;

	# Re-initializing the repository.
	git init;

	# Tada~~
	echo "\n\r${GREEN}Everything seems perfect. Good luck with your new project.${COLOR_OFF}"
	exit 0;
}

# Verifying the provided parameter & commencing the process of cloning.
if [[ -z $1 ]]; then
	DIRECTORY='.';
	process;
else
	if [ -d "$1" ]; then
	  echo "${RED}Provided directory \`${1}\` already exits.";
	  exit 1;
	else
		DIRECTORY=$1;
		process;
	fi
fi
