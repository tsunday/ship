function serve() {
    console.log('Keep alive!');
    setTimeout(serve, 5000);
}

serve();