// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRightOutlineSvg from '@ant-design/icons-svg/lib/asn/RotateRightOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRightOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRightOutline: RotateRightOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRightOutlineSvg}></AntdIcon>;
};

RotateRightOutline.displayName = 'RotateRightOutline';
RotateRightOutline.inheritAttrs = false;
export default RotateRightOutline;