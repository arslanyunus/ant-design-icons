// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HappyemojiBoldSvg from '@ant-design/icons-svg/lib/asn/HappyemojiBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HappyemojiBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HappyemojiBold: HappyemojiBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HappyemojiBoldSvg}></AntdIcon>;
};

HappyemojiBold.displayName = 'HappyemojiBold';
HappyemojiBold.inheritAttrs = false;
export default HappyemojiBold;