// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Clock1OutlineSvg from '@ant-design/icons-svg/lib/asn/Clock1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Clock1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Clock1Outline: Clock1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Clock1OutlineSvg}></AntdIcon>;
};

Clock1Outline.displayName = 'Clock1Outline';
Clock1Outline.inheritAttrs = false;
export default Clock1Outline;