import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
 
import type { Domain } from '~/data/schema'
import { Checkbox } from '../ui/checkbox'  
import DataTableColumnHeader from './DataTableColumnHeader.vue'

export const columns: ColumnDef<Domain>[] = [
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
    accessorKey: 'domain',
    header: ({ column }) => h(DataTableColumnHeader, { column, title: 'Domain' }),
    cell: ({ row }) => h('div', { class: 'w-40' }, row.getValue('domain')),
    enableSorting: true,
    enableHiding: false,
  },
]