const liczby = document.querySelectorAll('.liczba')
const operatory = document.querySelectorAll('.operator')
const wyczysc = document.querySelector('.wyczysc')
const del = document.querySelector('.del')
const rownosc = document.querySelector('.rownosc')
const wynikPamiec = document.querySelector('.pamiec')
const wynikAktualne = document.querySelector('.aktualne')

let aktualneDzialanie = ''
let pamiecDzialanie = ''
let operacja = undefined

const obliczPoj = () => {
    let dzialanie
    if(!pamiecDzialanie) return

    const poprzednie = parseFloat(pamiecDzialanie)

    if(isNaN(poprzednie)) return
    
    switch(operacja){
        case 'ln':
            dzialanie = Math.log(poprzednie)
            break;
        case 'sin':
            dzialanie = Math.sin(poprzednie)
            break;
        case 'cos':
            dzialanie = Math.cos(poprzednie)
            break;
        case 'tg':
            dzialanie = Math.tan(poprzednie)
            break;
        case 'ctg':
            dzialanie = 1/Math.tan(poprzednie)
            break;
        case 'π':
            dzialanie = Math.PI(poprzednie)
            break;
        case 'x²':
            dzialanie = Math.pow(poprzednie,2)
            break;
        default:
            return

    }

    pamiecDzialanie = `${poprzednie}`
    aktualneDzialanie = dzialanie
}

const oblicz = () => {
    let dzialanie
    if(!pamiecDzialanie || !aktualneDzialanie) {
        return
    }

    const poprzednie = parseFloat(pamiecDzialanie)
    const aktualne = parseFloat(aktualneDzialanie)

    if(isNaN(poprzednie) || isNaN(aktualne)) return

    switch(operacja){
        case '+':
            dzialanie = poprzednie + aktualne
            break;
        case '-':
            dzialanie = poprzednie - aktualne
            break;
        case '×':
            dzialanie = poprzednie * aktualne
            break;
        case '÷':
            if(aktualne === 0){
                wyczyscWynik()
                alert("nie dziel przez 0")
                return
            }
            dzialanie = poprzednie / aktualne
            break;
        case '√':
            dzialanie = Math.pow(poprzednie, 1/aktualne)
            break;
        case '%':
            dzialanie = poprzednie / 100 * aktualne
            break;
        case '^':
            dzialanie = Math.pow(poprzednie, aktualne)
            break;
        case 'log':
            dzialanie = Math.log(poprzednie) / Math.log(aktualne)
            break;
        default:
            return
        
    }

    aktualneDzialanie = dzialanie
    operacja = undefined
    pamiecDzialanie = ''
}



const usunLiczbe = () => {
    aktualneDzialanie = aktualneDzialanie.toString().slice(0,-1)
}

const zaaktualizujWynik = () => {
    wynikAktualne.innerText = aktualneDzialanie
    if(operacja != null){
        wynikPamiec.innerText = pamiecDzialanie + operacja
    }
    else{
        wynikPamiec.innerText = ''
    }
    
}

const dodajLiczbe = (item) => {
    if (item === ','){
        if(aktualneDzialanie.includes('.')){
            return
        }
        item = '.'
    }
    if(item === "+/-"){
        item = ''
        aktualneDzialanie = '-' + aktualneDzialanie
    }
    aktualneDzialanie = aktualneDzialanie.toString() + item.toString();
}

const dodajOperator = (item) => {
    if(aktualneDzialanie === '')
        return
    if(pamiecDzialanie!==''){
        const poprzednie = wynikPamiec.innerText
        if(aktualneDzialanie.toString() === '0' && poprzednie[poprzednie.length-1] === '÷'){
            wyczyscWynik()
            alert("nie dziel przez 0")
            return
        }
        oblicz()
        obliczPoj()
    }
    operacja = item
    pamiecDzialanie = aktualneDzialanie
    aktualneDzialanie = ''
}

const wyczyscWynik = () => {
    aktualneDzialanie = ''
    pamiecDzialanie = ''
    operacja = undefined
}


del.addEventListener("click", () =>{
    usunLiczbe()
    zaaktualizujWynik()
})

liczby.forEach((item) => {
    item.addEventListener("click", () => {
        dodajLiczbe(item.innerText)
        zaaktualizujWynik()
    })
});

operatory.forEach((item) => {
    item.addEventListener("click", () =>{
        dodajOperator(item.innerText)
        zaaktualizujWynik()
    } )
})

rownosc.addEventListener('click', () => {
    oblicz()
    obliczPoj()
    zaaktualizujWynik()
})

wyczysc.addEventListener('click', () => {
    wyczyscWynik()
    zaaktualizujWynik()
})