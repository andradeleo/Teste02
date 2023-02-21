
export function calculateDays(date) {
  let diaAtual = new Date()
  let dataPassada = new Date(date);
  let dataMilliseconds = Math.abs(diaAtual.getTime()- dataPassada.getTime()) 
  return  Math.ceil(dataMilliseconds/(1000 * 60 * 60 * 24) - 1)  
}

export function formatDays(date) {
  let newDate = new Date(date)
  return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
}
