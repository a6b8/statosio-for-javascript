<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/custom/statosio-for-javascript.svg" height="45px" alt="Statosio for Javascript" name="# Statosio for Javascript">
</a>

Statosio is an add-on function for [d3](https://d3js.org) to generate simple charts, in a fast and reliable way. 

<br>

<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/examples.svg" height="45px" alt="Examples" name="examples">
</a>

### Select
![# d3.statosio](https://docs.statosio.com/assets/images/example-select-400.jpg)<br>
[Select and change position of columns](https://docs.statosio.com/tutorials/select-data.html)
### Sort Data
![# d3.statosio](https://docs.statosio.com/assets/images/example-sort-400.jpg)<br>
[Sort dataset by values](https://docs.statosio.com/tutorials/sort-data.html)
### Change Style
![# d3.statosio](https://docs.statosio.com/assets/images/example-customize-400.jpg)<br>
[Change style to dark-mode](https://docs.statosio.com/tutorials/change-style.html)

<br>

<a href="#headline">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/table-of-contents.svg" height="45px" alt="Table of Contents" name="table-of-contents">
</a>

1. [Examples](#examples)<br>
2. [Quickstart](#quickstart)<br>
3. [Video Introduction](#video-introduction)
4. [Documentation](#documentation)<br>
5. [Chart Types](#chart-types)<br>
6. [Parameters](#parameters)<br>
7. [Options](#options)<br>
8. [Contributing](#contributing)<br>
9.  [License](#license)<br>
10. [Code of Conduct](#code-of-conduct)<br>
11. [Support my Work](#support-my-work)<br>

<br>

<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/quickstart.svg" height="45px" alt="Quickstart" name="quickstart">
</a>

```javascript
<!DOCTYPE html>
<head>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/6.2.0/d3.js"></script>
    <script src="../libs/statosio.js"></script>
</head>
<body>
    <script>
        d3.json( "../data/performance.json" )
            .then( ( file ) => {
                d3.statosio( 
                    file, 
                    "name", 
                    [ "mobile" ], 
                    { 
                        "showAverage" : false,
                    }
                )
            } 
        )
    </script>
</body>
``````

<br>

<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/setup.svg" height="45px" name="setup" alt="Setup">
</a>

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/6.2.0/d3.js">
</script>
```

<br>

<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/video-introduction.svg" height="45px" alt="Video Introduction" name="video-introduction">
</a>

> [https://www.youtube.com/watch?v=i6od9O8jz1E](https://www.youtube.com/watch?v=i6od9O8jz1E)

<br>

<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/documentation.svg" height="45px" alt="Documentation" name="documentation">
</a>

> [https://docs.statosio.com](https://docs.statosio.com/)

<br>

<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/chart-types.svg" height="45px" alt="Chart Types" name="chart-types">
</a>

<br>

:heavy_check_mark: build simple diagrams fast and reliable, with one function!

:heavy_check_mark: pure javascript, no additonal css.

:heavy_check_mark: highly customizable with 40+ style and data options.

### Bar
![# d3.statosio](https://docs.statosio.com/assets/images/example-bar-400.jpg)<br>
[Create simple bar chart](https://docs.statosio.com/tutorials/simple-bar-chart.html)
### Point
![# d3.statosio](https://docs.statosio.com/assets/images/example-point-400.jpg)<br>
[Create a simple point chart](https://docs.statosio.com/tutorials/simple-point-chart.html)
### Stacked
![# d3.statosio](https://docs.statosio.com/assets/images/example-stacked-bar-400.jpg)<br>
[Create simple stacked bar chart](https://docs.statosio.com/tutorials/simple-stacked-bar-chart.html)

<br>

<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/parameters.svg" height="45px" alt="Parameters" name="parameters">
</a>

**Source:**
```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/statosio/0.9/statosio.js"></script>
```

```javascript
d3.statosio( dataset, x, y, options )
``````

| | **Value** | **Type** |
|------:|:------|:------|
| **dataset** | ```[{},{}...]``` | Array of Objects |
| **x** | ```"name"``` | String |
| **y** | ```"mobile"```, ```[ "mobile",... ]``` | String or Array of Strings |
| **options** | ```{}``` | Object |

<br>

<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/options.svg" height="45px" alt="Options" name="options">
</a>

[https://docs.statosio.com/options/](https://docs.statosio.com/options/)

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| A.1. | [showTitle](https://docs.statosio.com/options/show__title.html) | false | [A](https://docs.statosio.com/options/show__title.html#example-a), [B](https://docs.statosio.com/options/show__title.html#example-b) | Show or hide title on the front of the diagram. |
| A.2. | [showLegend](https://docs.statosio.com/options/show__legend.html) | false | [A](https://docs.statosio.com/options/show__legend.html#example-a), [B](https://docs.statosio.com/options/show__legend.html#example-b), [C](https://docs.statosio.com/options/show__legend.html#example-c) | Show or hide legend. Recommended for stacked diagrams. |
| A.3. | [showAverage](https://docs.statosio.com/options/show__average.html) | true | [A](https://docs.statosio.com/options/show__average.html#example-a), [B](https://docs.statosio.com/options/show__average.html#example-b), [C](https://docs.statosio.com/options/show__average.html#example-c) | Calculate and show average line |
| A.4. | [showRangeYLog](https://docs.statosio.com/options/show__range_y_log.html) | false | [A](https://docs.statosio.com/options/show__range_y_log.html#example-a), [B](https://docs.statosio.com/options/show__range_y_log.html#example-b) | Calculate and show range y in a log scale. |
| A.5. | [showDataAsCircle](https://docs.statosio.com/options/show__data_as_circle.html) | false | [A](https://docs.statosio.com/options/show__data_as_circle.html#example-a), [B](https://docs.statosio.com/options/show__data_as_circle.html#example-b), [C](https://docs.statosio.com/options/show__data_as_circle.html#example-c) | Show data as circles instead of rectangles. Only for not stacked diagram available. |
| B.1. | [viewTitle](https://docs.statosio.com/options/view__title.html) | "Statosio Demo" | [A](https://docs.statosio.com/options/view__title.html#example-a) | Set title content. |
| B.2. | [viewDomId](https://docs.statosio.com/options/view__dom_id.html) | "d3_statosio" | [A](https://docs.statosio.com/options/view__dom_id.html#example-a) | Set id from the <div> Element which holds the d3 content inside. |
| B.3. | [viewMarginTop](https://docs.statosio.com/options/view__margin__top.html) | 20 | [A](https://docs.statosio.com/options/view__margin__top.html#example-a), [B](https://docs.statosio.com/options/view__margin__top.html#example-b) | Set margin top |
| B.4. | [viewMarginRight](https://docs.statosio.com/options/view__margin__right.html) | 40 | [A](https://docs.statosio.com/options/view__margin__right.html#example-a), [B](https://docs.statosio.com/options/view__margin__right.html#example-b) | Set margin right |
| B.5. | [viewMarginBottom](https://docs.statosio.com/options/view__margin__bottom.html) | 100 | [A](https://docs.statosio.com/options/view__margin__bottom.html#example-a), [B](https://docs.statosio.com/options/view__margin__bottom.html#example-b) | Set margin bottom |
| B.6. | [viewMarginLeft](https://docs.statosio.com/options/view__margin__left.html) | 60 | [A](https://docs.statosio.com/options/view__margin__left.html#example-a), [B](https://docs.statosio.com/options/view__margin__left.html#example-b) | Set margin left |
| B.7. | [viewWidthOuter](https://docs.statosio.com/options/view__width__outer.html) | 600 | [A](https://docs.statosio.com/options/view__width__outer.html#example-a), [B](https://docs.statosio.com/options/view__width__outer.html#example-b) | Set width of the "canvas" including margin, titles etc. |
| B.8. | [viewHeightOuter](https://docs.statosio.com/options/view__height__outer.html) | 300 | [A](https://docs.statosio.com/options/view__height__outer.html#example-a), [B](https://docs.statosio.com/options/view__height__outer.html#example-b) | Set height of the "canvas" including margin. |
| B.9. | [viewTranslateMultiplicator](https://docs.statosio.com/options/view__translate__multiplicator.html) | 1.5 | [A](https://docs.statosio.com/options/view__translate__multiplicator.html#example-a), [B](https://docs.statosio.com/options/view__translate__multiplicator.html#example-b) | Between title, legend and diagram are spaces. These spaces gets calculated through this multiplicator. |
| C.1. | [dataXKey](https://docs.statosio.com/options/data__x__key.html) | "" |  | Expect a "key" name from the dataset to arrange the x range. |
| C.2. | [dataXSelectors](https://docs.statosio.com/options/data__x__selectors.html) | [] | [A](https://docs.statosio.com/options/data__x__selectors.html#example-a), [B](https://docs.statosio.com/options/data__x__selectors.html#example-b) | Expect one or more names which are included in the x range. |
| C.3. | [dataXTextLength](https://docs.statosio.com/options/data__x__text__length.html) | 25 | [A](https://docs.statosio.com/options/data__x__text__length.html#example-a), [B](https://docs.statosio.com/options/data__x__text__length.html#example-b) | This value counts the length of the x range names an cut of the rest. |
| C.4. | [dataXTextPlaceholder](https://docs.statosio.com/options/data__x__text__placeholder.html) | "..." | [A](https://docs.statosio.com/options/data__x__text__placeholder.html#example-a), [B](https://docs.statosio.com/options/data__x__text__placeholder.html#example-b) | Set an suffix behind a string. As a signal to the viewer, that the text was cut of. |
| C.5. | [dataYKeys](https://docs.statosio.com/options/data__y__keys.html) | [] |  | Expect "keys" from the dataset to arrange the y range. If you use one key the internal state is "bar". if you use multiple the internal is "stacked" |
| C.6. | [dataYTicks](https://docs.statosio.com/options/data__y__ticks.html) | 5 | [A](https://docs.statosio.com/options/data__y__ticks.html#example-a), [B](https://docs.statosio.com/options/data__y__ticks.html#example-b) | Ticks in d3 land means "steps". Here you can set the steps from the grid and y range. |
| C.7. | [dataSortCurrent](https://docs.statosio.com/options/data__sort__current.html) | "none" | [A](https://docs.statosio.com/options/data__sort__current.html#example-a), [B](https://docs.statosio.com/options/data__sort__current.html#example-b) | Set the general route for sorting. You can choose between "none", "values", "names". |
| C.8. | [dataSortByValues](https://docs.statosio.com/options/data__sort__by__values.html) | "decending" | [A](https://docs.statosio.com/options/data__sort__by__values.html#example-a), [B](https://docs.statosio.com/options/data__sort__by__values.html#example-b), [C](https://docs.statosio.com/options/data__sort__by__values.html#example-c) | Here you can set type of sorting. You can choose between "ascending" and "decending" |
| C.9. | [dataSortByNames](https://docs.statosio.com/options/data__sort__by__names.html) | "ascending" | [A](https://docs.statosio.com/options/data__sort__by__names.html#example-a), [B](https://docs.statosio.com/options/data__sort__by__names.html#example-b) | Here you can set type of sorting. You can choose between "ascending" and "decending" |
| C.10. | [dataSortSelection](https://docs.statosio.com/options/data__sort__selection.html) | "none" | [A](https://docs.statosio.com/options/data__sort__selection.html#example-a), [B](https://docs.statosio.com/options/data__sort__selection.html#example-b), [C](https://docs.statosio.com/options/data__sort__selection.html#example-c) | Change position of your selection. You can choose between "start", "end" and "none" |
| C.11. | [dataLegendTextSeparater](https://docs.statosio.com/options/data__legend__text__separater.html) | "_" | [A](https://docs.statosio.com/options/data__legend__text__separater.html#example-a) | This tweak split your keys with the separater and capitalize every word and insert a space in between. |
| D.1. | [styleColorAverage](https://docs.statosio.com/options/style__color__average.html) | "#000000" | [A](https://docs.statosio.com/options/style__color__average.html#example-a), [B](https://docs.statosio.com/options/style__color__average.html#example-b) | Set color of the average line. |
| D.2. | [styleColorCanvasBackground](https://docs.statosio.com/options/style__color__canvas_background.html) | "white" | [A](https://docs.statosio.com/options/style__color__canvas_background.html#example-a), [B](https://docs.statosio.com/options/style__color__canvas_background.html#example-b) | Set background color. |
| D.3. | [styleColorFont](https://docs.statosio.com/options/style__color__font.html) | "#000000" | [A](https://docs.statosio.com/options/style__color__font.html#example-a), [B](https://docs.statosio.com/options/style__color__font.html#example-b) | Set default font color. Excluding non-selection content. |
| D.4. | [styleColorLegends](https://docs.statosio.com/options/style__color__legends.html) | ["#5186EC", "#D95040", "#F2BD42"] | [A](https://docs.statosio.com/options/style__color__legends.html#example-a), [B](https://docs.statosio.com/options/style__color__legends.html#example-b) | Set legend color palettes. Expect an array of "hex" values or "html" color-names. |
| D.5. | [styleColorGridline](https://docs.statosio.com/options/style__color__gridline.html) | "#E5E5E5" | [A](https://docs.statosio.com/options/style__color__gridline.html#example-a), [B](https://docs.statosio.com/options/style__color__gridline.html#example-b) | Set the gridline color. Use "hex" value or "html" color-names. |
| D.6. | [styleColorSelectorsChart](https://docs.statosio.com/options/style__color__selectors__chart.html) | ["#EE752F", "#5186EC"] | [A](https://docs.statosio.com/options/style__color__selectors__chart.html#example-a), [B](https://docs.statosio.com/options/style__color__selectors__chart.html#example-b) | Colorize the chart of the selection. Use "hex" values or "html" color-names. |
| D.7. | [styleColorSelectorsText](https://docs.statosio.com/options/style__color__selectors__text.html) | ["#000000", "#000000"] | [A](https://docs.statosio.com/options/style__color__selectors__text.html#example-a), [B](https://docs.statosio.com/options/style__color__selectors__text.html#example-b) | Colorize the font of the selection. Use "hex" values or "html" color-names. |
| D.8. | [styleFontSizeText](https://docs.statosio.com/options/style__font__size__text.html) | 10 | [A](https://docs.statosio.com/options/style__font__size__text.html#example-a), [B](https://docs.statosio.com/options/style__font__size__text.html#example-b) | Set default font size, including selection. |
| D.9. | [styleFontSizeTitle](https://docs.statosio.com/options/style__font__size__title.html) | 18 | [A](https://docs.statosio.com/options/style__font__size__title.html#example-a), [B](https://docs.statosio.com/options/style__font__size__title.html#example-b) | Set font size of title |
| D.10. | [styleFontFamily](https://docs.statosio.com/options/style__font__family.html) | "arial" | [A](https://docs.statosio.com/options/style__font__family.html#example-a), [B](https://docs.statosio.com/options/style__font__family.html#example-b) | Set default font family |
| D.11. | [styleFontFormatSelectors](https://docs.statosio.com/options/style__font__format__selectors.html) | ["bold", "normal"] | [A](https://docs.statosio.com/options/style__font__format__selectors.html#example-a), [B](https://docs.statosio.com/options/style__font__format__selectors.html#example-b) | Set format of content use "Html" Syntax ("bold", "underline", "normal" etc.).  |
| D.12. | [styleStrokeAverage](https://docs.statosio.com/options/style__stroke__average.html) | 2 | [A](https://docs.statosio.com/options/style__stroke__average.html#example-a), [B](https://docs.statosio.com/options/style__stroke__average.html#example-b) | Set stroke weight of average line. |
| D.13. | [styleStrokeGridline](https://docs.statosio.com/options/style__stroke__gridline.html) | 2 | [A](https://docs.statosio.com/options/style__stroke__gridline.html#example-a), [B](https://docs.statosio.com/options/style__stroke__gridline.html#example-b) | Set stroke weight of gridline. |
| D.14. | [styleLegendRectSizeFull](https://docs.statosio.com/options/style__legend__rect_size__full.html) | 16 | [A](https://docs.statosio.com/options/style__legend__rect_size__full.html#example-a), [B](https://docs.statosio.com/options/style__legend__rect_size__full.html#example-b) | Set rectangle size of legend item. |
| D.15. | [styleOtherCircleChartRadius](https://docs.statosio.com/options/style__other__circle_chart_radius.html) | 4 | [A](https://docs.statosio.com/options/style__other__circle_chart_radius.html#example-a), [B](https://docs.statosio.com/options/style__other__circle_chart_radius.html#example-b) | Set radius of circle. |
| D.16. | [styleOtherRangeXTextRotation](https://docs.statosio.com/options/style__other__range_x_text_rotation.html) | -45 | [A](https://docs.statosio.com/options/style__other__range_x_text_rotation.html#example-a), [B](https://docs.statosio.com/options/style__other__range_x_text_rotation.html#example-b) | Set text rotation of the x axis. |

<br>

<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/contributing.svg" height="45px" alt="Contributing" name="contributing">
</a>

Bug reports and pull requests are welcome on GitHub at https://github.com/a6b8/statosio-for-wordpress. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/a6b8/statosio/blob/master/CODE_OF_CONDUCT.md).

<br>

<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/license.svg" height="45px" alt="License" name="license">
</a>

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

<br>

<a href="#table-of-contents">
<img src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/code-of-conduct.svg" height="45px" alt="Code of Conduct" name="code-of-conduct">
</a>
    
Everyone interacting in the Statosio project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/a6b8/statosio-for-wordpress/blob/master/CODE_OF_CONDUCT.md).

<br>

<a href="#table-of-contents">
<img href="#table-of-contents" src="https://raw.githubusercontent.com/a6b8/a6b8/main/assets/headlines/default/star-us.svg" height="45px" name="star-us" alt="Star us">
</a>

Please ⭐️ star this Project, every ⭐️ star makes us very happy!
