// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseOutlineSvg from '@ant-design/icons-svg/lib/asn/MouseOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseOutline: MouseOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseOutlineSvg}></AntdIcon>;
};

MouseOutline.displayName = 'MouseOutline';
MouseOutline.inheritAttrs = false;
export default MouseOutline;