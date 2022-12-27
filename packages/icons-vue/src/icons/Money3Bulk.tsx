// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Money3BulkSvg from '@ant-design/icons-svg/lib/asn/Money3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Money3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Money3Bulk: Money3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Money3BulkSvg}></AntdIcon>;
};

Money3Bulk.displayName = 'Money3Bulk';
Money3Bulk.inheritAttrs = false;
export default Money3Bulk;