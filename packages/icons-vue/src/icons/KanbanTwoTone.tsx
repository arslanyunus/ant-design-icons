// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KanbanTwoToneSvg from '@ant-design/icons-svg/lib/asn/KanbanTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KanbanTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KanbanTwoTone: KanbanTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KanbanTwoToneSvg}></AntdIcon>;
};

KanbanTwoTone.displayName = 'KanbanTwoTone';
KanbanTwoTone.inheritAttrs = false;
export default KanbanTwoTone;