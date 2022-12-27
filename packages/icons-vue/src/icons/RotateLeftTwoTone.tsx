// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeftTwoToneSvg from '@ant-design/icons-svg/lib/asn/RotateLeftTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeftTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeftTwoTone: RotateLeftTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeftTwoToneSvg}></AntdIcon>;
};

RotateLeftTwoTone.displayName = 'RotateLeftTwoTone';
RotateLeftTwoTone.inheritAttrs = false;
export default RotateLeftTwoTone;