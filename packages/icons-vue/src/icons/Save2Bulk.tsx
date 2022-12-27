// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Save2BulkSvg from '@ant-design/icons-svg/lib/asn/Save2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Save2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Save2Bulk: Save2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Save2BulkSvg}></AntdIcon>;
};

Save2Bulk.displayName = 'Save2Bulk';
Save2Bulk.inheritAttrs = false;
export default Save2Bulk;