// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HouseBoldSvg from '@ant-design/icons-svg/lib/asn/HouseBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HouseBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HouseBold: HouseBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HouseBoldSvg}></AntdIcon>;
};

HouseBold.displayName = 'HouseBold';
HouseBold.inheritAttrs = false;
export default HouseBold;