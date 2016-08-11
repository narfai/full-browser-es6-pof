require(['./require.conf'], function(){
  require(['es6!app/main'], function(main){
    /* Main is an es6 module */
    main.default();
  });
});
