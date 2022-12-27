// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerCricleTwoToneSvg from '@ant-design/icons-svg/lib/asn/FingerCricleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerCricleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerCricleTwoTone: FingerCricleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerCricleTwoToneSvg}></AntdIcon>;
};

FingerCricleTwoTone.displayName = 'FingerCricleTwoTone';
FingerCricleTwoTone.inheritAttrs = false;
export default FingerCricleTwoTone;