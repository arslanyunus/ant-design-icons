// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import2BulkSvg from '@ant-design/icons-svg/lib/asn/Import2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import2Bulk: Import2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import2BulkSvg}></AntdIcon>;
};

Import2Bulk.displayName = 'Import2Bulk';
Import2Bulk.inheritAttrs = false;
export default Import2Bulk;