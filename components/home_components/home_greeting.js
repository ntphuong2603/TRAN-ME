import { DAY, MONTH } from '../../utils/constant'

export default function getGreetingString() {

    let title = ''
    let subTitle = ''

    const date = new Date()
    const day = DAY[date.getDay()]
    const month = MONTH[date.getMonth()]
    
    const time = date.getHours()
    if (time < 12){
      title = 'Good morning'
    } else if (time < 16){
      title = 'Good afternoon'
    } else if (time < 24){
      title = 'Good evening'
    }

    subTitle = `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`

  return { title, subTitle }
}