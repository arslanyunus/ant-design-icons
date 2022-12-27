// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpeedometerBrokenSvg from '@ant-design/icons-svg/lib/asn/SpeedometerBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpeedometerBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpeedometerBroken: SpeedometerBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeedometerBrokenSvg}></AntdIcon>;
};

SpeedometerBroken.displayName = 'SpeedometerBroken';
SpeedometerBroken.inheritAttrs = false;
export default SpeedometerBroken;