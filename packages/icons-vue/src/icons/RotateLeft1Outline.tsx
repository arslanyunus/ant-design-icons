// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeft1OutlineSvg from '@ant-design/icons-svg/lib/asn/RotateLeft1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeft1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeft1Outline: RotateLeft1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeft1OutlineSvg}></AntdIcon>;
};

RotateLeft1Outline.displayName = 'RotateLeft1Outline';
RotateLeft1Outline.inheritAttrs = false;
export default RotateLeft1Outline;