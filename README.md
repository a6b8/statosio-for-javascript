# d3.statosio

## Parameters
### required
| key  | alias  | type  |
|---|---|---|
| ```dataXKey``` | data__x__key | ```string```  |
| ```dataYKeys``` | data__y__keys | ```array(ykeys)```  |


## Categories
### A. Show {#show}
Show or hide elements from the view.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| A.1. | [showTitle](show__title.md) | false | [A](https://d3.statosio.com/options/show__title.html#example-a), [B](https://d3.statosio.com/options/show__title.html#example-b) | Show or hide title on the front of the diagram. |
| A.2. | [showLegend](show__legend.md) | false | [A](https://d3.statosio.com/options/show__legend.html#example-a), [B](https://d3.statosio.com/options/show__legend.html#example-b) | Show or hide legend. Recommended for stacked diagrams. |
| A.3. | [showAverage](show__average.md) | true | [A](https://d3.statosio.com/options/show__average.html#example-a), [B](https://d3.statosio.com/options/show__average.html#example-b) | Calculate and show average line |
| A.4. | [showRangeYLog](show__range_y_log.md) | false | [A](https://d3.statosio.com/options/show__range_y_log.html#example-a), [B](https://d3.statosio.com/options/show__range_y_log.html#example-b) | Calculate and show range y in a log scale. |
| A.5. | [showDataAsCircle](show__data_as_circle.md) | false | [A](https://d3.statosio.com/options/show__data_as_circle.html#example-a), [B](https://d3.statosio.com/options/show__data_as_circle.html#example-b) | Show data as circles instead of rectangles. Only for not stacked diagram available. |

### B. View {#view}
Settings around the diagram as a whole.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| B.1. | [viewTitle](view__title.md) | "Statosio Demo" | [A](https://d3.statosio.com/options/view__title.html#example-a) | Set title content. |
| B.2. | [viewDomId](view__dom_id.md) | "d3_statosio" | [A](https://d3.statosio.com/options/view__dom_id.html#example-a) | Set id from the <div> Element which holds the d3 content inside. |
| B.3. | [viewMarginTop](view__margin__top.md) | 20 | [A](https://d3.statosio.com/options/view__margin__top.html#example-a), [B](https://d3.statosio.com/options/view__margin__top.html#example-b) | Set margin top |
| B.4. | [viewMarginRight](view__margin__right.md) | 40 | [A](https://d3.statosio.com/options/view__margin__right.html#example-a), [B](https://d3.statosio.com/options/view__margin__right.html#example-b) | Set margin right |
| B.5. | [viewMarginBottom](view__margin__bottom.md) | 100 | [A](https://d3.statosio.com/options/view__margin__bottom.html#example-a), [B](https://d3.statosio.com/options/view__margin__bottom.html#example-b) | Set margin bottom |
| B.6. | [viewMarginLeft](view__margin__left.md) | 60 | [A](https://d3.statosio.com/options/view__margin__left.html#example-a), [B](https://d3.statosio.com/options/view__margin__left.html#example-b) | Set margin left |
| B.7. | [viewWidthOuter](view__width__outer.md) | 600 | [A](https://d3.statosio.com/options/view__width__outer.html#example-a), [B](https://d3.statosio.com/options/view__width__outer.html#example-b) | Set width of the "canvas" including margin, titles etc. |
| B.8. | [viewHeightOuter](view__height__outer.md) | 300 | [A](https://d3.statosio.com/options/view__height__outer.html#example-a), [B](https://d3.statosio.com/options/view__height__outer.html#example-b) | Set height of the "canvas" including margin. |
| B.9. | [viewTranslateMultiplicator](view__translate__multiplicator.md) | 1.5 | [A](https://d3.statosio.com/options/view__translate__multiplicator.html#example-a), [B](https://d3.statosio.com/options/view__translate__multiplicator.html#example-b) | Between title, legend and diagram are spaces. These spaces gets calculated through this multiplicator. |

### C. Data {#data}
Rearrange Data by sorting or set selectors.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| C.1. | [dataXKey](data__x__key.md) | "" |  | Expect a "key" name from the dataset to arrange the x range. |
| C.2. | [dataXSelectors](data__x__selectors.md) | [] |  | Expect one or more names which are included in the x range. |
| C.3. | [dataXTextLength](data__x__text__length.md) | 25 | [A](https://d3.statosio.com/options/data__x__text__length.html#example-a), [B](https://d3.statosio.com/options/data__x__text__length.html#example-b) | This value counts the length of the x range names an cut of the rest. |
| C.4. | [dataXTextPlaceholder](data__x__text__placeholder.md) | "..." | [A](https://d3.statosio.com/options/data__x__text__placeholder.html#example-a), [B](https://d3.statosio.com/options/data__x__text__placeholder.html#example-b) | Set an suffix behind a string. As a signal to the viewer, that the text was cut of. |
| C.5. | [dataYKeys](data__y__keys.md) | [] |  | Expect "keys" from the dataset to arrange the y range. If you use one key the internal state is "bar". if you use multiple the internal is "stacked" |
| C.6. | [dataYTicks](data__y__ticks.md) | 5 | [A](https://d3.statosio.com/options/data__y__ticks.html#example-a), [B](https://d3.statosio.com/options/data__y__ticks.html#example-b) | Ticks in d3 land means "steps". Here you can set the steps from the grid and y range. |
| C.7. | [dataSortCurrent](data__sort__current.md) | "none" | [A](https://d3.statosio.com/options/data__sort__current.html#example-a), [B](https://d3.statosio.com/options/data__sort__current.html#example-b) | Set the general route for sorting. You can choose between "none", "values", "names". |
| C.8. | [dataSortByValues](data__sort__by__values.md) | "decending" | [A](https://d3.statosio.com/options/data__sort__by__values.html#example-a), [B](https://d3.statosio.com/options/data__sort__by__values.html#example-b) | Here you can set type of sorting. You can choose between "ascending" and "decending" |
| C.9. | [dataSortByNames](data__sort__by__names.md) | "ascending" | [A](https://d3.statosio.com/options/data__sort__by__names.html#example-a), [B](https://d3.statosio.com/options/data__sort__by__names.html#example-b) | Here you can set type of sorting. You can choose between "ascending" and "decending" |
| C.10. | [dataSortSelection](data__sort__selection.md) | "none" | [A](https://d3.statosio.com/options/data__sort__selection.html#example-a), [B](https://d3.statosio.com/options/data__sort__selection.html#example-b) | Change position of your selection. You can choose between "start", "end" and "none" |
| C.11. | [dataLegendTextSeparater](data__legend__text__separater.md) | "_" | [A](https://d3.statosio.com/options/data__legend__text__separater.html#example-a) | This tweak split your keys with the separater and capitalize every word and insert a space in between. |

### D. Style {#style}
Set style settings from specific element.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| D.1. | [styleColorAverage](style__color__average.md) | "#000000" | [A](https://d3.statosio.com/options/style__color__average.html#example-a), [B](https://d3.statosio.com/options/style__color__average.html#example-b) | Set color of the average line. |
| D.2. | [styleColorCanvasBackground](style__color__canvas_background.md) | "white" | [A](https://d3.statosio.com/options/style__color__canvas_background.html#example-a), [B](https://d3.statosio.com/options/style__color__canvas_background.html#example-b) | Set background color. |
| D.3. | [styleColorFont](style__color__font.md) | "#000000" | [A](https://d3.statosio.com/options/style__color__font.html#example-a), [B](https://d3.statosio.com/options/style__color__font.html#example-b) | Set default font color. Excluding non-selection content. |
| D.4. | [styleColorLegends](style__color__legends.md) | ["#5186EC", "#D95040", "#F2BD42"] | [A](https://d3.statosio.com/options/style__color__legends.html#example-a), [B](https://d3.statosio.com/options/style__color__legends.html#example-b) | Set legend color palettes. Expect an array of "hex" values or "html" color-names. |
| D.5. | [styleColorGridline](style__color__gridline.md) | "#E5E5E5" | [A](https://d3.statosio.com/options/style__color__gridline.html#example-a), [B](https://d3.statosio.com/options/style__color__gridline.html#example-b) | Set the gridline color. Use "hex" value or "html" color-names. |
| D.6. | [styleColorSelectorsChart](style__color__selectors__chart.md) | ["#EE752F", "#5186EC"] | [A](https://d3.statosio.com/options/style__color__selectors__chart.html#example-a), [B](https://d3.statosio.com/options/style__color__selectors__chart.html#example-b) | Colorize the chart of the selection. Use "hex" values or "html" color-names. |
| D.7. | [styleColorSelectorsText](style__color__selectors__text.md) | ["#000000", "#000000"] | [A](https://d3.statosio.com/options/style__color__selectors__text.html#example-a), [B](https://d3.statosio.com/options/style__color__selectors__text.html#example-b) | Colorize the font of the selection. Use "hex" values or "html" color-names. |
| D.8. | [styleFontSizeText](style__font__size__text.md) | 10 | [A](https://d3.statosio.com/options/style__font__size__text.html#example-a), [B](https://d3.statosio.com/options/style__font__size__text.html#example-b) | Set default font size, including selection. |
| D.9. | [styleFontSizeTitle](style__font__size__title.md) | 18 | [A](https://d3.statosio.com/options/style__font__size__title.html#example-a), [B](https://d3.statosio.com/options/style__font__size__title.html#example-b) | Set font size of title |
| D.10. | [styleFontFamily](style__font__family.md) | "arial" | [A](https://d3.statosio.com/options/style__font__family.html#example-a), [B](https://d3.statosio.com/options/style__font__family.html#example-b) | Set default font family |
| D.11. | [styleFontFormatSelectors](style__font__format__selectors.md) | ["bold", "normal"] | [A](https://d3.statosio.com/options/style__font__format__selectors.html#example-a), [B](https://d3.statosio.com/options/style__font__format__selectors.html#example-b) | Set format of content use "Html" Syntax ("bold", "underline", "normal" etc.).  |
| D.12. | [styleStrokeAverage](style__stroke__average.md) | 2 | [A](https://d3.statosio.com/options/style__stroke__average.html#example-a), [B](https://d3.statosio.com/options/style__stroke__average.html#example-b) | Set stroke weight of average line. |
| D.13. | [styleStrokeGridline](style__stroke__gridline.md) | 2 | [A](https://d3.statosio.com/options/style__stroke__gridline.html#example-a), [B](https://d3.statosio.com/options/style__stroke__gridline.html#example-b) | Set stroke weight of gridline. |
| D.14. | [styleLegendRectSizeFull](style__legend__rect_size__full.md) | 16 | [A](https://d3.statosio.com/options/style__legend__rect_size__full.html#example-a), [B](https://d3.statosio.com/options/style__legend__rect_size__full.html#example-b) | Set rectangle size of legend item. |
| D.15. | [styleOtherCircleChartRadius](style__other__circle_chart_radius.md) | 4 | [A](https://d3.statosio.com/options/style__other__circle_chart_radius.html#example-a), [B](https://d3.statosio.com/options/style__other__circle_chart_radius.html#example-b) | Set radius of circle. |
| D.16. | [styleOtherRangeXTextRotation](style__other__range_x_text_rotation.md) | -45 | [A](https://d3.statosio.com/options/style__other__range_x_text_rotation.html#example-a), [B](https://d3.statosio.com/options/style__other__range_x_text_rotation.html#example-b) | Set text rotation of the x axis. |


