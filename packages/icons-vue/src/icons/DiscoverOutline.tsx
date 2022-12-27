// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscoverOutlineSvg from '@ant-design/icons-svg/lib/asn/DiscoverOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscoverOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscoverOutline: DiscoverOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscoverOutlineSvg}></AntdIcon>;
};

DiscoverOutline.displayName = 'DiscoverOutline';
DiscoverOutline.inheritAttrs = false;
export default DiscoverOutline;