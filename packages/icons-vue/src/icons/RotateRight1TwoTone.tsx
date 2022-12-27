// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRight1TwoToneSvg from '@ant-design/icons-svg/lib/asn/RotateRight1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRight1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRight1TwoTone: RotateRight1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRight1TwoToneSvg}></AntdIcon>;
};

RotateRight1TwoTone.displayName = 'RotateRight1TwoTone';
RotateRight1TwoTone.inheritAttrs = false;
export default RotateRight1TwoTone;