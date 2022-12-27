// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshRightSquareBoldSvg from '@ant-design/icons-svg/lib/asn/RefreshRightSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshRightSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshRightSquareBold: RefreshRightSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshRightSquareBoldSvg}></AntdIcon>;
};

RefreshRightSquareBold.displayName = 'RefreshRightSquareBold';
RefreshRightSquareBold.inheritAttrs = false;
export default RefreshRightSquareBold;