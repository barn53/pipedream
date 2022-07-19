// To use any npm package on Pipedream, just import it
import moment from "moment-timezone"

export default {
    name: "Current Date and Time",
    description: "Returns the current date and time for Europe/Berlin",
    key: "current_date_time",
    version: "0.0.3",
    type: "action",
    props: {},
    async run({ steps, $ }) {
        let zone = 'Europe/Berlin'
        let current = moment.tz(new Date(), zone)
        return {
            "date": current.format('DD.MM.YYYY'),
            "time": current.format('HH:mm:ss'),
            "zone": zone
        }
    },
}
