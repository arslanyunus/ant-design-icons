// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SpeedometerOutlineSvg from '@ant-design/icons-svg/lib/asn/SpeedometerOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SpeedometerOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SpeedometerOutline: SpeedometerOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeedometerOutlineSvg}></AntdIcon>;
};

SpeedometerOutline.displayName = 'SpeedometerOutline';
SpeedometerOutline.inheritAttrs = false;
export default SpeedometerOutline;