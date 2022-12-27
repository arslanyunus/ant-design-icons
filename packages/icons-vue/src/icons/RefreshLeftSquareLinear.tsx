// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshLeftSquareLinearSvg from '@ant-design/icons-svg/lib/asn/RefreshLeftSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshLeftSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshLeftSquareLinear: RefreshLeftSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshLeftSquareLinearSvg}></AntdIcon>;
};

RefreshLeftSquareLinear.displayName = 'RefreshLeftSquareLinear';
RefreshLeftSquareLinear.inheritAttrs = false;
export default RefreshLeftSquareLinear;