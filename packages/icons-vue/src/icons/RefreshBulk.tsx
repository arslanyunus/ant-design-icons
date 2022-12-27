// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshBulkSvg from '@ant-design/icons-svg/lib/asn/RefreshBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshBulk: RefreshBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshBulkSvg}></AntdIcon>;
};

RefreshBulk.displayName = 'RefreshBulk';
RefreshBulk.inheritAttrs = false;
export default RefreshBulk;