// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseBoldSvg from '@ant-design/icons-svg/lib/asn/MouseBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseBold: MouseBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseBoldSvg}></AntdIcon>;
};

MouseBold.displayName = 'MouseBold';
MouseBold.inheritAttrs = false;
export default MouseBold;