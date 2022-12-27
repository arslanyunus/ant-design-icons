// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Flash1BulkSvg from '@ant-design/icons-svg/lib/asn/Flash1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Flash1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Flash1Bulk: Flash1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Flash1BulkSvg}></AntdIcon>;
};

Flash1Bulk.displayName = 'Flash1Bulk';
Flash1Bulk.inheritAttrs = false;
export default Flash1Bulk;