import React from 'react'
import { BadgeProps, Box, IconButton, styled } from '@mui/material'
import Badge from '@/components/shared/badge'
import { Icon } from '@/components/shared/icons'
import SettingsIcon from '@/components/shared/icons/shared/settingsIcon'

const Badges = () => {
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))

  const shapeStyles = { bgcolor: 'success.main', width: 40, height: 40 }
  const shapeCircleStyles = { borderRadius: '50%' }
  const rectangle = <Box component="span" sx={shapeStyles} />
  const circle = <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />

  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic badge with different colors</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Badge badgeContent={4} color="primary">
            <Icon name="MailIcon" />
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <Icon name="MailIcon" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <Icon name="MailIcon" />
          </Badge>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">customized badge</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <SettingsIcon className="w-[22px] h-[22px] dark:fill-white" />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Badge with maximum value</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Badge color="success" badgeContent={100} max={99}>
            <Icon name="MailIcon" />
          </Badge>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Badge with dot variant</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Badge color="primary" variant="dot">
            <Icon name="MailIcon" />
          </Badge>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Badge with overlap</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Badge color="warning" badgeContent=" ">
            {rectangle}
          </Badge>
          <Badge color="primary" badgeContent=" " variant="dot">
            {rectangle}
          </Badge>
          <Badge color="warning" overlap="circular" badgeContent=" ">
            {circle}
          </Badge>
          <Badge color="error" overlap="circular" badgeContent=" " variant="dot">
            {circle}
          </Badge>
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Badge with alignment</div>
        <div className="flex w-full gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Badge
            badgeContent={4}
            color="primary"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Icon name="MailIcon" />
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Badges
