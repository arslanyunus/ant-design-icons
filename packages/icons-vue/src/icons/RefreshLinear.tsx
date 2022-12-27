// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshLinearSvg from '@ant-design/icons-svg/lib/asn/RefreshLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshLinear: RefreshLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshLinearSvg}></AntdIcon>;
};

RefreshLinear.displayName = 'RefreshLinear';
RefreshLinear.inheritAttrs = false;
export default RefreshLinear;