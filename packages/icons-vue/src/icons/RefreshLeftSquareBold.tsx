// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshLeftSquareBoldSvg from '@ant-design/icons-svg/lib/asn/RefreshLeftSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshLeftSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshLeftSquareBold: RefreshLeftSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshLeftSquareBoldSvg}></AntdIcon>;
};

RefreshLeftSquareBold.displayName = 'RefreshLeftSquareBold';
RefreshLeftSquareBold.inheritAttrs = false;
export default RefreshLeftSquareBold;