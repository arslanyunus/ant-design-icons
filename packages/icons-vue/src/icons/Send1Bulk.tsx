// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Send1BulkSvg from '@ant-design/icons-svg/lib/asn/Send1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Send1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Send1Bulk: Send1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Send1BulkSvg}></AntdIcon>;
};

Send1Bulk.displayName = 'Send1Bulk';
Send1Bulk.inheritAttrs = false;
export default Send1Bulk;