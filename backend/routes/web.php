<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/user', "UserController@index");
// ["id", "email", "password", "fstName", "lstName", "nickName"];