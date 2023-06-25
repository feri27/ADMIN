import React, { Component } from 'react';
class DurationPicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            tab : '',
            title : '',
            titleFrom : '',
            titleTo : '',
            type : 'DURATION',
            name : '',
            toolType : 'DURATION_PICKER',
            defaultValue : '',
            placeholder : '',
            description : '',
            validation : {
                isReadOnly: false,
                isRequired: false,
            }
        }
        this.changeValue = this.changeValue.bind(this);
    }

    componentWillMount(){
        this.setState(this.props.field);
    }

    changeValue(stateFor, value){
        switch (stateFor){
            case "NAME" :
                this.setState( { name : value } )
                break;
            case "TITLE" :
                this.setState( { title : value } )
                break;
            case "TITLE_FROM" :
                this.setState( { titleFrom : value } )
                break;
            case "TITLE_TO" :
                this.setState( { titleTo : value } )
                break;
            case "TYPE" :
                this.setState( { type : value } )
                break;
            case "DESCRIPTION" :
                this.setState( { description : value } )
                break;
            case "DEFAULT_VALUE" :
                this.setState( { defaultValue : value } )
                break;
            case "IS_REQUIRED" :
                this.setState( { validation : { ...this.state.validation, isRequired : value }})
                break;
            case "IS_READONLY" :
                this.setState( { validation : { ...this.state.validation, isReadOnly : value }})
                break;
            default:
                return;
        };
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    render(){
        return(
            <div className="rounded border mt-2">
                <div className="rounded bg-gray-100 px-4 py-3">
                    <i className="fa fa-calendar"></i> { this.state.title }
                    <span className='float-right text-red-500' onClick={() => this.props.removeField(this.props.index)}><i className="fa fa-times mr-1"></i></span>
                </div>
                <div className="px-4 py-4">
                    <ul className="flex space-x-1 lg:space-x-2 overflow-clip">
                        <li className="px-4 ">
                            <button onClick={(e) => { e.preventDefault(); this.setState({ tab : 'general' }) }} className={this.state.tab === 'general' ? 'bg-cyan-100 text-cyan-700 text-sm px-2 py-2 rounded-md active' : 'text-gray-500 px-2 text-sm py-2 rounded-md  '} href="/general">General</button>
                        </li>
                        <li className="px-4">
                            <button onClick={(e) => { e.preventDefault(); this.setState({ tab : 'validation' })}} className={this.state.tab === 'validation' ? 'bg-cyan-100 text-cyan-700 text-sm px-2 py-2 rounded-md active' : 'text-gray-500 text-sm px-2 py-2 rounded-md'} href="/validation">Validation</button>
                        </li>
                        {/* <li className="nav-item" style={{
                            textAlign: 'right',
                            position: 'absolute',
                            right: '15px',
                        }}>
                            <a onClick={(e) => { e.preventDefault(); this.setState({ tab : '' })}} className={this.state.tab === '' ? 'nav-link active font-weight-bold' : 'nav-link'} href="/hide">-</a>
                        </li> */}
                    </ul>
                    <div hidden={this.state.tab !== 'general'} className="general">
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
                            
                            <div className="flex flex-col py-4">
                                <label className='text-sm' htmlFor="title">Label Title</label>
                                <input type="text"
                                       value={this.state.title}
                                       onChange={(e) => this.changeValue("TITLE", e.target.value)}
                                       placeholder='Field Label Title' className='border text-sm border-gray-300 rounded-md font-light focus:ring-0 focus:border-cyan-500' />
                            </div>
                        
                            <hr />
                            <div className="flex flex-row space-x-5 py-4">
                                <div className="col-6">
                                <div className="flex flex-col">
                                        <label className='text-sm' htmlFor="title">Title From</label>
                                        <input type="text"
                                               value={this.state.titleFrom}
                                               onChange={(e) => this.changeValue("TITLE_FROM", e.target.value)}
                                               placeholder='Title From'
                                               className='border text-sm border-gray-300 rounded-md font-light focus:ring-0 focus:border-cyan-500' />
                                    </div>
                                </div>
                                <div className="col-6">
                                <div className="flex flex-col">
                                        <label className='text-sm' htmlFor="title">Title To</label>
                                        <input type="text"
                                               value={this.state.titleTo}
                                               onChange={(e) => this.changeValue("TITLE_TO", e.target.value)}
                                               placeholder='Title To'
                                               className='border text-sm border-gray-300 rounded-md font-light focus:ring-0 focus:border-cyan-500' />
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className="flex flex-col py-4">
                                        <label className='text-sm' htmlFor="title">Description</label>
                                        <textarea
                                            value={this.state.description}
                                            onChange={(e) => this.changeValue("DESCRIPTION", e.target.value)}
                                            className='border text-sm border-gray-300 rounded-md font-light focus:ring-0 focus:border-cyan-500'>
                                        </textarea>
                            </div>
                               
                        </div>
                    </div>
                    <div hidden={this.state.tab !== 'validation'} className="general">
                        <div className="px-4 py-4">
                        <div className="space-x-2 flex items-center  py-4">
                                <input
                                    checked={this.state.validation.isRequired}
                                    value={this.state.validation.isRequired}
                                    onChange={(e) => this.changeValue("IS_REQUIRED", e.target.checked)}
                                    className="focus:ring-2 focus:ring-cyan-500 h-4 w-4 text-cyan-600 text-sm border-gray-300 rounded" type="checkbox" id="isRequired" />
                                <label className='text-sm'  htmlFor="isRequired">
                                    Required
                                </label>
                            </div>
                            <hr />

                            <div className="space-x-2 flex items-center  py-4">
                                <input
                                    checked={this.state.validation.isReadOnly}
                                    value={this.state.validation.isReadOnly}
                                    onChange={(e) => this.changeValue("IS_READONLY", e.target.checked)}
                                    className="focus:ring-2 focus:ring-cyan-500 h-4 w-4 text-cyan-600 text-sm border-gray-300 rounded"
                                    type="checkbox"
                                    id="isReadOnly" />
                                <label className='text-sm'  htmlFor="isReadOnly">
                                    Readonly
                                </label>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="card-footer">

                </div>
            </div>
        )
    }
}

export default DurationPicker;