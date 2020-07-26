// import React, { Fragment } from 'react';
// import Title from './Title';
// import Button from '../../../../../../UI/Button';
// import Icon from '../../../../../../UI/Icon';
// import { iconClass } from '../../../../../../../helpers';
// import FormPost from './Form/Post';
// import Header from './Header';
// import List from './List';
// import FormCategory from './Form/Category';
// import { ADMIN_PAGES_NAME } from '../../../../../../../helpers/constants';
// const index = props => {
//   return (
//     <div className="col-10 ">
//       <div className="mt-5 border border-style-custom ">
//         <div className="d-flex justify-content-between align-items-center border-bottom p-3">
//           <Title className="mb-0">{props.page}</Title>
//           <Button
//             className="btn-sm btn-info"
//             clicked={_ => props.onFormToggleClicked()}
//           >
//             <Icon
//               iconClass={iconClass(props.formToggle ? 'minus' : 'plus')}
//               className="text-white"
//             />
//           </Button>
//         </div>

//         {props.formToggle && (
//           <div>
//             {props.page === ADMIN_PAGES_NAME.POSTS &&
//               props.items && (
//                 <FormPost
//                   onResetButtonClicked={this.onCreateReset}
//                   onTitleChange={event => this.onCreateTitleChange(event)}
//                   onDescriptionChange={event =>
//                     this.onCreateDescriptionChange(event)
//                   }
//                   onContentChange={content =>
//                     this.onCreateContentChange(content)
//                   }
//                   onSubmitHandler={event => this.onCreateSubmitHandler(event)}
//                   onUpdateTextEditor={this.onUpdateTextEditor}
//                 />
//               )}

//             {props.page === ADMIN_PAGES_NAME.CATEGORIES &&
//               props.items && (
//                 <div>
//                   <FormCategory
//                     page={props.page}
//                     onFormToggleClicked={_ => props.onFormToggleClicked()}
//                   />

//                   {/* <div className="m-3">
//                     <ul className="list-unstyled">
//                       <Header />
//                       {props.items &&
//                         Object.keys(props.items).map((key, index) => {
//                           return (
//                             <Fragment key={props.items[key].id}>
//                               <List
//                                 index={++index}
//                                 deleteButton={id =>
//                                   this.onButtonDeleteClicked(id)
//                                 }
//                                 {...props.items[key]}
//                               />
//                             </Fragment>
//                           );
//                         })}
//                     </ul>
//                   </div> */}
//                 </div>
//               )}
//           </div>
//         )}

//         {props.page === ADMIN_PAGES_NAME.CATEGORIES &&
//           props.items && (
//             <div className="m-3">
//               <ul className="list-unstyled">
//                 <Header page={props.page} />
//                 {props.items &&
//                   Object.keys(props.items).map((key, index) => {
//                     console.log(props);
//                     return (
//                       <Fragment key={props.items[key].id}>
//                         <List
//                           page={props.page}
//                           index={++index}
//                           onButtonDeleteClicked={id =>
//                             props.onButtonDeleteClicked(id)
//                           }
//                           {...props.items[key]}
//                         />
//                       </Fragment>
//                     );
//                   })}
//                 <li className="Categories-Content">
//                   <button className="btn btn-sm btn-secondary rounded-0 my-2">
//                     Old Data
//                   </button>
//                 </li>
//                 {props.oldItems &&
//                   Object.keys(props.oldItems).map((key, index) => {
//                     console.log(props);
//                     return (
//                       <Fragment key={props.oldItems[key].id}>
//                         <List
//                           page={props.page}
//                           index={++index}
//                           onButtonDeleteClicked={id =>
//                             props.onButtonDeleteClicked(id)
//                           }
//                           {...props.oldItems[key]}
//                         />
//                       </Fragment>
//                     );
//                   })}
//               </ul>
//             </div>
//           )}

//         {/* <div className="m-3">
//           <ul className="list-unstyled">
//             <Header />
//             {props.items &&
//               Object.keys(props.items).map((key, index) => {
//                 console.log(props.items);
//                 return (
//                   <Fragment key={props.items[key].id}>
//                     <List
//                       index={++index}
//                       deleteButton={id => this.onDeleteButtonClickHandler(id)}
//                       {...props.items[key]}
//                     />
//                   </Fragment>
//                 );
//               })}
//           </ul>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default index;
