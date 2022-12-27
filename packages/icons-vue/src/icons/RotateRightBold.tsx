// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRightBoldSvg from '@ant-design/icons-svg/lib/asn/RotateRightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRightBold: RotateRightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRightBoldSvg}></AntdIcon>;
};

RotateRightBold.displayName = 'RotateRightBold';
RotateRightBold.inheritAttrs = false;
export default RotateRightBold;