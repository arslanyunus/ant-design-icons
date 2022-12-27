// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiBoldSvg from '@ant-design/icons-svg/lib/asn/WifiBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiBold: WifiBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiBoldSvg}></AntdIcon>;
};

WifiBold.displayName = 'WifiBold';
WifiBold.inheritAttrs = false;
export default WifiBold;