// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import1BulkSvg from '@ant-design/icons-svg/lib/asn/Import1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import1Bulk: Import1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import1BulkSvg}></AntdIcon>;
};

Import1Bulk.displayName = 'Import1Bulk';
Import1Bulk.inheritAttrs = false;
export default Import1Bulk;