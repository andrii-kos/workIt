import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentStageId } from '../vacanciesCards/VacancySlice';
import { useNavigate } from "react-router-dom";
import { 
  CardActions, 
  Button, 
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList
 } from '@mui/material';
import { ArrowDropDown, LibraryAddSharp, PersonSearch, Hail } from '@mui/icons-material/';


const StageControl = ({id}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ open, setOpen ] = useState(false)
  const anchorRef = useRef(null);

  const vacancy = useSelector(state => state.vacancies.vacancies.filter(elem => elem.id === id)[0]);
  const { stages, currentStageId } = vacancy
  const currentStageIndex = stages.map(elem => elem.id).indexOf(currentStageId)
  const [ selectedId, setSelectedId ] = useState(currentStageIndex)
  

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
                      selected={index === selectedId}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {stageType === 'Interview' ? <PersonSearch /> : <Hail />  }{` ${stageName}`}
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