// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KanbanBulkSvg from '@ant-design/icons-svg/lib/asn/KanbanBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KanbanBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KanbanBulk: KanbanBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KanbanBulkSvg}></AntdIcon>;
};

KanbanBulk.displayName = 'KanbanBulk';
KanbanBulk.inheritAttrs = false;
export default KanbanBulk;