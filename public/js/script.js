const delbtns = document.querySelectorAll('a.del')

if(delbtns.length > 0) {
  delbtns.forEach((delbtn) => {
    delbtn.addEventListener('click', () => {    
      fetch(`/user/delete/${delbtn.dataset.id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => window.location.href = data.redirect)
      .catch(err => console.log(err))
    })
  })
}
