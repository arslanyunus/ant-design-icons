// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Support24BulkSvg from '@ant-design/icons-svg/lib/asn/Support24Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Support24BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Support24Bulk: Support24BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Support24BulkSvg}></AntdIcon>;
};

Support24Bulk.displayName = 'Support24Bulk';
Support24Bulk.inheritAttrs = false;
export default Support24Bulk;