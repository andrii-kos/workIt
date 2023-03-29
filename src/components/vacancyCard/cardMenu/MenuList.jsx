import { useState } from 'react';
import { Collapse, ListItemText, ListItemIcon, List, ListItemButton, Divider, Box } from '@mui/material';
import { KeyboardArrowRight, ExpandLess, ExpandMore} from '@mui/icons-material/';
import { removeVacancy } from '../../vacanciesCards/VacancySlice';
import { deleteStage } from '..//../stageControl/StageSlice';
import { useDispatch } from 'react-redux';
  
export default function MenuList(props) {
  const { stages, activeButton, setOpenEditDialog, handleCloseMenu, setEditStageId } = props;
  const { id: vacancyId, vacancyName } = props.vacancy;
  const [ open, setOpen ] = useState(null);
  const dispatch = useDispatch();
  const openNestedList = (event) => {
    event.stopPropagation();
    setOpen(open => !open);
  };

  const handleVacancyClick = (event) => {
    event.stopPropagation();
    if (activeButton === 'edit') {
      setOpenEditDialog(true);
      handleCloseMenu();
    } else if (activeButton === 'delete') {
      dispatch(removeVacancy(vacancyId));
      handleCloseMenu();
    };
  };

  const handleStageClick = (event, id) => {
    event.stopPropagation();
    if (activeButton === 'edit') {
      setEditStageId(id);
      setOpenEditDialog(true);
      handleCloseMenu();
    } else if (activeButton === 'delete') {
      dispatch(deleteStage({id, vacancyId}));
    };
  };

  return (
    <List>
      <ListItemButton>
        <ListItemText sx={{fontWeight: 700}} primary={vacancyName} onClick={handleVacancyClick} />
      </ListItemButton>
      {
        stages.length !== 0 && 
          <ListItemButton onClick={openNestedList}>
            <ListItemText primary="Stages" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        }
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          { 
            stages.map(({stageName, id}, index) => {
              return (
                <Box key={id}>
                  <Divider />
                  <ListItemButton  onClick={(event) => handleStageClick(event, id)} sx={{ pl: 4 }}>
                    <ListItemIcon><KeyboardArrowRight /></ListItemIcon>
                    <ListItemText primary={stageName} />
                  </ListItemButton>
                </Box>
                
              )
          })
          }
        </List>
      </Collapse>
    </List>
  )
}
