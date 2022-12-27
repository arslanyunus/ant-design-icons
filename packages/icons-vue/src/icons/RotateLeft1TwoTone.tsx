// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeft1TwoToneSvg from '@ant-design/icons-svg/lib/asn/RotateLeft1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeft1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeft1TwoTone: RotateLeft1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeft1TwoToneSvg}></AntdIcon>;
};

RotateLeft1TwoTone.displayName = 'RotateLeft1TwoTone';
RotateLeft1TwoTone.inheritAttrs = false;
export default RotateLeft1TwoTone;