// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshCircleLinearSvg from '@ant-design/icons-svg/lib/asn/RefreshCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshCircleLinear: RefreshCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshCircleLinearSvg}></AntdIcon>;
};

RefreshCircleLinear.displayName = 'RefreshCircleLinear';
RefreshCircleLinear.inheritAttrs = false;
export default RefreshCircleLinear;