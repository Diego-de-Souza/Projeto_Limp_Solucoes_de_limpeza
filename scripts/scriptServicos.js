//declaração das variaveis com elemento id
let banner = document.getElementsByClassName('container-servicos__banners-conteudo')
let statusBanner = [0,0,0,0,0,0,0]

//função que abre e fecha o banner da area de serviços
function abreFechaBanner(numeroBanner){
    if(statusBanner[0]==0 && numeroBanner==1){
        banner[0].style.height = 'auto'
        statusBanner[0]=1
    }else if (statusBanner[0]==1 && numeroBanner==1){
        banner[0].style.height = "24vh"
        statusBanner[0]=0
    }else if (statusBanner[1]==0 && numeroBanner==2){
        banner[1].style.height = "auto"
        statusBanner[1]=1
    }else if (statusBanner[1]==1 && numeroBanner==2){
        banner[1].style.height = "24vh"
        statusBanner[1]=0
    }else if (statusBanner[2]==0 && numeroBanner==3){
        banner[2].style.height = "auto"
        statusBanner[2]=1
    }else if (statusBanner[2]==1 && numeroBanner==3){
        banner[2].style.height = "24vh"
        statusBanner[3]=0
    }else if (statusBanner[3]==0 && numeroBanner==4){
        banner[3].style.height = "auto"
        statusBanner[3]=1
    }else if (statusBanner[3]==1 && numeroBanner==4){
        banner[3].style.height = "24vh"
        statusBanner[3]=0
    }else if (statusBanner[4]==0 && numeroBanner==5){
        banner[4].style.height = "auto"
        statusBanner[4]=1
    }else if (statusBanner[4]==1 && numeroBanner==5){
        banner[4].style.height = "24vh"
        statusBanner[4]=0
    }else if (statusBanner[5]==0 && numeroBanner==6){
        banner[5].style.height = "auto"
        statusBanner[5]=1
    }else if (statusBanner[5]==1 && numeroBanner==6){
        banner[5].style.height = "24vh"
        statusBanner[5]=0
    }else if (statusBanner[6]==0 && numeroBanner==7){
        banner[6].style.height = "auto"
        statusBanner[6]=1
    }else if (statusBanner[6]==1 && numeroBanner==7){
        banner[6].style.height = "24vh"
        statusBanner[6]=0
    }
}
