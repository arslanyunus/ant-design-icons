// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt1BulkSvg from '@ant-design/icons-svg/lib/asn/Receipt1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt1Bulk: Receipt1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt1BulkSvg}></AntdIcon>;
};

Receipt1Bulk.displayName = 'Receipt1Bulk';
Receipt1Bulk.inheritAttrs = false;
export default Receipt1Bulk;