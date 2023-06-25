import React, { Component } from 'react';
import * as _ from 'lodash';

class CheckBoxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab : '',
            inline : 'false',
            toolType: "CHECK_BOXES",
            title : '',
            name : '',
            defaultValue : '',
            description : '',
            validation : {
                isReadOnly: false,
                isRequired: false,
                min : 6,
                max : 6
            },
            duplicate : false,
            checkBoxes : []
        }
        this.removeOption = this.removeOption.bind(this);
        this.duplicates = this.duplicates.bind(this);

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
            case "MAX" :
                this.setState( { validation : { ...this.state.validation, max : value }})
                break;
            case "MIN" :
                this.setState( { validation : { ...this.state.validation, min : value }})
                break;
            case "INLINE" :
                this.setState( { inline : value } )
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
                    <i className="fa fa-check-square mr-1"></i>{ this.state.title }
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
                        <li className="px-4">
                            <button onClick={(e) => { e.preventDefault(); this.setState({ tab : 'options' })}} className={this.state.tab === 'options' ? 'bg-cyan-100 text-cyan-700 text-sm px-2 py-2 rounded-md active' : 'text-gray-500 px-2 text-sm py-2 rounded-md'} href="/options">Options</button>
                        </li>
                        {/* <li className="px-4" style={{
                            textAlign: 'right',
                        }}>
                            <button onClick={(e) => { e.preventDefault(); this.setState({ tab : '' })}} className={this.state.tab === '' ? 'bg-cyan-100 text-cyan-700 px-2 py-2 rounded-md active font-weight-bold' : 'text-gray-500 px-2 py-2 rounded-md'} href="/hide">-</button>
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
                            <div className="space-x-2 flex items-center  py-4">
                                <input
                                    checked={this.state.inline}
                                    value={this.state.inline}
                                    onChange={(e) => this.changeValue("INLINE", e.target.checked)}
                                    className="focus:ring-2 focus:ring-cyan-500 h-4 w-4 text-cyan-600 text-sm border-gray-300 rounded" type="checkbox" id="inLine" />
                                <label className='text-sm'  htmlFor="inLine">
                                    Inline
                                </label>
                            </div>
                            <hr />
                                <div className="col-span-2 py-4">
                                    <div className="flex flex-col">
                                        <label className='text-sm' htmlFor="title">Label Title</label>
                                        <input type="text"
                                               value={this.state.title}
                                               onChange={(e) => this.changeValue("TITLE", e.target.value)}
                                               placeholder='Field Label Title' className='border text-sm border-gray-300 rounded-md font-light focus:ring-0 focus:border-cyan-500' />
                                    </div>
                                </div>
                          
                            <hr />
                                <div className="col-span-2 py-4">
                                    <div className="flex flex-col">
                                        <label className='text-sm' htmlFor="title">Description</label>
                                        <textarea
                                            value={this.state.description}
                                            onChange={(e) => this.changeValue("DESCRIPTION", e.target.value)}
                                            className='border border-gray-300 rounded-md text-sm font-light focus:ring-0 focus:border-cyan-500'>
                                    </textarea>
                                    </div>
                              
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
                            <div className="col-span-2 py-4">
                                    <div className="flex flex-col">
                                        <label className='text-sm' htmlFor="title">Max Characters</label>
                                        <input
                                            value={this.state.validation.max}
                                            onChange={(e) => this.changeValue("MAX", e.target.value)}
                                            type="number" placeholder='6' className='border border-gray-300 text-sm rounded-md font-light focus:ring-0 focus:border-cyan-500' />
                                    </div>
                                </div>
                                    <div className="flex flex-col">
                                        <label className='text-sm' htmlFor="title">Min Characters</label>
                                        <input
                                            value={this.state.validation.min}
                                            onChange={(e) => this.changeValue("MIN", e.target.value)}
                                            type="number" placeholder='6' className='border border-gray-300 text-sm rounded-md font-light focus:ring-0 focus:border-cyan-500' />
                                    </div>
                              
                        </div>
                    </div>
                    <div hidden={this.state.tab !== 'options'} className="options">
                        <div className="px-4 py-4">
                            <p hidden={!this.state.duplicate} className="bg-red-100 border rounded border-red-400 text-sm text-red-700 px-4 mb-4 py-3"><strong>Duplicate</strong> Values Found</p>
                            {
                                this.state.checkBoxes ?
                                    <table className='table text-center'>
                                        <tbody>
                                        {
                                            this.state.checkBoxes.map((checkbox, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="space-x-2 flex items-center px-4">
                                                                <input
                                                                    className='focus:ring-2 focus:ring-cyan-500 text-sm h-4 w-4 text-cyan-600 border-gray-300 rounded'
                                                                    autoFocus={true}
                                                                    value={this.state.checkBoxes[index].selected}
                                                                    onChange={(e) => this.changeOptionValue(index, e.target.checked, "SELECTED")}
                                                                    type='checkbox' />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <input
                                                                placeholder='Title'
                                                                autoFocus={true}
                                                                value={this.state.checkBoxes[index].title}
                                                                onChange={(e) => this.changeOptionValue(index, e.target.value, "TITLE")}
                                                                id={checkbox.title}
                                                                type='text'
                                                                className='border border-gray-300 rounded-md text-sm font-light focus:ring-0 focus:border-cyan-500' />
                                                        </td>
                                                        <td>
                                                            <input
                                                                placeholder='Value'
                                                                value={this.state.checkBoxes[index].value}
                                                                onChange={(e) => this.changeOptionValue(index, e.target.value, "VALUE")}
                                                                id={checkbox.value}
                                                                type='text'
                                                                className='border border-gray-300 rounded-md text-sm font-light focus:ring-0 focus:border-cyan-500' />
                                                        </td>
                                                        <td style={{ verticalAlign : 'middle' }}>
                                                            <span onClick={() => this.removeOption(index)} className="float-right text-red-500 px-4"><i className="fa fa-times mr-1"></i></span>
                                                        </td>
                                                    </tr>
                                                )
                                            }) }
                                        </tbody>
                                    </table>
                                    :<span></span>
                            }
                            <button onClick={() => this.addOption()} className="px-8 py-1 mt-4 rounded bg-green-600 text-white">Add</button>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                </div>
            </div>
        )
    }

    changeOptionValue(index, value, state){
        let checkBoxes = this.state.checkBoxes;
        let checkBox = {};
        if(state === "TITLE"){
            checkBox = {
                ...checkBoxes[index],
                title : value,
            }
        }else if(state === 'SELECTED'){
            checkBox = {
                ...checkBoxes[index],
                selected: !checkBoxes[index].selected
            }
        }else if(state === 'VALUE'){
            checkBox = {
                ...checkBoxes[index],
                value : value
            }
        }else{
            checkBox = {
                ...checkBoxes[index],
            }
        }
        checkBoxes[index] = checkBox;
        this.setState({
            checkBoxes : checkBoxes
        });

        this.duplicates();

        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    duplicates(){
        let checkBoxes = this.state.checkBoxes;
        let u = _.uniqBy(checkBoxes, 'value');
        if(!_.isEqual(checkBoxes, u)){
            this.setState({
                duplicate: true
            });
        }else{
            this.setState({
                duplicate: false
            });
        }
    }

    removeOption(index){
        let checkBoxes = this.state.checkBoxes;
        checkBoxes.splice(index, 1);
        this.setState({
            checkBoxes : checkBoxes
        });
        this.duplicates();
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }

    addOption(){
        let checkBox = {
            title : '',
            value : '',
            selected: false
        }
        let checkBoxes = this.state.checkBoxes;
        checkBoxes.push(checkBox)
        this.setState({
            checkBoxes : checkBoxes
        });
        this.duplicates();
        setTimeout(() => {
            return this.props.changeState(this.state, this.props.index);
        }, 0)
    }
}

export default CheckBoxes;