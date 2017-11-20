export const spacing = {
  unit: 5
}

export * as palette from './colors'

export const overrides = {
  MuiListItemText: {
    inset: {
      '&:first-child': {
        paddingLeft: spacing.unit * 4
      }
    }
  },
  MuiBadge: {
    badge: {
      top: -spacing.unit,
      right: -spacing.unit,
      height: 19,
      width: 19,
      fontSize: 10
    }
  },
  MuiAppBar: {
    root: {
      boxShadow: 'none'
    }
  }
}
