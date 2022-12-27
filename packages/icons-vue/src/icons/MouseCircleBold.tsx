// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseCircleBoldSvg from '@ant-design/icons-svg/lib/asn/MouseCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseCircleBold: MouseCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseCircleBoldSvg}></AntdIcon>;
};

MouseCircleBold.displayName = 'MouseCircleBold';
MouseCircleBold.inheritAttrs = false;
export default MouseCircleBold;