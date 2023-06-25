import React, { Component } from 'react';

const databaseform = [{title:"Customer",toolType:"CHECK_BOXES",inline:true,defaultValue:"test",placeholder:"test",description:"test description",validation:{isReadOnly:true,isRequired:true,min:8,max:8},checkBoxes:[{selected:true,title:"Hotel",value:1},{selected:false,title:"Restaurant",value:2}]}];
let Tools = [
    {
        title : 'Single Field',
        name : 'SINGLE_FIELD',
        icon : 'fa fa-wpforms'
    },
    {
        title : 'Drop Down',
        name : 'SELECT_FIELD',
        icon : 'fa fa-chevron-circle-down'
    },
    {
        title : 'Check Boxes',
        name : 'CHECK_BOXES',
        icon : 'fa fa-check-square'
    },
    {
        title : 'Radio Buttons',
        name : 'RADIO_BUTTONS',
        icon : 'fa fa-circle'
    },
    {
        title : 'Paragraph',
        name : 'PARAGRAPH',
        icon : 'fa fa-paragraph'
    },
    {
        title : 'Duration Picker',
        name : 'DURATION_PICKER',
        icon : 'fa fa-calendar'
    }
];
class ToolBox extends Component {
    render() {
        return (
            <div className="toolbox">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="mb-2 text-2lg font-bold tracking-tight text-gray-900 dark:text-white">
                        Database Fields
                    </div>
                    <hr></hr>
                    <div className="w-full hidden md:inline-flex flex-1 py-2">
                        <input
                        type="text"
                        className="w-full border border-gray-300 rounded font-light focus:ring-0 focus:border-cyan-500"
                        placeholder="Search..."
                        />
                        
                    </div>
                    <hr></hr>
                    <div className="p-0">
                        <ul className="max-w-sm divide-y divide-x divide-gray-200 dark:divide-gray-700" ref={(tools2) => this._tools2 = tools2}>
                            {
                                databaseform.map((types) => {

                                    return <li data-tool={JSON.stringify(types)}
                                               onDragStart={(e) => this.dragField2(e, types.toolType)}
                                               key={types.title}
                                               className='rounded bg-blue-200 px-4 text-sm py-2 my-1 border singleField'>
                                        <i className={"fa fa-arrows mr-3"}></i>
                                        {types.title}
                                        </li>
                                })
                            }
                            {
                                this.renderCustomTools2()
                            }
                        </ul>
                    </div>

                    <div className="mb-2 mt-4 text-2lg font-bold tracking-tight text-gray-900 dark:text-white">
                        ToolBox
                    </div>
                    <hr></hr>
                    <div className="p-0">
                        <ul className="max-w-md divide-y divide-x divide-gray-200 dark:divide-gray-700" ref={(tools) => this._tools = tools}>
                            {
                                Tools.map((types) => {
                                    return <li data-tool={types.name}
                                               onDragStart={(e) => this.dragField(e, types.name)}
                                               key={types.name}
                                               className='rounded bg-yellow-200 text-sm px-4 py-2 my-1 border singleField'>
                                        <i className={types.icon + " mr-3"}></i>
                                        {types.title}
                                        </li>
                                })
                            }
                            {
                                this.renderCustomTools()
                            }
                        </ul>
                    </div>

                </div>
            </div>
        );
    }

    renderCustomTools(){
        if(this.props.custom) {
            return this.props.custom.map((types) => {
                return <li data-tool={types.toolbox.name}
                           onDragStart={(e) => this.dragField(e, types.toolbox.name)}
                           key={types.toolbox.name}
                           className='rounded px-4 py-2 my-1 border singleField'>
                    <i className={types.toolbox.icon + " mr-3"}/>
                    {types.toolbox.title}
                </li>
            })
        }
    }

    renderCustomTools2(){
        if(this.props.custom) {
            return this.props.custom.map((types) => {
                return <li data-tool={types}
                           onDragStart={(e) => this.dragField2(e, types.toolbox.toolType)}
                           key={types.toolbox.toolType}
                           className='rounded px-4 py-2 my-1 border singleField'>
                    {/* <i className={types.toolbox.icon + " mr-3"}/> */}
                    {types.toolbox.title}
                </li>
            })
        }
    }

    componentDidMount(){
        let tools = this._tools;
        let $ = window.$;
        $(tools).children().each((i, l) => {
            $(l).draggable({helper: "clone"});
        });

        let tools2 = this._tools2;
        $(tools2).children().each((i, l) => {
            $(l).draggable({helper: "clone"});
        });
    }

    dragField(e, types){
        e.dataTransfer.setData("dragField", types);
    }

    dragField2(e, types){
        e.dataTransfer.setData("dragField2", types);
    }
}

export default ToolBox;
