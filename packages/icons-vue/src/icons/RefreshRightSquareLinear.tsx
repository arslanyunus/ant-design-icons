// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshRightSquareLinearSvg from '@ant-design/icons-svg/lib/asn/RefreshRightSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshRightSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshRightSquareLinear: RefreshRightSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshRightSquareLinearSvg}></AntdIcon>;
};

RefreshRightSquareLinear.displayName = 'RefreshRightSquareLinear';
RefreshRightSquareLinear.inheritAttrs = false;
export default RefreshRightSquareLinear;