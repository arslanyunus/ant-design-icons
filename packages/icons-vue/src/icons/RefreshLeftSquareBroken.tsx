// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshLeftSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/RefreshLeftSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshLeftSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshLeftSquareBroken: RefreshLeftSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshLeftSquareBrokenSvg}></AntdIcon>;
};

RefreshLeftSquareBroken.displayName = 'RefreshLeftSquareBroken';
RefreshLeftSquareBroken.inheritAttrs = false;
export default RefreshLeftSquareBroken;