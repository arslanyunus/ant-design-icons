// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PercentageCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PercentageCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PercentageCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PercentageCircleTwoTone: PercentageCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageCircleTwoToneSvg}></AntdIcon>;
};

PercentageCircleTwoTone.displayName = 'PercentageCircleTwoTone';
PercentageCircleTwoTone.inheritAttrs = false;
export default PercentageCircleTwoTone;