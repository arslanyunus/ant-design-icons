// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/MouseCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseCircleBroken: MouseCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseCircleBrokenSvg}></AntdIcon>;
};

MouseCircleBroken.displayName = 'MouseCircleBroken';
MouseCircleBroken.inheritAttrs = false;
export default MouseCircleBroken;