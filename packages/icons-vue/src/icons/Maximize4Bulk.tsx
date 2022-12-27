// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize4BulkSvg from '@ant-design/icons-svg/lib/asn/Maximize4Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize4BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize4Bulk: Maximize4BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize4BulkSvg}></AntdIcon>;
};

Maximize4Bulk.displayName = 'Maximize4Bulk';
Maximize4Bulk.inheritAttrs = false;
export default Maximize4Bulk;