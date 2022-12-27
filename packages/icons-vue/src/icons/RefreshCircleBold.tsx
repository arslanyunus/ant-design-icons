// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshCircleBoldSvg from '@ant-design/icons-svg/lib/asn/RefreshCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshCircleBold: RefreshCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshCircleBoldSvg}></AntdIcon>;
};

RefreshCircleBold.displayName = 'RefreshCircleBold';
RefreshCircleBold.inheritAttrs = false;
export default RefreshCircleBold;