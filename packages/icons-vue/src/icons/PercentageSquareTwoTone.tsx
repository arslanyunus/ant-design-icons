// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PercentageSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PercentageSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PercentageSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PercentageSquareTwoTone: PercentageSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageSquareTwoToneSvg}></AntdIcon>;
};

PercentageSquareTwoTone.displayName = 'PercentageSquareTwoTone';
PercentageSquareTwoTone.inheritAttrs = false;
export default PercentageSquareTwoTone;