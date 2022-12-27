// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FrameOutlineSvg from '@ant-design/icons-svg/lib/asn/FrameOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FrameOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FrameOutline: FrameOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrameOutlineSvg}></AntdIcon>;
};

FrameOutline.displayName = 'FrameOutline';
FrameOutline.inheritAttrs = false;
export default FrameOutline;