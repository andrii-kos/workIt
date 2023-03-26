import { useState } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { ButtonGroup, IconButton, Menu, Box, Dialog, Button } from '@mui/material';

import MenuList from './MenuList';

import NewVacancyForm from '../../forms/newVacancyForm/NewVacancyForm';
import NewStageForm from '../../forms/newStageForm/NewStageForm';

const CardMenu = (props) => {
  const { stages, vacancy } = props;
  const [ openEditDialog, setOpenEditDialog ] = useState(false);
  const [ anchorEl, setAnchorEl ] = useState(null);
  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ editStageId, setEditStageId ] = useState(null);
  const [ activeButton, setActiveButton ] = useState(null)
  
  const handleEditButton = (event) => {
    event.stopPropagation();
    setActiveButton('edit');
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleDeleteButton = (event) => {
    event.stopPropagation();
    setActiveButton('delete');
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleCloseMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(false);
  };
  const handleCloseDialog = () => {
    setEditStageId(null);
    setOpenEditDialog(false);
  };

  const renderDialogContent = (editStageId, stages) => {
    if (editStageId) {
      const stage = stages.find(stage => stage.id === editStageId && stage);
      return <NewStageForm stage={stage} handleCloseDialog={handleCloseDialog} />
      
    } else {
      return <NewVacancyForm initialValues={vacancy} handleCloseDialog={handleCloseDialog} />
    }     
  }

  return (
    <Box>
      <ButtonGroup>
        <IconButton onClick={handleEditButton}>
          <Edit />
        </IconButton>
        <IconButton color='secondary' onClick={handleDeleteButton}>
          <Delete  />
        </IconButton>
      </ButtonGroup>
      <Menu
        PaperProps={{
          sx: {
            width: 200,
            maxHeight: 300,
            overflow: 'auto',
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleCloseMenu}
        MenuListProps={{ disablePadding: true }}
      >
        <MenuList 
          {...props}
          setOpenEditDialog={setOpenEditDialog}
          activeButton={activeButton} 
          handleCloseMenu={handleCloseMenu}
          setEditStageId={setEditStageId}
        />
      </Menu>
      <Dialog fullScreen sx={{m: 10, p: 1}} open={openEditDialog} onClose={handleCloseDialog}>
        {renderDialogContent(editStageId, stages)}
        <Box display="flex" justifyContent="center" gap="25px" mt={1}>
        </Box>
      </Dialog>
    </Box>

  );
}

export default CardMenu