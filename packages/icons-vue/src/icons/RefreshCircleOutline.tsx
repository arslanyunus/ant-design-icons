// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/RefreshCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshCircleOutline: RefreshCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshCircleOutlineSvg}></AntdIcon>;
};

RefreshCircleOutline.displayName = 'RefreshCircleOutline';
RefreshCircleOutline.inheritAttrs = false;
export default RefreshCircleOutline;