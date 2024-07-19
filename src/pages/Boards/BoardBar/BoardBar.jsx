import { Box, Tooltip } from '@mui/material'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLE = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ Board }) {
  return (
    <Box sx={{
      backgroundColor: 'white',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      paddingX: 2,
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={
            MENU_STYLE
          }
          icon={<DashboardIcon />} label={Board?.title}
          clickable
        />
        <Chip
          sx={
            MENU_STYLE
          }
          icon={<VpnLockIcon />} label={capitalizeFirstLetter(Board?.type)}
          clickable
        />
        <Chip
          sx={
            MENU_STYLE
          }
          icon={<AddToDriveIcon />} label="Add to google drive"
          clickable
        />
        <Chip
          sx={
            MENU_STYLE
          }
          icon={<BoltIcon />} label="Automations"
          clickable
        />
        <Chip
          sx={
            MENU_STYLE
          }
          icon={<FilterListIcon />} label="Filters"
          clickable
        />
      </ Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': {
                bgcolor: 'a4b0be'
              }
            },
            fontSize: '16px'
          }
          }>
          <Tooltip title="You">
            <Avatar alt="Truong Hiep" src="https://avatars.githubusercontent.com/u/58823057?v=4" />
          </Tooltip>
          <Tooltip title="You">
            <Avatar alt="Truong Hiep" src="https://avatars.githubusercontent.com/u/58823057?v=4" />
          </Tooltip>
          <Tooltip title="You">
            <Avatar alt="Truong Hiep" src="https://avatars.githubusercontent.com/u/58823057?v=4" />
          </Tooltip>
          <Tooltip title="You">
            <Avatar alt="Truong Hiep" src="https://avatars.githubusercontent.com/u/58823057?v=4" />
          </Tooltip>
          <Tooltip title="You">
            <Avatar alt="Truong Hiep" src="https://avatars.githubusercontent.com/u/58823057?v=4" />
          </Tooltip>
        </AvatarGroup>
      </ Box>

    </Box >

  )
}

export default BoardBar