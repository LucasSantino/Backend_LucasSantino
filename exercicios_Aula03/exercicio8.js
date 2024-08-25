const usuarioLogado = true;        
const PermissaoAdmin = false;    

if (usuarioLogado && PermissaoAdmin) {
    console.log('Acesso concedido. Você tem permissão de administrador.');
} else {
    console.log('Acesso negado. Verifique se você está logado e se possui permissão de administrador.');
}


