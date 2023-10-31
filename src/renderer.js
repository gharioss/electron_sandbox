const ping  = async() => {
    const result = await window.electronAPI.ping()
    console.log('idfdj', result)
}

ping();

const setButton = document.getElementById('btn')
setButton.addEventListener('click', () => {
    console.log('hello')
    const title = 'hello'
    window.electronTest.setTitle(title)
  })
  
  