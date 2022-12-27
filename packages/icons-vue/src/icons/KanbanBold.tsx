// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KanbanBoldSvg from '@ant-design/icons-svg/lib/asn/KanbanBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KanbanBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KanbanBold: KanbanBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KanbanBoldSvg}></AntdIcon>;
};

KanbanBold.displayName = 'KanbanBold';
KanbanBold.inheritAttrs = false;
export default KanbanBold;