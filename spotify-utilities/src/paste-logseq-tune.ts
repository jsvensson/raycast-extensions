import { Clipboard, closeMainWindow, showHUD } from "@raycast/api"
import { runAppleScript } from "run-applescript"

export default async () => {
    const script = `
tell application "Spotify"
	set trackID to id of current track
	set art to artist of current track
	set song to name of current track
end tell

set AppleScript's text item delimiters to ":"
set trackID to third text item of trackID
set AppleScript's text item delimiters to {""}

set trackURL to ("https://open.spotify.com/track/" & trackID)
set out to ("[" & art & " -- " & song & "](" & trackURL & ")")

return out
`

    await closeMainWindow()
    const url = await runAppleScript(script)
    await Clipboard.paste(url)
    await showHUD("Pasted Tune of the Day")
}
