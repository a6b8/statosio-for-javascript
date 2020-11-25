// https://statosio.com v0.1 Copyright 2020 Andreas Banholzer

d3.statosio = ( file, x_key, y_keys, optional={} ) => {
    let default_values = {
        'show': {
            'title': false,
            'legend': false,
            'average': true,
            'range_y_log': false,
            'data_as_circle': false
        },
        'view': {
            'title': 'Statosio Demo',
            'dom_id': 'd3_statosio',
            'margin': { 
                'top': 20, 
                'right': 40, 
                'bottom': 100, 
                'left': 60 
            },
            'width': {
                'outer': 600,
                'inner': null
            },
            'height': {
                'outer': 300,
                'inner': null
            },
            'translate': {
                'multiplicator': 1.5,
                'title': null,
                'legend': null,
                'title_and_legend': null,
                'top_global': null,
                'legend_text': null
            }
        },
        'data': {
            'x': {
                'key': '',
                'selectors': [],
                'text': {
                    'length': 25,
                    'placeholder': '...'
                }
            },
            'y': {
                'keys': [],
                'ticks': 5
            },
            'sort': {
                'current': 'none', // none, values, names 
                'by': {
                    'values': 'decending', // none , ascending, decending
                    'names': 'ascending' // none , ascending, decending
                },
                'selection': 'none' // none, start, end
            },
            'legend': {
                'names': {
                    'keys': null,
                    'titleized': null
                },
                'text': {
                    'separater': '_'
                }
            }
        },
        'style': {
            'color': {
                'average': '#000000',
                'canvas_background': 'white',
                'font': '#000000',
                'legends': [ '#5186EC','#D95040', '#F2BD42' ],
                'gridline': '#E5E5E5',
                'selectors': {
                    'chart': [ '#EE752F', '#5186EC' ],
                    'text': [ '#000000', '#000000' ]
                }
            },
            'font': {
                'size': {
                    'text': 10,
                    'title': 18
                },
                'family': 'arial',
                'format': {
                    'selectors': [ 'bold', 'normal' ]
                }
            },
            'stroke': {
                'average': 2,
                'gridline': 2
            },
            'legend' : {
                'rect_size': {
                    'full': 16,
                    'half': null
                },
                'padding': {
                    'before': null,
                    'after': null
                }
            },
            'other': {
                'legend_padding_text_after': null,
                'legend_padding_text_before': null,
                'circle_chart_radius': 4,
                'range_x_text_rotation': -45
            }
        }
    }

    
    const params_create = ( _default_values, _user_x_key, _user_y_keys, _user_optional ) => {
        const prepare_params_access_list = ( obj, _user_x_key, _user_y_keys ) => {
            const key_finding = ( obj, keys ) => {
                let val = ''
                let str = keys.join( '__' )
                allow = false
                switch( keys.length) {
                    case 1:
                        val = obj[ keys[ 0 ] ]
                        break;
                    case 2:
                        val = obj[ keys[ 0 ] ][ keys[ 1 ] ]
                        break;
                    case 3:
                        val = obj[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ]
                        break;
                    case 4:
                        val = obj[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ][ keys[ 3 ] ]
                        break;
                }

                val === null ? '' : allow = true
                allow ? access['allow'].push( str ) : access['block'].push( str )
                return allow
            }


            const detect_finding = ( obj, keys ) => {
                const is_array = ( _val ) => {  
                    return is_object( _val ) && ( _val instanceof Array ) 
                }

                const is_object = ( _val ) => { 
                    return _val && (typeof _val  === 'object' ) 
                }

                let val = null
                switch( keys.length ) {
                    case 1:
                        val = obj[ keys[ 0 ] ]
                        break;
                    case 2:
                        val = obj[ keys[ 0 ] ][ keys[ 1 ] ]
                        break;
                    case 3:
                        val = obj[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ]
                        break;
                    case 4:
                        val = obj[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ][ keys[ 3 ] ]
                        break;
                }

                let result = {
                    'null': null,
                    'string': null,
                    'array': null,
                    'object': null,
                }

                val !== null ? result['null'] = true : result['null'] = false
                typeof( val ) === 'string' ? result['string'] = true :  result['string'] = false

                if ( is_array( val ) ) {
                    result['object'] = false
                }
                else if ( is_object( val ) ) {
                    result['object'] = true
                }

                is_array( val ) ? result['array'] = true : result['array'] = false

                return result
            }


            let access = { 'allow': [], 'block': [] }
            let required = { 'data__x__key': _user_x_key, 'data__y__keys': _user_y_keys }
            let alias = {}
        
            Object.keys( obj ).forEach( ( key1 ) => {
                let ks1 = [ key1 ]
                let r = detect_finding( obj, ks1 )

                if( r['object'] ) {
                    Object.keys( obj[ key1 ] ).forEach( ( key2 ) => {
                        let ks2 = [ key1, key2 ]
                        let r = detect_finding( obj, ks2 )
                        r['array'] ? key_finding( obj, ks2 ) : ''

                        if( r['object'] ) {
                            Object.keys( obj[ key1 ][ key2 ] ).forEach( ( key3 ) => {
                                let ks3 = [ key1, key2, key3 ]
                                let r = detect_finding( obj, ks3 )
                                r['array'] ? key_finding( obj, ks3 ) : ''

                                if( r['object'] ) {
                                    Object.keys( obj[ key1 ][ key2 ][ key3 ] ).forEach( ( key4 ) => {
                                        let ks4 = [ key1, key2, key3, key4 ]
                                        let r = detect_finding( obj, ks4 )
                                        r['array'] ? key_finding( obj, ks4 ) : ''

                                        if( r['object'] ) {
                                        } else {
                                            key_finding( obj, ks4 )
                                        }
                                    } )
                                } else {
                                    key_finding( obj, ks3 )
                                }
                            } )
                        } else {
                            key_finding( obj, ks2 )
                        }
                    } )
                } else {
                    key_finding( obj, ks1 )
                }
            } )


            Object.keys( access ).forEach( ( key1 ) => {
                access[ key1 ].forEach( ( key2 ) => {
                    alias[ key2 ] = {}
                    alias[ key2 ]['type'] = key1 === 'allow' ? true : false 
                    alias[ key2 ]['names'] = []
                    
                    let tmp = key2
                        .split( '__' ).join( '---' )
                        .split( '_' ).join( '---' )
                        .split( '---' )
        
                    alias[ key2 ]['names'].push( key2 )
        
                    let type2 = []
                    tmp.forEach( ( key2, i ) => { 
                        let word = ''
                        if( i != 0 ) {
                            word += key2.charAt( 0 ).toUpperCase()
                            word += key2.slice( 1 ).toLowerCase()
                        } else {
                            word = key2
                        }
                        type2.push( word )
                    } )
                    alias[ key2 ]['names'].push( type2.join( '' ) )
                } ) 
            } )
            
            result = {
                'required': required,
                'access': access,
                'alias': alias
            }
            return result
        }
    

        const prepare_params_insert_user_input = ( obj, _access_list, _user_optional ) => {
            const obj_insert_value = ( obj, _key_joined, insert ) => {
                let keys = _key_joined.split( '__' )
                switch( keys.length ) {
                    case 1:
                        obj[ keys[ 0 ] ] = insert
                        break;
                    case 2:
                        obj[ keys[ 0 ] ][ keys[ 1 ] ] = insert
                        break;
                    case 3:
                        obj[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ] = insert
                        break;
                    case 4:
                        obj[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ][ keys[ 3 ] ] = insert
                        break;
                }
                return obj
            }
        
            const required_clean_up = ( _required, key ) => {
                if( key === 'data__y__keys' ) {
                    if( typeof _required[ key ] === 'string' ) {
                        if( _required[ key ].indexOf( ',' ) == -1 ) {
                            _required[ key ] = [ _required[ key ] ]
                        } else {
                            _required[ key ] = _required[ key ].split( ',' ).map( ( value ) => { return value.trim() } )
                        }
                    }
                }
                return _required
            }
        
        
            Object.keys( _access_list['required'] )
                .forEach( ( key ) => {
                    _access_list['required'] = required_clean_up( _access_list['required'], key )
                    key == null ? console.log( 'Key "' + key + '" is empty!' ) : ''
                    obj = obj_insert_value( obj, key, _access_list['required'][ key ] )
                } )
        
            Object.keys( _user_optional )
                .forEach( ( key1 ) => {
                    let search = key1
                    let found = {
                        'key' : null,
                        'add' : false,
                    }
        
                    Object.keys( _access_list['alias'] ).forEach( ( key2 ) => {
                        if( _access_list['alias'][ key2 ]['names'].includes( search ) ) {
                            if( _access_list['alias'][ key2 ]['type'] ) {
                                found['key'] = _access_list['alias'][ key2 ]['names'][ 0 ] //key2
                                found['add'] = true
                            }
                        }
                    } ) 

                    if( found['add'] ) {
                        insert = _user_optional[ search ]
                        obj = obj_insert_value( obj, found['key'], insert )
                    } 
                } )
            return obj
        }
    
    
        const prepare_params_adjust_margin_top = ( obj, multiplicator ) => {
            let struct = {
                'margin_top': null,
                'title': {
                    'translate': null,
                    'offset': null,
                    'show': null
                },
                'legend': {
                    'translate': null,
                    'offset': null,
                    'show': null
                }
            }
        
            let iteration = Object.keys( struct )
                .filter( ( key ) => { return !key.includes( 'margin_top' ) } )
        
            struct['title']['offset'] = obj['style']['font']['size']['title'] * multiplicator
            struct['title']['show'] = obj['show']['title']
        
            struct['legend']['offset'] = obj['style']['font']['size']['text'] * multiplicator
            struct['legend']['show'] = obj['show']['legend']              
        
            struct['margin_top'] = obj['view']['margin']['top'] * 1
            struct['margin_top'] += iteration
                .map( ( key ) => { return struct[ key ]['show'] ? struct[ key ]['offset'] : 0 } )
                .reduce( ( a, b ) => { return a + b } )
        
            iteration
                .forEach( ( key ) => { return struct[ key ]['translate'] = -( struct['margin_top'] - struct[ key ]['offset'] ) } )
        
            result = {
                'canvas__margin__top': struct['margin_top'],
                'canvas__translate__title': struct['title']['translate'],
                'canvas__translate__legend': struct['legend']['translate']
            }
            return result
        }
    
    
        const helper_string_titleize = ( phrase, separater ) => {
            result = phrase.split( separater )
                .map( ( string ) => { 
                    let word = ''
                    word += string.charAt( 0 ).toUpperCase()
                    word += string.slice( 1 ).toLowerCase()
                    return word
                } )
                .join( ' ' )
            return result
        }
    
    
        const prepare_params_offset_sum = ( obj ) => {
            const font_width = ( font_size_text, font_family ) => {
                let dom = document.createElement( 'div' )
                dom.style.position = 'absolute'
                dom.style.float = 'left'
                dom.style.whiteSpace = 'nowrap'
                dom.style.visibility = 'hidden'
                dom.style.font = font_size_text + 'px ' + font_family
                dom.innerHTML = this
                dom = document.body.appendChild( dom )
                let _font_width = dom.offsetWidth
                dom.parentNode.removeChild( dom )
                return _font_width
            }
    

            let legend_offset_tmp = obj['data']['legend']['names']['titleized']
                .map( ( d ) => { return font_width( obj['style']['font']['size']['text'], obj['style']['font']['family'] ) } )
                .map( ( d ) => { return obj['style']['legend']['rect_size']['full'] + obj['style']['legend']['rect_size']['half'] + d + obj['style']['legend']['padding']['after'] } )
            legend_offset_tmp.unshift( 0 )
    
            let result = []
            result.push( 0 )
            legend_offset_tmp.forEach( ( v ) => { result.push( result[ result.length - 1 ] + v ) } ) 
            result.shift( 0 )
    
            return result
        }
    
    
        let hash = null
        hash = _default_values
        let access = prepare_params_access_list( hash, _user_x_key, _user_y_keys )
        hash = prepare_params_insert_user_input( hash, access, _user_optional )
        let tmp = prepare_params_adjust_margin_top( hash, hash['view']['translate']['multiplicator'] )
    
        hash['view']['margin']['top'] = tmp['canvas__margin__top']
        hash['view']['translate']['title'] = tmp['canvas__translate__title']
        hash['view']['translate']['legend'] = tmp['canvas__translate__legend']
    
        hash['view']['width']['inner']  = hash['view']['width']['outer'] - hash['view']['margin']['left'] - hash['view']['margin']['right']
        hash['view']['height']['inner'] = hash['view']['height']['outer'] - hash['view']['margin']['top'] - hash['view']['margin']['bottom']
    
        hash['style']['legend']['rect_size']['half'] = Math.floor( hash['style']['legend']['rect_size']['full'] / 2 )
        hash['view']['translate']['legend_text']  = Math.floor( ( hash['style']['legend']['rect_size']['full'] / 100 ) * 80 )
    
        hash['style']['legend']['padding']['before'] = hash['style']['legend']['rect_size']['half']
        hash['style']['legend']['padding']['after'] = hash['style']['legend']['rect_size']['full']
        
        hash['data']['legend']['names']['keys'] = hash['data']['y']['keys']       
        hash['data']['legend']['names']['titleized'] = hash['data']['legend']['names']['keys'].map( ( key ) => { 
            return helper_string_titleize( key, hash['data']['legend']['text']['separater'] ) 
        } )
    
        hash['view']['translate']['title_and_legend'] = prepare_params_offset_sum( hash )
        hash['view']['translate']['top_global'] =  Math.floor( ( 
            hash['view']['width']['inner'] - 
            hash['view']['translate']['title_and_legend'][ hash['view']['translate']['title_and_legend'].length - 1 ] 
        ) / 2 )
    
        return hash
    }


    const data_create = ( file, obj ) => {
        const prepare_data_points = ( file, obj, _data ) => {
            const helper_cast_to_number = ( value ) => {
                if( value === 'true' ) {
                    value = 1
                } else if( value === true ) {
                    value = 1
                } else if( value === 'false' ) {
                    value = 0
                } else if( value === false ) {
                    value = 0
                }
            
                let r = parseInt( value )
                r = Number.isNaN( r ) ? 0 : r
                return r
            }
        
            let results = file
            .map( ( d, i ) => { 
                let result = {
                    'name_full': null,
                    'name_trimmed': null,
                    'color_chart': null,
                    'color_text': null,
                    'font_format': null,
                    'value': null,
                    'average': null
                }

                if( d[ obj['data']['x']['key'] ].length > obj['data']['x']['text']['length'] ) {
                    result['name_full'] = d[ obj['data']['x']['key'] ]
                    result['name_trimmed'] = result['name_full']
                        .substring( 0, obj['data']['x']['text']['length'] ) + obj['data']['x']['text']['placeholder']
                } else {
                    result['name_full'] = d[ obj['data']['x']['key'] ]
                    result['name_trimmed'] = result['name_full']
                }
        
                switch( _data['type'] ) {
                    case 'stacked':
                        let values = []
                        obj['data']['y']['keys'].forEach( ( key ) => { 
                            result[ key ] = helper_cast_to_number( d[ key ] ) 
                            values.push( result[ key ] )
                        } )
                        result['value'] = values.reduce( ( a, b ) => { return a + b } )
                        
                        break;
                    case 'single':
                        result['value'] = helper_cast_to_number( d[ obj['data']['y']['keys'][ 0 ] ] )
                        break;
                }
        
                result['color_chart'] = obj['data']['x']['selectors']
                    .includes( d[ obj['data']['x']['key'] ] ) ? obj['style']['color']['selectors']['chart'][ 0 ] : obj['style']['color']['selectors']['chart'][ 1 ]
                result['color_text'] = obj['data']['x']['selectors']
                    .includes( d[ obj['data']['x']['key'] ] ) ? obj['style']['color']['selectors']['text'][ 0 ] : obj['style']['color']['selectors']['text'][ 1 ]
                result['font_format'] = obj['data']['x']['selectors']
                    .includes( d[ obj['data']['x']['key'] ] ) ? obj['style']['font']['format']['selectors'][ 0 ] : obj['style']['font']['format']['selectors'][ 1 ]
                return result
            } )
            return results
        }


        const prepare_data_points_sort = ( obj, _data ) => {
            if( obj['data']['sort']['current'] !== 'none' && [ 'values', 'names' ].includes( obj['data']['sort']['current'] ) ) {
                switch( obj['data']['sort']['current'] ) {
                    case 'values':
                        let a = obj['data']['sort']['by']['values'] !== 'none'
                        let b = [ 'ascending', 'decending' ].includes( obj['data']['sort']['by']['values'] )
                        if( a && b ) {
                            _data.sort( ( d, e ) => { return parseFloat( d['value'] ) - parseFloat( e['value'] ) } )
                            switch( obj['data']['sort']['by']['values'] ) {
                                case 'ascending':
                                    break;
                                case 'decending':
                                    _data.reverse()
                                    break;
                            } 
                        }
                        break;
                    case 'names':
                        let g = obj['data']['sort']['by']['names'] !== 'none'
                        let h = [ 'ascending', 'decending' ].includes( obj['data']['sort']['by']['names'] )
                        if( g && h ) {
                            _data.sort( ( a, b ) => { return a['name_full'].localeCompare( b['name_full'] ) } )
                            switch( obj['data']['sort']['by']['names'] ) {
                                case 'ascending':
                                    break;
                                case 'decending':
                                    _data.reverse()
                                    break;
                            } 
                        }
                        break;
                }
            }

            if( obj['data']['sort']['selection'] !== 'none' && [ 'start', 'end' ].includes( obj['data']['sort']['selection'] ) ) {
                let selection = []
                let rest = []
                let searchs = obj['data']['x']['selectors']
                searchs.forEach( ( search ) => { 
                    let index = _data.findIndex( ( d ) => { return d['name_full'] === search } )
                    let item = _data[ index ]
                    selection.push( item )
                    _data.forEach( ( d ) => { 
                        !searchs.includes( d['name_full'] ) ? rest.push( d ) : ''
                    } )
                } )
                
                switch( obj['data']['sort']['selection'] ) {
                    case 'start':
                        _data = selection.concat( rest )
                        break;
                    case 'end':
                        _data = rest.concat( selection )
                        break
                }
            }
            return _data
        }
    
    
        const prepare_data_average = ( _data, obj ) => {
            let result = null
            if( obj['show']['average'] ) {
                let average_tmp = _data['points'].map( ( d ) => { 
                    let result = null
                    switch( _data['type'] ) {
                        case 'stacked':
                            result = obj['data']['y']['keys']
                                .map( ( key ) => { return d[ key ] } )
                                .reduce( ( a, b ) => { return a + b } )
                            break;
                        case 'single' :
                            result = d['value']
                            break;
                    }
                    return result
                } )
        
                result = average_tmp.reduce( ( a, b ) => { return a + b } ) / average_tmp.length
                result = Math.round( ( result + Number.EPSILON ) * 100 ) / 100
            }
            return result
        }
    
    
        let _dataset = {}
        _dataset['type'] = obj['data']['y']['keys'].length != 1 ? 'stacked' : 'single'
        _dataset['view'] = obj['show']['data_as_circle'] ? 'circle' : 'bar'
        _dataset['points'] = prepare_data_points( file, obj, _dataset )
        _dataset['points'] = prepare_data_points_sort( obj, _dataset['points'] )
        _dataset['average'] = prepare_data_average( _dataset, obj )
        _dataset['points'].forEach( ( d, i ) => { _dataset['points'][ i ]['average'] = _dataset['average'] } )
        return _dataset
    }


    const view_create = ( obj, _dataset ) => {
        const prepare_view_axes = ( _data, obj ) => {
            let vals = null
            switch( _data['type'] ) {
                case 'single':
                    vals = _data['points'].map( ( d ) => { return d['value'] } )
                    break;
                case 'stacked':
                    vals = _data['points'].map( ( d ) => { 
                        a = obj['data']['y']['keys'].map( ( key ) => { return d[ key ] } )
                        return a.reduce( ( ( accumulator, currentValue ) => { return accumulator + currentValue } ) )
                    } )
                    break;
            }
            
            const x = d3.scaleBand()
                .domain( _data['points'].map( ( d ) => { return d['name_trimmed'] } ) )
                .range( [ 0, obj['view']['width']['inner'] ] )
        
            let y = null
            let range_y = [ 0, Math.max( ...vals ) * 1.05 ]
            if( obj['show']['range_y_log'] ) {
                y = d3.scaleSqrt().domain( range_y ).range( [ obj['view']['height']['inner'], 0 ] ).nice()
            } else {
                y = d3.scaleLinear().domain( range_y ).range( [ obj['view']['height']['inner'], 0 ] ).nice()
            }
        
            result = {
                'x' : x,
                'y' : y
            }
            return result
        }
    
    
        let _d3_view = prepare_view_axes( _dataset, obj )
        _d3_view['x_axis_range'] = d3.axisBottom( _d3_view['x'] )
            .ticks( obj['data']['y']['ticks'] )
        _d3_view['x_axis_range'] = d3.axisBottom( _d3_view['x'] )
            .ticks( obj['data']['y']['ticks'] )
        _d3_view['y_axis_range'] = d3.axisLeft( _d3_view['y'] )
            .ticks( obj['data']['y']['ticks'] )
        _d3_view['y_axis_grid'] = d3.axisLeft( _d3_view['y'] )
            .tickSize( -obj['view']['width']['inner'] )
            .tickFormat( '' )
            .ticks( obj['data']['y']['ticks'] )
        return _d3_view
    }


    const draw_create = ( _params, _dataset, _d3_view ) => {
        const draw_grid = ( obj, _dataset, _d3_view ) => {
            _d3_view['grid'] = document.createElement( 'div' )
            _d3_view['grid'].setAttribute( 'id', obj['view']['dom_id'] )
            document.body.appendChild( _d3_view['grid'] )  
                    
            _d3_view['svg'] = d3.select( '#' + obj['view']['dom_id'] ).append( 'svg' )
                .attr( 'width', obj['view']['width']['outer'] )
                .attr( 'height', obj['view']['height']['outer'] )
                .style( 'background-color', obj['style']['color']['canvas_background'] )
                .append( 'g' )
                .attr( 'transform', 'translate(' + obj['view']['margin']['left'] + ',' + obj['view']['margin']['top'] + ')' )
                
            _d3_view['svg'].append( 'g' )
                .attr( 'class', 'x axis-grid' )
                .attr( 'transform', 'translate(0,' + obj['view']['height']['inner'] + ')' )
        
            _d3_view['svg'].append( 'g')
                .call( _d3_view['y_axis_grid'] )
                .selectAll( 'g.tick' )
                    .select( 'line' )
                    .attr( 'class', 'quadrantBorder' )
                    .style( 'stroke-width', obj['style']['stroke']['gridline'] )
                    .style( 'color', obj['style']['color']['gridline'] )
        
            _d3_view['svg'].append( 'g' )
                .attr( 'class', 'x axis' )
                .attr( 'transform', 'translate(0,' + obj['view']['height']['inner'] + ')' )
                .call( _d3_view['x_axis_range'] )
                .selectAll( 'text' )
                    .data( _dataset['points'] )
                    .attr( 'font-family', obj['style']['font']['family'] )
                    .style( 'fill', ( d ) => { return d['color_text'] } )
                    .attr( 'font-size', obj['style']['font']['size']['text'] )
                    .style( 'font-weight', ( d ) => { return d['font_format'] } )
                    .style( 'text-anchor', 'end' )
                    .attr( 'dx', '-.8em' )
                    .attr( 'dy', '-.55em' )
                    .attr( 'transform', 'translate(8,0) rotate(' + obj['style']['other']['range_x_text_rotation'] + ')' )
        
            _d3_view['svg'].append( 'g' )
                .attr( 'class', 'y axis' )
                .call( _d3_view['y_axis_range'] )
                .selectAll( 'text' )
                    .attr( 'font-family', obj['style']['font']['family'] )
                    .style( 'fill', obj['style']['color']['font'] )
                    .attr( 'font-size', obj['style']['font']['size']['text'] )

            document.querySelectorAll( 'g.y.axis g.tick line' ).forEach( ( node ) => { node.remove() } )
            document.querySelectorAll( 'g.x.axis g.tick line' ).forEach( ( node ) => { node.remove() } )
            document.querySelectorAll( '.domain' ).forEach( ( node ) => { node.remove() } )
        }
    
    
        const draw_data = ( obj, _dataset, _d3_view ) => {
            switch( _dataset['type'] ) {
                case 'single':
                    switch( _dataset['view'] ) {
                        case 'bar' :
                            _d3_view['svg'].selectAll( 'bar' )
                                .data( _dataset['points'] )
                                .enter().append( 'rect' )
                                .attr( 'class', 'bar' )
                                .style( 'fill', ( d ) => { return d['color_chart'] } )
                                .attr( 'x', ( d ) => { return _d3_view['x']( d['name_trimmed'] ) } )
                                .attr( 'transform', 'translate(3,0)' )
                                .attr( 'width', _d3_view['x'].bandwidth() - 6 )
                                .attr( 'y', ( d ) => { return _d3_view['y']( d['value'] ) } )
                                .attr( 'height', ( d ) => { return  obj['view']['height']['inner'] - _d3_view['y']( d['value'] ) } )
                            break;
                        case 'circle':
                            _d3_view['svg'].selectAll('circle')
                                .data( _dataset['points'] )
                                .enter().append( 'circle' )
                                .style( 'stroke-width', 0 )
                                .style( 'fill', ( d ) => { return d['color_chart'] } )
                                .attr( 'transform', 'translate(' + ( _d3_view['x'].bandwidth() / 2 )  +',0)' )
                                .attr( 'r', obj['style']['other']['circle_chart_radius'] )
                                .attr( 'cx', ( d ) => { return _d3_view['x']( d['name_trimmed'] ) } )
                                .attr( 'cy', ( d ) => { return _d3_view['y']( d['value'] ) } )
                            break;
                    }
                    break;
                case 'stacked':
                    let color = d3.scaleOrdinal()
                        .domain( obj['data']['legend']['names']['keys'] )
                        .range( obj['style']['color']['legends'] )
        
                    let stacked_data = d3.stack().keys( obj['data']['legend']['names']['keys'] )( _dataset['points'] )
        
                    _d3_view['svg'].append( 'g' )
                        .selectAll( 'g' )
                        .data( stacked_data )
                        .enter().append( 'g' )
                            .attr( 'fill', ( d ) => { return color( d.key ) } )
                            .selectAll( 'rect' )
                            .data( ( d ) => { return d } )
                            .enter().append( 'rect' )
                            .attr( 'x', ( d ) => { return _d3_view['x']( d.data['name_trimmed'] ) } )
                            .attr( 'y', ( d ) => { return _d3_view['y']( d[ 1 ] ) } )
                            .attr( 'height', ( d ) => { return _d3_view['y']( d[ 0 ] ) - _d3_view['y']( d[ 1 ] ) } )
                            .attr( 'transform', 'translate(3,0)' )
                            .attr( 'width', _d3_view['x'].bandwidth() - 6 )
                    break;
            }
        }
    
    
        const draw_average = ( obj, _dataset, _d3_view ) => {
            if( obj['show']['average'] ) {
                _d3_view['svg'].append( 'path' )
                    .datum( _dataset['points'] )
                    .attr( 'stroke', obj['style']['color']['average'] )
                    .attr( 'stroke-width', obj['style']['stroke']['average'] )
                    .attr( 'transform', 'translate(' + ( _d3_view['x'].bandwidth() / 2 )  + ',0)' )
                    .attr( 'd', d3.line()
                    .x( ( d ) => { return _d3_view['x']( d['name_trimmed'] ) } )
                    .y( ( d ) => { return _d3_view['y']( d['average']) } )
                )
        
                _d3_view['svg'].append( 'text' )
                    .attr( 'font-family', obj['style']['font']['family'] )
                    .style( 'fill', obj['style']['color']['font'] )
                    .attr( 'font-size', obj['style']['font']['size']['text'] )
                    .attr( 'transform', 'translate(' + ( obj['view']['width']['inner'] + obj['style']['legend']['padding']['before'] ) + ',' + _d3_view['y']( _dataset['average'] ) + ')' )
                    .attr( 'dy', '.35em' )
                    .attr( 'text-anchor', 'start' )
                    .text( _dataset['average'] )
            }
        }
    
    
        const draw_title = ( obj, _d3_view ) => {
            if( obj['show']['title'] ) {
                _d3_view['svg'].append('text')
                    .attr( 'x', 0 )             
                    .attr( 'y', obj['view']['translate']['title'] )
                    .style( 'fill', obj['style']['color']['font'] )
                    .text( obj['view']['title'] )
                    .attr( 'font-family', obj['style']['font']['family'] )
                    .attr( 'font-size', obj['style']['font']['size']['title'] ) 
            }
        }
    
    
        const draw_legend = ( obj, _d3_view ) => {
            if( obj['show']['legend'] ) {                
                let legend = _d3_view['svg'].selectAll( '.legend' )
                    .data( obj['data']['legend']['names']['titleized'] )
                    .enter()
                    .append( 'g' )
                    .attr( 'transform', ( d, i ) => { return 'translate(' + obj['view']['translate']['title_and_legend'][ i ] + ',' + '0)' } )
                    .attr( 'class','legend' )
        
                legend.append( 'rect' )
                    .attr( 'width',obj['style']['legend']['rect_size']['full'] )
                    .attr( 'height',obj['style']['legend']['rect_size']['full'] )
                    .attr( 'fill', ( d, i ) => { return obj['style']['color']['legends'][ i ] } )
                    .attr( 'transform','translate(' + obj['view']['translate']['top_global'] + ', -20 )' )
        
                legend.append( 'text')
                    .attr( 'font-size', obj['style']['font']['size']['text'] )
                    .attr( 'font-family', obj['style']['font']['family'] )
                    .style( 'fill', obj['style']['color']['font'] )
                    .attr( 'x',obj['style']['legend']['rect_size']['full'] )
                    .attr( 'y', obj['view']['translate']['legend_text']  )
                    .text( ( d ) => { return d } )
                    .attr( 'transform','translate(' + ( obj['view']['translate']['top_global'] + obj['style']['legend']['rect_size']['half'] ) + ', -20 )' )
            }
        }
    

        draw_grid( _params, _dataset, _d3_view )
        draw_data( _params, _dataset, _d3_view )
        draw_average( _params, _dataset, _d3_view )
        draw_title( _params, _d3_view ) 
        draw_legend( _params, _d3_view )
        return true
    }


    let params = params_create( default_values, x_key, y_keys, optional )
    let data = data_create( file, params )
    let d3_view = view_create( params, data )
    draw_create( params, data, d3_view )
}
