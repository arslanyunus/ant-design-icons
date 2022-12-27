// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscoverBulkSvg from '@ant-design/icons-svg/lib/asn/DiscoverBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscoverBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscoverBulk: DiscoverBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscoverBulkSvg}></AntdIcon>;
};

DiscoverBulk.displayName = 'DiscoverBulk';
DiscoverBulk.inheritAttrs = false;
export default DiscoverBulk;