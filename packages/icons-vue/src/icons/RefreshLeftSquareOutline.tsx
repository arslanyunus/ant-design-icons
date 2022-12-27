// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshLeftSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/RefreshLeftSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshLeftSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshLeftSquareOutline: RefreshLeftSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshLeftSquareOutlineSvg}></AntdIcon>;
};

RefreshLeftSquareOutline.displayName = 'RefreshLeftSquareOutline';
RefreshLeftSquareOutline.inheritAttrs = false;
export default RefreshLeftSquareOutline;