// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/MouseSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseSquareBroken: MouseSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseSquareBrokenSvg}></AntdIcon>;
};

MouseSquareBroken.displayName = 'MouseSquareBroken';
MouseSquareBroken.inheritAttrs = false;
export default MouseSquareBroken;