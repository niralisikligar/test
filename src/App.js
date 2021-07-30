import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
              
const data = {
  "id":1,
  "name":"Raj",
  "parent_id":0,
  "children":[
      {
          "id":2,
          "name":"Ajay",
          "parent_id":1,
          "children":[
              {
                  "id":3,
                  "name":"Neel",
                  "parent_id":2,
                  "children":[
                      {
                          "id":4,
                          "name":"pankaj",
                          "parent_id":3
                      }
                  ]
              },
              {
                  "id":5,
                  "name":"Priyanka",
                  "parent_id":2
              }
          ]
      },
      {
          "id":6,
          "name":"Prince",
          "parent_id":1
      },
      {
          "id":7,
          "name":"Mayank",
          "parent_id":1,
          "children":[
              {
                  "id":8,
                  "name":"nirav",
                  "parent_id":7,
                  "children":[
                      {
                          "id":9,
                          "name":"dhaval",
                          "parent_id":8
                      }
                  ]
              },
              {
                  "id":10,
                  "name":"Meera",
                  "parent_id":7
              }
          ]
      },
      {
          "id":11,
          "name":"Virat",
          "parent_id":1
      }
  ]
}

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function RecursiveTreeView() {
  const classes = useStyles();
  
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  return (
    <TreeView
    
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
     
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(data)}
      <AddIcon /> 
    </TreeView>
  );
}