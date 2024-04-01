import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
 
import type { Log } from '~/data/schema'
import { Checkbox } from '../ui/checkbox'  
import DataTableColumnHeader from './DataTableColumnHeader.vue'

export const columns: ColumnDef<Log>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) => h(Checkbox, {
  //     'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
  //     'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
  //     'ariaLabel': 'Select all',
  //     'class': 'translate-y-0.5',
  //   }),
  //   cell: ({ row }) => h(Checkbox, { 'checked': row.getIsSelected(), 'onUpdate:checked': value => row.toggleSelected(!!value), 'ariaLabel': 'Select row', 'class': 'translate-y-0.5' }),
  //   enableSorting: false,
  //   enableHiding: false,
  // }, 
  {
    accessorKey: 'timestamp',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Timestamp' }),
    cell: ({ row }) => h('div', { class: 'min-w-44' }, formatTimestamp(row.getValue('timestamp'))),
    enableSorting: true,
    enableResizing: true,
    enableHiding: false,
  },
  {
    accessorKey: 'group',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Group' }),
    cell: ({ row }) => h('div', { class: '' }, row.getValue('group')),
    enableSorting: true,
    enableResizing: true,
    enableHiding: false,
  },
  {
    accessorKey: 'tag',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Tag' }),
    cell: ({ row }) => h('div', { class: '' }, row.getValue('tag')),
    enableSorting: true,
    enableResizing: true,
    enableHiding: false,
  },
  {
    accessorKey: 'log',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Log' }),
    cell: ({ row }) => h('div', { class: '' }, row.getValue('log')),
    enableSorting: true,
    enableResizing: true,
    enableHiding: false,
  },
]

function formatTimestamp(timestamp: number, timeZone: string = 'UTC'): string {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric', 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    timeZone,
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}