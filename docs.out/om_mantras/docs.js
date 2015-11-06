// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('om_mantras.docs');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('om_mantras.docs.selectable');
goog.require('om_mantras.docs.sortable');
cljs.core.enable_console_print_BANG_();
devcards.core.start_devcard_ui_BANG__STAR_();
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"# Om Mantras\n\n  Om Mantras are a collection of truly reusable, generic components for\n  Om (Next). Often, generic components are released with predefined styles,\n  expectations on what the data should look like, or even assumptions about\n  your app state and its structure.\n\n  Om Mantras make none of these assumptions. They follow three principles:\n\n  1. They come unstyled by default, but provide logical CSS classes to give\n     you full freedom to style them the way you want.\n  2. They accept generic data (either single data items or collections of them)\n     and allow you to extract the bits needed for items to be identified and\n     rendered via your own functions.\n  3. They operate in isolation from your app state but allow you to integrate\n     them into your apps by defining callbacks that can then mutate your app\n     state.\n\n  ## Example interface\n\n  ```\n  (sortable {:items <any ordered collection of arbitary data>\n             :key-fn (fn [item] <code to return a unique key for the item>)\n             :element-fn (fn [item] <code to return a React element for the item>)\n             :change-fn (fn [items] <code to do something with the reordered items>)})\n  ```\n\n  ## Usage\n\n  First, you have to add the following dependency to your project, e.g.\n  in `project.clj` or `build.boot`:\n\n  ```\n  [\"om-mantras\" \"0.1.0-SNAPSHOT\"]\n  ```\n\n  To use the components in your app, require `om-mantras.<component>` and\n  create components just like you would do with any other components written\n  using Om (Next):\n\n  ```\n  (ns yourapp.some-ns\n    (:require [om-mantras.sortable :refer [sortable]]))\n\n  (defui YourComponent\n    Object\n    (render [this]\n      (dom/div nil\n        (sortable {:items ...\n                   :key-fn ...\n                   :element-fn ...\n                   :change-fn ...}))))\n  ```",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
