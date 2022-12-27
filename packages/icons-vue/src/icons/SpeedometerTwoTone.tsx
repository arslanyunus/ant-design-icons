// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpeedometerTwoToneSvg from '@ant-design/icons-svg/lib/asn/SpeedometerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpeedometerTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpeedometerTwoTone: SpeedometerTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeedometerTwoToneSvg}></AntdIcon>;
};

SpeedometerTwoTone.displayName = 'SpeedometerTwoTone';
SpeedometerTwoTone.inheritAttrs = false;
export default SpeedometerTwoTone;