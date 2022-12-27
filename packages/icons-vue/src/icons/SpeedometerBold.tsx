// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpeedometerBoldSvg from '@ant-design/icons-svg/lib/asn/SpeedometerBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpeedometerBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpeedometerBold: SpeedometerBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeedometerBoldSvg}></AntdIcon>;
};

SpeedometerBold.displayName = 'SpeedometerBold';
SpeedometerBold.inheritAttrs = false;
export default SpeedometerBold;