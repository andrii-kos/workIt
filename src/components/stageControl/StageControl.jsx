import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentStageId } from '../vacanciesCards/VacancySlice';
import { useNavigate } from "react-router-dom";
import { 
  Button, 
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Box,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Typography
 } from '@mui/material';

import { ArrowDropDown, LibraryAddSharp, PersonSearch, Hail, PersonAddAlt1, PersonRemoveAlt1 } from '@mui/icons-material/';


const StageControl = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ open, setOpen ] = useState(false);
  const anchorRef = useRef(null);

  const { vacancy: {stages, currentStageId, id} } = props;
  const currentStageIndex = stages.map(elem => elem.id).indexOf(currentStageId);
  const handleClick = (event) => {
    console.info(`You clicked ${stages}`);
  };

  const handleMenuItemClick = (event, index) => {
    dispatch(updateCurrentStageId({id, currentStageId: stages[index].id}));
    setOpen(false);
  };

  const handleToggle = (event) => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    };
    setOpen(false);
  };

  const handleNavigate = () => {
    navigate(`newStage/${id}`);
  };

  const renderMenuItemIcon = (stageType) => {
    switch(stageType) {
      case 'Interview':
        return <PersonSearch />
      case 'Application':
        return <Hail />
      case 'Offer':
        return <PersonAddAlt1 />
      case 'Rejection':
        return <PersonRemoveAlt1 />
      default:
        return null
    }
  }

  return (
    <Box sx={{p: 0, my: 1}}>
      <ButtonGroup ref={anchorRef} aria-label="split button">
        <Button 
          sx={{fontWeight: 'bold'}} 
          color='primary' 
          variant="outlined" 
          onClick={handleClick}
        >
          {stages[currentStageIndex].stageName}
        </Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDown />
        </Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleNavigate}
        >
          <LibraryAddSharp color='primary' />
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
                      selected={index === currentStageIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {renderMenuItemIcon(stageType)}
                      <Typography ml={1}>{stageName}</Typography>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  )
}

export default StageControl