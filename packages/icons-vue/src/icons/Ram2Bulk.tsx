// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ram2BulkSvg from '@ant-design/icons-svg/lib/asn/Ram2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ram2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ram2Bulk: Ram2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ram2BulkSvg}></AntdIcon>;
};

Ram2Bulk.displayName = 'Ram2Bulk';
Ram2Bulk.inheritAttrs = false;
export default Ram2Bulk;