<script setup lang="ts">
import type { Table } from '@tanstack/vue-table' 
import type { Log } from '~/data/schema';

import { X, RotateCcw  } from 'lucide-vue-next';
interface DataTableToolbarProps {
  table: Table<Log>,
  refresh: () => void
}

const props = defineProps<DataTableToolbarProps>()

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0) 
</script>

<template>
  <div class="flex items-center">
    <div class="flex flex-1 items-center space-x-2">
      <Input
        placeholder="Filter tasks..."
        :model-value="(table.getColumn('log')?.getFilterValue() as string) ?? ''"
        class="h-8 w-[150px] lg:w-[250px]"
        @input="table.getColumn('log')?.setFilterValue($event.target.value)"
      /> 
      <Button
        v-if="isFiltered"
        variant="ghost"
        class="h-8 px-2 lg:px-3"
        @click="table.resetColumnFilters()"
      >
        Reset
        <X class="ml-2 h-4 w-4" />
      </Button>
    </div>
    
    <Button variant="secondary" class="mr-auto"
    @click="refresh()">
        <RotateCcw></RotateCcw>
      </Button>
    
    <!-- <DataTableViewOptions :table="table" /> -->
  </div>
</template>