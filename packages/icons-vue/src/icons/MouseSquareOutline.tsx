// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MouseSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/MouseSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MouseSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MouseSquareOutline: MouseSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MouseSquareOutlineSvg}></AntdIcon>;
};

MouseSquareOutline.displayName = 'MouseSquareOutline';
MouseSquareOutline.inheritAttrs = false;
export default MouseSquareOutline;