// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KanbanOutlineSvg from '@ant-design/icons-svg/lib/asn/KanbanOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KanbanOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KanbanOutline: KanbanOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KanbanOutlineSvg}></AntdIcon>;
};

KanbanOutline.displayName = 'KanbanOutline';
KanbanOutline.inheritAttrs = false;
export default KanbanOutline;