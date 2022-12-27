// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Clock1BrokenSvg from '@ant-design/icons-svg/lib/asn/Clock1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Clock1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Clock1Broken: Clock1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Clock1BrokenSvg}></AntdIcon>;
};

Clock1Broken.displayName = 'Clock1Broken';
Clock1Broken.inheritAttrs = false;
export default Clock1Broken;