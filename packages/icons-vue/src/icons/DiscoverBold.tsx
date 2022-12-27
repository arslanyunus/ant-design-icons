// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscoverBoldSvg from '@ant-design/icons-svg/lib/asn/DiscoverBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscoverBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscoverBold: DiscoverBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscoverBoldSvg}></AntdIcon>;
};

DiscoverBold.displayName = 'DiscoverBold';
DiscoverBold.inheritAttrs = false;
export default DiscoverBold;