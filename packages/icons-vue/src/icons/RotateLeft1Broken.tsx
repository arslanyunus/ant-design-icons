// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeft1BrokenSvg from '@ant-design/icons-svg/lib/asn/RotateLeft1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeft1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeft1Broken: RotateLeft1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeft1BrokenSvg}></AntdIcon>;
};

RotateLeft1Broken.displayName = 'RotateLeft1Broken';
RotateLeft1Broken.inheritAttrs = false;
export default RotateLeft1Broken;