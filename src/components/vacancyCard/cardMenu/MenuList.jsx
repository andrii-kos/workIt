import { useState } from 'react';
import { Collapse, ListItemText, List, ListItemButton } from '@mui/material';
import { deleteVacancy } from '../../vacanciesCards/VacancySlice';
import { deleteStage } from '..//../stageControl/StageSlice';
import { useDispatch } from 'react-redux';

  
export default function MenuList(props) {
  const { stages, activeButton, id: vacancyId, setOpenEditDialog, handleCloseMenu, setEditStageId } = props;
  const [ open, setOpen ] = useState(null);
  const dispatch = useDispatch();
  const openNestedList = () => {
    setOpen(open => !open);
  };

  const handleVacancyClick = () => {
    if (activeButton === 'edit') {
      setOpenEditDialog(true);
      handleCloseMenu();
    } else if (activeButton === 'delete') {
      dispatch(deleteVacancy(vacancyId));
    };
  };

  const handleStageClick = (id) => {
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
        <ListItemText primary="Vacancy" onClick={handleVacancyClick} />
      </ListItemButton>
      {
        stages.length !== 0 && 
          <ListItemButton onClick={openNestedList}>
            <ListItemText primary="Stages" />
          </ListItemButton>
        }
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          { 
            stages.map(({stageName, id}) => {
              return (
                <ListItemButton key={id} onClick={() => handleStageClick(id)} sx={{ pl: 4 }}>
                  <ListItemText primary={stageName} />
                </ListItemButton>
              )
          })
          }
        </List>
      </Collapse>
    </List>
  )
}
