// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshCircleBulkSvg from '@ant-design/icons-svg/lib/asn/RefreshCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshCircleBulk: RefreshCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshCircleBulkSvg}></AntdIcon>;
};

RefreshCircleBulk.displayName = 'RefreshCircleBulk';
RefreshCircleBulk.inheritAttrs = false;
export default RefreshCircleBulk;