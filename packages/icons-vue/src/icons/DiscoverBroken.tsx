// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscoverBrokenSvg from '@ant-design/icons-svg/lib/asn/DiscoverBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscoverBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscoverBroken: DiscoverBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscoverBrokenSvg}></AntdIcon>;
};

DiscoverBroken.displayName = 'DiscoverBroken';
DiscoverBroken.inheritAttrs = false;
export default DiscoverBroken;