// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Discover1BulkSvg from '@ant-design/icons-svg/lib/asn/Discover1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Discover1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Discover1Bulk: Discover1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Discover1BulkSvg}></AntdIcon>;
};

Discover1Bulk.displayName = 'Discover1Bulk';
Discover1Bulk.inheritAttrs = false;
export default Discover1Bulk;