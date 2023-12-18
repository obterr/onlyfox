import { h } from "preact";

export function redirectTimer() {
    const currentTime = Math.floor(Date.now() / 1000)
    const unBanTime = 1703181660
    const timeToUnban = unBanTime - currentTime

    if (timeToUnban > 0) {
        return timeToUnban
    }
    else return 0
}

export function BanCountdown(): h.JSX.Element {
    const unbanTime = redirectTimer();

    if (unbanTime > 0) {
        return (
            <div className="banCountdown">
                <iframe src="https://free.timeanddate.com/countdown/i95s7xlh/cf111/cm0/cu4/ct0/cs1/ca0/co1/cr0/ss0/cac000/cpc000/pcf9f/tc90f/fs250/szw576/szh243/tatAnny%20Unban/tac000/tpc000/iso2023-12-21T18:01:00"
                    frameBorder="0" width="576" height="243">
                </iframe>
                <text>If the timer is incorrect: blame Phlyo</text>
            </div>
        )
    }
    else return <></>
}