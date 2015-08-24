
var
  stir $ require :stir-template
  React $ require :react

var
  Page $ React.createFactory $ require :./src/page

var
  ({}~ html head title body meta script link div a span) stir

var
  line $ \ (text) (div ({} (:className :line)) text)

= module.exports $ \ (data)
  return $ stir.render
    stir.doctype
    html null
      head null
        title null ":Coffee Webpack Starter"
        meta $ object (:charset :utf-8)
        link $ object (:rel :icon)
          :href :http://tp4.sinaimg.cn/5592259015/180/5725970590/1
        link $ {} (:rel :stylesheet)
          :href $ cond data.dev :src/main.css data.style
        script $ object (:src data.vendor) (:defer true)
        script $ object (:src data.main) (:defer true)
      body null
        div ({} (:class :intro))
          div ({} (:class :title)) ":This is a demo of Webpack usage."
          line ":Open Console to see how it loads."
          div null
            span null ":Read more at "
            a
              {} (:href :http://github.com/teambition/coffee-webpack-starter)
              , :github.com/teambition/coffee-webpack-starter
            span null :.
        div ({} (:class :demo))
          React.renderToString (Page)
