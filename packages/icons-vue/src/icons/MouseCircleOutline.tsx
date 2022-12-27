// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/MouseCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseCircleOutline: MouseCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseCircleOutlineSvg}></AntdIcon>;
};

MouseCircleOutline.displayName = 'MouseCircleOutline';
MouseCircleOutline.inheritAttrs = false;
export default MouseCircleOutline;