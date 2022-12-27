// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseBrokenSvg from '@ant-design/icons-svg/lib/asn/MouseBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseBroken: MouseBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseBrokenSvg}></AntdIcon>;
};

MouseBroken.displayName = 'MouseBroken';
MouseBroken.inheritAttrs = false;
export default MouseBroken;