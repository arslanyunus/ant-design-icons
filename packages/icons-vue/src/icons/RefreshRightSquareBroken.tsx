// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshRightSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/RefreshRightSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshRightSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshRightSquareBroken: RefreshRightSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshRightSquareBrokenSvg}></AntdIcon>;
};

RefreshRightSquareBroken.displayName = 'RefreshRightSquareBroken';
RefreshRightSquareBroken.inheritAttrs = false;
export default RefreshRightSquareBroken;