my-commands:cmds

# ============================================================
#  Install Node.js 24, npm, and Yarn on Ubuntu
# ===========================================================


REQUIRED_NODE_MAJOR := 24

# ─── Full Setup ──────────────────────────────────────────────
install-frontend-requirements: install-node install-yarn
	@echo ""
	@echo "✅  All done! Node.js 24, npm, and Yarn are installed."
	@$(MAKE) versions

# ─── Node.js 24 + npm ────────────────────────────────────────
install-node:
	@REQUIRED=$(REQUIRED_NODE_MAJOR); \
	if command -v node > /dev/null 2>&1; then \
		CURRENT=$$(node -e "process.stdout.write(String(process.versions.node.split('.')[0]))"); \
		if [ "$$CURRENT" -ge "$$REQUIRED" ]; then \
			echo "⏭  Node.js v$$CURRENT is already installed and meets v$(REQUIRED_NODE_MAJOR) — skipping."; \
		else \
			echo "⚠️  Node.js v$$CURRENT found — upgrading to v$(REQUIRED_NODE_MAJOR)..."; \
			sudo apt update; \
			sudo apt install -y curl; \
			curl -fsSL https://deb.nodesource.com/setup_$(REQUIRED_NODE_MAJOR).x | sudo bash -; \
			sudo apt install -y nodejs; \
			echo "✅  Node.js upgraded to $$(node -v)."; \
		fi \
	else \
		echo ">>> Node.js not found — installing v$(REQUIRED_NODE_MAJOR)..."; \
		sudo apt update; \
		sudo apt install -y curl; \
		curl -fsSL https://deb.nodesource.com/setup_$(REQUIRED_NODE_MAJOR).x | sudo bash -; \
		sudo apt install -y nodejs; \
		echo "✅  Node.js $$(node -v) and npm $$(npm -v) installed."; \
	fi

# ─── Yarn ────────────────────────────────────────────────────
install-yarn:
	@if command -v yarn > /dev/null 2>&1; then \
		echo "⏭  Yarn is already installed: $$(yarn -v) — skipping."; \
	else \
		echo ">>> Enabling Corepack..."; \
		sudo corepack enable; \
		echo ">>> Installing latest stable Yarn..."; \
		corepack prepare yarn@stable --activate; \
		echo "✅  Yarn installed."; \
	fi

# ─── Versions ────────────────────────────────────────────────
versions:
	@echo ""
	@echo "  Node.js : $$(node -v)"
	@echo "  npm     : $$(npm -v)"
	@echo "  Yarn    : $$(yarn -v)"
	@echo ""

# ─── Uninstall ───────────────────────────────────────────────
uninstall-frontend:
	@echo ">>> Removing Node.js and npm..."
	sudo apt remove -y nodejs
	sudo apt autoremove -y
	sudo rm -f /etc/apt/sources.list.d/nodesource.list
	@echo ">>> Removing Yarn (Corepack)..."
	sudo corepack disable || true
	@echo ">>> Uninstall complete."

portfolio-react-build:
	@cd /home/my-portfolio && sudo rm -rf node_modules && rm -rf dist && yarn install && yarn run build
	@echo "Portfolio react project cleaned and build completed\n"

nginx-restart:
	sudo systemctl reload nginx

my-portfolio-restart: install-frontend-requirements portfolio-react-build nginx-restart
	@echo "My portfolio restarted."


cmds:
	@echo "Available commands:"
	@echo "  make portfolio-react-build - to build the react apps"
	@echo "  make my-portfolio-restart - to restart the my portfolio project"
	@echo "    install-frontend-requirements     Install Node.js 24, npm, and Yarn (full setup)"
	@echo "    install-node    Install Node.js 24 and npm"
	@echo "    install-yarn    Install Yarn (requires Node.js already installed)"
	@echo "    versions        Print installed versions"
	@echo "    uninstall-frontend    Remove Node.js, npm, and Yarn"
