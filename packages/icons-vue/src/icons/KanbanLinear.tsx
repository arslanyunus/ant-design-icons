// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KanbanLinearSvg from '@ant-design/icons-svg/lib/asn/KanbanLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KanbanLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KanbanLinear: KanbanLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KanbanLinearSvg}></AntdIcon>;
};

KanbanLinear.displayName = 'KanbanLinear';
KanbanLinear.inheritAttrs = false;
export default KanbanLinear;