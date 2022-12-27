// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow2BulkSvg from '@ant-design/icons-svg/lib/asn/Arrow2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow2Bulk: Arrow2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow2BulkSvg}></AntdIcon>;
};

Arrow2Bulk.displayName = 'Arrow2Bulk';
Arrow2Bulk.inheritAttrs = false;
export default Arrow2Bulk;