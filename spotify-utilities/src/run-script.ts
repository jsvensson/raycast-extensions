import { closeMainWindow } from "@raycast/api"
import { runAppleScript } from "run-applescript"

export async function runScript(script: string) {
  await closeMainWindow()
  await runAppleScript(script)
}
