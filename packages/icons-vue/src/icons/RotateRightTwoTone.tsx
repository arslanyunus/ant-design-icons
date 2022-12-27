// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateRightTwoToneSvg from '@ant-design/icons-svg/lib/asn/RotateRightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateRightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateRightTwoTone: RotateRightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateRightTwoToneSvg}></AntdIcon>;
};

RotateRightTwoTone.displayName = 'RotateRightTwoTone';
RotateRightTwoTone.inheritAttrs = false;
export default RotateRightTwoTone;