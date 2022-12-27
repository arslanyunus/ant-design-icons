// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshLeftSquareBulkSvg from '@ant-design/icons-svg/lib/asn/RefreshLeftSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshLeftSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshLeftSquareBulk: RefreshLeftSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshLeftSquareBulkSvg}></AntdIcon>;
};

RefreshLeftSquareBulk.displayName = 'RefreshLeftSquareBulk';
RefreshLeftSquareBulk.inheritAttrs = false;
export default RefreshLeftSquareBulk;