// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseSquareBoldSvg from '@ant-design/icons-svg/lib/asn/MouseSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseSquareBold: MouseSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseSquareBoldSvg}></AntdIcon>;
};

MouseSquareBold.displayName = 'MouseSquareBold';
MouseSquareBold.inheritAttrs = false;
export default MouseSquareBold;