import React, { Component } from 'react'

class Paragraph extends Component{

    constructor(props){
        super(props);
        this.state = {
            toolType : 'PARAGRAPH',
            tab : '',
            title : '',
            name : '',
            content : '',
            textColor : '#000000',
            backgroundColor : '#cccccc',
            color : '',
            fontSize : '10',
            align : 'center'
        }
    }

    componentWillMount(){
        this.setState(this.props.field);
    }

    fontSizes(){
        let sizes = [];
        for(let i = 6; i <= 72; i++){
            sizes.push(i);
        }
        return sizes;
    }


    changeValue(stateFor, value){
        switch (stateFor){
            case "NAME" :
                this.setState( { name : value } )
                break;
            case "TITLE" :
                this.setState( { title : value } )
                break;
            case "CONTENT" :
                this.setState( { content : value } )
                break;
            case "BACKGROUND_COLOR" :
                this.setState( { backgroundColor : value } )
                break;
            case "TEXT_COLOR" :
                this.setState( { textColor : value } )
                break;
            case "FONT_SIZE" :
                this.setState( { fontSize : value } )
                break;
            case "TEXT_ALIGN" :
                this.setState( { align : value } )
                break;
            default:
                return;
        };
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    render(){
        return (
            <div className="rounded border mt-2">
                <div className="rounded bg-gray-100 px-4 py-3">
                        <i className="fa fa-paragraph mr-1"></i> { this.state.title }
                        <span className='float-right text-red-500' onClick={() => this.props.removeField(this.props.index)}><i className="fa fa-times mr-1"></i></span>
                    </div>
                    <div className="px-4 py-4">
                    <ul className="flex space-x-1 lg:space-x-2 overflow-clip">
                            <li className="px-4 ">
                                <a onClick={(e) => { e.preventDefault(); this.setState({ tab : 'content' }) }} className={this.state.tab === 'content' ? 'bg-cyan-100 text-cyan-700 text-sm px-2 py-2 rounded-md active' : 'text-gray-500 px-2 text-sm py-2 rounded-md  '} href="/content">Content</a>
                            </li>
                            <li className="px-4 ">
                                <a onClick={(e) => { e.preventDefault(); this.setState({ tab : 'style' })}} className={this.state.tab === 'style' ? 'bg-cyan-100 text-cyan-700 text-sm px-2 py-2 rounded-md active' : 'text-gray-500 px-2 text-sm py-2 rounded-md  '} href="/style">Style</a>
                            </li>
                            {/* <li className="nav-item" style={{
                                textAlign: 'right',
                                position: 'absolute',
                                right: '15px',
                            }}>
                                <a onClick={(e) => { e.preventDefault(); this.setState({ tab : '' })}} className={this.state.tab === '' ? 'nav-link active font-weight-bold' : 'nav-link'} href="/hide">-</a>
                            </li> */}
                        </ul>
                        <div className="content" hidden={this.state.tab !== 'content'}>
                        <div className="px-4 py-4">
                            <div className="col-span-2">
                                        <div className="flex flex-col">
                                            <p className="bg-green-100 text-center border rounded border-green-400 text-sm text-green-700 px-4 mb-4 py-3">
                                                <strong className='text-sm'>NAME</strong> field will be use for the database
                                            </p>
                                            <label htmlFor="name">Name</label>
                                            <input type="text"
                                                value={this.state.name}
                                                onChange={(e) => this.changeValue("NAME", e.target.value)}
                                                placeholder='Name' className='border border-gray-300 text-sm rounded-md font-light focus:ring-0 focus:border-cyan-500' />
                                        </div>
                             
                            </div>
                                <div className="col-span-2 py-4">
                                    <div className="flex flex-col">
                                    <label className="text-sm" htmlFor="title">Title</label>
                                    <input id="title"
                                           value={this.state.title}
                                           onChange={(e) => this.changeValue("TITLE", e.target.value)}
                                           className='border border-gray-300 text-sm rounded-md font-light focus:ring-0 focus:border-cyan-500'
                                           type="text"/>
                                </div>
                                </div>
                                <div className="col-span-2 py-4">
                                    <div className="flex flex-col">
                                    <label className="text-sm" htmlFor="paragraph">Paragraph</label>
                                    <textarea id="paragraph"
                                              value={this.state.content}
                                              onChange={(e) => this.changeValue("CONTENT", e.target.value)}
                                              className='border border-gray-300 text-sm rounded-md font-light focus:ring-0 focus:border-cyan-500'/>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="style" hidden={this.state.tab !== 'style'}>
                        <div className="px-4 py-4">
                            
                                        <div className='flex flex-row space-x-5'>
                                        <div className="space-x-2 flex items-center  py-4">
                                            <label className='text-sm' htmlFor="Color">Text Color</label>
                                            <input
                                                value={this.state.textColor}
                                                onChange={(e) => this.changeValue("TEXT_COLOR", e.target.value)}
                                                className='border border-gray-300 text-sm  font-light focus:ring-0 focus:border-cyan-500' type="color"/>
                                        </div>
                                   
                                    
                                        <div className="space-x-2 flex items-center  py-4">
                                            <label className='text-sm' htmlFor="BackgroundColor">Background Color</label>
                                            <input
                                                value={this.state.backgroundColor}
                                                onChange={(e) => this.changeValue("BACKGROUND_COLOR", e.target.value)}
                                                className='border border-gray-300 text-sm  font-light focus:ring-0 focus:border-cyan-500' type="color"/>
                                        </div>
                                        </div>
                                    
                                        
                             

                                
                                    <div className='flex flex-row space-x-5'>
                                    <div className="space-x-2 flex items-center  py-4">
                                            <label className='text-sm' htmlFor="Color">Text Align</label>
                                            <select
                                                value={this.state.align}
                                                onChange={(e) => this.changeValue("TEXT_ALIGN", e.target.value)}
                                                className="border border-gray-300 text-sm rounded-md font-light focus:ring-0 focus:border-cyan-500">
                                                <option value="center">Center</option>
                                                <option value="left">Left</option>
                                                <option value="right">Right</option>
                                                <option value="justify">Justify</option>
                                            </select>
                                        </div>
                                  
                                    
                                        <div className="space-x-2 flex items-center  py-4">
                                            <label className='text-sm' htmlFor="Color">Font Size</label>
                                            <select
                                                value={this.state.fontSize}
                                                onChange={(e) => this.changeValue("FONT_SIZE", e.target.value)}
                                                className="border border-gray-300 text-sm rounded-md font-light focus:ring-0 focus:border-cyan-500">
                                                {
                                                    this.fontSizes().map((size) => {
                                                        return <option key={size} value={size}>{size} pt</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                       
                               
                                  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Paragraph;