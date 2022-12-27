// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Send2BulkSvg from '@ant-design/icons-svg/lib/asn/Send2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Send2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Send2Bulk: Send2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Send2BulkSvg}></AntdIcon>;
};

Send2Bulk.displayName = 'Send2Bulk';
Send2Bulk.inheritAttrs = false;
export default Send2Bulk;