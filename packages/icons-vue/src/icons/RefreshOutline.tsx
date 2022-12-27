// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshOutlineSvg from '@ant-design/icons-svg/lib/asn/RefreshOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshOutline: RefreshOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshOutlineSvg}></AntdIcon>;
};

RefreshOutline.displayName = 'RefreshOutline';
RefreshOutline.inheritAttrs = false;
export default RefreshOutline;