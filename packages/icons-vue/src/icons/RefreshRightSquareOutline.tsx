// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshRightSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/RefreshRightSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshRightSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshRightSquareOutline: RefreshRightSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshRightSquareOutlineSvg}></AntdIcon>;
};

RefreshRightSquareOutline.displayName = 'RefreshRightSquareOutline';
RefreshRightSquareOutline.inheritAttrs = false;
export default RefreshRightSquareOutline;