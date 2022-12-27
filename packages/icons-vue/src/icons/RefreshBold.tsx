// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshBoldSvg from '@ant-design/icons-svg/lib/asn/RefreshBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshBold: RefreshBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshBoldSvg}></AntdIcon>;
};

RefreshBold.displayName = 'RefreshBold';
RefreshBold.inheritAttrs = false;
export default RefreshBold;