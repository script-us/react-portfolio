import React from 'react'
import { styled } from '@mui/material'
import { deepOrange, deepPurple, green, pink, purple } from '@mui/material/colors'
import Avatar from '@/components/shared/avatar'
import Badge from '@/components/shared/badge'
import CalenderIcon from '@/components/shared/icons/shared/calenderIcon'
import ProfileIcon from '@/components/shared/icons/shared/profileIcon'
import SettingsIcon from '@/components/shared/icons/shared/settingsIcon'

const Avatars = () => {
  const stringAvatar = (name: string) => {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }))

  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic avatar</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Avatar alt="Remy Sharp" src="/images/png/user/user-01.png" title="test" />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Avatar with letter</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Avatar>H</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>K</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[800] }}>SS</Avatar>
          <Avatar {...stringAvatar('Tim Todds')} sx={{ background: purple[500] }} />
          <Avatar {...stringAvatar('Lin Reutkens')} sx={{ background: deepPurple[500] }} />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Avatar with different size</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Avatar alt="Remy Sharp" src="/images/png/user/user-01.png" sx={{ width: 24, height: 24 }} />
          <Avatar alt="Remy Sharp" src="/images/png/user/user-01.png" />
          <Avatar alt="Remy Sharp" src="/images/png/user/user-01.png" sx={{ width: 56, height: 56 }} />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Avatar with icons</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Avatar>
            <SettingsIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: pink[500] }}>
            <ProfileIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: green[500] }}>
            <CalenderIcon />
          </Avatar>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Avatar with different variant</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Avatar sx={{ bgcolor: deepPurple[500] }} variant="square">
            F
          </Avatar>
          <Avatar sx={{ bgcolor: deepOrange[300] }} variant="rounded">
            <SettingsIcon />
          </Avatar>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Avatar with badge</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={<SmallAvatar alt="Remy Sharp" src="/images/png/user/user-02.png" />}
          >
            <Avatar alt="Travis Howard" src="/images/png/user/user-01.png" />
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Avatars
