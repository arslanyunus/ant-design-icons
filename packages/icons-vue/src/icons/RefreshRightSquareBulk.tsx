// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshRightSquareBulkSvg from '@ant-design/icons-svg/lib/asn/RefreshRightSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshRightSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshRightSquareBulk: RefreshRightSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshRightSquareBulkSvg}></AntdIcon>;
};

RefreshRightSquareBulk.displayName = 'RefreshRightSquareBulk';
RefreshRightSquareBulk.inheritAttrs = false;
export default RefreshRightSquareBulk;