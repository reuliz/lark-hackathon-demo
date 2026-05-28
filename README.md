# LarkSentinel: Smart CI/CD Alerts 

A lightweight Python webhook server that catches deployment failures (like Netlify) and pushes rich, actionable alerts directly to Lark using the Model Context Protocol (MCP) and Message Cards.

## How it works
1. **Listens:** The Flask app listens for outgoing webhooks from CI/CD pipelines.
2. **Parses:** Extracts the failing repository, branch, and error logs.
3. **Alerts:** Uses Lark's Custom Bot API to send a formatted Message Card to the developer channel.

## Tech Stack
* Python (Flask)
* Lark Developer API (Custom Bots / Message Cards)
* GitHub & Netlify (Trigger sources)
