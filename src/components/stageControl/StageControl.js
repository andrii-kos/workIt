import './StageControl.scss'

import { useState, useRef } from 'react';

import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import LibraryAddSharpIcon from '@mui/icons-material/LibraryAddSharp';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HailIcon from '@mui/icons-material/Hail';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper'; 
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentStageId } from '..//vacanciesCards/VacancySlice';
import { useNavigate } from "react-router-dom";

const StageControl = ({id}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vacancy = useSelector(state => state.vacancies.vacancies.filter(elem => elem.id === id)[0]);
  const {stages, currentStageId} = vacancy
  const currentStageIndex = stages.map(elem => elem.id).indexOf(currentStageId)
  const [open, setOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(currentStageIndex)
  const anchorRef = useRef(null);
  const handleClick = (event) => {
    console.info(`You clicked ${stages}`);
  }

  const handleMenuItemClick = (event, index) => {
    dispatch(updateCurrentStageId({id, vacancy, currentStageId: stages[index].id}))
    setSelectedId(index);
    setOpen(false);
  };

  const handleToggle = (event) => {
    setOpen(prevOpen => !prevOpen)
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleNavigate = () => {
    navigate(`newStage/${id}`)
  }
  return (
    <CardActions sx={{p: 0, my: 1}}>
      <ButtonGroup ref={anchorRef} aria-label="split button">
        <Button 
          sx={{fontWeight: 'bold'}} 
          color='primary' 
          variant="outlined" 
          onClick={handleClick}
        >
          {stages[selectedId].stageName}
        </Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleNavigate}
        >
          <LibraryAddSharpIcon color='primary' />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {stages.map(({stageName, stageType}, index) => (
                    <MenuItem
                      key={index}
                      selected={index === selectedId}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {stageType === 'Interview' ? <PersonSearchIcon /> : <HailIcon />  }{` ${stageName}`}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </CardActions>
  )
}

export default StageControl