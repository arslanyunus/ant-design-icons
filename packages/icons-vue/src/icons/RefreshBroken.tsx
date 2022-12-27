// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshBrokenSvg from '@ant-design/icons-svg/lib/asn/RefreshBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshBroken: RefreshBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshBrokenSvg}></AntdIcon>;
};

RefreshBroken.displayName = 'RefreshBroken';
RefreshBroken.inheritAttrs = false;
export default RefreshBroken;