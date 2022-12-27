// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRight1BrokenSvg from '@ant-design/icons-svg/lib/asn/RotateRight1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRight1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRight1Broken: RotateRight1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRight1BrokenSvg}></AntdIcon>;
};

RotateRight1Broken.displayName = 'RotateRight1Broken';
RotateRight1Broken.inheritAttrs = false;
export default RotateRight1Broken;