// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money4BulkSvg from '@ant-design/icons-svg/lib/asn/Money4Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money4BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money4Bulk: Money4BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money4BulkSvg}></AntdIcon>;
};

Money4Bulk.displayName = 'Money4Bulk';
Money4Bulk.inheritAttrs = false;
export default Money4Bulk;