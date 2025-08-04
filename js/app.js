function openMenu() {
    /* Verifica se o MENU está fechado. 
    Se estiver fechado, ao CLICAR abre o MENU / Fecha a logo / Fecha o icon menu hamburguer*/
    if(menu.style.display == 'none'){ 
        menu.style.display = 'block'; /*Abrir o menu*/
        logo.style.display = 'none';  /*Fechar a logo*/
        symbolMenu.style.display = 'none' /*Fechar o icone menu hamburguer*/
    }else {
        menu.style.display = 'none';
    }
}

function closeMenu() {
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
        logo.style.display = 'block';
        symbolMenu.style.display = 'block'
    }
}