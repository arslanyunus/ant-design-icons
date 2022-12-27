// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRightBrokenSvg from '@ant-design/icons-svg/lib/asn/RotateRightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRightBroken: RotateRightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRightBrokenSvg}></AntdIcon>;
};

RotateRightBroken.displayName = 'RotateRightBroken';
RotateRightBroken.inheritAttrs = false;
export default RotateRightBroken;